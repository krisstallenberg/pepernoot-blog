---
speaker: Gerben Mulder
date: "2023-04-11"
lecture nr: [3]
course: Applied statistics
title: "Lecture 3"
slug: "statistics-3"
---

## Today

- What is a z-score?

Introduction to estimation:
- Normal distribution
- Sampling
- ..
- ..

### Z-score 

The z-score is the distance from the mean, in units of the SD. So `z = -1` means "the mean score minus one standard deviation".

## Chapter 5: Confidence interval and effect sizes

## Descriptive statistics

What is the typical score? 
- Measures of central tendency (mean, mode, median).

How typical is the typical score? 
- Standard deviation. The larger the SD, the less typical the typical score is.
- A mean can be atypical, especially when:
  - There's an assymetric (skewed) distribution (compared to ND)
  - There are outliers (positive kurtosis) (compared to ND) 

What is the distribution of scores?
- How close are the mean and median?
- Look at a histogram
  
## Concepts we need to calculate point and interval estimates

In inferential statistics, there are:
- Point estimate: the mean of the population, which is the mean of the sample.
- Interval estimate: 

### Normal distribution

Assumption: the population distribution is a normal distribution.

The normal distribution has two parameters: 
- Population mean (mu): tweaking the population mean shifts the ND left or right.
- Standard deviation of the distribution (sigma (σ)): tweaking the SD widens/flattens and tightens/highers the distribution. A wider distribution has a lower peak.

### Sampling distribution

Imagine drawing a huge amount of samples from a population. The means from all samples form a distribution: the distribution of sample means, known as 'sampling distribution'. The sampling distribution is a normal distribution. The normal distribution of the sampling distribution is smaller than the normal distribution of the population

### Standard error (of the mean)

> See slides

Standard error = standard deviation of the population distribution (sigma (σ)) / square root of the sample size

The standard error is relative to the scores (i.e. it's a non-standardized score). For example, if the population values vary between 0 and 10, a standard error 1 one is relatively large, as opposed to population values ranging from 0 to 1000.
