---
layout: page
title:
mathjax: true
permalink: /bio/
---

<div style="padding: 0px; border: 0px solid #000;
margin: 20px 0; text-align: center">Physics hacker, cyborg,
interdimensional wizard.</div>

---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<div id="content" style="text-align:center"></div>

<script>
const items = [
            {
            formula: '$$\\frac{1}{\\pi}= \\frac{2\\sqrt{2}}{9801}\\sum_{n=0}^{\\infty} \\frac{(4n)!}{(n!)^4}\\frac{26390 n+1103}{396^{4n}}$$', // Euler's identity
            imageUrl: 'https://heptar.ch/img/bio/sato.svg', // URL of the SVG image
			link: 'https://en.wikipedia.org/wiki/Ramanujan%E2%80%93Sato_series' 
            },
            {
            formula: '$$\\int_{\\partial\\mathcal{M}}\\omega=\\int_{\\mathcal{M}}\\mathrm{d}\\omega$$', // Euler's identity
            imageUrl: 'https://heptar.ch/img/bio/sato.svg', // URL of the SVG image
			link: 'https://en.wikipedia.org/wiki/Generalized_Stokes_theorem' 
            },
        ];

        window.onload = function() {
            generateRandomItem();
        };

        function generateRandomItem() {
            const itemIndex = Math.floor(Math.random() * items.length);
            const item = items[itemIndex];
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = `<p>${item.formula}</p><a href=${item.link}><img src="${item.imageUrl}" alt="Mathematical Formula" style="max-width:100%;height:auto;"></a>`;
            // Trigger MathJax to process and render the new formula
            MathJax.typesetPromise();
        }
		</script>

<div style="text-align:center; padding:15px"><a rel="license"
href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img
alt="Creative Commons License" style="border-width:0"
src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
</div>

<!-- "Saxifrage" means "stone breaker". These tiny, five-petalled -->
<!-- flowers are the toughest and most northernmost growing plants on -->
<!-- earth. By virtue of their pattern of growth, they split rocks and -->
<!-- flourish in unlikely places; they are in the business of -->
<!-- viriditas.-->
