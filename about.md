---
layout: page
title:
mathjax: true
permalink: /bio/
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<div id="bio" style="text-align:center; margin: 20px 0"></div>

---

<div id="content" style="text-align:center"></div>

<script>
       const items = [
            {
            formula: '$$\\frac{1}{\\pi}= \\frac{2\\sqrt{2}}{9801}\\sum_{n=0}^{\\infty} \\frac{(4n)!}{(n!)^4}\\frac{26390 n+1103}{396^{4n}}$$', // Ramanujan-Sato
            imageUrl: 'https://heptar.ch/img/bio/sato.svg', // URL of the SVG image
			link: 'https://maa.org/sites/default/files/pdf/pubs/amm_supplements/Monthly_Reference_5.pdf'
            },
            {
            formula: '$$\\int_{\\partial\\mathcal{M}}\\omega=\\int_{\\mathcal{M}}\\mathrm{d}\\omega$$', // Stokes theorem
            imageUrl: 'https://heptar.ch/img/bio/stokes.svg', // URL of the SVG image
			link: 'http://yaroslavvb.com/papers/notes/piponi-on.pdf' 
            },
            {
            formula: '$$\\zeta(s) = \\prod_{p\\in\\mathbb{P}} \\frac{1}{1-p^{-s}}$$', // Euler's product formula
            imageUrl: 'https://heptar.ch/img/bio/zeta.svg', // URL of the SVG image
			link: 'https://empslocal.ex.ac.uk/people/staff/mrwatkin/zeta/devlin.pdf' 
            },
            {
            formula: '$$D = \\frac{k_{\\text{B}}T}{6\\pi \\eta R}$$', // Einstein-Stokes
            imageUrl: 'https://heptar.ch/img/bio/brownian.svg', // URL of the SVG image
			link: 'https://hapax.github.io/assets/brownian-slides.pdf' 
            },
            {
            formula: '$$n! \\sim \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n$$', // Stirling's formula
            imageUrl: 'https://heptar.ch/img/bio/stirling.svg', // URL of the SVG image
			link: 'https://heptar.ch/assets/stirling.pdf' 
            },
            {
            formula: '$$S[A] = \\min_{\\mathcal{X}_A \\sim A} \\frac{\\mathcal{A}[\\mathcal{X}_A]}{4G_{\\text{N}}}$$', // Ryu-Takayanagi
            imageUrl: 'https://heptar.ch/img/bio/rt.svg', // URL of the SVG image
			link: 'https://arxiv.org/pdf/1304.4926.pdf' 
            },
        ];

       const bios = [
           {
		   bio: 'Cyborg, hacker, interdimensional wizard.',
		   },
           {
		   bio: 'For a cluttered, maximalist experience, feel free to check out my <a href="https://hapax.github.io/">old site</a>.',
		   },
           {
		   bio: 'Below is a randomized playlist of my favourite equations. It\'s like a stochastic google doodle!',
		   },
           {
		   bio: 'This bio snippet is randomized and in some case computer-generated (marked *).',
		   },
           {
		   bio: 'A <i>heptarch</i> was one of seven Anglo-Saxon kings during the “dark” ages. I chose it partly for the historical reference, partly for the air of mystery, but mostly for the gnarly prog metal vibes.',
		   },
           {
           bio: 'Making wonder cool again, one stupid question at a time.',
		   },
           {
           bio: 'Pig\'s gotta fly.',
		   },
           {
           bio: '<a href="https://inspirehep.net/authors/1868975">String theorist</a> turned mad scientist and <a href="https://heptar.ch/qml">quantum mechanic</a>.',
		   },
           {
           bio: 'If this bio says <i>futon</i> or <i>mothman</i>, it\'s real.*',
		   },
           {
           bio: '<a href="https://heptar.ch/qc-dummies">Click here</a> to learn about why quantum computers are cool, from the comfort of your armchair! (Or maybe while lying in bed.)*',
		   },
          {
          bio: 'This website, and me, are both being built out of cardboard boxes.*',
          },
          {
          bio: 'I believe that science, art, and culture thrive in conditions of openness and connection.*',
          }
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
            const bio = bios[bioIndex];
            const contentDiv = document.getElementById('bio');
            contentDiv.innerHTML = `<p>${bio.bio}</p>`;
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
