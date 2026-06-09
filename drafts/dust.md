---
Layout: post
mathjax: true
comments: true
title: "Everyday Physics: Issue 1"
date:  2026-06-10

---

**June 10, 2026.** *Some quantitative meditations upon seeing a dust devil, hearing trees rustle, and seeing a snow-capped peak.*

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
The obvious answer is that, although the leaves may be similar, their attachment to the tree by means of a leaf stem or *petiole* varies. 
