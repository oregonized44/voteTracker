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

var treeMax = treeDirectory.length - 1;
var cityMax = cityDirectory.length - 1;
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
midwayTreeDirectory.push(treeDirectory[randomTreePlaceholder]);
delete treeDirectory[randomTreePlaceholder];

rightImageEl.src = cityDirectory[randomCityPlaceholder].filePath;
midwayCityDirectory.push(cityDirectory[randomCityPlaceholder]);
delete cityDirectory[randomCityPlaceholder];


})();

function cycleImages(){

  //Empties midway array into emptyHat array
  emptyHatTrees.push(midwayTreeDirectory[0]);

    delete midwayTreeDirectory[0];


  emptyHatCities.push(midwayCityDirectory[0]);
    delete midwayCityDirectory[0];

  //put "enter chart" bit in here, first

  //re-writes the src of the images in html
    leftImageEl.src  = treeDirectory[randomTreePlaceholder].filePath;

    rightImageEl.src = cityDirectory[randomCityPlaceholder].filePath;

  //if original array is empty, recycle everything
    if((citiesDirectory.length === 0) && (treesDirectory.length === 0)){
        resetImages();
      }
}

leftImageEl.addEventListener("click", selectImageLeft);
rightImageEl.addEventListener("click", selectImageRight);

//voteButton.addEventListener("click", voteSubmit);


////////////////////select-image///////////////////////////////////////////////

function selectImageLeft() {

  midwayTreeDirectory[0].voteNumber++;
  console.log(midwayTreeDirectory[0].voteNumber);
  cycleImages();
}
function selectImageRight(){
  midwayCityDirectory[0].voteNumber++;
  console.log(midwayCityDirectory[0].voteNumber);
  cycleImages();
}

//ifthis.className= "imgPicked";

function resetImages(){
  //treesDirectory  = emptyHatTrees;
  for (mm=0; mm < emptyHatTrees.length; mm++){
    treesDirectory.push(emptyHatTrees[mm]);
    for (jj = 0; jj < emptyHatTrees.length; jj++){
      delete emptyHatTrees[jj];
    }
  }
  //citiesDirectory = emptyHatCities;
  for (gg=0; gg<emptyHatCities.length; gg++){
    citiesDirectory.push(emptyHatCities[gg]);
    for (kk = 0; kk < emptyHatCities.length; kk++){
      delete emptyHatCities[kk];
    }
  }
}

//change photo to new source




/*var treeVoteTotal =  //Added functionality for later (cumulitive chart)


for (ii = 0; ii<treeDirectory.length; ii++ ){


total+=


}
*/
