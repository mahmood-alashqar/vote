'use strict';
const assets = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg' ];

const leftAsset = document.getElementById('left-asset');
const midAsset = document.getElementById('mid-asset');
const rightAsset = document.getElementById('right-asset');
const assetSection = document.getElementById('assets-section');
let numberOfRound = 25;
let leftAssett;
let rightAssett;
let midAssett;
let counterClick =1;
function Asset(name)
{
  this.name=name;

  this.path=`./assets/${name}`;
  this.votes=0;
  this.views=0;
  Asset.all.push(this);



}
Asset.all=[];


for (let i=0;i<assets.length;i++)
{
  new Asset(assets[i]);
}
// table(Asset.all);

function render()
{

  leftAssett= getRandomNumber(0,Asset.all.length-1);
  rightAssett= getRandomNumber(0,Asset.all.length-1);
  midAssett= getRandomNumber(0,Asset.all.length-1);


  console.log('before');

  while ( leftAssett !== rightAssett && leftAssett !== midAssett && rightAssett !== midAssett)
  {


    leftAsset.src = Asset.all[leftAssett].path;
    leftAsset.alt=Asset.all[leftAssett].name;
    leftAsset.title = Asset.all[leftAssett].name;

    rightAsset.src = Asset.all[rightAssett].path;
    rightAsset.alt=Asset.all[rightAssett].name;
    rightAsset.title = Asset.all[rightAssett].name;

    midAsset.src = Asset.all[midAssett].path;
    midAsset.alt=Asset.all[midAssett].name;
    midAsset.title = Asset.all[midAssett].name;

    leftAssett= getRandomNumber(0,Asset.all.length-1);
    rightAssett= getRandomNumber(0,Asset.all.length-1);
    midAssett= getRandomNumber(0,Asset.all.length-1);
    continue;


    // leftAssett= getRandomNumber(0,Asset.all.length-1);
    // rightAssett= getRandomNumber(0,Asset.all.length-1);
    // midAssett= getRandomNumber(0,Asset.all.length-1);
  }
  console.log('after');
  // rightAssett= getRandomNumber(0,Asset.all.length-1);
  // if (leftAssett !== rightAssett )
  // {
  //   rightAsset.src = Asset.all[rightAssett].path;
  //   rightAsset.alt=Asset.all[rightAssett].name;
  //   rightAsset.title = Asset.all[rightAssett].name;
  // }
  // else
  // {
  //   rightAssett= getRandomNumber(0,Asset.all.length-1);
  //   rightAsset.src = Asset.all[rightAssett].path;
  //   rightAsset.alt=Asset.all[rightAssett].name;
  //   rightAsset.title = Asset.all[rightAssett].name;
  // }
  // midAssett= getRandomNumber(0,Asset.all.length-1);
  // if (midAssett !== leftAssett && midAssett !== rightAssett)
  // {
  //   midAsset.src = Asset.all[midAssett].path;
  //   midAsset.alt=Asset.all[midAssett].name;
  //   midAsset.title = Asset.all[midAssett].name;
  // }
  // else
  // {
  //   midAssett= getRandomNumber(0,Asset.all.length-1);
  //   midAsset.src = Asset.all[midAssett].path;
  //   midAsset.alt=Asset.all[midAssett].name;
  //   midAsset.title = Asset.all[midAssett].name;
  // }
  enableDisable();

  // handelClick();
}





assetSection.addEventListener('click',handelClick);
function handelClick(event)
{
  console.log(event);
  if (event.target.id !== 'assets-section')
  {
    if (event.target.id === rightAsset.id)
    {
      Asset.all[rightAssett].votes++;
      Asset.all[rightAssett].views++;
      Asset.all[leftAssett].views++;
      Asset.all[midAssett].views++;
      render();

      counterClick++;
      // enableDisable();
    }
    else if (event.target.id === leftAsset.id)
    {
      Asset.all[leftAssett].votes++;
      Asset.all[rightAssett].views++;
      Asset.all[leftAssett].views++;
      Asset.all[midAssett].views++;
      render();

      counterClick++;
      // enableDisable();
    }
    else if (event.target.id === midAsset.id)
    {
      Asset.all[midAssett].votes++;
      Asset.all[rightAssett].views++;
      Asset.all[leftAssett].views++;
      Asset.all[midAssett].views++;
      render();

      counterClick++;

    }

  }





}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

render();


let listView = document.getElementById('list');
listView.addEventListener('click',listVieww);
function listVieww (){

  const unOrderList = document.createElement('ul');
  listView.appendChild(unOrderList);
  for (let i = 0; i < assets.length; i++){
    let listItem = document.createElement('li');
    unOrderList.appendChild(listItem);
    listItem.textContent = ` ${Asset.all[i].name}  had  ${Asset.all[i].votes}  votes,    and was seen  ${Asset.all[i].views}   times`;


  }
}
let btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click',enableDisable);
function enableDisable() {
  //Reference the Button.


  //Verify the TextBox value.
  if (counterClick === numberOfRound ) {
    //Enable the TextBox when TextBox has value.
    btnSubmit.disabled = false;
    listVieww();
    assetSection.removeEventListener('click',handelClick);
  }

}
//
// listVieww ();
// }
