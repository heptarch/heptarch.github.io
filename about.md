---
layout: page
title:
permalink: /bio/
---

Physics hacker, cyborg, interdimensional wizard.

Also a quantum machine learning (QML) researcher in Maria Schuld's
group at [Xanadu](https://www.xanadu.ai/).


<div id="formula-container"></div> <br>

<script>
document.addEventListener('DOMContentLoaded', function() {
    var formulas = [
        '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$',
        '$$e^{i\\pi} + 1 = 0$$',
        '\\[a^2 + b^2 = c^2\\]',
        '\\[\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}\\]'
    ];

    var formulaContainer = document.getElementById('formula-container');

    function displayRandomFormula() {
        var randomIndex = Math.floor(Math.random() * formulas.length);
        var formula = formulas[randomIndex];
        formulaContainer.innerHTML = formula;
        MathJax.typesetPromise(); // This line tells MathJax to process and render the new formula
    }

    displayRandomFormula(); // Display a random formula when the page loads
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
