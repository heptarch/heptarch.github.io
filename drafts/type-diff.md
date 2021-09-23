---
Layout: post
mathjax: true
comments: true
title:  "Types of derivative"
categories: [ML, mathematics]
date:  2021-09-22
---

**September 23, 2021.** *I discuss the type signature of
  differentiation and how this generalizes Conal Elliot's nice
  approach to automatic differentation.*

### Contents

1. <a href="#sec-1">Introduction</a>
2. <a href="#sec-2">What is differentiation?</a>

## Introduction <a id="sec-1" name="sec-1"></a>

In his lovely paper ["The Simple Essence of Automatic Differentiation"](https://arxiv.org/abs/1804.00746), Conal Elliot
explains what differentiation is in the language of types. He then
augments this type to provide a more efficient means for performing
automatic differentiation (AD). [I'll explain what these terms mean in more detail
below.] This is important because automatic differentiation is an
important component of hard computational tasks like deep learning.

As nice as this paper is, there is an ugly, ad hoc constraint
in the type signature, where certain maps are restricted to be
linear "by hand". This restriction should really be reflected in the type
signature itself, and indeed, this is essential if we want to do AD on
more interesting objects. The goal of this post is to update the type
signature and see how the essence of automatic differentiation changes.

## What is differentiation <a id="sec-2" name="sec-2"></a>

What is differentiation, really? We learn in our first calculus class
that it is the slope of the tangent line at a point:

<figure>
<div style="text-align:center">
<img src="/img/type-diff-1.png" width="500 px"/>
<figcaption>
<i>Derivative as the slope of a tangent line.</i>
</figcaption>
</div>
</figure>

We also get a recipe for calculating this slope:

$$
f'(x_0) = \lim_{h\to 0} \frac{f(x_0 +h) - f(x_0)}{h}.
$$

This works for a function of a single real variable $x \in
\mathbb{R}$, but if we are trying to calculate the "slope" of a
function of many variables $\mathbf{x} \in \mathbb{R}^n$, this
definition won't make much sense! We could choose a specific direction
to move along (a "slice" if you like), but why should we choose some
specific direction and not another?

<figure>
<div style="text-align:center">
<img src="/img/type-diff-2.png" width="500 px"/>
<figcaption>
<i>Which slope do we choose?</i>
</figcaption>
</div>
</figure>

It would be nice if there was an object which somehow contained all
the slopes at once. It turns out that there is a natural such object:
a *plane*.

<figure>
<div style="text-align:center">
<img src="/img/type-diff-3.png" width="500 px"/>
<figcaption>
<i>All the slopes at once!</i>
</figcaption>
</div>
</figure>
