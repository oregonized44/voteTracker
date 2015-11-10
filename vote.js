






//UTILITY FUNCTIONS AND ARRAYS ===============================================



var tree1 = new imageConstructor("images/tree1.jpg");
var tree2 = new imageConstructor("images/tree2.jpg");
var tree3 = new imageConstructor("images/tree3.jpg");
var city1 = new imageConstructor("images/city1.jpg");
var city2 = new imageConstructor("images/city2.jpg");
var city3 = new imageConstructor("images/city3.jpg");

treeDirectory = [tree1, tree2, tree3];
cityDirectory = [city1, city2, city3];
//GET A RANDOM TREE IMAGE

var x;

function randomTree() {            //selects our tree image

  x = Math.floor(Math.random() * treeDirectory.length);

};
var randomTreePlaceholder = randomTree();
//GET A RANDOM CITY IMAGE
function randomCity(){             //selects our city image

  var y = Math.floor(Math.random() * cityDirectory.length);
  return y;
};
var randomCityPlaceholder = randomCity();

var emptyHatTrees = [];
var emptyHatCities = [];

leftImageEl = document.getElementById("leftImage");
rightImageEl = document.getElementById("rightImage");
resetButtonEl = document.getElementById("resetButton");
voteButtonEl = document.getElementById("voteButton");

/*leftImageEl.addEventListener("click", selectImage);
rightImageEl.addEventListener("click", selectImage);
leftImageEl.addEventListener("mouseover", selectImage);
rightImageEl.addEventListener("mouseover", selectImage);*/


//IMAGE DATA OBJECT CONSTRUCTION
function imageConstructor(filePath){

this.filePath = filePath;
this.voteNumber = Math.floor((Math.random() * 49 ) + 2);     ///utility zone
}

//OnPageLoad =================================================================
(function(){
leftImageEl.src  = "images/tree3.jpg" ;
console.log(treeDirectory[1].filePath);
rightImageEl.src = "images/city2.jpg" ;
console.log(cityDirectory[2].filePath);//(cityDirectory[x].filePath);
//leftImageEl.innerHTML = "<img id='leftImage' src='" +  + "'";
//rightImageEl.innerHTML = "<img id='rightimage' scr='" + cityDirectory[randomCityPlaceholder].filePath + "'"




})();

/*//PRINT IMAGES TO PAGE
function upLoadImages(left,right){   //function will put images on page
var left = leftImageEl ;             //  accesing our dom elemnt by Id
var right= rightImageEl  ;           //  accessing our dom elenment by id
leftImageEl = get random tree;
rightImageEl = get random city;
push left image on;
push right image on;


}
//MAKE CHART DYNAMICALLY BASED ON IMAGES

//NEW PAIR FUNCTIONS TRIGGER FUNCITON

function newPair(){

}

//COUNT VOTES
function recordVote(){


}
*/




