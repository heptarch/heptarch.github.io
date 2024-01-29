---
layout: page
title:
permalink: /qml/
---

I'm a quantum machine learning (QML) researcher in Maria Schuld's
group at [Xanadu](https://www.xanadu.ai/). Prior to that, I worked in
[high energy physics](https://inspirehep.net/authors/1868975). I'm
interested in the interplay between quantum algorithms, statistical learning theory, and
symmetry. I also run our
[QML journal club](https://heptar.ch/qml-jc).

Some question I'm thinking about:

- How can we leverage Shor's algorithm (and the Hidden Subgroup
Problem more generally) to design learning algorithms? What is the corresponding
inductive bias?
	<div style="background-color: #16171c ; padding: 20px 20px 20px 20px; border: 0px solid
	grey; line-height:1.5">
	I've been working on this for a while, and Maria <a
	href="https://www.youtube.com/watch?v=VVY8xcps3N4">has talked</a>
	a bit about it. It should be coming out soon!
	</div>
- Are there ways to parametrize signal-processing and quantum metrology
  techniques to optimize, e.g. energy estimation protocols on ISQ/EFT devices?
- Using simple noise models and complexity-theoretic tools, can we
  characterize the limitations of NISQ devices for tasks like QML and
  Hamiltonian simulation?<label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">
	   See <a href="https://arxiv.org/abs/2210.07234">"The Complexity
  of NISQ" (2022)</a>.
	   </span>
	   - What is the link between Grover search and the Heisenberg
       limit?<label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">
	   Presumably, it has something to do with <a
       href="https://arxiv.org/abs/1904.12704">discrete Cramér-Rao bounds</a>.
- Can the "monosemantic" sparse autoencoding of LLMs be usefully formulated as a
  quantum post-processing layer?<label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">
	   See <a
  href="https://transformer-circuits.pub/2023/monosemantic-features/index.html">"Towards
  Monosemanticity" (2023)</a>.
	   </span>
- Can we use stabilizer states for distributed computing protocols?
