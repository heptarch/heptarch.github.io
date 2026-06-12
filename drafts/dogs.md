---
Layout: post
mathjax: true
comments: true
title: "Tiny Dog: A Game of Extremes"
date:  2026-06-12

---

**June 10, 2026.** *The game of spotting maximally tiny dogs turns into a statistics tutorial.*

## Introduction

My wife and I play a game called *Tiny Dog*. When you spot a small dog, if you think it is the smallest you will see that day, you declare "tiny dog!", with precisely one guess per day. The winner is of course the person who spots the smallest dog.<label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">
As determined by subjective, variable-precision and often highly contested measurements.</span>
The strategy is subtle. If the other person ("first spotter") has made their guess and you haven't ("second spotter"), then you simply observe as many dogs as possible and hope for a smaller one. But if they haven't, going first is a bet involving the distribution of dog sizes and the amount of time left in the day. 
Together, suggest an instructive exercise in point processes and extreme values.

## Minimal values

Consider a set of real-valued observations $X_1, X_2, \ldots, X_n \in \mathbb{R}$ of iid random variables $X_i \sim \mathcal{D}$. The minimum value $m_n = \min_i X_i$ is the smallest observed value in the batch. Recall that the *cumulative distribution function (CDF)* of a random variable $X \sim \mathcal{D}$ is the probability $X \leq x$:

$$
F_{\mathcal{D}}(x) = \mathbb{P}_{X \sim \mathcal{D}}[X \leq x] = \int_{-\infty}^x f_{\mathcal{D}}(t) \, \mathrm{d}t,
$$

where $f_{\mathcal{D}}(t)$ is the *probability density function (pdf)* associated with $\mathcal{D}$. Note that

$$
\mathbb{P}_{X \sim \mathcal{D}}[X > x] = 1 - \mathbb{P}_{X \sim \mathcal{D}}[X \leq x] = 1 - F_{\mathcal{D}}(x).
$$

The probability $m_n \geq m$ is the probability that *each* $X_i > m$, and hence the cdf $M_{n,\mathcal{D}}$ of $m_n$ obeys

$$
M_{n,\mathcal{D}}(m) = \mathbb{P}_{X \sim \mathcal{D}}[m_n \leq m] = 1 - (1 - F_{\mathcal{D}}(x))^n.
$$

It's tempting to go to the asymptotic limit in $n$ here, which leads to [extreme value theory](https://en.wikipedia.org/wiki/Extreme_value_theory). But the number of dogs observed is small and variable in important ways, so we will keep $n$ finite. The first spotter effectively sees a dog of size $m$, estimates $M_{n,\mathcal{D}}(m)$, and if it suitably small calls it. Our next step is to work out when to call it.

## Poisson processes

For the process of observing dogs, we assume that every interval of a the same length is just as likely to yield an observation, with a mean of $\lambda$ dogs per unit time. This is called a *Poisson process*. Obviously, we are ignoring temporal factors (e.g. owners like to walk dogs at certain times of day) and geographic factors (e.g. dog parks are more likely to contain dogs), but this crude model will do! 






