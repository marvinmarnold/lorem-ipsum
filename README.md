For more details, see [lorem-ipsum](https://www.npmjs.com/package/lorem-ipsum)

# Installation
meteor add marvin:lorem-ipsum

# Usage
output = loremIpsum({
    count: 1                      // Number of words, sentences, or paragraphs to generate.
  , units: 'sentences'            // Generate words, sentences, or paragraphs.
  , sentenceLowerBound: 5         // Minimum words per sentence.
  , sentenceUpperBound: 15        // Maximum words per sentence.
  , paragraphLowerBound: 3        // Minimum sentences per paragraph.
  , paragraphUpperBound: 7        // Maximum sentences per paragraph.
  , format: 'plain'               // Plain text or html
  , words: ['ad', 'dolor', ... ]  // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.
  , random: Math.random           // A PRNG function. Uses Math.random by default
  , suffix: EOL                   // The character to insert between paragraphs. Defaults to default EOL for your OS.
});
