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

<code>    File "exceptionQuine.py", line 1
        File "exceptionQuine.py", line 1
        ^
IndentationError: unexpected indent</code>

Running the program, it trips up on the first line and produces the second two lines as error output. It's a high-class pun.

## Diagon Alley

Given the effort involved in writing quines, you might wonder if they are guaranteed to exist in an arbitrary programming language.
Perhaps some are quine-free!
But in fact, for a language which is [Turing complete](https://en.wikipedia.org/wiki/Turing_completeness), they are unavoidable. The reason goes back Gödel's famous [diagonal lemma](https://en.wikipedia.org/wiki/Diagonal_lemma) in another guise. The 
