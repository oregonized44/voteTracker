function imageConstructor(filePath,){

this.filePath = filePath;
this.voteNumber = Math.floor((Math.random() * 49 ) + 2);

}

treeDirectory = ["tree1", "tree2", "tree3"]
cityDirectory = ["city1", "city2", "city3"]

var tree1 = new imageConstructor(images/tree1.jpg)
var tree2 = new imageConstructor(images/tree2.jpg)
var tree3 = new imageConstructor(images/tree3.jpg)
var city1 = new imageConstructor(images/city1.jpg)
var city2 = new imageConstructor(images/city2.jpg)
var city3 = new imageConstructor(images/city3.jpg)






var imageTrees = [];
var imageCities = [];






var randomTree = function() {            //selects our tree image
Math.floor((Math.random() * treeDirectory.length)


}

function randomCity{             //selects our city image
Math.

}





function upLoadImages(left,right){                            //function will put images on page
var left = leftImageEl       //  accesing our dom elemnt by Id
var right= rightImageEl      //  accessing our dom elenment by id
leftImageEl = get random tree
rightImageEl = get random city
push left image on
push right image on


}




function MakeImage(filePath){
  used = false;
  this.filePath = filePath;
}





leftImageEl = document.getElementById("leftImage");
rightImageEl = document.getElementById("rightImage");
resetButtonEl = document.getElementById("resetButton");
voteButtonEl = document.getElementById("voteButton");

leftImageEl.addEventListener("click", selectImage);
rightImageEl.addEventListener("click", selectImage);
leftImageEl.addEventListener("mouseover", selectImage);
rightImageEl.addEventListener("mouseover", selectImage);


