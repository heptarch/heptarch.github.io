---
Layout: post
mathjax: true
comments: true
title:  "Picking a good password"
categories: []
date:  2026-06-16
---

**June 16, 2026.** *Evaluating the predictability of passwords proves trickier than expected.*

## Introduction

I recently watched a cybersecurity training video where an ethical hacker had a mockup interface for determining how long it would take to crack a password. I thought this would be a fun thing to reproduce! The key point is that, realistically, we need a measure of how unpredictable a password (or passphrase) is, and this turns out to be a surprisingly subtle exercise.

## Redundancy

The study of redundancy in the English language goes back to the classic 1948 paper of Claude Shannon, ["Prediction and Entropy of Printed English"](https://www.princeton.edu/~wbialek/rome/refs/shannon_51.pdf).
Shannon was interested in the unpredictability or of an average English word, and proposed to approximate it using $N$-grams, or sequences of $N$ letters. The basic idea was that, if I hand you $N$ letters, the entropy or unpredictability of the next letter is the *$N$-gram entropy* $F_N$. In the infinite $N$ limit, we get the true entropy of English, $F_\infty$, which is the unpredictability of the next letter given an arbitrary amount of text. Shannon reports that

$$
H(\text{English}) = \lim_{N\to\infty} F_N \approx 2.62,
$$

ignoring spaces. This means it takes around

$$
2^{2.62} = 6
$$

guesses to correctly get the next letter of an English word on average. 
We are interested in the related quantity of the unpredictability of a *password*, when made of letters, or a *passphrase*, when made of words. If $H(w)$ is the entropy, it ties into the number of random guesses needed as $2^{H(w)}$, and hence the time needed to break it

$$
T(w) = \frac{2^{H(w)}}{v}
$$

where $v$ is the guesses per second that can be made with a computer. We'll assume for simplicity (though see discussion below) that the attacker knows the length of your password, say $n$ letters or words.
The simplest guess is that

$$
H(w) \approx \frac{1}{f(w)} \log \left(\frac{1}{f(w)}\right),
$$

where $f(w)$ is the normalized frequency of the sequence in $|w|$-letter (or word) sequences.

But most sequences will *never* occur in any corpus, so this is a terrible measure. Instead, we have to think about the component $N$-grams for $N \leq n$. As an example, the sequence "quick brown fox" and "veni vidi vici" are very common word trigrams, but "quick brown fox veni vidi vici" has probably never occurred before. Is this sequence impossible to crack? Probably not.
