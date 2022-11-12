---
Layout: post
mathjax: true
comments: true
title:  "Parrondo's paradox in quantum mechanics"
categories: [Math, Physics]
date:  2022-11-09
---

**November 9, 2022.** *I'll explain what Parrondo's paradox is, and why it
  isn't a paradox, using the convenient language of quantum mechanics.*

## Introduction
---

Sometimes, alternating between two losing strategies becomes a winning
strategy. This is called *Parrondo's paradox*. As we'll see, it isn't
much of a paradox, but it is interesting, particularly due to its
connection to thermodynamics.
To illustrate, consider a molecule sitting in a hot bath.
It will bump into other particles and jump around randomly.
If it's subject to gravity and sitting on a smooth slope $S$, it will gradually
slide down, albeit with random jumps back and forth.

<figure>
    <div style="text-align:center"><img src
    ="/img/posts/parrpar1.png" width="400"/>
	<figcaption><i>A molecule slides down an even slope with random jumps.</i></figcaption>
	</div>
	</figure>

Instead of an even slope, we could imagine a bumpy slope $B$, which still
tilts to the left overall. The molecule may get stuck in a local
divot, or it may drift to the left.
What it cannot do, however, is drift to the right.

<figure>
    <div style="text-align:center"><img src
    ="/img/posts/qparrondo2.png" width="400"/>
	<figcaption><i>A molecule slides down a jagged slope with random jumps.</i></figcaption>
	</div>
	</figure>

Suppose that it did. Then we would be turning thermal energy---the
random jumps---into gravitational potential energy. This violates the
Second Law of thermodynamics, which forbids us turning thermal energy
into useful work.
To be clear, each time the particle jumps to the right, we seem to
have violated the Second Law, but really, what matters is the
*average*.
Random fluctuations are fine, but the average trajectory must always
get stuck or go left.
So, both $S$ and $B$ are "losing strategies" in the sense that on
average the particle does not go right.

Suppose we can press a button which alternates instantaneously between
$S$ and $B$.
Provided the bumps are big enough to trap the particle, we can
manufacture a violation of the Second Law as follows.
Wait for it to get trapped in a divot in $B$; quickly switch to $S$ so
it jumps right; switch back to $B$ so it gets trapped again.
This is a type of
["Brownian ratchet"](https://en.wikipedia.org/wiki/Brownian_ratchet)
which slowly raises the molecule up the hill.
This converts the thermal energy of random jumps into gravitational
potential energy on average, and thus violates the Second Law.

<figure>
    <div style="text-align:center"><img src
    ="/img/posts/parrpar3.png" width="400"/>
	<figcaption><i>Alternating between slopes ratchets the molecule up
    the hill.</i></figcaption>
	</div>
	</figure>

There are a couple of observations we can make about this.
First, we need to interact with the particle to know where it is,
analogous to Maxwell's demon separating fast and slow particles into
chambers.
Any concrete physical implementation of the Parrondo ratchet, like a
Maxwell demon, will have some random behaviour that we perhaps forgot
about, and once we average over that randomness the Second Law is
restored.
Here, for instance, if the button which switches $E$ and $B$ is
random, we won't have a violation of the Second Law.
More generally, whatever resolutions apply to Maxwell's demon apply
here, since this is just a sort of "linearized" demon, which has to
assess the speed of the molecule as it moves up the slope.

## Quantum mechanics
---

We could analyze this in terms of Brownian motion with drift, but
there's a more general quantum-mechanical formulation which makes the
point clear.
It also gives a clean and simple illustration of how Parrondo's
paradox appears in quantum mechanics.
Let us consider 
