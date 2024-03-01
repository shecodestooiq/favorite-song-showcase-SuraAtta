function displaySongInfo() {
    event.preventDefault();
    var songName = document.getElementById("songName").value;
    var songLink = document.getElementById("songLink").value;
    var description = document.getElementById("description").value;
    var year = document.getElementById("year").value;
    
    document.getElementById("displaySongName").innerHTML = songName;
    document.getElementById("displayDescription").innerHTML = description;
    document.getElementById("displayYear").innerHTML ="I first listend to this song in " + year;

    var fullLink = "https://www.youtube.com/embed/" + songLink;

    document.getElementById("songVideo").innerHTML = '<iframe width="560" height="315" src="' + fullLink + '" frameborder="1" allowfullscreen></iframe>';
    document.getElementById("songInfo").style.display = "none";

    document.getElementById("displayArea").style.display = "block";
}
module.exports = {
    displaySongInfo: displaySongInfo,
};