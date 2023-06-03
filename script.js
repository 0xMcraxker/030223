function playVideo() {
    var video = document.getElementById("video");
    var playButton = document.getElementById("play-button");
    video.play();
    playButton.style.display = "none";
}

const month = 2;
const day = 3;

var extractedDate = moment().month(month - 1).date(day);
var currentDate = moment();

var diffInMonths = currentDate.diff(extractedDate, 'months');


document.getElementsByClassName("tipo")[0].innerHTML = `&#x1F49C; Ya son ${diffInMonths} Meses..`;