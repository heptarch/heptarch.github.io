---
Layout: post
mathjax: true
comments: true
title:  "Bennett's demon and black holes"
categories: [Physics, Thermodynamics, Quantum]
date:  2022-12-08
---

**December 8, 2022.** *Maxwell's demon *

## Introduction
---

Maxwell's demon is a tiny hypothetical imp that can separate fast- and
slow-moving particles of a gas into two different chambers. Bennett's
demon is a special case where the demon computes *reversibly* and
therefore generates no entropy cost.
This appears to violate the Second Law of Thermodynamics, up to a
cunning proviso.
Each time it sorts a particle, it generates a single bit of data,
which it can either remember or forget.
Forgetting costs thermodynamic entropy $k_BT \ln 2$, where $T$ is the
temperature of the demon's memory unit, and $k_B$ is Boltzmann's
constant.
Remembering, on the other hand, has a memory cost, and cannot be
sustained indefinitely.

Let's be more concrete.
Suppose Bennett's demon has a quantum memory $\mathcal{M}$ of $n$ qubits, total
dimension $N = 2^n$, each in initial state $| 0\rangle$.
After the $n$th particle is observed, qubit $n$ is either left in
state $|0\rangle$, or set to state $|1\rangle$, depending on whether
it got sorted into fast or slow chambers.<label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">
We can imagine an auxiliary counter system of $n' = \log n$ qubits to
keep track of how many particles have been observed.</span>
Using Landauer's principle, this should allow for the Second Law to be
violated to the tune of $\Delta S = nk_B T \ln 2$, since once we start
erasing bits and continue computing reversibly, the entropy generated
by erasure and the entropy saved should balance out.

It seems like we could make $\mathcal{M}$ indefinitely large.
But the Second Law seems pretty robust, and apparent violations
usually tell us about constraints elsewhere.
So our question is:

<div style="background-color: #cfc ; padding: 10px; border: 1px
solid green; line-height:1.5">
<b>Bennett's demon.</b> <br>

What are the constraints on $\mathcal{M}$, and in what sense do they
preserve the Second Law?
</div>

## Black holes
---

Let's assume the demon is p
