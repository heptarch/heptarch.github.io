---
Layout: post
mathjax: true
comments: true
title:  "Quines, antiquines, and safe recursion"
categories: []
date:  2026-06-15
---

**June 15, 2026.** *A panoply of self-reference: benign, malign, and .*

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
Each program $x \in \mathcal{L}$ is associated with a unique [Gödel number](https://en.wikipedia.org/wiki/G%C3%B6del_numbering), $\ulcorner x \urcorner \in \mathbb{N}$, via a cute procedure involving primes.
Define the $\text{eval}: \mathbb{N} \to \mathcal{L}$ function as executing the program associated with Gödel number $n$ and outputting some result in $\mathcal{L}$. Then a quine $q$ is a "fixed point"

$$
q = \text{eval}(\ulcorner q \urcorner).
$$

The existence of such a fixed point follows from Kurt Gödel's famous [diagonal lemma](https://en.wikipedia.org/wiki/Diagonal_lemma). Although this is the right intuition, technically, the diagonal lemma is for predicates which are true or false, and it's more correct to translate into the language of computable functions using [Kleene's second recursion theorem](https://en.wikipedia.org/wiki/Kleene%27s_recursion_theorem#Kleene's_second_recursion_theorem). Instead of a predicate, we have that for any partial recursive $Q: \mathbb{N}\times\mathbb{N}\to \mathbb{N}$, there is partial recursive function $p$ such that

$$
p = \lambda y. Q(\ulcorner p \urcorner, y) 
$$

where the RHS is fancy notation for the function left over when we saturate the first argument. A quine is just the case where $Q(x, y) = x$, i.e. we project onto the first argument and ignore $y$ altogether, giving a partial recursive function $q$ such that

$$
q(y) = \ulcorner q \urcorner.
$$

In words, it always outputs its own index.

## Antiquines

The existence of quines is tied up with fixed points and self-reference. In this case, the self-reference is harmless (not to mention entertaining) but it is closely allied with a more sinister form of self-reference I call the *antiquine*. Instead of returning the object itself, either by evaluation or projection, it somehow *changes* the returned object, yielding a type of "anti"-self-reference. To illustrate concretely, instead of $\text{eval}$, we can look $\text{prov}(n)$, a predicate which states that a formula with a given Gödel number $n$ is *provable* in some formal system (such as [Peano arithmetic](https://en.wikipedia.org/wiki/Peano_axioms) $\mathsf{PA}$).
The equivalent of a quine is

$$
q \leftrightarrow \text{prov}(\ulcorner q \urcorner),
$$

which asserts its own provability. We'll return to these below. The antiquine is

$$
a \leftrightarrow \neg\text{prov}(\ulcorner a \urcorner),
$$

which asserts its *unprovability*. If $a$ is false, then the system can prove $a$, i.e. it is unsound. If $a$ is true, then there is a statement which is true but not provable, i.e. the system is incomplete. Gödel proved the diagonal lemma in order to reach this famous conclusion!

*Exercises.* Solve the following using antiquines. (a) Show that the halting predicate $\text{halt}$ is incomplete, i.e. we cannot determine if an arbitrary program halts. (b) Extend this to show that any non-trivial (i.e. non-constant) semantic property is undecidable. (c) Instead of provability, apply the argument to the predicate $\text{true}(n)$ which evaluates the truth of the formula with a given Gödel number $n$.

## Löb's surprise

A *logical quine* is equivalent to its own provability: 

$$
q \leftrightarrow \text{prov}(\ulcorner q \urcorner).
$$

If $q$ is true, it is provable, so it does not witness incompleteness; if it is provable, it is true, so it does not witness unsoundness. They haven't seen anything, honest! Such a formula seems useless, and in particular, it could be true or false. Remarkably, this is not the case: Martin Löb [proved in 1955](https://en.wikipedia.org/wiki/L%C3%B6b%27s_theorem) that the fixed point $q$ is always *true*. More generally, if you can prove that

$$
\text{prov}(\ulcorner q \urcorner) \to q
$$

then you can prove $q$ itself. The argument goes roughly as follows:
- Use the diagonal lemma to construct a sentence $L$ that says "If $L$ is provable, then $q$ follows".
- If our formal system is sound and $L$ is provable, it is true.
- In that case, since $L$ is provable, then $q$ follows.
- But this demonstrates, by assumption, if $L$ is provable $q$ follows!
- Thus $L$ is proven, and $q$ follows. We have proven $q$!

Going back to programs instead of proofs, what does this tell us? Löb becomes

$$
\text{eval}(\ulcorner q \urcorner) = q \text{ implies } \text{eval}(\ulcorner q \urcorner),
$$

or in words, a quine is a program that halts and outputs something. This is rather mundane in comparison to the logical quine!

## Safe recursion
