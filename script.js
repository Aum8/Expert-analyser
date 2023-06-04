function analyzeText() {
  var text = document.getElementById("textInput").value;
  var level = calculateExpertiseLevel(text);
  var output = document.getElementById("output");

  output.innerHTML = "Expertise level: " + level;
}

function calculateExpertiseLevel(text) {
  // Your logic to determine the expertise level goes here
  // You can use any algorithm or criteria you prefer

  // Example logic:
  var wordCount = text.trim().split(" ").length;
  if (wordCount < 10) {
    return "Beginner";
  } else if (wordCount < 50) {
    return "Intermediate";
  } else {
    return "Expert";
  }
}
