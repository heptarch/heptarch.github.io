---
Layout: post
mathjax: true
comments: true
title:  "Quines, antiquines, and safe recursion"
categories: []
date:  2026-06-15
---

**June 15, 2026.** *To write.*

## Introduction

A cool fact is that certain programs are self-replicating: run them, and they output themselves. Such programs are called *quines*, after the philosopher and logician Willard Van Orman Quine.
They are [often quite elaborate](https://esolangs.org/wiki/List_of_quines). Consider for instance this very clever example in `Python 3` (to be saved as `exceptionQuine.py`):

<pre><code>    File "exceptionQuine.py", line 1
        File "exceptionQuine.py", line 1
        ^
IndentationError: unexpected indent</code></pre>

Running the program, it trips up on the first line and produces the second two lines as error output. It's a pun, hinging on the syntax of error printouts. Purists might consider this cheating, but quines are not so easily eliminated; they are puns that run surprisingly deep.

## Diagon Alley

As it turns out, quines exist in any [Turing-complete](https://en.wikipedia.org/wiki/Turing_completeness) language for profound mathematical reasons. 
Consider a language $\mathcal{L}$ with some syntax rules for building valid programs.
Each program $x \in \mathcal{L}$ is associated with a unique [Gödel numbering](https://en.wikipedia.org/wiki/G%C3%B6del_numbering), $\ulcorner x \urcorner \in \mathbb{N}$, via a cute procedure involving primes.
Define the $\text{eval}: \mathbb{N} \to \mathcal{L}$ function as executing the program associated with Gödel number $n$ and outputting some result in $\mathcal{L}$. Then a quine $q$ is a "fixed point" of the following form:

$$
q = \text{eval}(\ulcorner q \urcorner).
$$

The existence of such a fixed point follows from Kurt Gödel's famous [diagonal lemma](https://en.wikipedia.org/wiki/Diagonal_lemma). Although this is the right intuition, technically, the diagonal lemma is for predicates which are true or false, and it's more correct to translate into the language of computable functions using [Kleene's second recursion theorem](https://en.wikipedia.org/wiki/Kleene%27s_recursion_theorem#Kleene's_second_recursion_theorem). Instead of a predicate, we have that for any partial recursive $Q: \mathbb{N}\times\mathbb{N}\to \mathbb{N}$, there is partial recursive function $p$ such that

$$
p = \lambda y. Q(\ulcorner p \urcorner, y) 
$$

where the RHS is fancy notation for the function left over when we saturate the first argument. A quine is just the case where $Q(x, y) = x$, i.e. we project onto the first argument and ignore $y$ altogether.

## Antiquines

The existence of quines is therefore tied up with fixed points and self-reference. They are harmless (not to mention entertaining), but allied with a more sinister phenomenon I call the *antiquine*. Instead of $\text{eval}$, let us restrict to programs which output boolean values `True` or `False` and define a boolean evaluation function $\text{beval}$.
