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
into. Following the experimental trail, we will find such a
transition precisely where we expect. We can use this to help design SAEs and characterize activation
patterns in neural networks.

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
feature per neuron, so it acts like a semantically "unfolded" version
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
we'll experiment with a synthetic toy model where we can see
explicitly how recoverability behaves. This will suggest design principles for SAEs as applied
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
\ell(n, \hat{f}) = \Vert n - W\hat{f}\Vert_2^2 + \lambda \Vert \hat{f}\Vert_1,
$$

where $\hat{f} = \hat{V}n$ for a learned mapping
$\hat{V}:\mathcal{N}\to \mathcal{F}$ called the SAE decoder.

<figure>
    <div style="text-align:center; padding: 15px"><img src
    ="/img/posts/SAEPage.svg" width="275"/>
	</div>
	</figure>

There are two natural thresholds governing when this recovery is possible.
- The first is $\alpha = 1$. Below this point, $W$ is injective on
  generic inputs and a linear decoder (the pseudoinverse $W^+$) suffices. Above it, the nullspace of $W$ is non-trivial: some feature directions are completely invisible to $\mathcal{N}$, and no linear decoder can recover them. This is where polysemanticity becomes inevitable.
- The second threshold is subtler. Even above $\alpha = 1$, sparsity
  can come to the rescue: a decoder that knows $f$ has only $k$
  nonzero entries can search a much smaller space of candidates. But
  this only works up to a critical ratio $\alpha^*(\rho)$, beyond
  which even the best sparse decoder fails. This is the true phase
  transition: the point at which information about $\mathcal{N}$ is
  genuinely irrecoverable, not merely scrambled.

These two thresholds divide the $(\alpha, \rho)$ plane into three qualitatively distinct regimes:

- **Isometric** ($\alpha < 1$): features are linearly recoverable; no superposition.
- **Superposition** ($1 < \alpha < \alpha^*$): features are scrambled but sparse structure permits recovery; polysemanticity is present but benign.
- **Thermal** ($\alpha > \alpha^*$): information is genuinely lost; no decoder recovers the true features.

(The terminology will become clear later.)
The middle regime is where SAEs live and where they are useful. The
boundary $\alpha^\star(\rho)$ is therefore the fundamental design
constraint: an SAE with $\alpha > \alpha^*$ is not merely suboptimal,
it is operating behind an information-theoretic horizon.

## 3. <a href="#tbc">Hunting the Transition</a><a id="sec-3" name="sec-3"></a>

## 4. <a href="#tbc">Why Black Holes?</a><a id="sec-4" name="sec-4"></a>

## 5. <a href="#tbc">Open Questions</a><a id="sec-5" name="sec-5"></a>
