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
*Full disclosure.* I didn't come up with this trick, but stole it
(with modifications) from Ramanujan!

#### The Voigt integral

Let's take everyone's favourite example, the 1D Fourier transform:

$$
T_\text{F} f(\omega) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty
f(x)e^{-i\omega x} \, \text{d}x.
$$

We can consult a table and pick out, for instance, the pairs

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
& =\frac{1}{\sqrt{2\alpha}} \int_{-\infty}^\infty e^{-x^2/4\alpha + \beta|x|} \, \text{d}x.
\end{align*}
$$

The RHS is straightforward to express in terms of the complementary error
function

$$
\text{erfc}(z) = \frac{2}{\sqrt{\pi}}\int_z^\infty e^{-x^2}\, \text{d}x.
$$

We complete the square, defining $2\sqrt{\alpha}u = x +
2\alpha\beta$ to find

$$
\begin{align*}
\int_{-\infty}^\infty e^{-x^2/4\alpha - \beta|x|} \, \text{d}x
& = 2\int_{0}^\infty e^{-x^2/4\alpha - \beta x} \, \text{d}x\\
& = 4\sqrt{\alpha} e^{\alpha\beta^2}\int_{2\alpha\beta}^\infty
e^{-u^2} \, \text{d}u\\
& = 2\sqrt{\pi\alpha} e^{\alpha\beta^2}\text{erfc}(\sqrt{\alpha}\beta).
\end{align*}
$$

We conclude that 

$$
\int_{-\infty}^\infty \frac{ e^{-\alpha
x^2}}{\beta^2 + x^2} = \frac{\pi\sqrt{2\alpha}}{\beta} e^{\alpha\beta^2}\text{erfc}(\sqrt{\alpha}\beta).
$$

I call this the
["Voigt integral"](https://en.wikipedia.org/wiki/Voigt_profile) after
the related convolution in spectroscopy.
