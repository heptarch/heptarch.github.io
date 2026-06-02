---
Layout: post
mathjax: true
comments: true
title:  "Computational free will"
categories: [AI, writing, art, philosophy]
date:  2026-06-03
---

**June 3, 2026.** *Mining an unexpected connection between free will and simulation.*

## Introduction

Chaos is usually applied to complex systems like chemical admixtures, bacterial colonies, planets or piles of sand. But the brain is also a complex system, and according to the theory of *self-organized criticality (SOC)*, likes to maintain itself near phase transitions where small perturbations can lead to large effects. This sensitivity to perturbations is characteristic of *chaos in the Lyapunov sense*, where an initial uncertainty $\delta x_0$ in a parameter $x$ grows exponentially in time, or mathematically:

$$
\delta x(t) \approx e^{\lambda t}\delta x_0.
$$

If brains are complex systems which exhibit chaos, their behaviour—made particularly stark in domains such as decision-making—may be mathematically impossible to predict. I call this *computational free will (CFW)* since it confers an effective (if rudimentary) form of free will.

Fundamental unpredictability also appears in quantum-mechanical accounts of free will, and is philosophically unsatisfying in a deep way: you are not really free if your decisions are made by a roll of the quantum-mechanical dice. CFW is more interesting in that, if the SOC story holds, the brain can potentially make *non-random* but unpredictable decisions by maintaining proximity to various basins of attraction. This depends to some extent on the SOC hypothesis or *critical brain hypothesis* (see for instance Chialvo's review ["Emergent complex neural dynamics"](https://arxiv.org/abs/1010.2530)), but the idea that the brain is a complex system exhibiting Lyapunov chaos is a more defensible position. Either way, let's just accept the thesis of CFW for now and see where it leads us.

## Simulations

CFW has some interesting corollaries for simulation arguments. The idea is that, if we are simulated, most of our actions can only be predicted by the simulators in one way: running the simulation. For the same reason, it's impossible for them to mildly perturb us to make a given decision; the result will remain unpredictable. If they want us to make a given choice, they have to make violent, large-scale interventions which leave a trail of inconsistencies and threaten the integrity of the simulation. This is one reason to think of unpredictability, in this instance, as "free will": it guarantees the absence of certain kinds of interference, the old "freedom from".

"Guarantee" is perhaps too strong. If we are simulated, the speed of the simulation can change, like lag in a video game. This latency could account for heavier computational processes, and relatedly, a regime of short-term analytic prediction using Lyapunov-unstable equations our simulators use to anticipate and schedule computational load. There is no way to tell from "inside" the simulation how fast it is being run (or if it run sequentially at all, a la [Greg Egan](https://www.gregegan.net/PERMUTATION/Permutation.html)), so it is experientially entirely consistent that there is a short-term prediction market in the simulation infrastructure.

Short-term prediction perhaps implies short-term interventions. The simulators, in other words, might be able to influence decisions after all, provided they can pinpoint the relevant branching of the decision process. In order to protect CFW, we makes the following hypothesis:

<div style="background-color: #212433 ; padding: 20px; border: 0px solid
grey; line-height:1.5; border-radius: 15px">
**CFW hypothesis.** It is computationally hard to determine when small (neuronal-scale) interventions will influence a decision in a brain.
</div>

By "computationally hard", I mean "infeasible for simulators", which probably translates to $\textsf{NP}$-hard for a suitable discretization of the problem. To be clear, I have no idea if this is true. But I would like it to be true so that, on the off chance we live in a simulation, we are immune to certain types of manipulation. 

## Quantum mechanics

There is a more precise analogue of CFW in the realm of quantum mechanics. The [*No Fast Forwarding Theorem*](https://arxiv.org/pdf/1610.09619) of Atia and Aharanov
