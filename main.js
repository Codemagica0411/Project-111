Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90,
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHtML = '<img id="captured_image> '
    });
}

console.log('ml5 version:', ml5.version);

function modelLoaded() {
    console.log("Model Loaded")
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is" + prediction_1;
    speak_data2 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterrance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0PeDwXpQw/, modelReady')