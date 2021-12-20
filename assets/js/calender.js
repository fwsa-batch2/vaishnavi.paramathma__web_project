//objectives
//get no of days in month
//new date
let yearChosen = new Date().getFullYear();
let monthchosen = new Date().getMonth();
let months=[
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "decbember"
];
 function getNumberOfDays(year,month){
     let numDays = new Date(year,month+1,0).getDate();
     return numDays;
 }

 function rendercal(getNumDays){
     let yearPTag = document.getElementById("year");
     yearPTag.innertext = yearChosen;
     let monthName = months[monthchosen];
     let monthPTag = document.getElementById("month");
     monthPTag.innertext = monthName;
     for(let i = 1; i<=getNumDays; i++){
         let dayPTag = document.createElement('p');
         dayPTag.style.fontSize = "20px";
         let dayText = document.createTextNode(i.toString());
         dayPTag.appendChild(dayText);
         let date = monthName+""+i.toString()+","+yearChosen;
         console.log(date);
     }
 }

 rendercal(getNumberOfDays( yearChosen,monthchosen));
