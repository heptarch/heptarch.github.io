---
Layout: post
mathjax: true
comments: true
title:  "Necromancy and thermodynamics"
categories: []
date:  2026-06-17
---

**June 17, 2026.** *How are dead cats and scrambled eggs connected?*

## Introduction

Schrödinger's cat is trapped in a box with a radioactive isotope and a decay-triggered vial of poison. When the box is closed, the cat is both alive and dead. When you open the box, the cat is dead, or alive, but not both. It's interesting to understand what changed! Inside the box, the state of the cat is usually written

$$
|\phi\rangle = \alpha |\text{dead}\rangle + \beta |\text{alive}\rangle,
$$

where $\alpha$ and $\beta$ are coefficients that depend on the isotope and the elapsed time. Labelling the states associated with "dead" as 0 and "alive as 1, this means that when the cat is dead the state of the isotope is $\vert 0\rangle$, the state of the poison is $\vert 0\rangle$, and each atom in the cat is in some state $\vert 0\rangle$. The same goes for alive, and hence:

$$
|\text{dead}\rangle = |0\rangle^{\otimes n}, \quad|\text{alive}\rangle = |1\rangle^{\otimes n}.
$$

These are very special states, so it not really the case that the cat in the unopened box is quantum; it is already largely classical! It is in what is called a *macroscopic superposition*. These are formed using what is called *decoherence*. If the first qubit represents the radioactive isotopic, the decoherent interaction is

$$
(\alpha |0\rangle + \beta |1\rangle) |\text{cat}\rangle = \alpha |0\rangle|\text{cat}\rangle + \beta |1\rangle |\text{cat}\rangle \overset{\text{decoherence}}{\longmapsto} \alpha |0\rangle|0\rangle^{n-1}+\beta |1\rangle|1\rangle^{n-1} = |\phi\rangle.
$$

Thus, decoherence can viewed as a process in which a microscope superposition over some privileged basis propagates into a macroscopic superposition.
When you open the box, nothing special happens at all, in fact the process continues: if you are simulated by $m$ qubits, then

$$
(\alpha |0\rangle^\otimes + \beta |1\rangle^\otimes) |\text{observer}\rangle \overset{\text{decoherence}}{\longmapsto} \alpha |0\rangle^{n+m}+\beta |1\rangle^{n+m},
$$

so you now participate in the macroscopic superposition as well. "Within" each of these two halves of the superposition, you see a living or dead cat, but decoherence has continued in its merrily infectious way.

## A thermodynamic puzzle

Something about this seems to fly in the face of the second law of thermodynamics. If you recall, this states that entropy increases, and there are many more ways to have random individual superpositions than 
