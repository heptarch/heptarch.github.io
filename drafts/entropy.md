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
We are interested in the related quantity of the unpredictability of a *password*, when made of letters, or a *passphrase*, when made of words. This is called the surprisal, and it is defined by $S(w) = -\log_2 p(w)$ where $p$ is the probability of the word itself. 
The simplest guess at the unpredictability is then

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
But most sequences will *never* occur in any corpus, so this is a poor measure. Instead, we have to think about the component $N$-grams for $N \leq \vert w\vert$, since these can be stitched together to give

As an example, the sequence "quick brown fox" and "veni vidi vici" are common word trigrams, but "quick brown fox veni vidi vici" has probably never occurred before. Is this sequence impossible to crack? Not if the attacker is guessing common six word sequences, but if they randomly combine trigrams, they have a chance.

## A minimal proposal

What you want is a password which is hard however it gets chunked up. One big difference from Shannon's redundancy calculation is that we don't want to use $N$-gram entropy; an attacker doesn't usually know if the first $N$ characters or words are correct. It is frequency-based only. A simple guess is then

$$
S(w) = -\min_{w_1 \cdots w_I = w}\left[ -\sum_{i=1}^I\log_2 f(w_i) + S(I)\right],
$$

where we consider all partitions of $w$ into $I$ pieces $w_i$, and

$$
S(I) = \log_2 p_I, \quad p_I = 2^{1-|w|}\binom{|w| - 1}{I - 1}
$$

is the surprisal of the partition itself, with the binomial based on the number of ways of splitting up the string $w$ ($\vert w\vert - 1$ spaces to put $\vert I\vert - 1$ subword dividers) over the total number of ways, $2^{\vert w\vert - 1}$. We use the minimum over these because the attacker can choose the partition and get access to the corresponding chunking.

We call this the *minimum cost parse*, and compute it via dynamic programming. The basic insight is that as we process the string, we can iteratively check if there are better ways to process the first $j$ characters:
<pre><code>
def min_cost_parse(w):
    """Cheapest decomposition of w."""
    n = len(w)
    best = [0.0] + [math.inf] * n        # best[j] = min bits to parse w[:j]
    back = [0] * (n + 1)
    for j in range(1, n + 1):
        for i in range(j):               # last chunk = w[i:j]
            c = best[i] + surprisal(w[i:j])
            if c < best[j]:
                best[j], back[j] = c, i
    chunks, j = [], n                    # reconstruct the winning parse
    while j:
        chunks.append(w[back[j]:j]); j = back[j]
    return best[n], chunks[::-1]
</code></pre>

We haven't defined `surprisal` since we need access to frequencies first. We'll clean that up in the next section. 

## Loose threads

Two other questions. First, where do we get out frequencies? A nice place to look is the natural language toolkit [`nltk`](https://www.nltk.org/). We download and use the `brown` corpus:
<pre><code>
import math, nltk
nltk.download("brown", quiet=True)              # one-time corpus fetch
from nltk.corpus import brown
from nltk import FreqDist
</code></pre>

Now we can define the surprisal based on frequencies. If a chunk does not appear in the corpus, it is assignment a random baseline amount: 
<pre><code>
words = FreqDist(w.lower() for w in brown.words() if w.isalpha())
total = words.N()
random = math.log2(26)            # cost for anything unrecognised

def surprisal(chunk):
    """-log2 f(chunk) from Brown unigrams; unknown chunks penalized as random."""
    count = words[chunk.lower()]
    return -math.log2(count / total) if count else len(chunk) * random
</code></pre>
