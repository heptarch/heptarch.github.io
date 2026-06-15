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
An example in $\texttt{Python 3}$:

$$
_='_=%r;print(_%%_)';print(_%_)
$$

Formally, we represent
