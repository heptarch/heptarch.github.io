---
Layout: post
mathjax: true
comments: true
title:  "Portfolio optimization and stochastic replicators"
categories: [Math, Probability, Finance]
date:  2022-12-05
---

**December 5, 2022.** *A*

## Introduction
---

Suppose there are $n$ bets I can make, with the return per dollar for
bet $k$, represented by a random variable $B_k$
with expected value $\mu_k = \mathbb{E}[B_k]$.
If I invest $\omega_k$ on bet
$k$, and have a fixed total $\Omega$, then I can view the value of my
portfolio as a random variable

$$
P(\omega_k) = \sum_{k = 1}^n \omega_k B_k.
$$

My intuition is that to optimize my portfolio, my investment should
include a spread of high-risk, high-return and low-risk, low-return bets.
But if I try to optimize the expected return $\mu_P = \mathbb{E}[P]$, I get a boring linear function

$$
\mu_P = \sum_{k =
1}^{n} \omega_k \mu_k,
$$

which is maximized by betting everything on whatever $k$ has the
largest expected return:<label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">We look for intersections of hyperplanes
	   of the form $z = \sum_k \omega_k \mu_k$ with the hyperplane
	   $\Omega = \sum_k\omega_k$, with additional constraints $0 \leq
	   \omega_k$. This gives a family of lines labelled by $z$, for
	   each of which we simply travel to the tip of the feasible region.</span>

$$
P^* = \Omega B_{k^*}, \quad k^* = \text{argmax}_k\,\mu_k.
$$

This doesn't seem quite right, so what have we missed?

<div style="background-color: #cfc ; padding: 10px; border: 1px
solid green; line-height:1.5">
<b>Portfolio optimization.</b> <br>

How do we measure the value of a portfolio of bets so the optimum is a spread?
</div>

## Adding risk
---

Maximising expected return is good, but it ignores the *risk*, or
uncertainty of our bets, altogether.
The simplest way to measure this is the total variance,

$$
\sigma^2_P = \mathbb{E}[(P - \mu_P)^2].
$$

If the bets are independent random variables, then the variance is
additive, with

$$
\sigma^2[P] = \sum_{k =
1}^{n-1} \omega_k \sigma^2_k + \left(\Omega - \sum_{k=1}^{n-1}\omega_k\right) \sigma^2_n,
$$

where $\sigma^2_k$ is the variance of $B_k$.
If they are not independent, then we simply add some covariance terms:

$$
\sigma^2[P] = 
$$
