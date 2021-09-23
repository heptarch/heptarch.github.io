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

## 1. Introduction <a id="sec-1" name="sec-1"></a>

In his lovely paper ["The Simple Essence of Automatic Differentiation"](https://arxiv.org/abs/1804.00746), Conal Elliot
explains what differentiation is in the language of types, and
augments this type to provide a more efficient means for performing
automatic differentiation. (I'll explain what these are in more detail
below.) As nice as this paper is, there is an ugly, ad hoc constraint
in the type signature, where certain maps are "restricted" to be
linear. This restriction should really be reflected in the type
signature itself, and indeed, for automatic differentiation on more
interesting spaces this is essential. The goal of this post is to
update the type signature and see if the essence of automatic
differentiation changes.

To begin with, what
