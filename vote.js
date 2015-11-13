/*UTILITY FUNCTIONS AND ARRAYS ===============================================*/
var tree1 = new imageConstructor("images/tree1.jpg");
var tree2 = new imageConstructor("images/tree2.jpg");
var tree3 = new imageConstructor("images/tree3.jpg");
var tree4 = new imageConstructor("images/tree4.jpg");
var tree5 = new imageConstructor("images/tree5.jpg");
var tree6 = new imageConstructor("images/tree6.jpg");
var tree7 = new imageConstructor("images/tree7.jpg");
var tree8 = new imageConstructor("images/tree8.jpg");
var tree9 = new imageConstructor("images/tree9.jpg");
var tree10 = new imageConstructor("images/tree10.jpg");
var city1 = new imageConstructor("images/city1.jpg");
var city2 = new imageConstructor("images/city2.jpg");
var city3 = new imageConstructor("images/city3.jpg");
var city4 = new imageConstructor("images/city4.jpg");
var city5 = new imageConstructor("images/city5.jpg");
var city6 = new imageConstructor("images/city6.jpg");
var city7 = new imageConstructor("images/city7.jpg");
var city8 = new imageConstructor("images/city8.jpg");
var city9 = new imageConstructor("images/city9.jpg");
var city10 = new imageConstructor("images/city10.jpg");

treeDirectory = [tree1, tree2, tree3, tree4, tree5, tree6, tree5, tree8, tree8, tree10];
cityDirectory = [city1, city2, city3, city4, city5, city6, city7, city8, city9, city10];
midwayTreeDirectory = [];
midwayCityDirectory = [];
emptyHatTrees = [];
emptyHatCities = [];

var totalTreeTemp = function() {
  var treeTemp = 0;
  for (ii = 0; ii<treeDirectory.length; ii++ ){
    treeTemp+= treeDirectory[ii].voteNumber;
}
  return treeTemp;
};

treeVoteTotal = totalTreeTemp();

var totalCityTemp = function() {
  var cityTemp = 0;
  for (ii = 0; ii<cityDirectory.length; ii++ ){
    cityTemp+= cityDirectory[ii].voteNumber;
}
  return cityTemp;
};

cityVoteTotal = totalCityTemp();

var treeMax = treeDirectory.length - 1;
var cityMax = cityDirectory.length - 1;
var midwayTreeMax = midwayTreeDirectory.length - 1;
var midwayCityMax = midwayCityDirectory.length - 1;
//GET A RANDOM TREE IMAGE
function randomTree() {            //selects our tree image
 x = Math.floor(Math.random() * treeDirectory.length);
 return x;
}
var randomTreePlaceholder = randomTree();


//GET A RANDOM CITY IMAGE`
function randomCity(){             //selects our city image
 var y = Math.floor(Math.random() * cityDirectory.length);
 return y;
}
var randomCityPlaceholder = randomCity();

leftImageEl = $('#leftImage')[0];
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
//loads image to page
leftImageEl.src  = treeDirectory[randomTreePlaceholder].filePath;
//Copies used image into temp. array
midwayTreeDirectory.push(treeDirectory[randomTreePlaceholder]);
//replicates unused image on top of used image in the array
treeDirectory[randomTreePlaceholder] = treeDirectory[treeMax];
//pops off last image in array
treeDirectory.pop();


rightImageEl.src = cityDirectory[randomCityPlaceholder].filePath;
midwayCityDirectory.push(cityDirectory[randomCityPlaceholder]);
cityDirectory[randomCityPlaceholder] = cityDirectory[cityMax];
cityDirectory.pop();

makeChart();

})();

function cycleImages(){

  randomCityPlaceholder = randomCity();
  randomTreePlaceholder = randomTree();
  //Empties midway array into emptyHat array
  emptyHatTrees.push(midwayTreeDirectory[0]);
  //deletes and collapses midway array
  midwayTreeDirectory.pop();


  emptyHatCities.push(midwayCityDirectory[0]);
  midwayCityDirectory.pop();

  //put "enter chart" bit in here, first

  //re-writes the src of the images in html
  leftImageEl.src  = treeDirectory[randomTreePlaceholder].filePath;
  midwayTreeDirectory.push(treeDirectory[randomTreePlaceholder]);
  rightImageEl.src = cityDirectory[randomCityPlaceholder].filePath;
  midwayCityDirectory.push(cityDirectory[randomCityPlaceholder]);

  //if original array is empty, recycle everything
    if((cityDirectory.length === 0) && (treesDirectory.length === 0)){
        resetImages();
      }
      makeChart();
}

leftImageEl.addEventListener("click", selectImageLeft);
rightImageEl.addEventListener("click", selectImageRight);
//resetButtonEl.addEventListener("click", cycleImages);


//voteButton.addEventListener("click", voteSubmit);


///////////////'onClick' select-image///////////////////////////////////////////////

function selectImageLeft() {

  midwayTreeDirectory[0].voteNumber++;
  treeVoteTotal++;
  console.log("i'm image " + midwayTreeDirectory[0].filePath + " and my vote count is " + midwayTreeDirectory[0].voteNumber);
  cycleImages();
}
function selectImageRight(){
  midwayCityDirectory[0].voteNumber++;
  cityVoteTotal++;
  console.log("i'm image " + midwayCityDirectory[0].filePath + " and my vote count is " + midwayCityDirectory[0].voteNumber);
  cycleImages();
}

function resetImages(){
  //treesDirectory  = emptyHatTrees;
  for (mm=0; mm < emptyHatTrees.length; mm++){

    treesDirectory.push(emptyHatTrees[mm]);

    if ((treeDirectory.length) === (emptyHatTrees.length)){

        for (jj = 0; jj < emptyHatTrees.length; jj++){
            emptyHatTrees.pop();
      }
    }
  }
  //cityDirectory = emptyHatCities;
  for (gg=0; gg<emptyHatCities.length; gg++){

    cityDirectory.push(emptyHatCities[gg]);

    if ((cityDirectory.length)=== (emptyHatCities.length)){
        for (kk = 0; kk < emptyHatCities.length; kk++){
          emptyHatCities.pop();
      }
    }
  }
}

//CHART STUFF
 function makeChart() {

    var treeChartTemp = treeVoteTotal;
    var cityChartTemp = cityVoteTotal;
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: "Cities vs Trees"
      },
      axisY: {
        title: "Total Vote number",
        maximum: 500
      },
      data: [
      {
        type: "bar",
        showInLegend: true,
        legendText: "Gold",
        color: "gold",
        dataPoints: [
        { y: treeChartTemp, label: "Trees"},
        { y: cityChartTemp, label: "Cities"},

        ]
      }

      ]
    });
//chart.destroy();
chart.render();
}
console.log("start");

var weatherData = {};
var temp_min = [];
var temp_now = [];
var temp_max = [];
var k2cOffset = 273.15; // Kelvin vs. Celcius shift

function k2f(x) {
  return (x - k2cOffset) * 1.8 + 32;
}

var barData = {
  labels : ["0","1","2","3","4","5","6"],
  datasets : [
    { fillColor : "rgba(220,220,220,0.5)",
      strokeColor : "rgba(220,220,220,0.8)",
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data : [20,21,22,23,24,25,26]
//temp_min.slice(0,6)
//    data: [randGen(),randGen(),randGen(),randGen(),randGen(),randGen(),randGen()]
    },
    { fillColor : "rgba(151,187,205,0.5)",
      strokeColor : "rgba(151,187,205,0.8)",
      highlightFill : "rgba(151,187,205,0.75)",
      highlightStroke : "rgba(151,187,205,1)",
      data : [30,29,28,27,26,25,24]
//    data : temp_min.slice(0,6)
//    data : [randGen(),randGen(),randGen(),randGen(),randGen(),randGen(),randGen()]
    }
  ]
}

function processResp(rObj) {
  list = rObj.list;

  for (ii=0; ii < list.length; ii++) {
    main = list[ii].main;
    temp_min[ii] = k2f(main.temp_min);
    temp_max[ii] = k2f(main.temp_max);
    temp_now[ii] = Math.round(k2f(main.temp_now));
  }

  console.log("temp_min=" + temp_min);
  console.log("temp_max=" + temp_max);
}

/*
car stringified:  "{"speed":50,"color":"red"}";

var donut = { sprinkles: true, cost: 1.50 };
var myObjString = "{ sprinkles: true, cost: 1.50 }";

var obj = JSON.parse(string);

var cityName = userInputE.value;

var URLinput = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&mode=json&appid=2de143494c0b295cca9337e1e96b00e0";
*/

$.ajax(
   { url: "http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&appid=2de143494c0b295cca9337e1e96b00e0",
     beforeSend: function(xhr) {
   //xhr.overrideMimeType("text/plain; charset=x-user-defined");
    }
   })
   // End of ajax(), but here we do some chaining:
   .done( function(respObj) { // Success
      console.log("respObj = ", respObj);
      processResp(respObj);
      barData.datasets[0].data = temp_min.slice(0,7);
      barData.datasets[1].data = temp_max.slice(0,7);
      window.myBar = new Chart(ctx).Bar(barData, {responsive:true});
      console.log("Done");
   })
  .fail ( function() {
    console.log("XHR failed.");
  });

var randGen = function() {
    return Math.round(100 * Math.random());
};

window.onload = function() {
  ctx = $("canvas")[0].getContext("2d");
}
