---
Layout: post
mathjax: true
comments: true
title:  "Proximate powers"
categories: [Math, Hacks]
date:  2022-12-03
---

**December 3, 2022.** *A guide to order-of-magnitude estimates of
  perfect powers.*

Say I want to estimate a perfect power like $67^{13}$, but only to the
nearest order of magnitude, and don't have a calculator. It's also
easy to make the power so large that no calculator will give you an
answer! We'll build up to an answer in stages.

## A new times table
---

The first step is to relate single-digit powers to powers of $10$. For
instance, as commonly known to coders, $2^{10} = 1024 \approx 10^3$,
so we can approximate binary powers easily enough. Here's a list of
tricks for $2$ to $7$, omitting powers of $2$ and $3$:

$$
\begin{align}
2^{10} & = 1024 \approx 10^3 \\
3^2 & = 9 \approx 10 \\
5 & = \frac{10}{2} \quad \text{or} \quad 5^{10} = 9.77 \times 10^6 \approx 10^7\\
6^9 = 1.01 \times 10^7 \approx
10^7 \\
7^2 & = 49 \approx \frac{100}{2}.
\end{align}
$$

We can use these to give quick and dirty estimates. For instance,

$$
\begin{align}
67^{13}
\end{align}
$$

## Binomial boost
