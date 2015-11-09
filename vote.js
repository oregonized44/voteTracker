var imageTrees = [];
var imageCities = [];

function MakeImage(filePath){
  used = false;
  this.filePath = filePath;
}

var tree1 = ()
var tree2 =
var tree3 =
var city1 =
var city2 =
var city3 =

leftImageEl = document.getElementById("leftImage");
rightImageEl = document.getElementById("rightImage");
resetButtonEl = document.getElementById("resetButton");
voteButtonEl = document.getElementById("voteButton");

leftImageEl.addEventListener("click", selectImage);
rightImageEl.addEventListener("click", selectImage);
leftImageEl.addEventListener("mouseover", selectImage);
rightImageEl.addEventListener("mouseover", selectImage);

function createRandomVotes(){
  return Math.floor((Math.random() * 49 ) + 2);
}
console.log(createRandomVotes());
