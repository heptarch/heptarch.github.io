---
Layout: post
mathjax: true
comments: true
title:  "A kernel trick for integrals"
categories: [Math, Hacks]
date:  2022-11-09
---

**November 9, 2022.** *A trick for doing integrals, .*

#### Outline

Consider an integral transform with kernel $K(x, y)$.
In general, this gives two distinct transforms,

$$
T_1f(y) = \int_{\Omega_1} f(x) K(x, y) \, \text{d}x, \quad T_2f(x) = \int_{\Omega_2} f(y) K(x, y) \, \text{d}y,
$$

where $T_i$ integrates over argument $i$, and $\Omega_i \subseteq \mathbb{R}^d$ denotes the
corresponding domain of integration.
If everything is smooth enough to swap integrals (i.e. Fubini's theorem), then

$$
\begin{align*}
\int_{\Omega_1} f(x) T_2g(x) \text{d}x & = \int_{\Omega_1}
f(x)\left[\int_{\Omega_2} g(y) K(x, y) \, \text{d}y\right] \text{d}x \\
& = \int_{\Omega_2}
g(y)\left[\int_\Omega f(x) K(x, y) \, \text{d}x\right] \text{d}y \\
& = \int_{\Omega_2} T_1f(y) g(y) \text{d}y.
\end{align*}
$$

For a symmetric kernel $K(x, y) = K(y, x)$ and $\Omega_1 = \Omega_2
= \Omega$, we have $T_1 = T_2 = T$, and our result simplifies to

$$
\int_{\Omega} f(x) Tg(x) \text{d}x = \int_{\Omega} Tf(y) g(y) \text{d}y.
$$

If the inverse transform $T^{-1}$ exists, then this can also be written

$$
\int_{\Omega} f(x) g(x) \text{d}x = \int_{\Omega} Tf(y) Tg(y) \text{d}y.
$$

#### Examples

This may seem trivial (we've "just" written the definition orthogonality in an obscure way)
or uselessly abstract, but this is sometimes useful for doing integrals.
Let's take everyone's favourite example, the 1D Fourier transform,:

$$
T_\text{F} f(\omega) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty
f(x)e^{}-i\omega x} \, \text{d}x.
$$

The basic point is that we can replace 
