---
Layout: post
mathjax: true
comments: true
title:  "A kernel trick for doing integrals"
categories: [Math, Hacks]
date:  2022-11-09
---

**November 9, 2022.** *A cheap trick for evaluatiing integrals.*

Suppose we have an integral transform with kernel $K$, so

$$
\hat{f}(t) = \int_\Omega f(x) K(x, t) \, \text{d}x.
$$

If the kernel is symmetric, $K(x, t) =K(t, x)$, and assuming
everything is smooth enough to swap integrals (i.e. Fubini's theorem) then

$$
\begin{align*}
\int_\Omega f(t) \hat{g}(t) \text{d}t & = \int_\Omega
f(t)\left[\int_\Omega f(x) K(x, t) \, \text{d}x\right] \text{d}t \\
& 
\end{align*}
$$
