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
N = \frac{0.01 \text{ foe}}{6.4 \times 10^{-10} \text{ J}} \approx 1.56 \times 10^{51}
$$

cosmic rays per supernova. Now, cosmic rays tend to bounce around the galaxy, bent by magnetic fields, before they're either absorbed or leak out into intergalactic space.
How long does it take for that to happen?
As they bounce around, they collide with elements in the interstellar medium in a process called [spallation](https://en.wikipedia.org/wiki/Cosmic_ray_spallation), knock out protons, and create certain new elements [such as beryllium](https://en.wikipedia.org/wiki/Beryllium#Isotopes_and_nucleosynthesis) that are rarely produced in stars. We know from the ratio of ${}^{10}B$ to (decayed) ${}^{9}B$ how long that beryllium has been travelling, and it suggests that the average age of a cosmic ray is

$$
\tau = 15 \text{ million years} \approx 4.7 \times 10^{14} \text{ s}.
$$

If we knew how many there were total, we could estimate the rate of supernova explosions!

## Soft errors

Here is where computers come in. A laptop at sea-level experiences the order of [several bitflips a month](https://en.wikipedia.org/wiki/Soft_error#Cosmic_rays_creating_energetic_neutrons_and_protons). We can Fermi estimate the *soft error rate (SER)* of cosmic-ray induced bit flip errors as

$$
\text{SER} = \Phi_n \cdot \sigma \cdot N_{\text{bits}}
$$

where $\Phi_n$ is the *flux* of cosmic rays at sea level, $\sigma$ is the cross-sectional area, and $N_{\text{bits}}$ is the number of bits.
A laptop with $16\text{ GB}$ of RAM has $N_{\text{bits}} \approx 1.28 \times 10^{11}$ bits, and the observed SER at sea level is around $10^{-6}$ errors per second. Finally, a modern transistor is on the order of $nm$, so $\sigma \approx 10^{-18} \text{ m}^2$. Rearranging, we find a flux

$$
\Phi_n = \frac{\text{SER}}{\sigma \cdot N_{\text{bits}}} \approx \frac{10^{-6}}{10^{-18} \cdot 1.28 \times 10^{11}\text{ m}^2{s}} \approx \frac{8}{\text{m}^2\text{s}}.
$$

Now, cosmic rays hitting the top of the atmosphere tend to cascade into a shower of neutrons, and only one in $500$ actually makes it down to sea level. So the actual flux of cosmic rays is $500$ times higher! That is,

$$
\Phi \approx 4000/\text{m}^2\text{s}.
$$

We can get a density by assuming the cosmic rays form an isotropic gas, i.e. travelling equally in every direction, travelling at close to the speed of light. The basic intuition is that if you take a unit area of flux and drag it along at the speed of light, you should get the density. This actually underestimates by a factor of $4$ because it neglects the fact that there are travelling in all directions, so

$$\rho = \frac{4\Phi}{c} \approx \frac{4 \cdot 4000/\text{m}^2\text{s}}{3 \times 10^{8} \text{ m}/s} \approx 5.3 \times 10^{-5} \text{ m}^{-3}.
$$

Thus, from errors on a microchip we can deduce the density of cosmic rays!

## Stellar census
