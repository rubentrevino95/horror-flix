var movies = [
    {
        series: 'Halloween',
        urlList: []
    },
    {
        series: 'Nightmare on Elm Street',
        urlList: []
    },
    {
        series: 'Scream',
        urlList: []
    },
    {
        series: 'Childs Play',
        urlList: []
    },
    {
        series: 'Texas Chainsaw Massacre',
        urlList: []
    },
    {
        series: 'Friday the 13th',
        urlList: []
    },
    {
        series: 'Wildcard',
        urlList: []
    }
];


var video_list = [
    "https://h-flix.s3.us-east-2.amazonaws.com/friday+the+13th+collection/Friday+The+13th+Part+1.mp4",
    "https://h-flix.s3.us-east-2.amazonaws.com/friday+the+13th+collection/Friday+The+13th+Part+2.mp4",
    "https://h-flix.s3.us-east-2.amazonaws.com/friday+the+13th+collection/Friday+The+13th+Part+3.mp4",
    "https://h-flix.s3.us-east-2.amazonaws.com/friday+the+13th+collection/Friday+The+13th+Part+4+The+Final+Chapter.mp4"
];
var video_index = 0;
var video_player = null;

console.log(video_index);

function onload() {
    console.log("body loaded");
    video_player = document.getElementById("video");
    video_player.setAttribute("src", video_list[video_index]);
    video_player.play();
}

function onVideoEnded() {
    console.log("video ended");
    if(video_index < video_list.length - 1) {
        video_index++;
    }
    else {
        video_index = 0;
    }
    video_player.setAttribute("src", video_list[video_index]);
    video_player.play();
}
