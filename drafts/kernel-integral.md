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
\int_{\Omega_1} f(x) T_2g(x) \,\text{d}x & = \int_{\Omega_1}
f(x)\left[\int_{\Omega_2} g(y) K(x, y) \, \text{d}y\right] \text{d}x \\
& = \int_{\Omega_2}
g(y)\left[\int_\Omega f(x) K(x, y) \, \text{d}x\right] \text{d}y \\
& = \int_{\Omega_2} T_1f(y) g(y)\, \text{d}y.
\end{align*}
$$

For a symmetric kernel $K(x, y) = K(y, x)$ and $\Omega_1 = \Omega_2
= \Omega$, we have $T_1 = T_2 = T$, and our result simplifies to

$$
\int_{\Omega} f(x) Tg(x) \text{d}x = \int_{\Omega} Tf(y) g(y) \text{d}y.
$$

From a pure math standpoint, these observations are in some sense trivial. We have an
inner product, and we've just observed that the integral transforms
$T_1$ and $T_2$ are dual,

$$
\langle f, T_2 g\rangle = \langle T_1 f, g\rangle,
$$

with respect to a suitably defined inner product $\langle \cdot, \cdot\rangle$.
But this turns out to be a useful trick for doing integrals!
Even if we can't evaluate them in closed form, we can sometimes arrive
at curious identities.
*Full disclosure.* I didn't come up with this trick. Rather, I
abstracted it from Ramanujan!

#### Examples

Let's take everyone's favourite example, the 1D Fourier transform:

$$
T_\text{F} f(\omega) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty
f(x)e^{-i\omega x} \, \text{d}x.
$$

Let's warm up with a simple one, using the pairs

$$
\begin{align*}
f(x) & = e^{-\alpha x^2}, \quad T_\text{F}f(\omega) =
\frac{1}{\sqrt{2\alpha}} e^{-\omega^2/4\alpha} \\
g(x) & = e^{-\beta |x|}, \quad T_\text{F}g(\omega) =
\sqrt{\frac{2}{\pi}} \cdot \frac{\beta}{\beta^2 + \omega^2}.
\end{align*}
$$

Then our kernel trick gives

$$
\begin{align*}
\int_{-\infty}^\infty \sqrt{\frac{2}{\pi}}\frac{\beta e^{-\alpha x^2}}{\beta^2 + x^2} \,
\text{d}x
& = \int_{-\infty}^\infty \overset{f}{e^{-\alpha x^2}} \overset{T_\text{F}g}{\sqrt{\frac{2}{\pi}}\cdot\frac{\beta}{\beta^2 +
x^2}} \, \text{d}x \\
& =\frac{1}{\sqrt{2\alpha}} \int_{-\infty}^\infty e^{-x^2/4\alpha - \beta|x|} \, \text{d}x.
\end{align*}
$$

This last expression is a Gaussian integral we can easily evalute, yielding

$$
\int_{-\infty}^\infty \sqrt{\frac{2}{\pi}}\frac{\beta e^{-\alpha
x^2}}{\beta^2 + x^2} = \frac{2}{\sqrt{2\alpha}} \int_{0}^\infty e^{-x^2/4\alpha - \beta|x|} \, \text{d}x
$$
