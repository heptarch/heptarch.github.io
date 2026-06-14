---
Layout: post
mathjax: true
comments: true
title:  "Goals"
categories: []
date:  2026-06-15
---

**June 15, 2026.** *A first-principles analysis of goal-scoring sports.*

## Introduction

I've long been fascinated by the question of why different goal-based sports have a different number of characteristic goals per game. Given that the World Cup 2026 is upon us (I just watched Australia win in person!), it seemed like a good time to take a crack at the problem.

## Basics

There are a few factors relevant to number of goals per game:
- $N$: number of players;
- $F$: number of forwards;
- $v$: average speed of ball per game;
- $A$: area of field;
- $T$: total length of game;
- $W$: width of goal.

A very crude model is to think of the field as divided into $N$ regions, $a = A/N$, modelling each player's reach on average. Kick frequency $f$ per player is given by dimensional analysis<label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">
Since it is per player, it shouldn't depend on $N$.</span> as

$$
f \propto \frac{v}{\sqrt{A}}
$$

up to an $\mathcal{O}(1)$ constant.
Hence, the total number of kicks per game is

$$
N_\text{kick} = NTf \propto \frac{NTv}{\sqrt{A}}.
$$

How often do these kicks go into the goal? Well, forwards exist to score goals, and assuming the ball sits with a player at random, and shots on goal are proportional to area of goal vs length of field (to account for passes, inaccuracy, etc) we get

$$
P_\text{shot} \propto \frac{F}{N} \cdot \frac{W}{\sqrt{A}}.
$$

Thus, the total shots on goal is

$$
P_\text{shot}N_\text{kick} = \frac{FWTv}{A}.
$$
