var speakBtn = document.querySelector('#speakBtn');
if (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition) {
    var SpeechRecoginition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition;
    var recoginition = new SpeechRecoginition();
    speakBtn.addEventListener('click', function (e) {
        recoginition.start();
    }, false);
    speakBtn.addEventListener('result', function (e) {
        console.log(e);
        var result = e.result[0][0].trascript;
        console.log(result);
        if (result.toLowerCase() === 'luz') {
            document.body.classList.toggle('luz-apagada');
        }
    }, false);
} else {
    console.log("Função não suportada");
}