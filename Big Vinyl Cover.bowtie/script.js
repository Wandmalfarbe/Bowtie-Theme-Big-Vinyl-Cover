
function $(el) {
	return document.getElementById(el);
}

function artworkUpdate(artworkURL) {

	if (artworkURL == "") {
		document.getElementById("artwork").src = "img/noartwork.jpg";
	} else {
		document.getElementById("artwork").src = artworkURL;
	}
}

function trackUpdate(theTrack) {

	var trackTitle = theTrack.title || "Nothing Playing";
	var trackArtist = theTrack.artist || "No Artist";
	var trackAlbum = theTrack.album || "No Album";
	//var trackGenre = theTrack.genre || "No Genre";
	var trackLength = theTrack.length || "0";

	$('title').innerHTML = trackTitle;
	$('artist').innerHTML = trackArtist;
	$('album').innerHTML = trackAlbum;
	$('length').innerHTML = '(' + secondsToHHMMSS(trackLength) + ')';

}

function secondsToHHMMSS(timeInSeconds) {
	var sec_num = parseInt(timeInSeconds, 10);
	var hours = Math.floor(sec_num / 3600);
	var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	var seconds = sec_num - (hours * 3600) - (minutes * 60);

	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	var time;
	if (hours == 0) {
		time = minutes + ':' + seconds;
	} else {
		time = hours + ':' + minutes + ':' + seconds;
	}
	return time;
}
