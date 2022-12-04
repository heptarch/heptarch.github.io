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

So, for instance,

$$
\begin{align*}
67^{13} &= 70^{13}\left(1 - \frac{0.3}{7})^{13} \\
& =
70^{13}\left[1 - \frac{13\times 0.3}{7} + \frac{13\times 12 \times (0.3)^2}{2\times 7^2} - \frac{13 \times 12 \times 11 \times (0.3)^3}{6\times 7^3} + \cdots\right]\\
& \approx 70^{13}\left[1 - 0.55 + 0.14 - 0.02 \right]\\
& \approx 0.57 \times 10^{24} \\
&  = 5.7 \times 10^{23},
\end{align*}

using the estimate from the previous section.
This is much better!
We've ignored the factor of $70/2^6$, which means we've
underestimated, but we've also replaced $7^{12}$ with $(100/2)^6$,
which is an overestimate, and the two almost cancel. As an exercise,
you can use the binomial approximation to check this.

## Where to stop?
---

In doing a binomial expansion, where should you stop? Depends on how
much precision you want. Here, I went to third order since it gate
terms of size $\sim 0.01$, which is the precision I wanted to try and
match the correct answer above. How did I know? Well, I know terms in
the expansion have the form

$$
\binom{n}{k}x^k = \binom{n}{k-1} x^{k-1} \times \frac{x (n-k+1)}{k},
$$

so for $n = 13$ and $x = -0.3/7$, progressive terms shrink by
$\sim 0.04$ give or take. So I can probably stop after a term of the
size I want, in this case, the third term, which was order $\sim 0.01$.
