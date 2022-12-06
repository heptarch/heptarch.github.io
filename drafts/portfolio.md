---
Layout: post
mathjax: true
comments: true
title:  "Portfolio optimization and stochastic replicators"
categories: [Math, Probability, Finance]
date:  2022-12-05
---

**December 5, 2022.** *A*

---

Suppose I have $n$ bets I can make, with return per dollar
represented by random variable $B_k$. If I invest $\omega_k$ in bet
$k$, with fixed total $\Omega$, then I can view the value of my
portfolio as a random variable
$P$

$$
P = \sum_{k = 1}^n \omega_k \mathbb{E}[B_k] = \sum_{k =
1}^{n-1} \omega_k B_k + \left(\Omega - \sum_{k=1}^{n-1}\omega_k\right) B_n.
$$

How much should I invest in each bet?
My intuition is that

$$
\mathbb{E}[P] = \sum_{k = 1}^n \omega_k \mathbb{E}[B_k] = \sum_{k =
1}^{n-1} \omega_k \mathbb{E}[B_k] + \left(\Omega - \sum_{k=1}^{n-1}\omega_k\right) \mathbb{E}[B_n].
$$

This is a linear equation in the $\omega_k$, $k=1, \ldots, n-1$, so
the maxim
