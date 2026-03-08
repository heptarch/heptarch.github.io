---
Layout: post
mathjax: true
comments: true
title: "What black holes teach us about sparse autoencoding"
short: "SAEPage"
date:  2026-03-12
---

**March 12, 2026.** *Sparse autoencoders (SAEs) are a crucial mechanism for
  extracting interpretable information from a neural network. In this
  post, we explore phase transitions limiting the ability of SAEs to
  do this extraction, guided by a surprising connection to black
  holes that predicts exactly where this transition occurs.*

<div style="background-color: #212433 ; padding: 20px; border: 0px solid
grey; line-height:1.5; border-radius: 15px">
Information loss, once allowed, tends to be highly infectious.<br>

<div style="text-align: right">— Hayden and Preskill, <i><a
href="https://arxiv.org/pdf/0708.4025">Black holes as mirrors</a></i>
</div>
</div>

Inspired by the research
from Anthropic's
[mechanistic interpretability group](https://transformer-circuits.pub/),
I decided to explore the statistical physics of sparse recovery in neural
networks. Guided by an analogy to black holes,
we might expect a phase transition between recoverability and
non-recoverability of the "information" inside a neural network, based
on the size of the network we are sparsely autoencoding
into. Following the experimental trail, we will identify such a
transition, and we can use our findings to design SAEs in practice.

## Contents <a id="tbc" name="tbc"></a>

1. <a href="#sec-1"><i>When Bigger is not Better</i></a>
2. <a href="#sec-2"><i>Setting it Up</i></a>
3. <a href="#sec-3"><i>Hunting the Transition</i></a>
4. <a href="#sec-4"><i>Why Black Holes?</i></a>
5. <a href="#sec-5"><i>Open Questions</i></a>

---

## 1. <a href="#tbc">When Bigger is not Better</a><a id="sec-1" name="sec-1"></a>

Machine learning models play an increasingly important role in our
lives, but are notoriously opaque.
An archetypal example is neural networks, which can be hard to
interpret since neurons often fire for unrelated reasons; a single neuron might respond to fragments
of Korean,
HTML, and references to Teenage Mutant Ninja Turtles. This baffling behaviour is called *polysemanticity* ("many
meanings") and occurs when feature activation patterns are
[sufficiently sparse](https://transformer-circuits.pub/2022/toy_model/index.html);
in this case, it makes sense to use the same neuron for different
purposes, since those purposes (approximately) don't interfere with each other.
To learn features in an interpretable way, we can train
[sparse autoencoders (SAEs)](https://transformer-circuits.pub/2023/monosemantic-features/index.html)
on those networks. I'll explain how that's performed technically in
the next section, but loosely speaking, we encourage the SAE to learn one
feature per (SAE) neuron, acting like a semantically "unfolded" version
of the original neural network.

<figure>
    <div style="text-align:center; padding: 15px"><img src
    ="/img/posts/SAEPage1.svg" width="300"/>
	</div>
	</figure>

But how do we know we've captured the meaning of the original network,
$\mathcal{N}$?
Suppose we have $N$ neurons in $\mathcal{N}$ and $F$ neurons in
the SAE $\mathcal{F}$ we are training. We naturally want $F > N$, in
order to disentangle the different features the neurons in
$\mathcal{N}$ are activated by. But how much bigger is ideal? It turns
out there is a tradeoff between our ability to disentangle
activations, which pushes us in the direction of bigger
$\mathcal{F}$, and the information we can extract from
$\mathcal{N}$, which pushes towards smaller.

The latter point is a little counterintuitive. Basically, the
larger $\mathcal{F}$ is, the more ways it provides to explain a given
activation pattern; to select a unique explanation, we use sparsity as
a tie-breaker.
After a point, though, there are too many sparse
vectors consistent with the observed pattern of activity that information
about $\mathcal{N}$ gets lost, like a needle in a haystack.
This raises a concrete architectural question: how big
should our SAE be? Guided by the physics of black holes,
we'll experiment with a synthetic toy model where we can track how recoverability behaves. This will suggest design principles for SAEs as applied
to real neural networks.

## 2. <a href="#tbc">Setting it Up</a><a id="sec-2" name="sec-2"></a>

Our "trained" neural
network $\mathcal{N} = \mathbb{R}^N$ consists of $N$ neurons, while the SAE
$\mathcal{F} = \mathbb{R}^F$ will have $F > N$ feature neurons.
We let $\alpha = F/N$ denote the ratio of dimensions, and assume
$k$-sparsity, with $k = \rho F$ features activated at a time
for a ratio
$\rho = k/F \in [0, 1]$ that we will vary.
The weights of the trained network are represented by a ground truth
encoding $W: \mathcal{F} \to \mathcal{N}$; this is automatically
polysemantic, since it crams a large feature space into a physically
smaller set of neurons.
Given a feature vector $f \in \mathcal{F}$, the neuron activations are
simply

$$
n = Wf \in \mathcal{N}.
$$

The SAE's job is to invert this, and recover a guess $\hat{f}$ from $n$.
Since $F > N$, the map $W$ is not injective, so many feature vectors
produce the same activation pattern and naive inversion is hopeless.
Sparsity is the tie-breaker. If we know $f$ has at most $k$ nonzero
entries, the problem becomes well-posed, at least in principle.
Technically the number of nonzero entries is counted by the
$\Vert\cdot\Vert_0$ norm, but because this behaves discontinuously, we
enforce sparsity with the next best thing, the $\Vert \cdot\Vert_1$
norm which counts the sum of sizes of entries:

$$
\ell(n, \hat{f}) = \Vert n - W\hat{f}\Vert_2^2 + \lambda \Vert
\hat{f}\Vert_1, \tag{1}\label{lasso}
$$

where $\hat{f} = \hat{V}n$ for a learned mapping
$\hat{V}:\mathcal{N}\to \mathcal{F}$ called the SAE decoder.

<figure>
    <div style="text-align:center; padding: 15px"><img src
    ="/img/posts/SAEPage.svg" width="275"/>
	</div>
	</figure>

With this setup in hand, we can ask when recovery is possible.
There is a natural threshold at $\alpha = 1$. Below this point, $W$ is
generically *injective*, since there are more neurons in $\mathcal{N}$ than
features in $\mathcal{F}$. Thus, a linear decoder (technically
speaking, the pseudoinverse $W^+$) suffices.
Above $\alpha = 1$ however, the nullspace of $W$ becomes nontrivial;
inevitably, some nonzero vectors are annihilated, corresponding to
feature directions which are invisible in $\mathcal{N}$. No
linear decoder can recover. This is where polysemanticity starts, and
our sparsity tie-breaker comes into play in order to select $\hat{V}$.
The question is whether there is structure beyond the simple $\alpha =
1$ threshold.

## 3. <a href="#tbc">Hunting the Transition</a><a id="sec-3" name="sec-3"></a>

Onto the experiments. In our synthetic setup, features and encodings
are described as follows:
- $W$ is a Gaussian random matrix with normalized columns;
- features $f$ are drawn from a Bernoulli-Gaussian distribution, where
  an entry is nonzero with probability $\rho = k/F$ and then
  distributed as $\mathcal{N}(0, 1)$.

This is simple enough to model easily (and even reason about
analytically), but complex enough to give rise to polysemantic behaviour.
We compare two different decoders:
- the linear decoder or pseudoinverse $W^+$, which obeys
$WW^+ = I$;
- the linear map trained with loss (\ref{lasso}), a procedure called the *LASSO*, with
  $\lambda$ calibrated to target the sparsity $k$ at a given $(\alpha,
  \rho)$.

The first is a naive but useful baseline, while the second is the
target we train in practice.
Finally, we measure two complementary accuracy metrics:
- the *support recovery accuracy*, the fraction of true nonzero entries
of $f$ that appear in $\hat{f}$;
- the *normalized mean-squared error (MSE)*, the expected value of
$\Vert f - \hat{f}\Vert_2^2/\Vert f\Vert_2^2$ over $f$.

Support accuracy is something like a $\Vert \cdot\Vert_0$ measure of accuracy
while the MSE corresponds to $\Vert \cdot\Vert_2$.
Our first experiment explores how these metrics change with $\alpha =
F/N$, sweeping $\alpha$ from $0.4$ to $6.5$, holding $N=200$ and
varying $\rho\in \{0.05,0.10,0.20\}$. Here are the plots:

<figure>
    <div style="text-align:center; padding: 15px"><img src
    ="/img/posts/EXPage1v2.png" width="850"/>
	</div>
	</figure>

As we expect, the linear decoder quickly degrades beyond $\alpha =
1$, while the sparse LASSO decoders also decay more quickly as $\rho$
increases, or put differently, sparsity decreases. This makes sense
too; the less sparse things are, the harder it is to recover!
But there is a mysterious consistency lurking in these plots. Although
the LASSO curves behave differently, they also hit a fixed value of
support recovery (just below $0.5$) for a special function

$$
\alpha^\star(\rho) = \frac{1}{\rho \log(1/\rho)}.
$$

## 4. <a href="#tbc">Why Black Holes?</a><a id="sec-4" name="sec-4"></a>

## 5. <a href="#tbc">Open Questions</a><a id="sec-5" name="sec-5"></a>
