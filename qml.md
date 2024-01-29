---
layout: page
title:
permalink: /qml/
---

I'm a quantum machine learning (QML) researcher in Maria Schuld's
group at [Xanadu](https://www.xanadu.ai/). I'm interested in the
interplay between quantum algorithms, statistical learning theory, and
symmetry. I also run our
[QML journal club](https://heptar.ch/qml-jc).

Prior to joining Xanadu,
I did a PhD in [high energy physics](https://inspirehep.net/authors/1868975).

## Quantum computing

Some quantum computing questions I'd like to answer:

<ul>
<li><details>
  <summary>
Using simple noise models and complexity-theoretic tools, can we
  characterize the limitations of NISQ devices for tasks like QML and
  Hamiltonian simulation?
  </summary>
  <p>
  In Appendix F of <a href="https://arxiv.org/abs/2210.07234">Cheng, Cotler, Huang and
  Li (2022)</a>, they present a nice information-theoretic argument that, in
  the presence of depolarizing noise, shadow tomography is
  exponentially hard in the number of qubits. This same argument can
  be extended to Hamiltonian simulation and other types of QML,
  besides shadows. It would neat to understand and characterize these
  limitations since my intuition is that <a
  href="https://arxiv.org/abs/1801.00862">NISQ</a> is provably unable
  to do most of the things we hoped it would do.
  </p>
  </details></li>
  <li><details>
  <summary>
  What is the link between Grover search and the Heisenberg limit?
  </summary>
  <p>
  <a href="https://arxiv.org/abs/quant-ph/9605043">Grover search</a>
  can find a needle in an unstructured haystack of $N$ items in
  $O(\sqrt{N})$ steps. In fact, this is optimal by the <a
  href="https://arxiv.org/abs/quant-ph/9701001">BBBV lower
  bound</a>. There is similar quadratic speedup for <a
  href="https://arxiv.org/abs/quant-ph/0412078">quantum
  metrology</a>, which by Heisenberg's principle is also
  optimal. These two are probably the same; search is a discretized
  form of metrology.
  </p>
  </details></li>
  <li><details>
  <summary>
  Are there ways to parametrize signal-processing and quantum metrology
  techniques to optimize, e.g. energy estimation protocols on ISQ/EFT devices?
  </summary>
  <p>
  TODO
  </p>
  </details></li>
  <li><details>
  <summary>
  How can we leverage Shor's algorithm (and the Hidden Subgroup
  Problem more generally) to design learning algorithms? What is the corresponding
  inductive bias?
  </summary>
  <p>
   TODO
  </p>
  </details></li>
  <li><details>
  <summary>
Can we use stabilizer states for distributed computing protocols?
  </summary>
  <p>
   TODO
  </p>
  </details></li>
    <li><details>
  <summary>
  What common syntax connects quantum circuits and
  measurement-based computation?
  </summary>
  <p>
   TODO
  </p>
  </details></li>
    <li><details>
  <summary>
Can the "monosemantic" sparse autoencoding of LLMs be usefully formulated as a
  quantum post-processing layer?
  </summary>
  <p>
   TODO
  </p>
  </details></li>
  </ul>

If you have ideas or want to chat about any of these, feel free to get
in touch!

## Miscellaneous

Other research problems I'm thinking about:

- Is it possible to extract the arrow of time from a Euclidean path
integral?
- Can we recast higher-moment versions of the Eigenstate Thermalization
  Hypothesis (ETH) in terms of pseudorandom states, quantum money, and/or
  error correction?
- What is the computational complexity of forming soap bubbles?
- Are there quantum versions of algorithmic conservation of
  randomness, and how are they connected to thermodynamics?
