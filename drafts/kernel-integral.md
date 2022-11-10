---
Layout: post
mathjax: true
comments: true
title:  "A kernel trick for integrals"
categories: [Math, Hacks]
date:  2022-11-09
---

**November 9, 2022.** *I present a simple trick for doing integrals by swapping
  kernels. I'll apply this to a funky Gaussian integral and a class of
  expressions studied by Mordell and Ramanujan.*

### Outline
---

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

From a pure math standpoint, these observations are in some sense
trivial. We've just observed that the integral transforms
$T_1$ and $T_2$ are dual,

$$
\langle f, T_2 g\rangle = \langle T_1 f, g\rangle,
$$

with respect to a suitably defined inner product $\langle \cdot, \cdot\rangle$.
But this turns out to be a useful trick for doing integrals!
*Full disclosure.* I didn't come up with this hack, but stole it
(with modifications) from Ramanujan.
Also, I'm happily ignoring many mathematical subtleties!

### The Voigt integral
---

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

We can finally conclude that 

$$
\int_{-\infty}^\infty \frac{ e^{-\alpha
x^2}}{\beta^2 + x^2} \, \text{d}x = \frac{\pi\sqrt{2\alpha}}{\beta} e^{\alpha\beta^2}\text{erfc}(\sqrt{\alpha}\beta).
$$

I call this the
"Voigt integral"after
the
[related convolution in spectroscopy](https://en.wikipedia.org/wiki/Voigt_profile).

<div style="background-color: #cfc ; padding: 10px; border: 1px solid green;">
**Exercise 1.** The *Mellin transform* 

$$
\mathcal{M}f(s) = \int_0^\infty x^{s-1} f(x) \, \text{d}s.
$$

is defined by an asymmetric
kernel $K(x, s) = x^{s-1}$.
In particular $ \mathcal{M} = T_1$ and $T_2
\neq T_1$.
If we want to apply our
</div>

### Mordell integrals
---

Here's a fancier example, again using the Fourier transform.
Consider the [*Mordell integral*](https://webpages.charlotte.edu/aroy15/image/drz5-err.pdf)

$$
h(z; \tau) = \int_{-\infty}^\infty \frac{e^{\pi i \tau x^2 - 2\pi
zx}}{\cosh(\pi x)} \, \text{d}x,
$$

with $\Im(\tau) > 0$ to ensure convergence.
For our purposes, we note tat this is a product of functions which are *self-dual* under
the Fourier transform, up to a change in their parameters:

$$
\begin{align*}
f(x) & = e^{i\alpha x^2 - \beta x}, \quad T_\text{F}f(\omega) =
\frac{1}{\sqrt{-2i\alpha}} e^{i(\beta-i\omega)^2/4\alpha} \\
g(x) & = \frac{1}{\cosh(\gamma x)}, \quad T_\text{F}g(\omega) =
\sqrt{\frac{\pi}{2}} \frac{1}{\gamma\cosh(\pi\omega/2\gamma)}.
\end{align*}
$$

The kernel trick (and the change of variable $x = 2\pi u$) now gives

$$
\begin{align*}
h(z; \tau) & = \frac{\sqrt{\pi}}{\sqrt{-i\alpha}}\int_{-\infty}^\infty
\frac{e^{i(2\pi z-ix)^2/4\pi\tau}}{\cosh(x/2)} \, \text{d}x \\
& = \frac{\sqrt{\pi}e^{i\pi z^2/\tau}}{\sqrt{-i\alpha}}\int_{-\infty}^\infty
\frac{e^{-ix^2/4\pi\tau+z/\tau}}{\cosh(x/2)} \, \text{d}x \\
& = \frac{2\pi^{3/2}e^{i\pi z^2/\tau}}{\sqrt{-i\alpha}}\int_{-\infty}^\infty
\frac{e^{-i\pi x^2/\tau+z/\tau}}{\cosh(x/2)} \, \text{d}u \\
& = \frac{2\pi^{3/2}e^{i\pi z^2/\tau}}{\sqrt{-i\alpha}} h\left(\frac{z}{2\pi\tau};
-\frac{1}{\tau}\right). \tag{1}
\end{align*}
$$

This is not a trivial result!

<div style="background-color: #cfc ; padding: 10px; border: 1px solid green;">
**Exercise 2.** Ramanujan defined the related integral

$$
F_\omega(z) = \int_{-\infty}^\infty \frac{e^{-\pi\omega x^2 + 2\pi
x}\sin(\pi x z)}{e^{2\pi x}-1} \, \text{d} x.
$$

We'll end with a few exercises on this theme.

(a) Define $\varphi$ by

$$
h(z; \tau) = -\frac{2i}{\tau}e^{-(\pi i\tau/4 + \pi i
z)}\varphi\left(z + \frac{\tau-1}{2}, \tau\right).
$$

Prove that $F_\omega(z)$ and $h(z; \tau)$ are
related by

$$
F_{-i\tau}(2iz) =
\frac{1}{2i\tau}\left[\varphi(z, t) - \varphi(-z, \tau)\right]. \tag{2}
$$

(b) Using equation $(1)$ and $(2)$ or otherwise, show that

$$
F_\omega(z) = -\frac{i}{\sqrt{\omega}} e^{-\pi z^2/4\omega} F_{1/\omega}\left(\frac{iz}{\omega}\right).
$$

(c) Set $\omega = \alpha^2$ and replace $z$ with $\alpha
z/\sqrt{\pi}$.
Deduce from part (b) that, for $\alpha\beta = 1$ and $\alpha, \beta > 0$,

$$
\sqrt{\alpha}e^{z^2/8}\int_{-\infty}^\infty
\frac{e^{-\pi^2\alpha^2x^2}\sin(\sqrt{\pi}\alpha x z)}{e^{2\pi x}-1} \text{d}x = \sqrt{\beta}e^{-z^2/8}\int_{-\infty}^\infty
\frac{e^{-\pi^2\beta^2x^2}\sinh(\sqrt{\pi}\beta x z)}{e^{2\pi x}-1} \text{d}x.
$$
</div>
