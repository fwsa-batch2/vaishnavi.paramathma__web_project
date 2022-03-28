// let filterAlphabet  = "a"; // initialziing default filter value as "a"

// /**
//  * This function  used search animals by name
//  */
// function filteredAnimals() {

//     const animalList = JSON.parse(localStorage.getItem('animaldetails'));

//     let storage = animalList.filter(filterByAlp)
//     const len = storage.length

//     let listedAnimal = ""

//     //foreach 
//     //for(const animalObj of filteredAnimalList){

    
//     for (let i = 0; i < len; i++) {
//         let index = storage[i];

//         // const animalurl = "<div class='card'> <img src=" + index.iUrl + " class=\"imagestyle\"></img>"
//         // const animalsname = "<h1  class=\"images\" >" + index.nameOfAnimal + "</h1> </div>"
//         // listedAnimal = listedAnimal + animalurl + animalsname;

//         const animalsHTML =  getAnimalSectionTemplate(index);  
//         listedAnimal = listedAnimal + animalsHTML;
//     }
//     document.getElementById("anim").innerHTML = listedAnimal;

// }

// function getAnimalSectionTemplate(index){
//    return  `<div class="card">
//                      <img src="${index.iUrl}"> </img>
//                      <h1> ${index.nameOfAnimal} </h1>
//                      <p> ${index.aboutA} </p>
//                      </div>`;
// }


// initPage
// function initPage() {
//     const currentURL = window.location.search;
//     const urlparams = new URLSearchParams(currentURL);

//     const paramfilter = urlparams.get("filterBy")
//     console.log(paramfilter);
//     filterAlphabet = paramfilter;

// }

// initPage();
// filteredAnimals();

// // [].startsWith()
// // toLowerCase => do search 
// // contains (or)
// // tiger => t => T => ige=>
// function filterByAlp(animalDetails) {
//     return animalDetails.nameOfAnimal.startsWith(filterAlphabet);// lot of logic 
// } 
// function filterFunc(){
//     console.log('started');
//     const getValue = document.getElementById("inp").value;
//     const getFromLs = JSON.parse(localStorage.getItem("animaldetails"));
//     console.log(getFromLs);
//     for(let i=0; i<getFromLs.length; i++){
//         let animal = getFromLs[i];
//         let animalName = animal.nameOfAnimal;
//         let animalImg = animal.iUrl;
//         let aboutAnimal = animal.aboutA;
//         if(animalName.includes(getValue)){
//                 displayAnimals(animalName,animalImg,aboutAnimal);
//                 console.log("true")
//                 break;
//         }

//     }
// }

// function displayAnimals(name,image,about){
// document.getElementById("anim").innerHTML += `${name}`,`${image}`,`${about}}`;
// }

