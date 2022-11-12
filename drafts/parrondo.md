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
If it's subject to gravity and sitting on an even slope $E$, it will gradually
slide down, albeit with random jumps back and forth.

<figure>
    <div style="text-align:center"><img src
    ="/img/posts/qparrondo1.png" width="400"/>
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
So, both $E$ and $B$ are "losing strategies" in the sense that on
average the particle does not go right.

Suppose we can press a button which alternates instantaneously between
$E$ and $B$.
Provided the bumps are big enough to trap the particle, we can
manufacture a violation of the Second Law as follows.
Wait for it to get trapped in a divot in $B$; quickly switch to $E$ so
it jumps right; switch back to $B$ so it gets trapped again.
This is a type of
["Brownian ratchet"](https://en.wikipedia.org/wiki/Brownian_ratchet)
which slowly raises the molecule up the hill.

<figure>
    <div style="text-align:center"><img src
    ="/img/posts/qparrondo3.png" width="400"/>
	<figcaption><i>Alternating between slopes ratchets the molecule up
    the hill.</i></figcaption>
	</div>
	</figure>

The solution to this, 
