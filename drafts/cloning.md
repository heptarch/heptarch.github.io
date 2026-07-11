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

Famously, quantum information cannot be cloned, in the sense that there is no unitary operator $U$ which copies an arbitrary state $\vert\psi\rangle$ onto an ancilla,

$$
U |\psi\rangle |\phi_0\rangle = |\psi\rangle|\psi\rangle.
$$

This is true, but as [Yamaguchi and Kempf (2025)](https://arxiv.org/abs/2501.02757) argue, it is also unimaginative. They invent a scheme for
cloning *encrypted* states, such that

$$
U_E |\psi\rangle |\phi_0\rangle = |\psi\rangle E |\psi\rangle,
$$

where $E$ is an operator that cryptographically obfuscates the state. Once you can copy once, you can copy multiple times, but they show that despite this, only one copy can ever be recovered!
It's a beautiful scheme. But the point of this post is to argue that, in some sense, the familiar quantum phenomenon of teleportation
already has this form, and can be generalized in such a way that it clones multiple encrypted qubits.

## Teleportation

The basic idea is hopefully familiar: Alice wants to send a quantum state $\vert\psi\rangle$ to Bob, and they share a maximally entangled Bell pair,

$$
|\Phi\rangle_{AB} = \frac{1}{\sqrt{2}}\big(|0\rangle_A |0\rangle_B + |1\rangle_A |1\rangle_B\big),
$$

where I omit the tensor product for simplicity.
The full system is initially $|\psi\rangle_A|\Phi\rangle_{AB}$. Alice then measures her qubits in the Bell basis, consisting of four states

$$
|\Phi_{ab}\rangle = (I \otimes Z^b X^a) |\Phi\rangle = \frac{1}{\sqrt{2}}\bigg(|0\rangle_A |a\rangle_B + (-1)^b|1\rangle_A |\overline{a}\rangle_B\bigg),
$$

for $a, b = 0, 1$, $\overline{a} = 1 - a$, and up to an overall minus sign we can ignore.
This measurement couples Alice's state $|\psi\rangle$ to her second qubit, which is entangled with Bob; when she measures, this has the effect of sending the state $\vert\psi\rangle$ through to Bob, with some corrections. More precisely, some algebra shows that

$$
|\psi\rangle_A |\Phi\rangle_{AB} = \sum_{a, b} |\Phi_{ab}\rangle_A\big( X^a Z^b |\psi\rangle\big),
$$

so after Alice measures $a, b$, Bob has state $X^a Z^b \vert \psi\rangle$.
Alice sends Bob $a$ and $b$ over a classical channel, so he can undo $X^a Z^b$ and then voila! He has the state $\vert\psi\rangle$.
If you want more detail on *why* it works, feel free to check out the [explainer](https://torsor.io/#blog/teleportation) I wrote a while back.<label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">
Admittedly, starting with the Coffman-Kundu-Wootters inequality may make things more confusing.</span>

## Encrypted cloning

The thing about entanglement is that it allows for "spooky action at a distance", and in the case of teleportation, the state $X^a Z^b \vert \psi\rangle$ appears *instantaneously* in Bob's system when Alice measures in the Bell basis. This is deeply disturbing, and in fact, gets even more disturbing: in a frame of reference moving relative to Alice and Bob, Bob receives the state $X^a Z^b \vert\psi\rangle$ *before* Alice measures in the Bell basis! So there are two copies of the state floating around. So we see that teleportation, in the right frame of reference involves cloning.

The thing that prevents this from being a violation of no-cloning is the same thing that prevents Alice from sending information faster than light: Bob holds $X^a Z^b \vert\psi\rangle$ and not $\vert\psi\rangle$ itself. This looks a lot 

## Multiple copies
