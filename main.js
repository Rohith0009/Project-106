function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EzHdD9Hl-/model.json", modelready);
}

function modelready() {
  classifier.classify(gotresult);
}

function gotresult(error, result) {
  console.log("Sucessfully Got The Result👍");
}
