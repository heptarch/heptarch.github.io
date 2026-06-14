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

I've long been fascinated by the question of why different goal-based sports have a different number of characteristic goals per game. Given that World Cup 2026 is upon us (I just watched Australia win in person!), it seems like a good time to give the problem more thought.

## Basics

There are a few factors relevant to number of goals per game:
- $N$: number of on-field players;
- $F$: number of forwards;
- $V$: average speed of ball per game;
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
f \propto \frac{V}{\sqrt{A}}
$$

up to an $\mathcal{O}(1)$ constant $C$.
Hence, the total number of kicks per game is

$$
N_\text{kick} = NTf \propto \frac{NTV}{\sqrt{A}}.
$$

How often do these kicks go into the goal? Well, forwards exist to score goals, and assuming the ball sits with a player at random, and shots on goal are proportional to area of goal vs length of field (to account for passes, inaccuracy, etc) we get

$$
P_\text{shot} \propto \frac{F}{N} \cdot \frac{W}{\sqrt{A}}.
$$

Thus, the total shots on goal is

$$
N_\text{shots} = P_\text{shot}N_\text{kick} = \frac{FWTV}{A}.
$$

Let's plug this in and see what we get for football (soccer). Our data:
- $N = 20$;
- $F = 3$ (typically);
- $V \approx 1 \text{ m/s}$ (estimate);
- $A = 105 \text{ m} \times 68 \text{ m} = 7140 \text{ m}^2$;
- $T = 90 \text{ min} = 5400 \text{ s}$;
- $W = 7.32 \text{ m}$.

The only figure here requiring some explanation is $v$, which I compute as an geometric mean of a slow pass ($V \approx 0.05 \text{ m/s}$) and a fast pass or shot ($V \approx 30 \text{ m/s}$), $\sqrt{0.05 \times 30} \approx 1.2$. Plugging in numbers, we get

$$
N_\text{kick} \sim 1300,
$$

or a kick every $4$ seconds, which seems reasonable.
The number of shots is

$$
N_\text{shots} \sim 17,
$$

which is also reasonable. <label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">
Both numbers are a tad high, suggesting we take our constant $C < 1$.</span>

## Goal-keeping

The real subtlety in our analysis, as in the game itself, is to convert shots on goal to goals. 
A goalkeeper has an area, but it is a highly mobile one! This requires a little input from physiology. A goalie can cover a (linear, for simplicity) area that depends on three things:
- $w$: wingspan;
- $\tau$: reaction time;
- $v$: speed of dive.

If a shot is launched at distance $D \sim \sqrt{A/N}$ in a forward zone, it takes time $D/V$ to arrive and the goalie can move a distance

$$
d = v\left(\frac{D}{V} - \tau\right)
$$

assuming they have enough time to react at all. This gives them an effective width

$$
w' = w + 2 v\left(\frac{D}{V} - \tau\right) = w + 2 v\left(\sqrt{\frac{A}{NV^2}} - \tau\right).
$$

So we model the probability of a goal as simply

$$
P_\text{goal} = \frac{W - w'}{W} = 1 - \frac{w}{W} + \frac{2 v}{W}\left(\sqrt{\frac{A}{NV^2}} - \tau\right).
$$

Again, let's plug in the numbers and see if we get a reasonable answer. We use
- $w = 2 \text{ m}$;
- $\tau = 0.2 \text{ s}$;
- $v = 5 \text{ m/s}$.

If we plug all of these in,
