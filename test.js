function change(x) {
  x.style.background="yellow";
  x.style.color="green";

  
}

function normal(x) {
  x.style.background="green";
  x.style.color="#fff";
}




function myFunction() {

var userinput = document.getElementById("nic").value; 
const myArray = userinput.split("-");

let height = document.getElementById("h").value; 
let weight = document.getElementById("w").value; 
let calculatebmi = weight/(height*height) ; 
let bmi = calculatebmi.toFixed(1);

//bmi
if(bmi < 18.5){
  category = "Underweight 😒";
}
else if( bmi >= 18.5 && bmi <= 24.9 ){
  category = "Normal Weight 😍";
}
else if( bmi >= 25 && bmi <= 29.9 ){
  category = "Overweight 😮";
}
else{
  category = "Obesity 😱 ðŸ˜±";
}

//jantina
var jant = myArray[2] % 2;
if(jant==0)
{ var jantina2="Perempuan"; }
else if(jant==1)
{ var jantina2="Lelaki"; }

//negeri
if(myArray[1]==01||myArray[1]==21||myArray[1]==22||myArray[1]==23||myArray[1]==24)
{ var negeri2="Johor"; }

else if(myArray[1]==02||myArray[1]==25||myArray[1]==26||myArray[1]==26)
{ var negeri2="Kedah"; }

else if(myArray[1]==03||myArray[1]==28||myArray[1]==29)
{ var negeri2="Kelantan"; }

else if(myArray[1]==04||myArray[1]==30)
{ var negeri2="Melaka"; }

else if(myArray[1]==09||myArray[1]==31||myArray[1]==59)
{ var negeri2="Negeri Sembilan"; }

else if(myArray[1]==06||myArray[1]==32||myArray[1]==33)
{ var negeri2="Pahang"; }

else if(myArray[1]==07||myArray[1]==34||myArray[1]==35)
{ var negeri2="Pulau Pinang"; }

else if(myArray[1]==08||myArray[1]==36||myArray[1]==37||myArray[1]==38||myArray[1]==39)
{ var negeri2="Perak"; }

else if(myArray[1]==09||myArray[1]==40)
{ var negeri2="Perlis"; }

else if(myArray[1]==10||myArray[1]==41||myArray[1]==42||myArray[1]==43||myArray[1]==44)
{ var negeri2="Selangor"; }

else if(myArray[1]==11||myArray[1]==45||myArray[1]==46)
{ var negeri2="Terengganu"; }

else if(myArray[1]==12||myArray[1]==47||myArray[1]==48||myArray[1]==49)
{ var negeri2="Sabah"; }

else if(myArray[1]==13||myArray[1]==50||myArray[1]==51||myArray[1]==52||myArray[1]==53)
{ var negeri2="Sarawak"; }

else if(myArray[1]==14||myArray[1]==54||myArray[1]==55||myArray[1]==56||myArray[1]==57)
{ var negeri2="Wilayah Persekutuan Kuala Lumpur"; }

else if(myArray[1]==15||myArray[1]==58)
{ var negeri2="Wilayah Persekutuan Labuan"; }

else if(myArray[1]==16)
{ var negeri2="Wilayah Persekutuan Putrajaya"; }

else if(myArray[1]==82)
{ var negeri2="Negeri Tidak Diketahui"; }

else
{ var negeri2="Tiada Rekod";var jantina2="Tiada Rekod"; var category ="Tiada Rekod"; }

var negerikelahiran = "Negeri Kelahiran : ";
var jantina = "Jantina : ";
var allbmi = "BMI : ";
var kategoribmi = "Kategori : ";

document.getElementById("negeri").innerHTML = negerikelahiran+negeri2;
document.getElementById("jantina").innerHTML = jantina+jantina2;
document.getElementById("bmi").innerHTML = allbmi+bmi;
document.getElementById("category").textContent = kategoribmi+category;


  
}
