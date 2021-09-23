---
Layout: post
mathjax: true
comments: true
title:  "Automatic differentation on locally linear objects"
categories: [ML, mathematics, programming]
date:  2021-09-22
---

**September 23, 2021.** *I discuss automatic differentation on manifolds and other
  locally linear objects.*

### Contents

1. <a href="#sec-1">Introduction</a>
2. <a href="#sec-2">Derivatives as local linear approximations</a>
3. <a href="#sec-3">The type signature</a>
4. <a href="#sec-4">Locally linear objects</a>

## Introduction <a id="sec-1" name="sec-1"></a>

In his lovely paper ["The Simple Essence of Automatic Differentiation"](https://arxiv.org/abs/1804.00746), Conal Elliot
explains what differentiation is in the language of types. He then
augments this type to provide a more efficient means for performing
automatic differentiation (AD). [I'll explain what these terms mean in more detail
below.] This is important because automatic differentiation is an
essential part of computational tasks like deep learning.

As nice as this paper is, there is an ugly, ad hoc constraint
in the type signature, where certain maps are restricted to be
linear "by hand". This restriction should really be reflected in the type
signature itself, and indeed, this is essential if we want to do AD on
more interesting objects. The goal of this post is to update the type
signature and see how the essence of automatic differentiation changes.

## Derivatives as local linear approximations<a id="sec-2" name="sec-2"></a>

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
f'(x_0) = \lim_{h\to 0} \frac{f(x_0 +h) - f(x_0)}{h}. \tag{1}\label{diff1}
$$

This works for a function of a single real variable $x \in
\mathbb{R}$, but if we are trying to calculate the "slope" of a
function of two variables $\mathbf{x} \in \mathbb{R}^2$, this
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

We can characterize this plane, but before we do, it's useful to
reformulate our original definition of derivative (\ref{diff1}):

$$
f(x_0 + h) = f(x_0) + hf'(x_0) + o(h), \tag{2}\label{diff2}
$$

where $o(h)$ denotes a quantity such that $o(h)/h \to 0$ as $h \to
0$. You can check this reproduces (\ref{diff1}), since we
can rearrange to get

$$
f'(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} + \frac{o(h)}{h}.
$$

Taking the limit of $h\to 0$, the last term vanishes, and we get what
we had before. The advantage of our new definition is that we can
generalize it to get the plane and other more complicated objects.
For instance, let's consider our plane example. We have a function
$f(x, y)$, and we would like to evaluate the plane of slopes at $(x_0,
y_0)$. We also define a small step $(h_x, h_y)$ with length $h$. If
the slope in the $x$ direction is $f'_x$ and the slope in the $y$
direction is $f'_y$, we can define the derivative as

$$
f(x_0 + h_x, y_0 + h_y) = f(x_0, y_0) + (h_xf'_x + h_y f'y) + o(h),
\tag{3}\label{diff3}
$$

so that moving only in the $x$ direction picks out the $x$ slope, and
similarly for $y$.
So far so good, but we haven't described a plane, just two separate
derivatives. The trick is to repackage these separate derivatives as a
single object using matrices:

$$
h_xf'_x + h_y f'y = [f'_x, f'_y]
\begin{bmatrix}
h_x \\ h_y
\end{bmatrix}.
$$

The vector $L = [f'_x, f'_y]$ is a way of specifying the plane!
If we use vector notation $\mathbf{x} = (x, y)$ and $L$ for the vector
describing the plane, then (\ref{diff3}) becomes

$$
f(\mathbf{x}_0 + \mathbf{h}) = f(\mathbf{x}_0) + L\mathbf{h} +
o(h). \tag{4} \label{diff4}
$$

In fact, this definition generalizes without modification to any old function $f:
\mathbf{R}^n \to \mathbf{R}^m$, where our vectors $\mathbf{x}_0,
\mathbf{h} \in \mathbb{R}^n$ and $L$ is an $m \times n$ matrix. The
restriction that the error is $o(h)$ ensures that, when the derivative
exists, it is unique.
We can think of $L$ as a linear object generalizing the plane, which
describes the function $f(\mathbf{x})$ locally. Thus, a derivative is
a *local linear approximation*.

## The type signature<a id="sec-3" name="sec-3"></a>

If we want to take derivatives on a computer, say using a set of
symbolic rules, it helps to know what the inputs and outputs are.
We start with a function $f: \mathbb{R}^n \to \mathbb{R}^m$, pick a
point $\mathbf{x}_0 \in \mathbb{R}^n$ wjere we want to take the
derivative, and then produce an $m \times n$ matrix $L$. Symbolically,
we can write

$$
L = \mathcal{D}(f, \mathbf{x}_0)
$$

for a derivative operator $\mathcal{D}$. If we replace the specific
arguments by the overall type structure, we get a signature

$$
\mathcal{D} :: (\mathbb{R}^n \to \mathbb{R}^m) \to (\mathbb{R}^n \to (\mathbb{R}^n \to_{\text{L}} \mathbb{R}^m)),
$$

where $\to_{\text{L}}$ indicates a linear map from
$\mathbb{R}^n$ to $\mathbb{R}^m$, or equivalently, an $m \times n$
matrix. Replacing $\mathbb{R}^n$ and $\mathbb{R}^m$ with arbitrary
input types $a$ and $b$, we arrive at Elliott's proposed type
signature for differentiation:

$$
\mathcal{D} :: (a \to b) \to (a \to
(a \to_{\text{L}} b)). \tag{5} \label{diff5}
$$

Why replace $\mathbb{R}^n$ and $\mathbb{R}^m$ with these new
types $a$ and $b$? For Elliott, I think this is a Haskell
convention. But there is an even better reason: much more general
objects can appear here and be sensibly differentiated upon!

## Locally linear objects<a id="sec-4" name="sec-4"></a>

I will call these more general objects *locally linear*, though in
technical parlance they are *manifolds*. The basic structure is as
follows. If $a$ is locally linear, then at each point in $a$, there is
a nearby region which resembles part of $\mathbb{R}^n$, for some fixed
$n$ called the *dimension*. In particular, each nearby point gets
assigned to a vector $\mathbf{h} \in \mathbb{R}^n$. There are other
technical conditions I won't get into. The main point is that if I
have a function $f: a \to b$ for locally linear objects $a$ (dimension
$n$) and $b$ (dimension $m$) then our derivative operator still makes
sense, since it is defined as a locally linear approximation, and our
objects are locally linear! Moreover, the approximation will be an
$m\times n$ matrix $L$ as before.

Let's introduce a type-y way to talk about these local linear
approximations. Instead of using $\mathbf{R}^n$ and $\mathbf{R}^m$
explicitly, let's simply write $Ta$ and $Tb$, where $T$ stands for
"tangent".
