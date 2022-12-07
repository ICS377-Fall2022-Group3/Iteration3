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
  getSongSource(active);
  
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
  // @ts-ignore
  switch (activeTrack) {
  case 1:
    // @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/track/6GqqGv8frU7kqzXkm2rewI?utm_source=generator&theme=0";
    break;
  case 2:
    // @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/track/1HSVpIU0XU1WuwiBLBWAZd?utm_source=generator";
    break;
  case 3:
	// @ts-ignore
	document.getElementById("playContent").src = "https://open.spotify.com/embed/track/0aKAV3r05KViNXmUEZARZy?utm_source=generator";
	break;
  case 4:
    // @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/track/6s0zNBSqmxWlJ1CXsOocXy?utm_source=generator";
    break;
  case 5:
  	// @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/album/0os1Gz3XMM6dduZSMxVuXs?utm_source=generator";
    break;
  
  case 6:
  	// @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/album/6CtZVmlfVS5SSUBHnjgFKG?utm_source=generator";
    break;  
  case 7:
  	// @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/track/5iSEsR6NKjlC9SrIJkyL3k?utm_source=generator";
    break;  
  case 8:
  	// @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/track/0j2T0R9dR9qdJYsB7ciXhf?utm_source=generator";
    break;  
  case 9:
  	// @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX9tPFwDMOaN1?utm_source=generator";
    break;  
  case 10:
  	// @ts-ignore
    document.getElementById("playContent").src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX2SFBzpAPi7n?utm_source=generator";
    break;
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
  
	for (var i=0; i < likedContent.length; i++){
   window.alert("liked Content length: " + likedContent.length)
    // @ts-ignore
    window.alert("SessionGetItem: " + "Index: " + i + sessionStorage.getItem(i));
	   
	    // @ts-ignore
	    if(sessionStorage.getItem(i)=== "true"){
        
	     likedContent[i] = true;
	     window.alert("liked Content after setting: " + likedContent[i]);
	     
	     let space = document.createElement("div");
	     let tile = document.createElement("div");
	     let container2 = document.createElement("label");
	     let iframe = document.createElement("iframe");
	     let check = document.createElement("input");
	     let checkmark = document.createElement("span");
	     space.className = "space";
	     document.appendChild(space);
	     tile.className = "tile";
	     document.appendChild(tile);
	     container2.className = "container2";
	     document.appendChild(container2);
	     iframe.id = "playContent";
	     // @ts-ignore
	     iframe.style = "border-radius:12px"
	     iframe.src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX2SFBzpAPi7n?utm_source=generator";
	     iframe.width = "100%";
	     iframe.height = "100";
	     iframe.frameBorder="0";
	     document.appendChild(iframe);
	     check.type = "checkbox";
	     check.checked = true;
	     checkmark.className = "checkmark";
	     document.appendChild(check);
	     document.appendChild(checkmark);
	    }
 }    		
						
}

