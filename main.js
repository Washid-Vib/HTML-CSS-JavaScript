let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.getElementById('voice-select');
let textInput = document.getElementById('text-input');
let speakButton = document.getElementById('speak-button');
let stopButton = document.getElementById('stop-button');
 function populateVoicelist(){
  voices = window.speechSynthesis.getVoices();
   voiceSelect.innerHTML = '';
   voices.forEach((voice , i) => {
  let option = new Option(voice.name , i);
     voiceSelect.add(option);
   });
 }
populateVoicelist();
if(speechSynthesis.onvoiceschanged !== undefined){
  speechSynthesis.onvoiceschanged = populateVoicelist;
}
speech.lang = "en";
voiceSelect.addEventListener('change' , () =>{
voice.speak = voices[voiceSelect.value];
  
});
speakButton.addEventListener('click' , () =>{
  speech.text = textInput.value;
  window.speechSynthesis.speak(speech);
});
stopButton.addEventListener('click' , () =>{
  window.speechSynthesis.cancel();
});