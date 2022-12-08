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



infoLink.addEventListener("click", () => {
  // @ts-ignore
  document.getElementById("infoLink").href = "index.html"; //need to add specific pages

})

downVote.addEventListener("click", () => {
  active++;
  if (active > steps.length) {
    window.location.href = "results.html";    
  }
  updateProgress();
  getSongSource(active);
});
  
upVote.addEventListener("click", () => {
  active++;
  // @ts-ignore
  
  // @ts-ignore
  sessionStorage.setItem(active-1, 'true');
 // window.alert(likedContent[active-1]);
  
  if (active > steps.length) {
    window.location.href = "results.html"; 
  }
  updateProgress();
  getSongSource(active-1);
  
});

progressNext.addEventListener("click", () => {
  active++;
  if (active > steps.length) {
    //active = steps.length;
    window.location.href = "results.html"; 
  }
  updateProgress();
  getSongSource(active);
});

progressPrev.addEventListener("click", () => {
  active--;
  if (active < 1) {
    active = 1;
  }
  updateProgress();
  getSongSource(active);
});

function getSongSource(activeTrack){
 // window.alert("Index in getSongSource: " + activeTrack);
  // @ts-ignore
  var srcLink = "";
  switch (activeTrack) {
  case 1:
    // @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/track/6GqqGv8frU7kqzXkm2rewI?utm_source=generator&theme=0";
    return srcLink = "https://open.spotify.com/embed/track/6GqqGv8frU7kqzXkm2rewI?utm_source=generator&theme=0";
   
  case 2:
    // @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/track/1HSVpIU0XU1WuwiBLBWAZd?utm_source=generator";
    return srcLink = "https://open.spotify.com/embed/track/1HSVpIU0XU1WuwiBLBWAZd?utm_source=generator";
  
  case 3:
	// @ts-ignore
	document.getElementById("playContent").src = "https://open.spotify.com/embed/track/0aKAV3r05KViNXmUEZARZy?utm_source=generator";
	return srcLink = "https://open.spotify.com/embed/track/0aKAV3r05KViNXmUEZARZy?utm_source=generator";
	break;
  case 4:
    // @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/track/6s0zNBSqmxWlJ1CXsOocXy?utm_source=generator";
    return srcLink = "https://open.spotify.com/embed/track/6s0zNBSqmxWlJ1CXsOocXy?utm_source=generator";

  case 5:
  	// @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/album/0os1Gz3XMM6dduZSMxVuXs?utm_source=generator";
    return srcLink = "https://open.spotify.com/embed/album/0os1Gz3XMM6dduZSMxVuXs?utm_source=generator";

  
  case 6:
  	// @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/album/6CtZVmlfVS5SSUBHnjgFKG?utm_source=generator";
    return srcLink = "https://open.spotify.com/embed/album/6CtZVmlfVS5SSUBHnjgFKG?utm_source=generator";
    
  case 7:
  	// @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/track/5iSEsR6NKjlC9SrIJkyL3k?utm_source=generator";
    return srcLink = "https://open.spotify.com/embed/album/6CtZVmlfVS5SSUBHnjgFKG?utm_source=generator";
   
  case 8:
  	// @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/track/0j2T0R9dR9qdJYsB7ciXhf?utm_source=generator";
    return srcLink = "https://open.spotify.com/embed/track/0j2T0R9dR9qdJYsB7ciXhf?utm_source=generator";
   
  case 9:
  	// @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX9tPFwDMOaN1?utm_source=generator";
    return srcLink = "https://open.spotify.com/embed/playlist/37i9dQZF1DX9tPFwDMOaN1?utm_source=generator";
    
  case 10:
  	// @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX2SFBzpAPi7n?utm_source=generator";
    return srcLink = "https://open.spotify.com/embed/playlist/37i9dQZF1DX2SFBzpAPi7n?utm_source=generator";
 
    
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
  progressBar.style.width = 
    ((active - 1) / (steps.length - 1)) * 100 + "%";
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

  
for (var i=0; i < likedContent.length; i++){
   
   var parent = document.getElementById("wrapper");   	
   let space = document.createElement("div");
   let space2 = document.createElement("div");
   let tile = document.createElement("div");
   let container2 = document.createElement("label");
   let iframe = document.createElement("iframe");
   let check = document.createElement("input");
   let checkmark = document.createElement("span");
	   
	    // @ts-ignore
	    if(sessionStorage.getItem(i)=== "true"){
        count++;
        
	     likedContent[i] = true;
	     window.alert("Index: " + i);
	     
	     
	     // @ts-ignore
	     parent.appendChild(space);
	     space.className = "space";
	     
	     // @ts-ignore
	     parent.appendChild(tile);
	     tile.className = "tile";
	     	     
	     tile.appendChild(container2);
	     container2.className = "container2";
	
		 container2.appendChild(iframe);
	     iframe.id = "playContent";
	     //getSongSource(i);
	     // @ts-ignore
	     iframe.style = "border-radius:12px"
	     iframe.src = getSongSource(i);
	     iframe.width = "100%";
	     iframe.height = "100px";
	     iframe.frameBorder="0";
	     iframe.allowFullscreen= false;
	     iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
	     // @ts-ignore
	     iframe.loading = "lazy";
	     
	     container2.appendChild(check);
	     
	     check.type = "checkbox";
	     check.checked = true;
	     
	     container2.appendChild(checkmark);
	     checkmark.className = "checkmark";
	     
	     if((count%2) == 0){
	         // @ts-ignore
		     parent.appendChild(space2);
		     space2.className = "space";
      	 }	    
	    }
 }   
}
function setStatic() {
    window.alert("In setStatic");
 	var wrap = document.getElementById("wrapper");
  	let tile2 = document.createElement("div");
  	let tile3 = document.createElement("div");
  	let switchClass = document.createElement("label");
  	let check2 = document.createElement("input");
  	let slider = document.createElement("span");
  	let sliderText = document.createElement("p");
  	let playlist = document.createElement("button");
  	
 	wrap.appendChild(tile2);
 	tile2.className = "tile";
 	
 	wrap.appendChild(tile3);
 	tile3.className = "tile";
 	
 	
 	// @ts-ignore
 	tile2.appendChild(switchClass);
 	switchClass.className = "switch";
 	
 	switchClass.appendChild(check2);
 	check2.type = ("checkbox");
 	window.alert("2");
 	
 	tile2.appendChild(slider);
 	slider.className = "slider round";
 	
 	tile2.appendChild(sliderText);
 	sliderText.innerText = "Allow Spotify to add similar content";
 	
 	tile3.appendChild(playlist);
 	playlist.className = "btn";
 	playlist.innerText = "Create Playlist";
 	// @ts-ignore
 	playlist.onclick = "window.location='mainMusic.html';";	
 	window.alert("Here");
  }
