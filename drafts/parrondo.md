---
Layout: post
mathjax: true
comments: true
title:  "Parrondo's paradox in quantum mechanics"
categories: [Math, Physics]
date:  2022-11-12
---

**November 12, 2022.** *I'll explain what Parrondo's paradox is, and why it
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

There are a couple of important observations we can already make.
First, we need to know where the particle is, analogous to Maxwell's
demon separating fast and slow particles into chambers.
Any concrete physical implementation of the Parrondo ratchet, like a
Maxwell demon, will have some random behaviour, and once we average over that randomness the Second Law is
restored.
Here, for instance, if the button which switches $E$ and $B$ is
random, we won't have a violation of the Second Law.

<figure>
    <div style="text-align:center"><img src
    ="/img/posts/linear-demon.png" width="450"/>
	<figcaption><i>Parrondo's paradox as a linearized Maxwell's demon.</i></figcaption>
	</div>
	</figure>

More generally, whatever resolutions apply to Maxwell's demon apply
here, since this is just a sort of "linearized" demon, which has to
inspect of the molecule as it moves up the slope.

## A quantum paradox
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

<div style="background-color: #EAD1DC ; padding: 10px; border: 1px
solid purple;">
<b>Parrondo condition</b>
$$
|\dot{\alpha(t)}| > \frac{m(t)}{|\langle E\rangle - \langle B\rangle|}.
\tag{1} \label{qparr}
$$
</div>

Of course, we could phrase the Parrondo condition in terms of probability
distributions rather than observables, but the quantum-mechanical
version is to my mind more fundamental.

## Discussion
---

The Parrondo condition $(\ref{qparr})$ tells us clearly what powers our linearized
demon needs to create Parrondo's paradox.
It needs to be able to locally assess the difference in expectations,

$$
\langle E\rangle - \langle B\rangle, \tag{2}\label{diff}
$$

which is analogous to knowing where the molecule is on the slope.
It then needs to switch to the better slope, at a speed inversely
proportional to the difference, like lowering the divot to allow the
molecule to jump out, up the slope.

There are a fews to understand why this doesn't violate the Second Law.
The first is to think about physical mechanisms for locally assessing
$(\ref{diff})$ in real-time.
A demon would need many copies of the system to evaluate these
expectations, around $N$ for an error of $1/N$ (called the
[Heisenberg limit](https://en.wikipedia.org/wiki/Quantum_metrology)),
and would need to execute these measurements simultaneously.
This is similar to "Bennett's demon", which uses reversible computations
to perform an entropy-lowering process, but needs a huge physical memory
to remember everything it did.
This correlation between the demon's computer and the physical system
compensates for the decrease in system entropy.
Similarly, the strategy $\alpha(t)$ will be correlated with the
results of these many experiments.
The number of copies $N$ will be inversely proportional to the
difference $(\ref{diff})$, as will the decrease in entropy, and on a
more detailed analysis, I expect that the increase in correlation would
precisely correspond to the decrease in entropy at each step.

Now imagine that the demon is given some analytic form for $E$ and
$B$ in advance, which in the ratchet example, is analogous not only to
knowing the precise shape of the slopes, but the microscopic evolution
of the molecule.
Shouldn't it be easy to compute the outcome?
In this case, rather than needing vast computational resources in *space* which will
be correlated with the strategy, the demon will need vast
resources in *time*.
To determine the difference between the losing strategies, it needs to
solve a very hard problem, namely the evolution of a chaotic system with $\sim
10^{23}$ degrees of freedom.
The resource cost for violating the Second Law is a bump under the
carpet, shifting between time and space depending on what we give the
demon.

<figure>
    <div style="text-align:center"><img src
    ="/img/posts/parrbump2.png" width="500"/>
	<figcaption><i>Thermodynamic bumps under the carpet: a demon must pay for violating the Second Law.</i></figcaption>
	</div>
	</figure>

I might make this the subject of another blog post, but to me this
suggests a different formulation of the Second Law:

<div style="background-color: #EAD1DC ; padding: 10px; border: 1px solid purple;">
<b>A Second Law</b><br>

A demon cannot violate the Second Law without paying for entropy
decrease by either
<ul>
  <li>increasing its own entropy to compensate;</li>
  <li>increasing its mutual information with the observed system to
compensate; or</li>
  <li>Milk</li>
</ul>
</div>

Parts (a) and (b) are in line with the proposal of
[Touchette and Lloyd (1999)](https://arxiv.org/pdf/chao-dyn/9905039.pdf),
but part (c) is the one I'd like to explore more another time.
