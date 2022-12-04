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
nearest order of magnitude, and don't have a calculator. <label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">
	  It's also
easy to make the power so large that no calculator will give you an
answer!</span> How do we go
about it? We'll build up to an answer in stages.

## A new times table
---

The first step is to relate single-digit powers to powers of $10$. For
instance, as commonly known to coders, $2^{10} = 1024 \approx 10^3$,
so we can approximate binary powers easily enough. Here's a list of
tricks for $2$ to $7$, omitting powers of $2$ and $3$:

$$
\begin{align*}
2^{10} & = 1024 \approx 10^3 \\
3^2 & = 9 \approx 10 \\
5 & = \frac{10}{2} \\
6^9 & = 1.01 \times 10^7 \approx
10^7 \\
7^2 & = 49 \approx \frac{100}{2}.
\end{align*}
$$

We can use these to give quick and dirty estimates. For instance,

$$
\begin{align*}
67^{13} & = 6.7^{13} \times 10^{13} \\
& \approx 7\times 7^{12}\times 10^{13} \\
& \approx 7 \times 49^6 \times 10^{13} \\
& \approx \frac{7}{2^6} \times 100^6 \times 10^{13} \\
& \approx 10^{24}.
\end{align*}
$$

If you get a calculator out, you find the answer is in fact

$$
67^{13} = 5.5 \times 10^{23},
$$

so this is correct to the nearest order of magnitude. Great! But
clearly, by replacing $6.7$ by $7$ on the second line we are going to
overestimate. Can we do better?

## Binomial boost
---

The [binomial theorem](https://en.wikipedia.org/wiki/Binomial_theorem)
gives us a way to improve these estimates.
In general, we have

$$
(1+x)^n = 1 + nx + \binom{n}{2}x^2 + \cdots + x^n = \sum_{k=0}^n \binom{n}{k}x^k.
$$

We can use this 
