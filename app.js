function analyzeSentence(sentence) {
  // Initialize counters
  let sentenceLength = 0;
  let wordCount = 0;
  let vowelCount = 0;

  // Iterate through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence.charAt(i);

    // Increment the sentence length counter for each character
    sentenceLength++;

    // Check if the character is a letter (not a space or punctuation)
    if (char.match(/[a-zA-Z]/)) {
      // Check if the character is a vowel (case-insensitive)
      if (char.match(/[aeiouAEIOU]/)) {
        vowelCount++;
      }
    }

    // Check if the character is a space (indicating a new word)
    if (char === ' ') {
      wordCount++;
    }
  }

  // Increment wordCount for the last word (since it doesn't end with a space)
  wordCount++;

  // Display the results
  console.log('Sentence Length:', sentenceLength);
  console.log('Number of Words:', wordCount);
  console.log('Number of Vowels:', vowelCount);
}

// Example usage:
const inputSentence = 'This is an example sentence.';
analyzeSentence(inputSentence);
