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
This converts the thermal energy of random jumps into gravitational
potential energy on average, and thus violates the Second Law.

<figure>
    <div style="text-align:center"><img src
    ="/img/posts/qparrondo3.png" width="400"/>
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

<figure>
    <div style="text-align:center"><img src
    ="/img/posts/linear-demon.png" width="400"/>
	<figcaption><i>Parrondo's paradox as a linearized Maxwell's demon.</i></figcaption>
	</div>
	</figure>

## Quantum mechanics
---

We could analyze this in terms of Brownian motion with drift, but
there's a more general quantum-mechanical formulation which makes the
point clear.
It also gives a clean and simple illustration of how Parrondo's
paradox appears in quantum mechanics.
Let us consider a system with Hamiltonian $H$, and two observables,
$E$ (not energy!) and $B$.
For simplicity, we'll suppose that neither of these changes with time,
just like the slopes; the time-dependence will be in the alternation only.
To say that both $E$ and $B$ are "losing strategies" here means that the
expectation decreases with time:

$$
\partial_t\langle E\rangle \leq 0, \quad \partial_t\langle B\rangle \leq 0.
$$

For simplicity, we'll assume that the loss rate is bounded below by
some minimum loss rate $m(t)$, i.e.

$$
|\partial_t \langle E\rangle|, |\partial_t \langle B\rangle| \geq m(t).
$$

Let's define our alternating strategy in terms of an operator which
weights $E$ and $B$ in a time-dependent fashion:

$$
A(t) = \alpha(t) E + (1-\alpha(t)) B.
$$

To implement Parrondo's paradox, we will simply seek an alternation
strategy $\alpha(t) \in [0, 1]$ such that $\langle A(t)\rangle$ increases with
time.
Since expectations are linear, we have that

$$
\langle A(t)\rangle = \alpha(t) \langle E\rangle + (1-\alpha(t))
\langle B\rangle,
$$

and hence time derivative

$$
\partial_t\langle A(t)\rangle = \dot{\alpha(t)}
(\langle E\rangle - \langle B\rangle ) + \alpha(t) \partial_t\langle E\rangle + (1-\alpha(t)) \partial_t\langle B\rangle.
$$

For this to be positive, we require 

$$
\begin{align*}
\dot{\alpha(t)}
(\langle E\rangle - \langle B\rangle) & > \alpha(t)|\partial_t\langle
E\rangle| + (1 - \alpha(t))|\partial_t\langle B\rangle| \\
&\geq \alpha(t)m(t) + (1- \alpha(t))m(t) = m(t),
\end{align*}
$$

using our loss bound $m(t)$.
Put differently, we will turn our losing strategies into a winning
strategy provided we switch to whatever strategy is locally better
quickly enough, where "quickly enough" means

<div style="background-color: #EAD1DC ; padding: 10px; border: 1px solid purple;">
$$
|\dot{\alpha(t)}| > \frac{m(t)}{|(\langle E\rangle - \langle B\rangle)|}.
\tag{1}
$$
</div>

This makes it clear that 
