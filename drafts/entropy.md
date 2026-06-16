---
Layout: post
mathjax: true
comments: true
title:  "Picking a good password"
categories: []
date:  2026-06-16
---

**June 16, 2026.** *A program for evaluating the difficulty of passwords proves more interesting than expected.*

## Introduction

I recently watched a cybersecurity training video where an ethical hacker had a mockup interface for determining how long it would take to crack a password. I thought this would be a fun thing to reproduce! The key point is that, realistically, we need a measure of how unpredictable a password (or passphrase) is, and this turns out to be a surprisingly subtle exercise.

## Redundancy

The study of redundancy in the English language goes back to the classic 1948 paper of Claude Shannon, ["Prediction and Entropy of Printed English"](https://www.princeton.edu/~wbialek/rome/refs/shannon_51.pdf).
The unpredictability or *entropy* of an average English word can be approximated as the unpredictability of the $N$th letter given $N - 1$ preceding letters, and in the limit $N \to \infty$ gives the 
