let filterAlphabet = "a"; // initialziing default filter value as "a"

/**
 * This function  used search animals by name
 */
function filteredAnimals() {

    const animalList = JSON.parse(localStorage.getItem('animaldetails'));

    let storage = animalList.filter(filterByAlp)
    const len = storage.length

    let listedAnimal = ""

    //foreach 
    //for(const animalObj of filteredAnimalList){

    
    for (let i = 0; i < len; i++) {
        let index = storage[i];

        // const animalurl = "<div class='card'> <img src=" + index.iUrl + " class=\"imagestyle\"></img>"
        // const animalsname = "<h1  class=\"images\" >" + index.nameOfAnimal + "</h1> </div>"
        // listedAnimal = listedAnimal + animalurl + animalsname;

        const animalsHTML =  getAnimalSectionTemplate();  
        listedAnimal = listedAnimal + animalsHTML;
    }
    document.getElementById("animalurl").innerHTML = listedAnimal;

}

function getAnimalSectionTemplate(){
   return  `<div class="card">
                     <img src="${index.iUrl}"> </img>
                     <h1> ${index.nameOfAnimal} </h1>
                     <p> ${index.aboutA} </p>
                     </div>`;
}


// initPage
function initPage() {
    const currentURL = window.location.search;
    const urlparams = new URLSearchParams(currentURL);

    const paramfilter = urlparams.get("filterBy")
    console.log(paramfilter);
    filterAlphabet = paramfilter;

}

initPage();
filteredAnimals();

// [].startsWith()
// toLowerCase => do search 
// contains (or)
// tiger => t => T => ige=>
function filterByAlp(animalDetails) {
    return animalDetails.nameOfAnimal.startsWith(filterAlphabet);// lot of logic 
} 