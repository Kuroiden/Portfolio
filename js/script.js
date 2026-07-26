let positions = ['Programmer', 'Game Developer', 'Web Developer'];
let roleIndex = 1;

function showRoles() {
	document.getElementById('roles').innerHTML = positions[roleIndex];
  if (roleIndex < 2) roleIndex++;
  else roleIndex = 0;
}

setInterval(showRoles, 3000);

function toggleTab(id) {
  let tab = document.getElementById(id);
  
  if (tab.style.display == "block") tab.style.display = "none";
  else tab.style.display = "block";
}

function copyemail() {
	navigator.clipboard.writeText("cloe.gorgonio@gmail.com");
	document.getElementById("clipboardMsg").style.display = "block";
	setTimeout(() => {document.getElementById("clipboardMsg").style.display = "none";}, 3000);
}

function expand(index){
  var container = document.getElementById("container");
  var entry = container.children[index];
  var title = entry.children[0];
  var content = entry.children[1];

  if (entry.style.width != "100%") {
    for (let x = 0; x < container.childElementCount; x++)
    {
      container.children[x].style.width = "0%";
      container.children[x].children[1].style.display = "none";
    }
    entry.style.display = "block";
    entry.style.width = "100%";
    content.style.display = "block";
  }
  else {
    for (let x = 0; x < container.childElementCount; x++) {
      container.children[x].style.width = "33.33%";
      container.children[x].children[1].style.display = "none";
    }
    container.style.gap = "10px";
  }
}