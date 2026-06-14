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
---

I've long been fascinated by the question of why different goal-based sports have a different number of characteristic goals per game. Given that the World Cup 2026 is upon us (I just watched Australia win in person!), it seemed like a good time to take a crack at the problem.

## Basics
---

There are a few factors relevant to number of goals per game:
- $N$: number of players;
- $v$: average speed of ball per game;
- $A$: area of field;
- $T$: total length of game;
- $W$: width of goal;
- $w$: width of ball.

A very crude model is to think of the field as divided into $N$ regions, $a = A/N$, modelling each player's reach on average. Kick frequency $f$ per player is given by dimensional analysis<label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">
Since it is per player, it shouldn't depend on $N$.</span> as

$$
f \propto \frac{v}{\sqrt{A}}. 
$$

Hence, the total number of kicks per game is

$$
NTf \propto \frac{NTv}{sqrt{A}}.
$$

How often do these kicks go into the goal? Most kicks on goal happen close to goal, where the probability is given by the size of the goal $W$ over the characteristic size of the 
