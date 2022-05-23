function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EzHdD9Hl-/model.json", modelready);
}

function modelready() {
  classifier.classify(gotresult);
}

function gotresult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_label").innerHTML = "I Can Hear - " + results[0].label;
    acc = (results[0].confidence * 100).toFixed(2);
    document.getElementById("result_confidence").innerHTML = "I Am " + acc + "% Confident";
    //checking

  }
}
