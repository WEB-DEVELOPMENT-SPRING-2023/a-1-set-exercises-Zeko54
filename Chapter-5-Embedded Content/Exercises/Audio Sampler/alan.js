// making an audio variable and creating a new audio object. setting the audio's soure path for the audio file.
var audio = new Audio();
audio.src = "Audio/ah-ha.mp3";

//repeating the same process and giving new variable for new audios
var audio2 = new Audio();
audio2.src = "Audio/back-of-the-net.mp3";

var audio3 = new Audio();
audio3.src = "Audio/bangoutoforder.mp3";

var audio4 = new Audio();
audio4.src = "Audio/dan.mp3";

var audio5 = new Audio();
audio5.src = "Audio/emailoftheevening.mp3";

var audio6 = new Audio();
audio6.src = "Audio/hellopartridge.mp3";

var audio7 = new Audio();
audio7.src = "Audio/iateascotchegg.mp3";

var audio8 = new Audio();
audio8.src = "Audio/imconfused.mp3";

var audio9 = new Audio();
audio9.src = "Audio/yikes.mp3";

var audio10 = new Audio();
audio10.src = "Audio2/a-man-has-fallen-into-the-river.mp3";

var audio11 = new Audio();
audio11.src = "Audio2/Auuuuugh.mp3";

var audio12 = new Audio();
audio12.src = "Audio2/BABAHAFT.mp3";

var audio13 = new Audio();
audio13.src = "Audio2/fool.mp3";

var audio14 = new Audio();
audio14.src = "Audio2/1000yearsofpain.mp3";

var audio15 = new Audio();
audio15.src = "Audio2/Neither.mp3";

var audio16 = new Audio();
audio16.src = "Audio2/wow.mp3";

var audio17 = new Audio();
audio17.src = "Audio2/Yeet.mp3";

//doing this for a total of 18 audios
var audio18 = new Audio();
audio18.src = "Audio2/Howabsurd.mp3";

//making a new variable called 'btn' and 'spc'. referencing 'btn' to  button element with the id [speechboxbutton] and
//referencing spc to textarea element with the id [texttospeech]
let btn = document.getElementById("speechboxbutton");
let spc = document.getElementById("texttospeech");

//adding an event listener called click to 'btn', then creating a new SpeechSynthesisUtterance object using the value of the 'spc'
//input element and assinging it to the 'utterThis' constant.lastly adding the speech api to speak the text represented by 'utterThis'.
btn.addEventListener("click", () => {
  const utterThis = new SpeechSynthesisUtterance(spc.value);
  window.speechSynthesis.speak(utterThis);
});
