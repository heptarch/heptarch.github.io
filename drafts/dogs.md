---
Layout: post
mathjax: true
comments: true
title: "Tiny Dog: A Game of Extremes"
date:  2026-06-12

---

**June 12, 2026.** *The game of spotting maximally tiny dogs turns into a statistics tutorial.*

## Introduction

My wife and I play a game called *Tiny Dog*. When you spot a small dog, if you think it is the smallest you will see that day, you declare "tiny dog!", with precisely one guess per day. The winner is of course the person who spots the smallest dog.<label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">
As determined by subjective, variable-precision and often highly contested measurements.</span>
The strategy is subtle. If the other person ("first spotter") has made their guess and you haven't ("second spotter"), then you simply observe as many dogs as possible and hope for a smaller one. But if they haven't, going first is a bet involving the distribution of dog sizes and the amount of time left in the day. 
Together, these suggest an instructive exercise in extreme values, point processes and Bayesian decision theory!

## Minimal values

Consider a set of real-valued observations $X_1, X_2, \ldots, X_n \in \mathbb{R}$ of iid random variables $X_i \sim \mathcal{D}$. The minimum value $m_n = \min_i X_i$ is the smallest observed value in the batch. Recall that the *cumulative distribution function (cdf)* of a random variable $X \sim \mathcal{D}$ is the probability $X \leq x$:

$$
F_{\mathcal{D}}(x) = \mathbb{P}_{X \sim \mathcal{D}}[X \leq x] = \int_{-\infty}^x f_{\mathcal{D}}(t) \, \mathrm{d}t,
$$

where $f_{\mathcal{D}}(t)$ is the *probability density function (pdf)* associated with $\mathcal{D}$. Note that

$$
\mathbb{P}_{X \sim \mathcal{D}}[X > x] = 1 - \mathbb{P}_{X \sim \mathcal{D}}[X \leq x] = 1 - F_{\mathcal{D}}(x).
$$

The probability $m_n \geq m$ is the probability that *each* $X_i > m$, and hence the cdf (denoted $M_{n,\mathcal{D}}$) of $m_n$ obeys

$$
M_{n,\mathcal{D}}(m) = \mathbb{P}_{X \sim \mathcal{D}}[m_n \leq m] = 1 - (1 - F_{\mathcal{D}}(x))^n.
$$

It's tempting to go to the asymptotic limit in $n$ here, which leads to [extreme value theory](https://en.wikipedia.org/wiki/Extreme_value_theory). But the number of dogs observed is small and variable in important ways, so we will keep $n$ finite.    
Concretely, dog size is not normal but closer to *log normal* $\log\mathcal{N}$, i.e., the logarithm of size is normally distributed.
This has cdf

$$
\Phi(x) = \frac{1}{2}\left[1 + \text{erf}\left(\frac{\ln x - \mu}{\sqrt{2}\sigma}\right)\right], \quad \text{erf}(z) = \frac{2}{\sqrt{\pi}}\int_0^z e^{-t^2} \, \mathrm{d}t,
$$

for Gaussian mean $\mu$ and variance $\sigma^2$. Hence, 

$$
M_{n}(m) = 1 - (1 - \Phi(m))^n.
$$

Since the game focuses on tiny dogs, we care about dogs far from the mean. The gorgeous asymptotic formula

$$
1 - \text{erf}(x) = \frac{e^{-x^2}}{x\sqrt{\pi}}\sum_{k\geq 0} (-1)^k \frac{(2k-1)!!}{(2x^2)^k}
$$

yields (from its first term) the approximation

$$
1 - M_n(m) \approx \left[\frac{e^{-x^2}}{2x\sqrt{\pi}}\right]^n, \quad x = \frac{\ln m - \mu}{\sqrt{2}\sigma}.
$$

The log averge of dog size is around $\mu = 3 \text{ log kg}$ (corresponding to $e^3 \approx 20 \text{ kg}$) and standard deviation $\sigma = 1 \text{ log kg}$.

## Poisson processes

For the process of observing dogs, we assume that every interval of the same length is just as likely to yield an observation, with a mean of $\lambda$ dogs per unit time. If $T$ is the total length of the day and $t$ the elapsed time, the average number of dogs to be observed is $n = \lambda (T - t)$. Obviously, we are ignoring temporal factors (e.g. owners like to walk dogs at certain times of day) and geographic factors (e.g. dog parks are more likely to contain dogs)! Taking just the temporal factors into account is easily accomplished; we just make $\lambda(t)$ time-dependent. The resulting stochastic process is called a *Poisson point process*, and if the form of $\lambda(t)$ is known ("seasonality" over course of day) the remaining number can be computed as

$$
n = \int_{T-t}^T \lambda(t') \, \mathrm{d}t'.
$$

The constant $\lambda$ process is called *homogeneous*.
Returning to the problem at hand, suppose the first spotter sees a dog of size $m$. They must compute two things: first, the average number of dogs remaining to be observed for the day, $n = \lceil \lambda (T-t)\rceil$ or the full Poisson point process expression; second, the probability $M_{n,\mathcal{D}}(m)$ that a dog smaller than that will be observed. They set some threshold probability $\alpha$ such that, if

$$
M_{n,\mathcal{D}}(m) \leq \alpha,
$$

i.e., the probability of a smaller dog is below the threshold, then they call it. The first calculation is relatively easy for the homogeneous process if you know $\lambda$ and have a watch; approximate values in our neighbourhood are one dog every five minutes outside, so $\lambda \sim 3.3 \text{ mHz}$.

## Strategy

It's clear that smaller $\alpha$ is better for the first spotter: it is literally the probability of losing *if* you are the first spotter. The "if" is important; the problem is that the smaller $\alpha$, the longer on average you must wait to see a dog of that size, giving your opponent time to spot a larger dog.<label for="sn-1"
       class="margin-toggle sidenote-number">
</label>
<input type="checkbox"
       id="sn-1"
       class="margin-toggle"/>
	   <span class="sidenote">
We will ignore the role of attentiveness for simplicity.</span>
Choosing a large $\alpha$ gives you a greater likelihood of being first spotter, but obviously increases your chance of losing *as* first spotter.  Without loss of generality, suppose we are playing and pick a threshold $\alpha$, with our opponent selecting a threshold $\beta \sim \mathcal{T}$ at random. Since $\alpha > \beta$ just in case we are first spotter, the probability we win is then

$$
\mathbb{P}[\text{win}] = (1-\alpha)\int_{-\infty}^{\alpha} f_\mathcal{T}(\beta)\, \mathrm{d}\beta + \int_{\alpha}^\infty f_\mathcal{T}(\beta) \beta\, \mathrm{d}\beta,
$$

since $1 - \alpha$ is the probability we win as first spotter, and $\beta$ is the probability the other player loses as first spotter.
Differentiating with respect to $\alpha$ and setting to zero gives the condition

$$
0 = g(\alpha^\ast) = F_\mathcal{T}(\alpha^\ast) - (1- \alpha^\ast)f_\mathcal{T}(\alpha^\ast).
$$

If $f_\mathcal{T}(0) = 0$, then $\alpha = 0$ is a solution, and we recover the strategy to decrease $\alpha$ we observed earlier. Otherwise, a nonzero solution exists by virtue of the intermediate value theorem, since

$$
g(0) = -f_\mathcal{T}(0) < 0, \quad g(1) = 1 + f_\mathcal{T}(1) > 0.
$$

For a concrete distribution $\mathcal{T}$, we can attempt to solve this analytically or numerically. A natural choice is the *beta distribution* $\text{Beta}(a, b)$ with pdf and cdf

$$
f_{\text{Beta}}(x) = \frac{x^{a - 1}(1 - x)^{b - 1}}{B(a, b)}, \quad B(a, b) = \frac{\Gamma(a)\Gamma(b)}{\Gamma(a + b)}, \quad F_{\text{Beta}}(x) = I_x(a, b) 
$$

for $x \in [0, 1]$, $\Gamma(z)$ the [Gamma function](https://en.wikipedia.org/wiki/Gamma_function), and $I_x$ the [regularized incomplete beta function](https://en.wikipedia.org/wiki/Beta_function#Incomplete_beta_function).
Then the optimal first spotting probability obeys

$$
I_{\alpha^\ast}(a, b)B(a, b) = (1- \alpha^\ast)\alpha^{\ast(a - 1)}(1 - \alpha^\ast)^{b - 1},
$$

which can be solved numerically but not analytically in general.

## Bayesian decision theory

We've neglected an important strategic element: every dog your opponent does *not* call is a piece of information, namely, $\beta < \beta'$ where $\beta'$ is the probability of seeing a dog smaller than that just observed. This suggests we treat $\mathcal{T}$ as a *Bayesian prior*.
The posterior density when your opponent passes some number of dogs, minimum size $\beta_\min$, is given by Bayes' law:

$$
f_{\mathcal{T}}(\beta | \beta_\min) = \frac{f_{\mathcal{T}}(\beta)}{F_{\mathcal{T}}(\beta_\min)}, 
$$

for $\beta < \beta_\min$, and vanishes otherwise, while the cdf is modified to

$$
F_{\mathcal{T}}(\beta | \beta_\min) = \int_{-\infty}^\beta \frac{f_{\mathcal{T}}(t)}{F_{\mathcal{T}}(\beta_\min)}, 
\, \mathrm{d}t = \frac{F_{\mathcal{T}}(\beta)}{F_{\mathcal{T}}(\beta_\min)}.
$$

For the concrete case of the beta distribution, the nonvanishing part is:

$$
f_{\text{Beta}}(x)(\beta | \beta_\min) = \frac{\beta^{a - 1}(1-\beta)^{b - 1}}{B(a, b) I_{\beta_\min}(a, b)}, \quad F_{\text{Beta}}(\beta | \beta_\min)=\frac{I_{\beta}(a, b)}{I_{\beta_\min}(a, b)} 
$$

Interestingly, the optimality condition is unchanged for $\alpha < \beta_\min$! This is because the factor of $I_{\beta_\min}(a, b)$ drops out on both sides. This leads to two phases of optimal play:
- *Stationary phase*: Calculating the global optimal $\alpha^\ast$ one based on the initial prior. Use this threshold as long as $\beta_\min > \alpha^\ast$.
- *Boundary phase:* Once $\beta_\min \leq \alpha^*$, "snap" to just below $\beta_\min$.

By the way, you might wonder if we should be playing Bayesian *game theory*, but here, there is no real sequential decision making; either you're the first spotter (which is a decision process, essentially) or you are the second spotter and your strategy is completely dictated.

## Shape parameters

You will have noticed that we fixed the "shape parameters" $a, b$ in the beta distribution; that makes sense for a single game, but we can update those parameters over the course of multiple games. I won't discuss the update process here, but it's also Bayesian. A reasonable initial choice of distribution is skewed towards small values of $\beta$ with a long tail, e.g. $a = 1$ and $b > 1$.
This has a particularly simple form since

$$
I_x(1, b) = \frac{\Gamma(b+1)}{\Gamma(b)\Gamma(1)}\int_{-\infty}^x (1-t)^{b-1} \mathrm{d}t = b\int_{0}^{x-1} s^{b-1} \mathrm{d}s = 1- (x - 1)^b. 
$$

The equation for optimal $\alpha$ becomes

$$
1 - (1- \alpha^\ast)^b = b(1- \alpha^\ast)^{b+1} \quad \Longrightarrow \quad
1 = y^b(1 + by)
$$

for $y = 1 - \alpha^\ast$.

## Putting it all together

So, let's summarize how to play in the simple case of a homogenous point process and the various approximations we've used above.
1. Set the optimal threshold $\alpha^\ast = 1 - 1/2\mu$ in advance based on opponent prior.
2. See a dog:
   - Compute number of dogs left to observe, $n = \lambda(T - t)$.
   - If $(e^{-x^2}/2x\sqrt{\pi})^n \geq 1 - \alpha^\ast$, call it (stationary phase.)
   - If you're opponent doesn't call it and you don't call it, update $\alpha^\ast = \beta_\min - \epsilon$ (boundary phase).
   
Working with a beta
