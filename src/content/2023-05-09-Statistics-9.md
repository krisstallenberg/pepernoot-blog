---
speaker: Gerben Mulder
date: "2023-05-08"
lecture nr: [8]
course: Applied statistics
title: "Lecture 8"
slug: "statistics-8"
---

## Reliability analysis

Observed scores differ due to:

- Random measurement error
- Systematic error

Reliability is affected by random measurement error. 
Validity is affected by systematic error.

Reliability is required, but not sufficient, for validity.

The conceptual formula for reliability is as follows:

- Observed score = true score + error score
- Reliability = true score / observed score

If the reliability = .80:

- 80% of the observed variability is due to true score variability.
- 20% of the observed variability is due to random measurement error.

For Cronbach's alpha (a reliability coefficient), scores mean the following:

- > .70 = acceptable
- > .80 = good
- > .90 = excellent

### Estimating reliability

Internal consistency reliability

## Correlation versus causality

One form of association is correlation ('correlation' implies linear). Other forms may be logarithmic or power-law associations.

The probability of Y for a given X is not the probability of Y: `P(Y/X) =/= P(Y)`

### DAG

Basic DAG patterns. There are:

- Edges
- Nodes

Edges are directional. 

The following patterns prove that correlation doesn't imply causation.

#### 1. Mediated pattern

X ----> Z ----> Y

The effect of X on Y is mediated by Z. For example: studying (X), improves knowledge (Z), which improves test scores.

X and Y are likely associated.

#### 2. Fork

X <---- Z ----> Y

X and Y are likely associated.

#### 3. Inverted fork

X ------> Z <----- Y

For example: The success of a restaurant (Z) is influenced by the food quality (X) and location (Y).

X and Y are NOT associated.


