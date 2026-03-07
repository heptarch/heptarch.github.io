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
on the size of the network we are sparsely autoencoding into. It
requires a little experimental finesse, but we will show such a
transition happens, albeit not where we expect.

## Contents <a id="tbc" name="tbc"></a>

1. <a href="#sec-1"><i>A Puzzle</i></a>
2. <a href="#sec-2"><i>Setting it Up</i></a>
3. <a href="#sec-3"><i>Experiments</i></a>
4. <a href="#sec-4"><i>Deeper Structure</i></a>
5. <a href="#sec-5"><i>Open Questions</i></a>

---

## 1. <a href="#tbc">A puzzle</a><a id="sec-1" name="sec-1"></a>

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
a tie-breaker, but after a point, we can no longer extract information
from $\mathcal{N}$ via sparsity.
This leads to a concrete architectural question: how big
should our SAE be? By studying recoverability, we'll arrive at some
general design principles.

## 2. <a href="#tbc">Setting it Up</a><a id="sec-2" name="sec-2"></a>

In the tradition of small interpretability experiments, we'll use a
synthetic system where we know the ground truth.

## 3. <a href="#tbc">Experiments</a><a id="sec-3" name="sec-3"></a>

## 4. <a href="#tbc">Deeper Structure</a><a id="sec-4" name="sec-4"></a>

## 5. <a href="#tbc">Open Questions</a><a id="sec-5" name="sec-5"></a>
