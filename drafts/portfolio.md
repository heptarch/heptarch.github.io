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
P(\omega_k) = \sum_{k = 1}^n \omega_k \mathbb{E}[B_k] = \sum_{k =
1}^{n-1} \omega_k B_k + \left(\Omega - \sum_{k=1}^{n-1}\omega_k\right) B_n.
$$

My intuition is that to optimize my portfolio, my investment should
include a spread of high-risk, high-return and low-risk, low-return bets.
But if I try to optimize the expected return, I get a boring linear function

$$
\mathbb{E}[P] = \sum_{k =
1}^{n-1} \omega_k \mu_k + \left(\Omega - \sum_{k=1}^{n-1}\omega_k\right) \mu_n.
$$

This is maximized by betting everything on whatever $k$ has the
largest expected return:

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
