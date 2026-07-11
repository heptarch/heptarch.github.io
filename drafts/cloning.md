---
Layout: post
mathjax: true
comments: true
title:  "Teleportation is encrypted cloning"
categories: []
date:  2026-07-11
---

**July 11, 2026.** *Looking at a familar phenomenon through a new lens.*

## Introduction

Famously, quantum information cannot be cloned, in the sense that there is no unitary operator $U$ which copies an arbitrary state $\vert|\psi\rangle$ onto an ancilla,

$$
U |\psi\rangle |\phi_0\rangle = |\psi\rangle|\psi\rangle.
$$

This is true, but as [Yamaguchi and Kempf (2025)](https://arxiv.org/abs/2501.02757) argue, it is also unimaginative. They invent a scheme for
cloning *encrypted* states, such that

$$
U_E |\psi\rangle |\phi_0\rangle = |\psi\rangle E |\psi\rangle,
$$

where $E$ is an operator that conceals access. Once you can copy once, you can copy multiple times, but they show that only one copy can ever be recovered.
It's a beautiful scheme! But the point of this post is to argue that, in some sense, the familiar quantum phenomenon of teleportation
already has this form, and can be generalized in such a way that it clones multiple encrypted qubits.
This is simpler and strictly different from Yamaguchi-Kempf procedure.

## Teleportation

The basic idea is hopefully familiar: Alice wants to share a quantum state $\vert|\psi\rangle$ with Bob, and they share a maximally entangled Bell pair,

$$
|\Phi\rangle_{AB} = \frac{1}{\sqrt{2}}\left[|0\rangle_A |0\rangle_B + |1\rangle_A |1\rangle_B\right],
$$

where I omit the tensor product for simplicity.
The full system is $|\psi\rangle_A|\Phi\rangle_{AB}$. Alice then measures her qubits in the Bell basis, labelled

$$
|\Phi_{ab}\rangle = (I \otimes X^a Z^b) |\Phi\rangle = \frac{1}{\sqrt{2}}\left[|0\rangle_A |a\rangle_B + (-1)^b|1\rangle_A |\overline{a}\rangle_B\right],
$$

up to an overall minus sign we can ignore.
This measurement couples Alice's state $|\psi\rangle$ to her second qubit, which is entangled with Bob; when she measures $a, b$, yielding a state $|\Phi_{ab}\rangle_A$, the state $|\psi\rangle$ is sent through to Bob
If you want more detail on why it works, feel free to check out the [explainer](https://torsor.io/#blog/teleportation) I wrote a while back.
