---
speaker: Gerben Mulder
date: "2023-04-18"
lecture nr: [5]
course: Applied statistics
title: "Lecture 5"
slug: "statistics-5"
---

## Today

Introduction to hypothesis testing and significance testing. 

## Null-hypothesis

An assumption about a population value. Can be a value, or a range of values.

### Testing a null-hypothesis

- Significance testing: evaluate the evidence against the null-hypothesis.
- Hypothesis testing: **decide** between the null-hypothesis and an alternative hypothesis. In the book this is called ('strict NHST')
- NHST: mix of significance testing and hypothesis testing.

#### Significance testing

If the results are unlikely assuming the null-hypothesis is true, there is evidence against the null-hypothesis.

p-value: the probability of obtaining the resultst or more extreme results when Ho is true. Value between 0 and 1. Lower evidence indicates more evidence against the null-hypothesis.

t-value is the alternative to z-value, which we use when we don't know sigma (population standard deviation). 

Reporting the t-value and p-value looks as follows: t(N - 1) = _t_, p < ...

#### Hypothesis testing

Alternative hypothesis is inconsistent with the original formulation of the theory of significance testing.

Decide between two competing hypotheses: 
1. Null-hypothesis
2. Alternative hypothesis

##### Type I and II errors

The most costly error is a type I error. In a type 1 error, we incorrectly reject the null-hypothesis. The probablity of making a type I error is (alpha).

The least costly error is called a type II error. Incorrectly accepting the null-hypothesis. The probablity of making a type II error is (beta).

Depending on the data, both hypotheses can be rejected. In this case, the statistician has to decide what error is costlier.

#### NHST

Mix of significance and hypothesis testing. 

Alternative hypothesis is the negation of the null hypothesis. Alpha is not calculated, but set to 0.05. 

Red flag of NHST: it promotes dichotomous thinking: something is or isn't 'significant'.

In NHST, you can't accept the null-hypothesis.

