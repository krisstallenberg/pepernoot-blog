---
speaker: Gerben Mulder
date: "2023-04-17"
lecture nr: [4]
course: Applied statistics
title: "Lecture 4"
slug: "statistics-4"
---

## Estimating the population mean

- Point estimate: we assume the population mean is the sample mean
- Interval estimate: since we can't be sure about the population mean based on the sample mean, we calculate a 95% CI.

How do we relate our sample statistics to the things above? This is inferential statistics: reasoning _from the known to the unknown_.

Standard error: how far the average estimate of the population mean is away from the real mean.

Standard normal distribution: a standard distribution with
- Mean = 0
- Standard deviation = 1

## Z-scores

Z-scores provide a standardized way of expressing how far an observation is from the mean.

An individual observation can be assigned a z-score, which is its distance in SDs from the mean. 

## Greek characters (population variables)

- mu (μ) = population mean
- sigma (σ) = standard deviation

## Jamovi

Plugin: DistrACTION

For all normal distributions:
- 95% of the values fall within 2 SDs from the mean.
- 68% of the values fall within 1 SD from the mean.

## Estimation error

Sample mean (M) - Population mean μ = estimation error.

## Margin of Error (MoE)

1.96*SE is the margin of error (MoE) (sometimes referred to as the .95 MoE). This means 95% of my estimation errors are smaller than the MoE.

There's a 95% chance that the population mean is between the (sample mean - MoE) and (sample mean + MoE)

## 95% CI

The interval created by adding to and substracting MoE from the sample mean is called a 95% CI.

### Example

Given:
- population mean = unkown
- SD (sigma (σ)) = 20 (usually unknown)
- sample size = 25

We can calculate:
- SE = SD / squareroot(sample size) = 20 / squareroot(25) = 4.0
- MoE = 1.96 * 4.0 = 7.84

With a 95% CI, you can't say there's a 95% chance/probability that mu (μ) is within the bounds of a particular 95% CI. It applies to the set of CIs. Instead you can be 95% _certain_ that mu is within the bounds of a particular 95% CI.

Usually sigma (the population SD) is unknown. We then use the sample SD to caclulate the SE.
