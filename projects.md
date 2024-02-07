---
layout: page
title:
mathjax: true
permalink: /lab/
date: 2024-02-5
---


<div style="background-color: #212433 ; padding: 30px; margin: 20px; border: 0px solid
grey; line-height:1.5; border-radius: 15px">
Today, like every other day, we wake up empty
and frightened.<br>
Don’t open the door to the study and begin reading. <br>
Take down a musical instrument.<br><br>

Let the beauty we love be what we do.<br>
There are hundreds of ways to kneel and kiss the ground.
<br>
<br>

<div style="text-align: right">Rumi, <i>Quatrain 82</i></div>
</div>

[Creative applied research: lessons from Bell Labs](/bell)

<div style="background-color: #202229 ; padding: 20px; border: 0px solid
grey; line-height:1.5; border-radius: 15px">
<span style="font-variant: small-caps">Obstructed Supervision Theorem.</span> For a polygonal layout of $n$ walls and $g$
holes, a total of

$$
\left\lfloor \frac{n+2g}{3}\right\rfloor
$$

educators are sufficient to supervise the whole space.
</div>

<div style="background-color: #16171c ; padding: 20px 20px 20px 20px; border: 0px solid
grey; line-height:1.5">
<details>
  <summary>
<i>Proof.</i>$\,$ (In short: connect a hole to the outside with two walls.)
  </summary>
  <p>
For each hole, draw an edge from one of its vertices to
a vertex on the outer polygon.

<figure>
    <div style="text-align:center; padding: 15px"><img src
    ="/img/posts/guards5.svg" width="400"/>
	</div>
	</figure>

If each such edge is viewed as
<i>two</i> walls, we now have a (non-convex) polygon of $n + 2g$ walls,
and we can apply the original art gallery theorem.
$\blacksquare$
  </p>
</details>
</div>
