var movies = [
    {
        series: 'Halloween',
        urlList: [
            'https://h-flix.s3.us-east-2.amazonaws.com/Halloween+Collection/Halloween+(1978).mp4',
            'https://h-flix.s3.us-east-2.amazonaws.com/Halloween+Collection/Halloween+2.mp4',
            'https://h-flix.s3.us-east-2.amazonaws.com/Halloween+Collection/Halloween+3.mp4',
            'https://h-flix.s3.us-east-2.amazonaws.com/Halloween+Collection/Halloween+4.mp4',
            'https://h-flix.s3.us-east-2.amazonaws.com/Halloween+Collection/Halloween+5+The+Revenge+of+Michael+Myers.mp4',
            'https://h-flix.s3.us-east-2.amazonaws.com/Halloween+Collection/Halloween+6+The+Curse+of+Michael+Myers.mp4',
            'https://h-flix.s3.us-east-2.amazonaws.com/Halloween+Collection/Halloween+7+H20.mp4',
            'https://h-flix.s3.us-east-2.amazonaws.com/Halloween+Collection/Halloween+8++Resurrection.mp4'
        ]
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
        urlList: [
            "https://h-flix.s3.us-east-2.amazonaws.com/friday+the+13th+collection/Friday+The+13th+Part+1.mp4",
            "https://h-flix.s3.us-east-2.amazonaws.com/friday+the+13th+collection/Friday+The+13th+Part+2.mp4",
            "https://h-flix.s3.us-east-2.amazonaws.com/friday+the+13th+collection/Friday+The+13th+Part+3.mp4",
            "https://h-flix.s3.us-east-2.amazonaws.com/friday+the+13th+collection/Friday+The+13th+Part+4+The+Final+Chapter.mp4"
        ]
    },
    {
        series: 'Wildcard',
        urlList: []
    }
];


let halloween = movies[0].urlList;
let elmStreet = movies[1].urlList;
let scream = movies[2].urlList;
let childsPlay = movies[3].urlList;
let texasChainsaw = movies[4].urlList;
let friday = movies[5].urlList;
let wildcard = movies[6].urlList;
console.log(halloween);

var video_index = 0;
var video_player = null;

// storing url arrays into new array
let franchises = new Array(halloween, elmStreet, scream, childsPlay, texasChainsaw, friday, wildcard);



//src switch
function onload() {
    video_player = document.getElementById("video");
    // set a condition here

    // sets src
    video_player.setAttribute("src", franchises[5][video_index]);
    video_player.play();
}

//incrementor
function onVideoEnded() {
    console.log("video ended");
    if(video_index < franchises[5].length - 1) {
        video_index++;
    }
    else {
        video_index = 0;
    }
    video_player.setAttribute("src", franchises[5][video_index]);
    video_player.play();
}
