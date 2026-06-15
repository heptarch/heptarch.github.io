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
They are [often quite elaborate](https://esolangs.org/wiki/List_of_quines). consider for instance this very clever example in `Python 3` (to be saved as `exceptionQuine.py`):

<pre><code>    File "exceptionQuine.py", line 1
        File "exceptionQuine.py", line 1
        ^
IndentationError: unexpected indent</code></pre>

Running the program, it trips up on the first line and produces the second two lines as error output. It's a high-class pun. Quines are puns that go surprisingly deep.

## Diagon Alley

Given the effort involved in writing quines, you might wonder if they are guaranteed to exist in an arbitrary programming language.
Perhaps some are quine-free!
But in fact, for any [Turing-complete](https://en.wikipedia.org/wiki/Turing_completeness) language, they are unavoidable. 
For a well-formed program $x$ in some language $\mathcal{L}$, let $\ulcorner x \urcorner$ denote the string associated with the program specification, and $\text{eval}(\ulcorner x\urcorner)$ the result of evaluating that string. Then a quine $q$ is a "fixed point" of the following form:

$$
q = \text{eval}(\ulcorner q \urcorner).
$$

In 1931, Kurt Gödel turned self-reference into a powerful mathematical tool with his famous [diagonal lemma](https://en.wikipedia.org/wiki/Diagonal_lemma), stating that for any predicate $\varphi$ with a free argument $x$, and a quotation mechanism $\ulcorner \cdot \urcorner$ like [Gödel numbering](https://en.wikipedia.org/wiki/G%C3%B6del_numbering). 
