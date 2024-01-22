function preload() {
    classifier=ml5.imageClassifier('DoodleNet')
}
function setup() {
    canvas = createCanvas(280,280)
    canvas.center()
    background("white")
    canvas.mouseReleased(classify_Canvas)
    s=window.speechSynthesis
}
function draw() {
    strokeWeight(13)
    stroke(0)
    if(mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY)
        
    }
}
function classify_Canvas() {
    classifier.classify(canvas,got_Result)
}
function got_Result(error,results) {
    if(error) {
        console.error(error)
    }
    else {
        console.log(results)
        document.getElementById('Label').innerHTML="label: "+results[0].label;
        document.getElementById('Confidence').innerHTML="confidence: "+Math.round(results[0].confidence*100)+"%";
        u=new SpeechSynthesisUtterance(results[0].label)
        s.speak(u)
    }
}
function clearCanvas() {
    background("#FF7F50")
}
