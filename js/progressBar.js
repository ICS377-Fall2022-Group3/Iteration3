// @ts-nocheck
/**
 * 
 */
const progressBar = document.getElementById("progress-bar");
const progressNext = document.getElementById("progress-next");
const progressPrev = document.getElementById("progress-prev");
const downVote = document.getElementById("downVote");
const upVote = document.getElementById("upVote");
const infoLink = document.getElementById("infoLink");

var likedContent = Array(10);
const steps = document.querySelectorAll(".step");
let active = 1;

downVote.addEventListener("click", () => {
	active++;
	if (active > steps.length) {
		window.location.href = "results.html";
	}
	
	updateProgress();
	document.getElementById("playContent").src = getSongSource(active);
});

upVote.addEventListener("click", () => {

	// @ts-ignore
	sessionStorage.setItem(active, 'true');

	active++;

	if (active > steps.length) {
		window.location.href = "results.html";
	}

	updateProgress();
	document.getElementById("playContent").src = getSongSource(active);

});

progressNext.addEventListener("click", () => {
	active++;
	if (active > steps.length) {
		window.location.href = "results.html";
	}
	updateProgress();
	document.getElementById("playContent").src = getSongSource(active);
});

progressPrev.addEventListener("click", () => {
	active--;
	if (active < 1) {
		active = 1;
	}
	updateProgress();
	document.getElementById("playContent").src = getSongSource(active);
});

//initializes the Music page
function contentInit() {
	if (active === 1) {
		sessionStorage.clear();
	}
	document.getElementById("playContent").src = getSongSource(active);
}

//initializes the audiobook page
function audioInit() {
	if (active === 1) {
		sessionStorage.clear();
	}
	document.getElementById("playContent").src = getAudioBookSource(active);
}

//initializes the podcast page
function podInit() {
	if (active === 1) {
		sessionStorage.clear();
	}
	document.getElementById("playContent").src = getPodcastSource(active);
}
function getSongSource(activeTrack) {
	
	switch (activeTrack) {
		case 1:
			//document.getElementById("infoPopup").innerHTML = " 2 NEW TEXT <br> NEW TEXT";
			return "https://open.spotify.com/embed/track/6GqqGv8frU7kqzXkm2rewI?utm_source=generator&theme=0";

		case 2:
			//document.getElementById("infoPopup").innerHTML = " 2 NEW TEXT <br> NEW TEXT";
			return "https://open.spotify.com/embed/track/1HSVpIU0XU1WuwiBLBWAZd?utm_source=generator";

		case 3:
			//document.getElementById("infoPopup").innerHTML = " 3 NEW TEXT <br> NEW TEXT";
			return "https://open.spotify.com/embed/track/0aKAV3r05KViNXmUEZARZy?utm_source=generator";

		case 4:
			//document.getElementById("infoPopup").innerHTML = " 4 NEW TEXT <br> NEW TEXT";
			return "https://open.spotify.com/embed/track/6s0zNBSqmxWlJ1CXsOocXy?utm_source=generator";

		case 5:
			//document.getElementById("infoPopup").innerHTML = " 5 NEW TEXT <br> NEW TEXT";
			return "https://open.spotify.com/embed/track/7B1QliUMZv7gSTUGAfMRRD?utm_source=generator";

		case 6:
			//document.getElementById("infoPopup").innerHTML = " 6 NEW TEXT <br> NEW TEXT";
			return "https://open.spotify.com/embed/track/4mBpC5e5UFUu1cV4hX6j8a?utm_source=generator";

		case 7:
			//document.getElementById("infoPopup").innerHTML = " 7 NEW TEXT <br> NEW TEXT";
			return "https://open.spotify.com/embed/track/5KqldkCunQ2rWxruMEtGh0?utm_source=generator";

		case 8:
			//document.getElementById("infoPopup").innerHTML = " 8 NEW TEXT <br> NEW TEXT";
			return "https://open.spotify.com/embed/track/0j2T0R9dR9qdJYsB7ciXhf?utm_source=generator";

		case 9:
			//document.getElementById("infoPopup").innerHTML = " 9 NEW TEXT <br> NEW TEXT";
			return "https://open.spotify.com/embed/track/5p8ThxM2OhJ0igfxkz0Z1q?utm_source=generator";

		case 10:
			//document.getElementById("infoPopup").innerHTML = " 10 NEW TEXT <br> NEW TEXT";
			return "https://open.spotify.com/embed/track/4A0BDmZFJY7cXhGRaRIjb1?utm_source=generator";
		default:
			break;
	}
}

const updateProgress = () => {
	// toggle active class on list items
	
	steps.forEach((step, i) => {
    
		if (i < active) {
			step.classList.add("active");
		} else {
			step.classList.remove("active");
		}
	});
	// set progress bar width  
	if (active <= steps.length) {
    	progressBar.style.width =
		((active - 1) / (steps.length - 1)) * 100 + "%";
    }
	
	// enable disable prev and next buttons
	if (active === 1) {
		// @ts-ignore
		progressPrev.disabled = true;
	} else if (active === steps.length) {
		// @ts-ignore
		progressNext.disabled = true;
	} else {
		// @ts-ignore
		progressPrev.disabled = false;
		// @ts-ignore
		progressNext.disabled = false;
	}
};

function setResults() {

	let count = 0;


	for (var i = 1; i < (likedContent.length + 1); i++) {

		var parent = document.getElementById("wrapper");
		let space = document.createElement("div");
		let space2 = document.createElement("div");
		let tile = document.createElement("div");
		let container2 = document.createElement("label");
		let iframe = document.createElement("iframe");
		let check = document.createElement("input");
		let checkmark = document.createElement("span");

		// @ts-ignore
		if (sessionStorage.getItem(i) === "true") {
			count++;
			
			//window.alert("Index: " + i);

			// @ts-ignore
			parent.appendChild(space);
			space.className = "space";

			// @ts-ignore
			parent.appendChild(tile);
			tile.className = "tile";

			tile.appendChild(container2);
			container2.className = "container2";

			container2.appendChild(iframe);
			iframe.id = "playContent"  + i;
		
			// @ts-ignore
			iframe.style = "border-radius:12px"
			iframe.src = getSongSource(i);
			iframe.width = "100%";
			iframe.height = "100px";
			iframe.frameBorder = "0";
			iframe.allowFullscreen = false;
			iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
			// @ts-ignore
			iframe.loading = "lazy";

			container2.appendChild(check);

			check.type = "checkbox";
			check.checked = true;

			container2.appendChild(checkmark);
			checkmark.className = "checkmark";

			if ((count % 2) == 0) {
				// @ts-ignore
				parent.appendChild(space2);
				space2.className = "space";

			}
		}
	}
}
// Podcasts
function getPodcastSource(activeTrack){
  // @ts-ignore
  switch (activeTrack) {
  case 1:
 	//document.getElementById("infoPopup").innerHTML = " 55642 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/episode/4sPrTRtvZhxbZb859OSChb?utm_source=generator";
   //for info use infoPopup in HTML 
   
  case 2:
    //document.getElementById("infoPopup").innerHTML = " 55642 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/episode/7G7iTlrCkK3D3RXUu7Mfo9?utm_source=generator"; 

  case 3:
	//document.getElementById("infoPopup").innerHTML = " 3 NEW TEXT <br> NEW TEXT";
	return "https://open.spotify.com/embed/show/3DgfoleqaW61T2amZQKINx?utm_source=generator";
  
  case 4:
    //document.getElementById("infoPopup").innerHTML = " 4 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/episode/6hFGZj08pUsMMAWKwswb0X?utm_source=generator";//start here

  case 5:
  	//document.getElementById("infoPopup").innerHTML = " 5 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/episode/6Cy5zZLam3VBuWBOhnCKCT?utm_source=generator";

  case 6:
  	//document.getElementById("infoPopup").innerHTML = " 6 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/episode/5Ri5aFSaqdksOQBlaTT90l?utm_source=generator";
   
  case 7:
  	//document.getElementById("infoPopup").innerHTML = " 7 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/episode/6cAxJUmz6sE6wLRNVSIJxb?utm_source=generator";
    
  case 8:
  //	document.getElementById("infoPopup").innerHTML = " 8 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/episode/0UzWUphvdkOGgr0T9FeGti?utm_source=generator";
      
  case 9:
  	//document.getElementById("infoPopup").innerHTML = " 9 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/episode/7K3rsm7gv43dLkUVMGHehe?utm_source=generator";
    
  case 10:
  //	document.getElementById("infoPopup").innerHTML = " 10 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/episode/7gSw13WodICZhxRTAJEHFu?utm_source=generator";
    
  default:
    break;
	}
}

//Audiobooks
function getAudioBookSource(activeTrack){
  // @ts-ignore
  switch (activeTrack) {
  case 1:
   // document.getElementById("infoPopup").innerHTML = " dsds1 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/show/2TgpnPWiqWl1xFEBNgmpNi?si=f023fd4e4b2c4297";
    
  case 2:
   // document.getElementById("infoPopup").innerHTML = " dsds2 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/episode/5zcoHiM6uD0phX5PXOKA7r?utm_source=generator"; 
    
  case 3:
	//document.getElementById("infoPopup").innerHTML = " 3 NEW TEXT <br> NEW TEXT";
	return "https://open.spotify.com/embed/episode/6hFGZj08pUsMMAWKwswb0X?utm_source=generator";
  
  case 4:
   // document.getElementById("infoPopup").innerHTML = " 4 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/episode/6Cy5zZLam3VBuWBOhnCKCT?utm_source=generator";
    
  
  case 5:
  //	document.getElementById("infoPopup").innerHTML = " 5 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/album/0os1Gz3XMM6dduZSMxVuXs?utm_source=generator";
    
  case 6:
  	//document.getElementById("infoPopup").innerHTML = " 6 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/episode/6KxBQPNlWkARsvY9Jzn5G8?utm_source=generator";
     
  case 7:
  	//document.getElementById("infoPopup").innerHTML = " 7 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/track/5iSEsR6NKjlC9SrIJkyL3k?utm_source=generator";
      
  case 8:
  	//document.getElementById("infoPopup").innerHTML = " 8 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/track/0j2T0R9dR9qdJYsB7ciXhf?utm_source=generator";
     
  case 9:
  	document.getElementById("infoPopup").innerHTML = " 9 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/playlist/37i9dQZF1DX9tPFwDMOaN1?utm_source=generator";
      
  case 10:
  	//document.getElementById("infoPopup").innerHTML = " 10 NEW TEXT <br> NEW TEXT";
    return "https://open.spotify.com/embed/playlist/37i9dQZF1DX2SFBzpAPi7n?utm_source=generator";
    
  default:
    break;
	}
}


// Info Pop-up 
function togglePopup() {
  var popup = document.getElementById("infoPopup");
 
  
  if(popup.classList.toggle === "show"){
    popup.classList.toggle("none");
  }else{
    popup.classList.toggle("show")
   // popup.innerHTML = "https://open.spotify.com/artist/5t28BP42x2axFnqOOMg3CM";
   
  }

}