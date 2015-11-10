//UTILITY FUNCTIONS AND ARRAYS ===============================================
var tree1 = new imageConstructor("images/tree1.jpg");
var tree2 = new imageConstructor("images/tree2.jpg");
var tree3 = new imageConstructor("images/tree3.jpg");
var city1 = new imageConstructor("images/city1.jpg");
var city2 = new imageConstructor("images/city2.jpg");
var city3 = new imageConstructor("images/city3.jpg");

treeDirectory = [tree1, tree2, tree3];
cityDirectory = [city1, city2, city3];
midwayTreeDirectory = [];
midwayCityDirectory = [];
emptyHatTrees = [];
emptyHatCities = [];

//GET A RANDOM TREE IMAGE
function randomTree() {            //selects our tree image
 x = Math.floor(Math.random() * treeDirectory.length);
 return x;
};
var randomTreePlaceholder = randomTree();


//GET A RANDOM CITY IMAGE`
function randomCity(){             //selects our city image
 var y = Math.floor(Math.random() * cityDirectory.length);
 return y;
};
var randomCityPlaceholder = randomCity();

leftImageEl = document.getElementById("leftImage");
rightImageEl = document.getElementById("rightImage");
resetButtonEl = document.getElementById("resetButton");
voteButtonEl = document.getElementById("voteButton");


//IMAGE DATA OBJECT CONSTRUCTION
function imageConstructor(filePath){
this.filePath = filePath;
this.voteNumber = Math.floor((Math.random() * 49 ) + 2);     ///utility zone
}


//OnPageLoad =================================================================

(function(){

leftImageEl.src  = treeDirectory[randomTreePlaceholder].filePath;

midwayTreeDirectory.slice(treeDirectory[randomTreePlaceholder]);

rightImageEl.src = cityDirectory[randomCityPlaceholder].filePath;

midwayCityDirectory.slice(cityDirectory[randomCityPlaceholder]);


})();

leftImageEl.addEventListener("click", selectImage);
rightImageEl.addEventListener("click", selectImage);

leftImageEl.addEventListener("mouseover", selectImage);
rightImageEl.addEventListener("mouseover", selectImage);


voteButton.addEventListener("click", voteSubmit);


////////////////////select-image///////////////////////////////////////////////

function selectImage() {
this.className= "imgPicked";
}


function resetImages(){
  //treesDirectory  = emptyHatTrees;
  for (mm=0; mm < emptyHatTrees.length; mm++){
    treesDirectory.push(emptyHatTrees[0]);
    for (jj = 0; jj < emptyHatTrees.length; jj++){
      delete emptyHatTrees[0];
    }
  }
  //citiesDirectory = emptyHatCities;
  for (gg=0; gg<emptyHatCities.length; gg++){
    citiesDirectory.push(emptyHatCities[0]);
    for (kk = 0; kk < emptyHatCities.length; kk++){
      delete emptyHatCities[0];
    }
  }
}

function voteSubmit(){

if (document.getElementsByClassName("imgPicked")){
  voteNumber++;
}

emptyHatTrees.slice(midwayTreesDirectory[0]);
emptyHatCities.slice(midwayCitiesDirectory[0]);



if((citiesDirectory.length === 0) && (treesDirectory.length === 0)){
resetImgs();

}

function resetPool() {
resetImgs();



}
//find images used and add to empty hat array


//add chart to dom


//change photo to new source


} //Ends voteSubmit



/*var treeVoteTotal =  //Added functionality for later (cumulitive chart)


for (ii = 0; ii<treeDirectory.length; ii++ ){


total+=


}
*/
