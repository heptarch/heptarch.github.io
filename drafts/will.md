---
Layout: post
mathjax: true
comments: true
title:  "Computational free will"
categories: [Philosophy, simulation]
date:  2026-06-04
---

**June 4, 2026.** *Mining an unexpected connection between free will and simulation.*

## Introduction

Suppose we are living in a simulation. A disturbing possibility is that the simulators could be influencing our decisions, not by violent, large-scale interventions (these violate the integrity of the simulation), but by *nudging*: microchanges at the level of neurons or electro-cortical fields designed to induce certain outcomes. Simulators might do this because they are studying us, because they are "playing us" in some sort of video game (think *Being John Malkovich*), or because they want to guide towards cheaper regions of simulation space.

We will argue from a few different perspectives that influencing decisions in this way is exceedingly difficult, so we have a form of "computational free will". To be clear, the arguments are based on the assumption that simulators share our math and physics, and that even if they can simulate a whole universe, they are compute-constrained in that they cannot simulate things *exponentially large* in the size of our universe. I should add that I don't believe we live in a simulation; one of my goals is to show that such a simulation is useless and expensive and thus decrease its posterior credibility.

## Chaos

A simple reason we might think that influencing a decision is hard is *chaos*. In its simple Lyapunov form, it says that an initial uncertainty $\delta x_0$ in a parameter $x$ grows exponentially in time, or mathematically:

$$
\delta x(t) \approx e^{\lambda t}\delta x_0
$$

for *Lyapunov exponent* $\lambda$.
This cuts two ways. It shows that short-term dynamics (on the order of the Lyapunov time $\lambda^{-1}$) is essentially unpredictable (since errors grow exponentially), so simulators cannot have analytic control over brain states for finite-precision initial conditions.

The problem with this line of argument is that simulators presumably know brain states *exactly*, so they may well be able to predict future brain states. Worse, the sensitivity to initial conditions suggests that large changes, such as decisions, can indeed be induced by microscopic changes seeded early enough. This seems like a slam dunk for the simulators.
But there is a difference between evolving a brain state and guiding it towards a target outcome. Random seeds lead to random outcomes; unless we can solve the *inverse problem* of determining the seed from the outcome, we are restricted to brute force search (via analytics or simulation) over the space of small perturbations.

Our focus now will be to understand the inverse problem and characterize its difficulty. A first observation that the space of small perturbations is continuous, and even if discretized, exponentially large in the number of neurons $N$. If "small" means at most $n = \alpha N$ neurons are perturbed (for $\alpha \ll 1$ but $\alpha N \gg 1$) and there are $\ell$ ways to perturb a neuron, the number of perturbations is

$$
\sum_{k=0}^n k^\ell \binom{N}{k} \sim  \frac{n^\ell N!}{n!(N - n)!} = \mathcal{O}\left[n^\ell\left(\frac{1}{1-\alpha}\right)^N\left(\frac{1-\alpha}{\alpha}\right)^n\right]
$$

using Stirling's formula. This is exponential in both $N$ and $n$, which for $N \sim 10^{10}$ neurons, is plausibly outside the computational reach of our simulators.

## Influence maximization

This doesn't prove that a good strategy doesn't exist; it just shows how hard the problem is when the worst strategy is used. To make progress on the question of good strategies, we need to commit to a more concrete computational model of the problem at hand. We will combine a couple of different ideas here. First, the *critical brain hypothesis* (see for instance Chialvo's review ["Emergent complex neural dynamics"](https://arxiv.org/abs/1010.2530)) states that the brain maintains itself in a critical state near a number of basins of attraction. Assuming (generously) that simulators can model these basins, the goal would be to sow seed changes $\delta x_0$ that cascade into the desired target basin:

$$
\begin{align}
x_0 & \overset{\text{cascade}}{\longrightarrow} \text{original decision basin} \\ \delta x_0 + x_0 & \overset{\text{cascade}}{\longrightarrow} \text{target decision basin}.
\end{align}
$$

We will employ a simplification of this cascade process called *Influence Maximization (IM)*, as formulated by [Kempe, Kleinberg and Tardos (KKT)](https://www.cs.cornell.edu/home/kleinber/kdd03-inf.pdf). The basic idea is to model the brain as a directed graph $G = (V, E)$ where vertices are neurons and edges denote directed connections between them.
At each time step, there is a set of *activated nodes* $\mathcal{X}_t$, with activation at time $t + 1$ determined locally by the in-directed neighbours at time $t$:

$$
[v \in \mathcal{X}_{t+1}] = M\left(N_\text{in}(v) \cap \mathcal{X}_t\right),
$$

where $[\cdot]$ is the [Iverson bracket](https://en.wikipedia.org/wiki/Iverson_bracket) and $M$ is an *information-diffusion process*.
A simple example of a diffusion process is for each node to select a threshold $\theta_v \in [0, 1]$ uniformly at random, and for each in-neighbour $w \in N_\text{in}(v)$, to associate a coefficient $b_{vw}$ such that $v$ switches on if

$$
\sum_{w \in N_\text{in}(v)\cap \mathcal{X}_t} b_{vw} \geq \theta_v.
$$

(To ensure this is nontrivial, we require $\sum_{w \in N_\text{in}(v)} b_{vw} \leq 1$.) The *influence function* $\sigma(S)$ of a subset of nodes $S \subseteq V$ is the expected size of the eventually activated set $\mathcal{X}_\infty$:

$$
\sigma(S) =  \mathbb{E}\left[\lim_{t\to\infty} |\mathcal{X}_t|\right] = \mathbb{E}[|\mathcal{X}_\infty|]
$$

for this or any other information-diffusion model. The *IM problem* is to maximize influence, i.e., given a seed constraint $\ell$, find

$$
S^* = \text{argmax}_{|S| \leq \ell, S \subset V} \sigma(S).
$$

This is a simplification of the problem for a number of reasons; to name a few, neurons activate with nonlinear thresholds, the goal is not a large cascade but a specific basic of attraction, and connections are themselves time-dependent.

There are two interesting things to say about the IM problem. First, exactly solving it is intractable, or more precisely, $\textsf{NP}$-hard in the worst case. This strongly suggests that attempting to change decision basin by seeding a maximal cascade is also $\textsf{NP}$-hard. But perhaps a cascade doesn't need to be maximal to change a decision; KKT also give a greedy approximation which is guaranteed to come within $1-e^{-1} \approx 63\%$ of the optimal size.

<!-- ## Introduction

Chaos is usually applied to complex systems like chemical reactions, bacterial colonies, planets or piles of sand. But the brain is also a complex system, and according to the theory of *self-organized criticality (SOC)*, likes to maintain itself near phase transitions where small perturbations can lead to large effects. This sensitivity to perturbations is characteristic of *chaos in the Lyapunov sense*, where an initial uncertainty $\delta x_0$ in a parameter $x$ grows exponentially in time, or mathematically:

$$
\delta x(t) \approx e^{\lambda t}\delta x_0.
$$

If brains are complex systems which exhibit chaos, their behaviour—made particularly stark in domains such as decision-making—may be mathematically impossible to predict. I call this *computational free will (CFW)* since it confers an effective (if rudimentary) form of free will.

Fundamental unpredictability also appears in quantum-mechanical accounts of free will, and is philosophically unsatisfying in a deep way: you are not really free if your decisions are made by a roll of the quantum-mechanical dice. CFW suffers from a similar issue on the philosophical front, but kicks the can down the road to the question: how does the emergent process of decision-making, and the various basins of attraction, actually work? This depends on the SOC hypothesis or *critical brain hypothesis* (see for instance Chialvo's review ["Emergent complex neural dynamics"](https://arxiv.org/abs/1010.2530)), but we can also restrict ourselves to the more defensible, but less satisfying, idea that the brain is a complex system exhibiting Lyapunov chaos. Either way, we'll accept CFW for now and see where it leads us.

## Simulations

CFW has some interesting corollaries for simulation arguments. The idea is that, if we are simulated, most of our actions can only be predicted by the simulators in one way: running the simulation. For the same reason, it's impossible for them to nudge us to make a given decision; the result will remain unpredictable. If they want us to make a given choice, they have to make violent, large-scale interventions which leave a trail of inconsistencies and threaten the integrity of the simulation. This is one reason to think of unpredictability, in this instance, as "free will": it guarantees the absence of certain kinds of interference, the old "freedom from" rather than "freedom to", to quote Isaiah Berlin.

"Guarantee" is perhaps too strong. If we are simulated, the speed of the simulation can change, like lag in a video game. This latency could account for heavier computational processes, and relatedly, a regime of short-term analytic prediction using Lyapunov-unstable equations our simulators use to anticipate and schedule computational load. There is no way to tell from "inside" the simulation how fast it is being run (or if it run sequentially at all, a la [Greg Egan](https://www.gregegan.net/PERMUTATION/Permutation.html)), so it is experientially entirely consistent that there is a short-term prediction market in the simulation infrastructure.

Short-term prediction seems to imply short-term interventions are possible after all. The simulators, in other words, might be able to influence our decisions provided they can pinpoint the relevant branching of the decision process and the correct intervention to make. In order to protect CFW, we make the following hypothesis:

<div style="background-color: #212433 ; padding: 20px; border: 0px solid
grey; line-height:1.5; border-radius: 15px">
<b>CFW hypothesis.</b> It is computationally hard to determine which small (neuron-scale) interventions will influence a decision.
</div>

By "computationally hard", I mean "infeasible for simulators", which may translate to $\textsf{NP}$-hard for a suitable discretization of the problem.
Put differently, we expect that decision processes in brains are robust to local perturbations, so there is something "topological" at play, a general shape to the decision that is immune to the corruption of local details.

Why should this be true? At first blush, if the critical brain hypothesis is true, then decisions are an emergent process that do not depend on neuronal details but rather large-scale patterns of behaviour. This is very strong evidence that tweaking an activation here or there cannot affect the global firing pattern. But it is not a proof; it would be reassuring to find an explicit example (for instance in the domain of [spin glasses](https://en.wikipedia.org/wiki/Spin_glass)) where the hypothesis can be rigorously proven, albeit about phase transitions for something which isn't a brain.

## Quantum mechanics

There is a more precise analogue of CFW in the realm of quantum mechanics. The [*No Fast Forwarding Theorem*](https://arxiv.org/pdf/1610.09619) of Atia and Aharanov

-->
