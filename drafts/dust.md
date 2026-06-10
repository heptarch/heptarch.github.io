---
Layout: post
mathjax: true
comments: true
title: "When the Wind Blows"
date:  2026-06-10

---

**June 10, 2026.** *Some quantitative meditations upon seeing the wind whip up a dust devil and hearing it whisper through the trees.*

## Dust devils

I recently observed a *dust devil* (or small whirlwind) in an empty cul-de-sac on a cool day of gusty wind and later rain. The dust devil was the on the order of the size of the cul-de-sac, say $L \sim 10 \text{ m}$ across, and moving at around $u = 1 \text{ m/s}$. The kinematic viscosity of air at $T = 15^\circ$ and standard pressure is around $\nu \approx 1.48 \times 10^{-5} \text{ m}^2/\text{s}$. This is not really estimable from dimensional analysis, since the simplest dimensionally consistent formula

$$
\nu \sim uL \sim 10 \text{ m}^2/\text{s}
$$

is off by a factor of $10^5$. What we are missing is a dimensionless quantity called the [*Reynolds number*](https://en.wikipedia.org/wiki/Reynolds_number), the ratio of kinetic to viscous forces:

$$
\text{Re} = \frac{uL}{\nu} \approx 6.8 \times 10^4.
$$

Reynolds number above $\simeq 4 \times 10^3$ indicates kinetic forces dominate and we enter the regime of turbulent flow. In turbulence, laminar sheets of the fluid (in this case air) break into eddies of all sizes, the largest being eddies on the size of the macroscopic length scale (like our cul-de-sac) all the way down to the microsopic or [*Kolmogorov scale*](https://en.wikipedia.org/wiki/Kolmogorov_microscales) $\eta$ where viscous forces once again take over and disperse the vortices. The Kolmogorov scale obeys

$$
\eta = \left(\frac{\nu^3}{\epsilon}\right)^{1/4}
$$

where $\epsilon$ is a somewhat obscure quantity, namely, the average rate at which "turbulence kinetic energy" is lost per unit mass. The goal I set myself: determine the size of the microscopic vortices the cul-de-sac dust devil would dissipate itself into. The only missing quantity here is $\epsilon$, but rather than look it up, I figured I should estimate it from dimensional analysis. For a large-scale eddy, the relevant quantities are $u$, $L$, and density $\rho$, i.e. kinetic quantities rather than viscosity. The rate at which energy is dissipated per unit mass has dimensions

$$
\frac{\text{energy}}{\text{time}\cdot \text{mass}} = \frac{ML^2/T^2}{TM} = \frac{L^2}{T^3}. 
$$

The only combination of relevant quantities with this unit is

$$
\epsilon \sim \frac{u^3}{L}.
$$

Plugging in our numbers gives $\epsilon \sim 0.1 \text{ m}^2/\text{s}^3$, consistent with measurements of air on a day of mild wind. Plugging this into the Kolmogorov microscale equation gives

$$
\eta = \left(\frac{\nu^3}{\epsilon}\right)^{1/3} \sim \left(\frac{L\nu^3}{u^3}\right)^{1/4} \sim\left(\frac{10 \cdot (1.5 \times 10^{-5})^3}{1^3}\right)^{1/4} \text{ m} \approx 0.43 \text{ mm}.
$$

This is consistent with [a typical Kolmogorov length scale](https://journals.ametsoc.org/view/journals/atsc/63/5/jas3687.1.pdf) of $\eta \sim 1 \text{ mm}$, which in turn, has implications for the preferential formation of raindrops of that size! So there's a nice throughline from the wind that blew the dust devil to the rain that accompanied later.

## Whispering trees

On that note, trees make a nice sound when the wind passes through them. It is not immediately obvious that they should, however. The leaves could sway in unison, producing no sound at all. And even if they should make a sound, why make the soothing whisper that they do?
The obvious answer is that, although the leaves may be similar, their attachment to the tree by means of a leaf stem or *petiole* varies. As the wind passes through the tree, it vibrates leaves at different frequencies according to the stiffness $k$ of the petiole and the mass $m$ of the leaf, with natural angular frequency

$$
\omega^* = \sqrt{\frac{k}{m}} = \sqrt{\frac{k}{\ell w\rho}}, 
$$

where $\ell$ is the length of the leaf, $w$ the width, and $\rho$ a leaf-independent density.
Further, we can model the stiffness via the [axial stiffness formula](https://en.wikipedia.org/wiki/Stiffness#Relationship_to_elasticity):

$$
k = \frac{EA}{L},
$$

where $E$ is a material-dependent constant called the *modulus of elasticity*, $A$ is the area of the petiole and $L$ is its length. Thus, the frequency varies depending primarily on the length $L$ of the petiole and the length $\ell$ and width $w$ of the leaf. Assuming these are all proportional to $\ell$ (a reasonable approximation), we can write

$$
\omega^* = \sqrt{\frac{EA}{C \rho \ell^3}} \propto \ell^{-3/2}, 
$$

for a constant of proportionality $C$.
The sound we are hearing is then an average of $\ell^{-3/2}$, assuming that leaves crash into each other with a frequency that reflects the distribution of $\ell$. The distribution of leaf size is approximately lognormal and follows [*Taylor's power law*](https://www.sciencedirect.com/science/article/pii/S2351989419301994), which relates variance and average as follows:

$$
\sigma^2 = \beta \cdot \mu^\alpha, \quad \alpha \approx 7.7, \quad \beta \approx 0.028.
$$

This gives rise to an average frequency

$$
\langle \omega^*\rangle_\mu = \sqrt{\frac{EA}{2\pi C\rho \beta \mu^\alpha}}\int_{0}^\infty \mathrm{d}\ell\, \ell^{-3/2}e^{-(\ln\ell - \ln\mu)^2/(2\beta \mu^\alpha)}.
$$

We can evaluate this exactly by making the substitution $x = \ln \ell$ with $\mathrm{d}\ell = e^x \, \mathrm{d}x$:

$$
\int_{0}^\infty \mathrm{d}\ell\, \ell^{-3/2}e^{-(\ln\ell - \ln\mu)^2/(2\beta \mu^\alpha)} = \int_{-\infty}^\infty \mathrm{d}x\, e^{-x/2}e^{-(x - \ln\mu)^2/(2\beta \mu^\alpha)}.
$$

Completing the square eventually yields

$$
\langle \omega^*\rangle_\mu = \sqrt{\frac{EA}{2\pi C\rho \beta \mu^\alpha}}\cdot \sqrt{2\pi\beta \mu^{\alpha-1}} e^{\beta \mu^\alpha/8} = \sqrt{\frac{EA}{C\rho \mu}}\cdot \sqrt{2\pi\beta \mu^{\alpha-1}} e^{\beta \mu^\alpha/8}.
$$

For a gum leaf
