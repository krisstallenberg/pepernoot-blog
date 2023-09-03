---
speaker: Gerben Mulder
date: "2023-05-08"
lecture nr: [8]
course: Applied statistics
title: "Lecture 8"
slug: "statistics-8"
---

## Chapter 11 and 13

### Correlation

Pearson Product Moment Correlation: strength of linear relationship.

- Symbol for sample correlation: r
- Symbol for population correlation: rho (looks like a p)
- A high correlation means that a value for x can accurately predict a value for y.

#### View the graph

When the actual relationship between variables is curvilinear, the r value doesn't provide sufficient insight into the relationship.

Look at the data points, check to see whether the relationship appears linear to make sure the Pearson correlation applies to the data.

#### Outliers

A single outlier can heavily affect the r value of a dataset.

#### Range restriction

Can underestimate population correlations (what does that mean?)

## Inferential statistics

Remember:

1. Point estimate
2. Interval estimate
3. Interpretation

Point and interval estimates of the population statistics.

If Pearson's r equals:
- .10 correlation is small
- .30 correlation is moderate
- .50 correlation is large

Use hypothesis testing to estimate the population correlation:
1. Jamovi regression module (correlation matrix analysis)

How to report correlation and correlation CI:

> "The results showed a moderate correlation between X and Y (r=.34, 95% CI [0.16, 0.49], N = 111). The CI shows that the sample is consistent with population values between a relatively small to a relatively large correlation"

### Correlation between dichotomous and continuous variable

This correlation is called a point biserial correlation coefficient.

## Proportions

A proportion is a value that represents the frequency of a particular outcome or event divided by the total number of observations or sample size (N).


To calculate a proportion, you divide the number of instances of the specific value or event (X) by the total number of observations (N). This is represented mathematically as: 

```
P = X / N.
```

The resulting proportion (P) represents the ratio or fraction of the specific value or event occurring in the given sample. It tells you how often the value occurs relative to the total number of observations.

Proportions can take values between 0 and 1, inclusive. A proportion of 0 means the value never occurs in the sample, while a proportion of 1 indicates that the value always occurs in the sample.

### Chi-squared

- Test of independence
- (Very) informally
  - H0: The row and column variables are not related
  - H1: The row and column variables are related

Reject H0 if p < .05

For 2-by-2 tables: phi-coefficient is measure of effect size.

Rules of thumb for interpretation:
.1 = small
.3 = moderate
.5 = large