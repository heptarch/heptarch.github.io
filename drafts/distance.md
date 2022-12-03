---
Layout: post
mathjax: true
comments: true
title:  "A rule of thumb for distance measurement"
categories: [Math, Hacks]
date:  2022-12-02
---

**December 2, 2022.** *Humans are the measure of all things, though
  not in the sense Protagoras meant. I show how to estimate distance
  using only your hands and feet.*

## Theory
---

The ancient Greek philosopher Protagoras famously stated that "man is the
measure of all things". He was also skeptical about whether math could
be applied to the real world, so it's unlikely he meant you could use
the human body to measure things. But you can! Famously, Galileo used
his pulse as a stopwatch. In this post, I'll point out a neat little
hack for estimating distance using only your hands and feet. If you
want to look eccentric and get better results, you can carry a clear
plastic ruler around instead.

So, consider a distant object you want to find the distance to.
Hold your hand out at a fixed distance from your eyes and fixed
orientation (e.g. horizontal), and estimate the size of the object in
fingers $f$.
(Practically, it's good to have an integer number of fingers.)
Your arm and hands form a triangle which is similar to the triangle
formed by the distant object:

<figure>
    <div style="text-align:center"><img src
    ="/img/posts/distance1.png" width="700"/>
	<figcaption><i>Similar triangles formed by your hand and the object.</i></figcaption>
	</div>
	</figure>

If $a$ is the length of your arm, $h$ the actual height, $d$ the
distance to the object and $f$ the apparent height in fingers, then

$$
\frac{f}{a} = \frac{h}{d}.
$$

Now walk $s$ steps towards the object, so that it has finger
width $f'$.
We now have a new set of similar triangles:

<figure>
    <div style="text-align:center"><img src
    ="/img/posts/distance2v2.png" width="700"/>
	<figcaption><i>Similar triangles after moving towards the object.</i></figcaption>
	</div>
	</figure>

The ratio of sides now obeys

$$
\frac{f'}{a} = \frac{h}{d-s},
$$

where we measure distance in steps.
We can rearrange to eliminate the length of the arm, $a$, and physical
height $h$, to find

$$
\frac{f}{d} = \frac{f'}{d - s} \quad \Longrightarrow \quad d = \frac{s}{1 -(f'/f)}.
$$

This gives a rule of thumb for distance measurement that would
probably give Protagoras mixed feelings.

## Practice
---

In practice, I find this works with $90$-$95\%$ accuracy for $f = 3$ and
$f' = 4$.
In this case, the distance estimate is

$$
d = \frac{s}{1 -(f'/f)} = 4s,
$$

or four times the number of steps. The problem
