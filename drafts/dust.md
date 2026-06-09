---
Layout: post
mathjax: true
comments: true
title: "Everyday Physics: Issue 1"
date:  2026-06-10

---

**June 10, 2026.** *Some quantitative meditations upon seeing a dust devil, hearing trees rustle, and seeing a snow-capped peak.*

## The dust devil is in the details

I recently observed a *dust devil* (or small whirlwind) in an empty cul-de-sac on a cool day of gusty winds. The dust devil was the on the order of the size of the cul-de-sac, say $L \sim 10 \text{ m}$ across, and moving at around $u = 1 \text{ m/s}$. The dynamical viscosity of air at $T = 15^\circ$ and standard pressure is around $\nu \approx 1.48 \times 10^{-5} \text{ m}^2/\text{s}$.
The [*Reynolds number*](https://en.wikipedia.org/wiki/Reynolds_number) is the ratio of kinetic to viscous forces, here

$$
\text{Re} = \frac{uL}{\nu} \approx 6.8 \times 10^4.
$$

Reynolds number above $\simeq 4 \times 10^3$ indicates kinetic forces dominate and we enter the regime of turbulent flow. In turbulence, laminar sheets of the fluid (in this case air) break into eddies of all sizes, the largest being eddies on the size of the macroscopic length scale (like our cul-de-sac) all the way down to the microsopic or [*Kolmogorov scale*](https://en.wikipedia.org/wiki/Kolmogorov_microscales) $\eta$ where viscous forces once again take over and disperse the vortices. The Kolmogorov scale obeys

$$
\eta = \left(\frac{\nu^3}{\epsilon}\right)^{1/4}
$$

where $\epsilon$ is a somewhat obscure quantity, namely, the average rate at which "turbulence kinetic energy" is lost per unit mass. The goal I set myself: determine the size of the microscopic vortices the cul-de-sac dust devil would dissipate itself into. The only missing quantity here is $\epsilon$, but rather than look it up, I figured I should estimate it from dimensional analysis. For a large-scale eddy, the relevant quantities are $u$, $L$, and density $\rho$. The rate at which energy is dissipated per unit mass has dimensions

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

This is consistent with [a typical Kolmogorov length scale](https://journals.ametsoc.org/view/journals/atsc/63/5/jas3687.1.pdf) of $\eta \sim 1 \text{ mm}$, which in turn, has implications for the preferential formation of raindrops of that size!

<!-- https://www.researchgate.net/profile/Michael-Jones-66/publication/2246342_Regularization_Theory_and_Neural_Networks_Architectures/links/02bfe50d33d1a45e52000000/Regularization-Theory-and-Neural-Networks-Architectures.pdf -->

<!-- https://www.stat.cmu.edu/~ryantibs/papers/sparsitynn.pdf -->

<!-- https://en.wikipedia.org/wiki/Carter_constant -->

<!-- https://arxiv.org/pdf/2204.02063.pdf -->

<!-- https://arxiv.org/abs/1610.09702 -->

<!-- https://arxiv.org/pdf/2301.10191 -->

<!-- https://arxiv.org/pdf/2405.10958 -->

<!-- https://en.wikipedia.org/wiki/Quintic_function#Beyond_radicals -->
