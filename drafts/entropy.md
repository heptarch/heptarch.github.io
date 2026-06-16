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

## Redundancy and surprisal

The study of redundancy in the English language goes back to the classic 1948 paper of Claude Shannon, ["Prediction and Entropy of Printed English"](https://www.princeton.edu/~wbialek/rome/refs/shannon_51.pdf).
Shannon was interested in the unpredictability of an average English word, and proposed to approximate it using $N$-grams, or sequences of $N$ letters. The basic idea was that, if I hand you $N$ letters, the entropy or unpredictability of the next letter is the *$N$-gram entropy* $F_N$. In the infinite $N$ limit, we get the true entropy of English, $F_\infty$, which is the unpredictability of the next letter given an arbitrary amount of text. Shannon reports that

$$
H(\text{English}) = \lim_{N\to\infty} F_N \approx 0.6-1.3,
$$

ignoring spaces, so around $1$ bit per letter. 
We are interested in the related quantity of the unpredictability of a *password*, when made of letters, or a *passphrase*, when made of words. This is called the surprisal, and it is defined by $S(w) = -\log_2 p(w)$ where $p$ is the probability of the word itself. The number of guesses needed to break it is

$$
T(w) = \frac{2^{S(w)}}{v} = \frac{1}{vp(w)}
$$

where $v$ is the rate at which guesses can be made with a computer. We'll assume for simplicity (though see discussion below) that the attacker knows the length of your password, $\vert w\vert$ letters or words.
The simplest guess at the unpredictability is

$$
S(w) \approx -\log_2 f(w),
$$

where $f(w)$ is the normalized frequency of the sequence.<label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">
In other words, if there are $m$ recorded instances of $\vert w\vert$-letter sequences, and $m(w)$ instances of $w$, $f(w) = m(w)/m$.</span>
But most sequences will *never* occur in any corpus, so this is a poor measure. Instead, we have to think about the component $N$-grams for $N \leq \vert w\vert$.

As an example, the sequence "quick brown fox" and "veni vidi vici" are common word trigrams, but "quick brown fox veni vidi vici" has probably never occurred before. Is this sequence impossible to crack? Not if the attacker is guessing common six word sequences, but if they randomly combine trigrams, they have a chance.

## A proposal

What you want is a password which is hard however it gets chunked up. One big difference from Shannon's redundancy calculation is that we don't want to use $N$-gram entropy; an attacker doesn't usually know if the first $N$ characters or words are correct. It is frequency-based only. A simple guess is then

$$
S(w) = -\min_{w_1 \cdots w_I = w}\left[ -\sum_{i=1}^I\log_2 f(w_i) + S(I)\right],
$$

where we consider all partitions of $w$ into $I$ pieces $w_i$, and

$$
S(I) = \log_2\binom{|w| - 1}{I - 1}
$$

is the surprisal of the partition itself, since . We define the minimum over these because the attacker can choose the partition and get access to the corresponding entropy. The cost is the entropy of the partition,
