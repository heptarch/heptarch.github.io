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
cost which ultimately preserves the Second Law.

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
Bennett noted that, every time the demon sorts the particle into the
fast or slow chamber, it
generates a bit of data it can either erase or store.
Erasing comes with an entropy cost, as per Landauer's principle.
Storing, on the other hand, has two interesting features: first, it
*correlates* the demon's memory with the gas system, and second, it is
limited by the physical size of the memory.
