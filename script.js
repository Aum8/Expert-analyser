function determineExpertiseLevel(text) {
  var wordScores = {
    // Define your dictionary of words with values ranging between -1 and 1
    good: 0.8,
    excellent: 1,
    bad: -0.8,
    poor: -1,
    average: 0
    // Add more words and scores as needed
  };

  var words = text.trim().toLowerCase().split(/\s+/);
  var score = 0;

  // Calculate the overall score based on the words in the text
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word in wordScores) {
      score += wordScores[word];
    }
  }

  // Determine the expertise level based on the overall score
  if (score >= 0.8) {
    return "Expert";
  } else if (score >= 0.2) {
    return "Intermediate";
  } else {
    return "Beginner";
  }
}
