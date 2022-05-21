function GetSong(){
    var song = [
        {song1:''},
        {song2:''}
    ]


var rando = song[Math.floor(Math.random() * song.length)];

document.getElementById("song1").src=rando.song1;

$(".button").click(function() {
    var rand = Math.floor(Math.random() * colors.length);