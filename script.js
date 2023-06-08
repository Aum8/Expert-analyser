function analyzeText() {
  var text = document.getElementById("textInput").value;
  var score = calculateWordQualityScore(text);
  var level = determineExpertiseLevel(score);
  var output = document.getElementById("output");

  output.innerHTML = "Expertise level: " + level;
}

function calculateWordQualityScore(text) {
  // Define a list of words and their corresponding quality scores
  var wordScores = {
    good: 2,
    excellent: 3,
    bad: -1,
    poor: -2,
    average: 0
    // Add more words and scores as needed
  };

  var words = text.trim().toLowerCase().split(/\s+/);
  var score = 0;

  // Iterate through the words and sum up the scores
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word in wordScores) {
      score += wordScores[word];
    }
  }

  return score;
}

function determineExpertiseLevel(score) {
  if (score >= 5) {
    return "Expert";
  } else if (score >= 0) {
    return "Intermediate";
  } else {
    return "Beginner";
  }
}
