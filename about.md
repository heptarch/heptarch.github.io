---
layout: page
title:
permalink: /bio/
---

Physics hacker, cyborg, interdimensional wizard.

<div id="formula-container"></div>

<script
src="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const formulas = [
        "c = \\sqrt{a^2 + b^2}",
        "\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}",
        "e^{i\\pi} + 1 = 0",
        "\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}"
    ];

    function displayRandomFormula() {
        const index = Math.floor(Math.random() * formulas.length);
        const formula = formulas[index];
        const container = document.getElementById('formula-container');
        katex.render(formula, container);
    }

    displayRandomFormula();
});
</script>

---

<a rel="license"
href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img
alt="Creative Commons License" style="border-width:0"
src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>

<!-- "Saxifrage" means "stone breaker". These tiny, five-petalled -->
<!-- flowers are the toughest and most northernmost growing plants on -->
<!-- earth. By virtue of their pattern of growth, they split rocks and -->
<!-- flourish in unlikely places; they are in the business of -->
<!-- viriditas.-->
