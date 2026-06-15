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

Running the program, it trips up on the first line and produces the second two lines as error output. It's a high-class pun. Quines are puns that go surprisingly deep.

## Diagon Alley

Given the effort involved in writing quines, you might wonder if they are guaranteed to exist in an arbitrary programming language.
Perhaps some are quine-free!
But in fact, for any [Turing-complete](https://en.wikipedia.org/wiki/Turing_completeness) language they are unavoidable. 
Consider a language $\mathcal{L}$ with some syntax rules for building valid programs.
Each program $x \in \mathcal{L}$ is associated with a unique [Gödel numbering](https://en.wikipedia.org/wiki/G%C3%B6del_numbering), $\ulcorner x \urcorner \in \mathbb{N}$, via a cute procedure involving primes.
Define the $\text{eval}: \mathbb{N} \to \mathcal{L}$ function as executing the program associated with Gödel number $n$ and outputting some result in $\mathcal{L}$. Then a quine $q$ is a "fixed point" of the following form:

$$
q = \text{eval}(\ulcorner q \urcorner).
$$

The existence of such a fixed point follows from Kurt Gödel's famous [diagonal lemma](https://en.wikipedia.org/wiki/Diagonal_lemma). To be clear, the diagonal lemma is for predictates which are true or false, but it's easy to translate into the language of computable functions; this is called [Kleene's second recursion theorem](https://en.wikipedia.org/wiki/Kleene%27s_recursion_theorem#Kleene's_second_recursion_theorem).
