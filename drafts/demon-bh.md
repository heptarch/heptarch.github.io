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
slow-moving particles in a gas. This decreases entropy ("disorder")
and thus apparently violates the Second Law of Thermodynamics.
Concrete proposals either fail to work when thermal fluctuations are
taken into account (e.g. hinged flaps), or have a hidden entropy
cost which ultimately preserves the Second Law.

A general class of hidden entropy costs is given by *Landauer's
principle*.
Landauer argued that erasing one bit (dissipating it irreversibly into
the environment) always comes with an entropy cost of at least $k_BT \ln 2$, where
the environment has temperature $T$ and

$$
k_B \approx 1.38 \times 10^{-23} \text{ m}^2\text{ kg s}^{-1} \text{ K}^{-1}
$$

is *Boltzmann's constant*.
This seems to provide a general argument against Maxwell's demon,
since in normal computing models, we erase bits as we go along, and
for each bit of entropy reduced in the gas, the demon compensates by
creating a bit of entropy in its computer.
