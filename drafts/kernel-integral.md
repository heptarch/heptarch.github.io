---
Layout: post
mathjax: true
comments: true
title:  "A kernel trick for integrals"
categories: [Math, Hacks]
date:  2022-11-09
---

**November 9, 2022.** *A trick for doing integrals, .*

Consider an integral transform with kernel $K(x, y)$.
In general, this gives two distinct transforms,

$$
T_1f(y) = \int_{\Omega_1} f(x) K(x, y) \, \text{d}x, \quad T_2f(x) = \int_{\Omega_2} f(y) K(x, y) \, \text{d}y,
$$

where $T_i$ integrates over argument $i$, and $\Omega_i$ denotes the
corresponding domain of integration.
If everything is smooth enough to swap integrals (i.e. Fubini's theorem), then

$$
\begin{align*}
\int_\Omega f(t) \hat{g}(t) \text{d}t & = \int_\Omega
f(t)\left[\int_\Omega g(x) K(x, t) \, \text{d}x\right] \text{d}t \\
& = \int_\Omega
g(x)\left[\int_\Omega f(t) K(x, t) \, \text{d}t\right] \text{d}x
\end{align*}
$$
