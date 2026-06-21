---
Layout: post
mathjax: true
comments: true
title:  "From microchips to Milky Way"
categories: []
date:  2026-06-20
---

**June 20, 2026.** *What is the connection between soft errors and the number of stars in the galaxy?*

## Introduction

Classical computers are very reliable. But there is a rather exotic form of error the designers probably didn't expect: bombardment by high-energy particles from out of space. These are called *cosmic rays*, and they are mostly particles flung out from the exploding stars at close to the speed of light. We'll do a quick Fermi estimate connecting how they cause bit flips in computers to the stellar population of the Milky Way.

## Supernova

Supernovas occur when big stars run out of fuel and collapse in on themselves. They tend to release huge amounts of energy when this happens, about $10^{44} \text{ J}$, or $10^{51} \text{ ergs}$ in older units.<label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">
This leads to the name for this unit of energy, the "foe" for "fifty one ergs". Steven Weinberg suggests the more august "bethe".</span>
Cosmic rays are mostly from supernova, and tend to have energy around $4\times 10^{9} \text{ eV} \approx 6.4 \times 10^{-10} \text{ J}$. Finally, we know the most ($99\%$) of the energy of the supernova is carried away in neutrinos, which don't really interact with matter. That leaves a total of

$$
N_\alpha = \frac{0.01 \text{ foe}}{6.4 \times 10^{-10} \text{ J}} \approx 1.56 \times 10^{51}
$$

cosmic rays per supernova. Now, cosmic rays tend to bounce around the galaxy, bent by magnetic fields, before they're either absorbed or leak out into intergalactic space.

How long does it take for that to happen?
As they bounce around, they collide with elements in the interstellar medium in a process called [spallation](https://en.wikipedia.org/wiki/Cosmic_ray_spallation), knock out protons, and create certain new elements [such as beryllium](https://en.wikipedia.org/wiki/Beryllium#Isotopes_and_nucleosynthesis) that aren't produced in stars. We know from the ratio of ${}^{10}B$ to (decayed) ${}^{9}B$ how long that beryllium has been travelling, and it suggests that the average age of a cosmic ray is $\tau = 15$ million years.
If we knew how many there were total, we could estimate the rate of supernova explosions!

## Soft errors

Here is where computers come in. An individual memory cell has area

$$
$$

