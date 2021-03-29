'use strict';
const assets = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
// let tempArr = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

let totalOfVotes=[];
let totalOfViews=[];

const leftAsset = document.getElementById('left-asset');
const midAsset = document.getElementById('mid-asset');
const rightAsset = document.getElementById('right-asset');
const assetSection = document.getElementById('assets-section');
let numberOfRound = 25;

let counterClick = 1;

function Asset(name) {
  this.name = name;

  this.path = `./assets/${name}`;
  this.votes = 0;
  this.views = 0;

  Asset.all.push(this);
  Asset.tempAsset.push(this);



}
Asset.all = [];
Asset.tempAsset =[];


for (let i = 0; i < assets.length; i++) {
  new Asset(assets[i]);

}
// table(Asset.all);

let leftAssett = getRandomNumber(0,Asset.all.length-1);
let rightAssett =getRandomNumber(0,Asset.all.length-1);
let midAssett =getRandomNumber(0,Asset.all.length-1);

let nextLeft= getRandomNumber(0,Asset.all.length-1);
let nextRight= getRandomNumber(0,Asset.all.length-1);
let nextMid= getRandomNumber(0,Asset.all.length-1);

function render() {




  while (nextLeft === leftAssett || nextLeft === rightAssett || nextLeft === midAssett&& nextRight === leftAssett || nextRight === rightAssett || nextRight === midAssett &&nextMid === leftAssett || nextMid === rightAssett || nextMid === midAssett)
  {
    nextLeft= getRandomNumber(0,Asset.all.length-1);
    nextRight= getRandomNumber(0,Asset.all.length-1);
    nextMid= getRandomNumber(0,Asset.all.length-1);
  }
  nextShow(nextLeft,nextRight,nextMid);








 



  function nextShow(left,right,mid)
  {
    leftAsset.src = Asset.all[left].path;
    leftAsset.alt=Asset.all[left].name;
    leftAsset.title = Asset.all[left].name;

    rightAsset.src = Asset.all[right].path;
    rightAsset.alt=Asset.all[right].name;
    rightAsset.title = Asset.all[right].name;

    midAsset.src = Asset.all[mid].path;
    midAsset.alt=Asset.all[mid].name;
    midAsset.title = Asset.all[mid].name;

    for(let i =0;i<Asset.all.length;i++){
      while (left === leftAssett || left === rightAssett || left === midAssett&& right === leftAssett || right === rightAssett || right === midAssett &&mid === leftAssett || mid === rightAssett || mid === midAssett)
      {
        left= getRandomNumber(0,Asset.all.length-1);
        right= getRandomNumber(0,Asset.all.length-1);
        mid= getRandomNumber(0,Asset.all.length-1);
      }
      currentItem(left,right,mid);
    }

  }

  function currentItem(leftAssett,rightAssett,midAssett){
  // leftAssett = getRandomNumber(0, Asset.tempAsset.length - 1);
  // // firstShow.push(leftAssett);



    // rightAssett = getRandomNumber(0, Asset.tempAsset.length - 1);
    // // firstShow.push(rightAssett);

    // midAssett = getRandomNumber(0, Asset.tempAsset.length - 1);

    // firstShow.push(midAssett);
    leftAsset.src = Asset.all[leftAssett].path;
    leftAsset.alt=Asset.all[leftAssett].name;
    leftAsset.title = Asset.all[leftAssett].name;


    rightAsset.src = Asset.all[rightAssett].path;
    rightAsset.alt=Asset.all[rightAssett].name;
    rightAsset.title = Asset.all[rightAssett].name;


    midAsset.src = Asset.all[midAssett].path;
    midAsset.alt=Asset.all[midAssett].name;
    midAsset.title = Asset.all[midAssett].name;
    while (nextLeft === leftAssett || nextLeft === rightAssett || nextLeft === midAssett&& nextRight === leftAssett || nextRight === rightAssett || nextRight === midAssett &&nextMid === leftAssett || nextMid === rightAssett || nextMid === midAssett)
    {
      nextLeft= getRandomNumber(0,Asset.all.length-1);
      nextRight= getRandomNumber(0,Asset.all.length-1);
      nextMid= getRandomNumber(0,Asset.all.length-1);
    }
    nextShow(nextLeft,nextRight,nextMid);
  }
  enableDisable();
}









assetSection.addEventListener('click', handelClick);
function handelClick(event) {
  console.log(event);
  if (event.target.id !== 'assets-section') {
    if (event.target.id === rightAsset.id) {
      Asset.all[rightAssett].votes++;
      Asset.all[rightAssett].views++;
      Asset.all[leftAssett].views++;
      Asset.all[midAssett].views++;
      

      counterClick++;
      
    }
    else if (event.target.id === leftAsset.id) {
      Asset.all[leftAssett].votes++;
      Asset.all[rightAssett].views++;
      Asset.all[leftAssett].views++;
      Asset.all[midAssett].views++;
     

      counterClick++;
     
    }
    else if (event.target.id === midAsset.id) {
      Asset.all[midAssett].votes++;
      Asset.all[rightAssett].views++;
      Asset.all[leftAssett].views++;
      Asset.all[midAssett].views++;
      

      counterClick++;

    }
    render();
  }





}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}




let listView = document.getElementById('list');
listView.addEventListener('click', listVieww);
function listVieww() {

  const unOrderList = document.createElement('ul');
  listView.appendChild(unOrderList);
  for (let i = 0; i < assets.length; i++) {
    Asset.totalOfVotes.push(Asset.all[i].votes);
    Asset.totalOfViews.push(Asset.all[i].views);
    let listItem = document.createElement('li');
    unOrderList.appendChild(listItem);
    listItem.textContent = ` ${Asset.all[i].name}  had  ${Asset.all[i].votes}  votes,    and was seen  ${Asset.all[i].views}   times`;


  }
}
let btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', enableDisable);
function enableDisable() {
 


  
  if (counterClick === numberOfRound) {
    
    btnSubmit.disabled = false;
    listVieww();
    assetSection.removeEventListener('click', handelClick);
    chartRender();
  }

}
render();

function chartRender(){
  let ctx = document.getElementById('myChart').getContext('2d');
  let chart = new Chart(ctx, {
 
    type: 'bar',

    
    data: {
      labels: assets,
      datasets: [{
        label: 'BusMall votes',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: totalOfVotes

      },
      {
        label: 'BusMall Views',
        backgroundColor: 'blue',
        borderColor:'rgb(255, 99, 132)',
        data: totalOfViews

      }]
    },
    
    options: {}
  });
}
