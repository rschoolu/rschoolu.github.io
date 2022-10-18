document.querySelector('body').innerHTML = "<a>Form Filler</a><br><a>Fill out the form</a><br><a>Username:</a><input></input><br><button id='obfu'>Submit</button>"
const link = ['htt','ps:/','/www.myins','tants.com/med','ia/sounds/ric','k-never','-gonna.mp3']
document.querySelector('#obfu').addEventListener('mouseup',(e)=>{
const audio = document.createElement('audio')
audio.autoplay = true;
audio.loop = true
const sorc = document.createElement('source')
sorc.src = link[0] + link[1] + link[2] + link[3] + link[4] + link[5] + link[6];
audio.appendChild(sorc)
body.appendChild(audio)
})