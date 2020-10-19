
// var video_list = [
//     {
//         franchise: "Halloween",
//         movies: ["videos/Halloween 2.mp4"]
//     },
//     {
//         franchise: "A Nightmare on Elm Street",
//         movies: [""]
//     },
//     {
//         franchise: "Friday the 13th",
//         movies: [""]
//     },
// ];
// var video_index = video_list[0].movies[0];

var video_list = ["videos/Halloween 2.mp4", "videos/Halloween 3.mp4", "vidoes/Halloween 4.mp4", "vidoes/Halloween 5 The Revenge of Michael Myers.mp4", "vidoes/Halloween 6 The Curse of Michael Myers.mp4", "vidoes/Halloween 7 H20.mp4", "vidoes/Halloween 8  Resurrection.mp4"];
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
