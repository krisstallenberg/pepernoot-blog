---
speaker: Hennie van der Vliet
date: "2023-04-04"
lecture nr: [1]
course: Morphology and Semantics
title: "Morphology (part 1)"
slug: "morphology-and-semantics-1"
---

1. Free morphemes and bound morphemes have different kinds of meaning. Could you think
of a meaning for a bound morpheme that can also be expressed by a free morpheme? Do
you have an example?

The meaning of the bound morpheme 're-' as in:

- Restart
- Retry
- Redo

Can be expressed with the free morpheme 'again'. For example:

- Start again
- Try again
- Do again

Because the bound morpheme 're-' is derivational, I wondered whether only the meaning of derivational bound morphemes can be expressed by a free morpheme. Then I thought of the inflectional bound morpheme '-s' as in:

- Cats
- Chairs
- Cars

Whose meaning can also be expressed with the free morpheme 'more', indicating plurality. Therefore I concluded there are both inflectional and derivational bound morphemes whose meaning can be expressed in a free morpheme. 

2. Slide 28: watch the video for about 5 minutes (or as long as you like). Often precision vs. efficiency is given as an explanation for Zipf’s law on word frequency. Can you imagine why? Explain. Do you have any other suggestions?

Multiple reasons can be given to explain why the trade-off between precision and efficiency leads to the logarithmic distribution of word use as expressed by Zipf's law:

First, the most-frequently used words are almost exclusively function words. These words are essential for conveying grammatical relationships and connecting content words in a sentence. Function words serve the same grammatical and semantic function structurally, meaning a single function word, such as 'the' can be combined with any noun to indicate the definiteness of the noun. Similarly, the function word 'of' expresses the same grammatical relationship — namely that of possession — between many different Parts of Speech, for example:

- Two noun phrases: "the car of my brother"
- A noun phrase and a pronouns: "the book of hers"
- A noun phrase and a gerund: "the act of running"

This makes function words relatively effective, as a single word can be used productively to form many different phrase-level meanings.

Second, more frequently used content words refer to more general concepts than less frequently used words. During our Thursday seminar I gave the example of a taxonomy of the animal kingdom, where the word 'animal' can efficiently be applied to all animals, with a low level of precision. Additionally, sometimes the word 'animal' is used as a referrent to the class of all animals, thereby not sacrificing any precision. For example, when answering the question "What forms of life are identified with the word 'fauna'?", one might say "animal life" to refer to the set of all animals, rather than having to list all individual animal species. 

Third, it seems that because of how human cognition tends to rely on the relative 'strength' of neural pathways, preferential attachment occurs in many kinds of human behaviour. When synapses pass through neural pathways, they cause a strengthening process known as long-term potentiation. Long-term potentiation contributes to the formation of habitual patterns that in turn strengthen the neural pathways, creating a self-reinforcing feedback loop which leads to power law distributions throughout human behaviour. For example in the supermarkets one visits or the time one spends socializing with others individuals.

3. Slide 33 and many others: how many free morphemes do you expect in a language like Dutch or English? Explain. This is not a simple question, there is no right answer, just think of a way to make an estimation.

Modern English has an average of 1.68 morphemes per word. A word is a combination of one free morpheme and one or more free or bound morphemes.

There are an estimated 1 million lexemes in the English language, which can be:

- Free morphemes
- Derivations (a free morpheme plus one or more bound morphemes)
- Compounds (combinations of two or more free morphemes)

Most lexemes are derivations or compounds, both reusing free morphemes. My guess would be that around 5-10% of all lexemes are free morphemes, which amounts to 50,000 to 100,000 free morphemes in languages like English or Dutch.

To make a better guess, one could write a script to:

1. Parse an English dictionary.
2. For each word in the dictionary, use a morphological analyzer to break it down into its constituent morphemes. 
3. For each new free morpheme encountered, add it an array of free morphemes.
4. Sum the amount of items in the array of free morphemes. 

4. On the last slides (35 – 40): Is cognitively realistic description important? Why? Can you think of cognitively unreal descriptions that are descriptively elegant and/or empirically real? How can you tell a description is empirically or cognitively realistic?

I think cognitively realistic descriptions of morphology are important because morphology as a subdomain of linguistics is concerned with human language. If linguists study human language, then in order to understand human language, we need to find theories regarding how humans process language, rather than for example how computers can process language.

Intuitively, one might say elegance is a prerequisite for cognitively realistics descriptions, because simple rules can be systemically implemented easier than complex rulesets. However, human language is full of complex rulesets, for example how the gender of nouns influences the articles in many languages. Therefore, we can conclude that elegance isn't required for cognitively realistic descriptions.

The opposite, a descriptively elegant, yet coginitively unreal description is also possible. Take for example the rule-based system for creating the plural form of nouns in English, where most nouns add the suffix "-s" to form the plural. This rule works for many nouns, but there are many exceptions that do not follow this rule, such as "child" becoming "children" and "mouse" becoming "mice". Despite being an elegant and simple rule, it is not cognitively realistic, as it cannot account for these exceptions, which seem to be learned through memorization rather than rule application.

When assessing the degree of cognitive realism, we need at least a theory of how humans process language. There are multiple ways in which we can acquire such a theory, for example through studying how humans learn a first or second language, or by 'teaching' computers to do the same. In the field of computational linguistics, traditional rule-based systems have been outperformed in many ways by artificial intelligence-based systems in recent decades. Interestingly enough, the artificial intelligence-based method of natural language processing is based on simulating human cognition in computers, giving us a good proof for the hypothesis that cognitively language processing and acquisition is a bottom-up process, based on pattern-recognition rather than rule application. This theory is based on the idea that language processing involves the activation of interconnected neural nodes that represent words and their morphological features, and that the strength of these connections determines the likelihood of a particular word or form being produced or recognized. If this is the case, the morphological descriptions in humans are likely far from elegant.

Although, one might argue that this isn't neccesarily the case. As second language acquisition, which surely is a cognitive affair just as much as first language acquisition, seems to be less reliant on pattern matching and more on rule application. Take for example the process of learning the past tense in English. While children seem to rely heavily on memorization and pattern recognition, adult second language learners often learn the past tense through the application of rules, such as adding "-ed" to regular verbs and using irregular forms for certain verbs. This suggests that there may be multiple cognitive mechanisms involved in language processing and acquisition, and that different mechanisms may be more or less dominant in different contexts.

In order to determine whether a description is empirically or cognitively realistic, it is necessary to test it against empirical data. For example, we can examine language corpora to see if a particular morphological pattern or rule is actually used in natural language, or we can conduct psycholinguistic experiments to test how humans process morphological information in real time. We can also use neuroimaging techniques to investigate the neural correlates of morphological processing, and compare these with the predictions of cognitive theories.

Overall, I think it is important for morphological descriptions to be cognitively realistic, as this can help us understand how humans process and acquire language. However, we should also be careful not to assume that all aspects of language processing and acquisition are based on the same cognitive mechanisms, as there may be important individual and contextual differences that influence how a certain morphological rule is congitized.