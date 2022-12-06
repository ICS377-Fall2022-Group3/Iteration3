/**
 * 
 */
const progressBar = document.getElementById("progress-bar");
const progressNext = document.getElementById("progress-next");
const progressPrev = document.getElementById("progress-prev");
const downVote = document.getElementById("downVote");
const upVote = document.getElementById("upVote");
const infoLink = document.getElementById("infoLink");

const steps = document.querySelectorAll(".step");
let active = 1;
let likedContent = new Array(10);

infoLink.addEventListener("click", () => {
  // @ts-ignore
  document.getElementById("infoLink").href = "index.html";
})

downVote.addEventListener("click", () => {
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();
  getSongSource();
});
  
upVote.addEventListener("click", () => {
  likedContent[active-1] = "song";
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();
  getSongSource();
});

progressNext.addEventListener("click", () => {
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();
  getSongSource();
});

progressPrev.addEventListener("click", () => {
  active--;
  if (active < 1) {
    active = 1;
  }
  updateProgress();
  getSongSource();
});

function getSongSource(){
  // @ts-ignore
  switch (active) {
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