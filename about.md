---
layout: page
title:
mathjax: true
permalink: /bio/
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<div id="about" style="text-align:center; margin: 20px"></div>

---

<div id="content" style="text-align:center"></div>

<script>
const items = [
            {
            formula: '$$\\frac{1}{\\pi}= \\frac{2\\sqrt{2}}{9801}\\sum_{n=0}^{\\infty} \\frac{(4n)!}{(n!)^4}\\frac{26390 n+1103}{396^{4n}}$$', // Ramanujan-Sato
            imageUrl: 'https://heptar.ch/img/bio/sato.svg', // URL of the SVG image
			link: 'https://en.wikipedia.org/wiki/Ramanujan%E2%80%93Sato_series'
            },
            {
            formula: '$$\\int_{\\partial\\mathcal{M}}\\omega=\\int_{\\mathcal{M}}\\mathrm{d}\\omega$$', // Stokes theorem
            imageUrl: 'https://heptar.ch/img/bio/stokes.svg', // URL of the SVG image
			link: 'https://en.wikipedia.org/wiki/Generalized_Stokes_theorem' 
            },
            {
            formula: '$$\\zeta(s) = \\prod_{p\\in\\mathbb{P}} \\frac{1}{1-p^{-s}}$$', // Euler's product formula
            imageUrl: 'https://heptar.ch/img/bio/zeta.svg', // URL of the SVG image
			link: 'https://en.wikipedia.org/wiki/Proof_of_the_Euler_product_formula_for_the_Riemann_zeta_function' 
            },
            {
            formula: '$$D = \\frac{k_{\\text{B}}T}{6\\pi \\eta R}$$', // Einstein-Stokes
            imageUrl: 'https://heptar.ch/img/bio/brownian.svg', // URL of the SVG image
			link: 'https://en.wikipedia.org/wiki/Einstein_relation_(kinetic_theory)' 
            },
            {
            formula: '$$n! \\sim \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n$$', // Stirling's formula
            imageUrl: 'https://heptar.ch/img/bio/stirling.svg', // URL of the SVG image
			link: 'https://en.wikipedia.org/wiki/Stirling%27s_approximation' 
            },
        ];

       const bios = [
          "Cyborg, hacker, interdimensional wizard.",
          " Making wonder cool again, one dumb idea at a time.",
        ];

        window.onload = function() {
            generateRandomItem();
	        displayRandomBio();
        };

        function generateRandomItem() {
            const itemIndex = Math.floor(Math.random() * items.length);
            const item = items[itemIndex];
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = `<p>${item.formula}</p><a href=${item.link}><img src="${item.imageUrl}" alt="Mathematical Formula" style="max-width:100%;height:auto;"></a>`;
            // Trigger MathJax to process and render the new formula
            MathJax.typesetPromise();
			}

	    function displayRandomBio() {
            const bioIndex = Math.floor(Math.random() * bios.length);
            const bio = bio[bioIndex];
            document.getElementById('bio').innerText = bio;
        }
		</script>

<!-- <div style="text-align:center; padding:25px"><a rel="license"
href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img
alt="Creative Commons License" style="border-width:0"
src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
</div> -->

<!-- "Saxifrage" means "stone breaker". These tiny, five-petalled -->
<!-- flowers are the toughest and most northernmost growing plants on -->
<!-- earth. By virtue of their pattern of growth, they split rocks and -->
<!-- flourish in unlikely places; they are in the business of -->
<!-- viriditas.-->
