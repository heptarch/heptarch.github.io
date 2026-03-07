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
  do this extraction, guided by a a surprising connection to black
  holes that predicts exactly where this transition occurs.*

<div style="background-color: #212433 ; padding: 20px; border: 0px solid
grey; line-height:1.5; border-radius: 15px">
...information loss, once allowed, tends to be highly infectious...<br>

<div style="text-align: right">— Hayden and Preskill, <i><a
href="https://arxiv.org/pdf/0708.4025">Black holes as mirrors</a></i>
</div>
</div>

Inspired by the research
from Anthropic's
[mechanistic interpretability group](https://transformer-circuits.pub/),
I decided to explore the "physics" of sparse recovery in neural
networks. Guided by an analogy to black holes (which I explain later!),
we might expect a phase transition between recoverability and
non-recoverability of the "information" inside a neural network, based
on the size of the network we are sparsely autoencoding into. It
requires a little experimental finesse, but we can show this
transition occurs, and corresponds precisely to a transition first
forecast by [Donoho and Tanner](https://arxiv.org/abs/0906.2530).

## Contents <a id="tbc" name="tbc"></a>

1. <a href="#sec-1"><i>A puzzle</i></a>
2. <a href="#sec-2"><i>Setup</i></a>
3. <a href="#sec-3"><i>Experiment 1: Recoverability Transition</i></a>
4. <a href="#sec-4"><i>Experiment 2: Decoder Bottleneck</i></a>
5. <a href="#sec-5"><i>Experiment 3: Basis Pursuit</i></a>
6. <a href="#sec-6"><i>Experiment 4: Regularization</i></a>
7. <a href="#sec-7"><i>Black holes</i></a>
8. <a href="#sec-8"><i>Open questions</i></a>

---

## 1. <a href="#tbc">A puzzle</a><a id="sec-1" name="sec-1"></a>

A trained neural network is often hard to interpret because a neuron can fire for
many different reasons. This is called *polysemanticity* ("many
meanings") and occurs when features are sufficiently
[sparse](https://transformer-circuits.pub/2022/toy_model/index.html);
in that case, it makes sense to use the same neuron for different purposes as long as
those purposes (approximately) don't interfere with each other.<label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">
	   The full story is more fun and interesting, see the "Toy
	   Models of Superposition" paper.
	   </span>
To learn features in an interpretable way, we can train
[sparse autoencoders (SAEs)](https://transformer-circuits.pub/2023/monosemantic-features/index.html)
on those networks. I'll explain how that's performed technically in
the next section, but loosely speaking, we encourage the SAE to learn one
feature per neuron, so it acts like a semantically "unfolded" version
of the original neural network.

Suppose we have $N$ neurons in our original network $\mathcal{N}$ and $F$ neurons in
the SAE $\mathcal{F}$ we are training. We naturally want $F > N$, in
order to disentangle the different features the neurons in
$\mathcal{N}$ are activated by. But how much bigger is ideal? It turns
out there is a tradeoff between our ability to disentangle
activations, which pushes us in the direction of bigger
$\mathcal{F}$, and the information we can extract from
$\mathcal{N}$, which pushes towards smaller.
The latter point is a little counterintuitive, but basically, the
larger $\mathcal{F}$, the harder to extract information about
$\mathcal{B}$ because there's more space to look! It's the ol' needle
in the haystack.
This tradeoff leads to a simple, concrete design question: how big should our SAE be?

## 2. <a href="#tbc">Setup</a><a id="sec-2" name="sec-2"></a>

## 3. <a href="#tbc">Experiment 1</a><a id="sec-3" name="sec-3"></a>

## 4. <a href="#tbc">Experiment 2</a><a id="sec-4" name="sec-4"></a>

## 5. <a href="#tbc">Experiment 3</a><a id="sec-5" name="sec-5"></a>

## 6. <a href="#tbc">Experiment 4</a><a id="sec-6" name="sec-6"></a>

## 7. <a href="#tbc">Black holes</a><a id="sec-7" name="sec-7"></a>

## 8. <a href="#tbc">Open questions</a><a id="sec-8" name="sec-8"></a>
