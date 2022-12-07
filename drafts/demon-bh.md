---
Layout: post
mathjax: true
comments: true
title:  "Bennett's demon and black holes"
categories: [Physics, Thermodynamics, Quantum]
date:  2022-12-06
---

**December 6, 2022.** *Maxwell's demon *

## Introduction
---

Maxwell's demon is a tiny hypothetical imp that can separate fast- and
slow-moving particles of a gas into separate chambers. This decreases entropy ("disorder")
and thus apparently violates the Second Law of Thermodynamics.
Concrete proposals either fail to work when thermal fluctuations are
taken into account, or have a hidden entropy
cost, so that up to microscopic fluctuations, entropy always increases
and the Second Law is preserved.

*Landauer's principle* is a general class of hidden costs.
Landauer argued that erasing one bit (dissipating it irreversibly into
the environment) always comes with an entropy cost of at least $k_BT \ln 2$, where
the environment has temperature $T$ and

$$
k_B \approx 1.38 \times 10^{-23} \text{ m}^2\text{ kg s}^{-1} \text{ K}^{-1}
$$

is *Boltzmann's constant*.
In normal computing models, we erase bits as we go along, and
for each bit of entropy reduced in the gas, the demon creates at least
a bit of entropy in its computer.
This seems to resolve Maxwell's demonic paradox. But Bennett,
Landauer, Fredkin, and others, realized
that computing can be done *reversibly*. No bits need to be erased, so
no entropy costs need to be incurred!
It seems as if a reversible demon can violate the Second Law after all.

Or can they?
Bennett noted that every time the demon sorts the particle into the
fast or slow chamber, it
generates a bit of data it can either remember or forget.
Forgetting comes with an entropy cost, as per Landauer's principle.
Remembering, on the other hand, has two interesting features: (1) it
*correlates* the demon's memory with the particles in the gas system;
and (2) it's limited by the physical size of this memory.
The demon can't remember everything!
Neither (1) nor (2) seems to preclude macroscopic violations of the (usual) Second
Law.
We can modify the Second Law so that entropy *plus* correlations
always increase.
There are various ways to formalize this, but I won't do that here.
Instead, I'll focus on the memory limitation (2).

<div style="background-color: #cfc ; padding: 10px; border: 1px
solid green; line-height:1.5">
<b>Bennett's demon.</b> <br>

How are reversible violations of the Second Law bounded by constraints
on physical memory?
</div>

## Speed and memory
---
