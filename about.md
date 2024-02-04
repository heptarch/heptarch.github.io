---
layout: page
title:
permalink: /bio/
---

Physics hacker, cyborg, interdimensional wizard.
Also a quantum machine learning researcher at [Xanadu](https://www.xanadu.ai/) and
ex-[high energy theorist](https://inspirehep.net/authors/1868975).
You can find my old site [here](hapax.github.io).

---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<div id="formula" style="padding: 20px; border: 1px solid #000; margin: 20px 0; text-align: center"></div>
    <img id="formulaImage" src="" style="align: center; max-width: 100%; height: auto;"/>

    <script>
        // Array of objects containing LaTeX formulas and SVG image URLs
        const formulaData = [
            {
                formula: '\\(e^{\\pi i} + 1 = 0\\)',
                imageUrl: 'https://heptar.ch/img/bio/epi.svg',
                imageWidth: '100px'
            },
            // Add more objects as needed
        ];

        window.onload = function() {
            generateRandomFormula();
        };

        function generateRandomFormula() {
            const index = Math.floor(Math.random() * formulaData.length);
            const data = formulaData[index];
            document.getElementById('formula').innerHTML = data.formula;
            const img = document.getElementById('formulaImage');
            img.src = data.imageUrl;
            img.style.width = data.imageWidth; // Adjust width here
            // Trigger MathJax to process and render the new formula
            MathJax.typesetPromise();
        }
    </script>

<div style="text-align:center"><a rel="license"
href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img
alt="Creative Commons License" style="border-width:0"
src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
</div>

<!-- "Saxifrage" means "stone breaker". These tiny, five-petalled -->
<!-- flowers are the toughest and most northernmost growing plants on -->
<!-- earth. By virtue of their pattern of growth, they split rocks and -->
<!-- flourish in unlikely places; they are in the business of -->
<!-- viriditas.-->
