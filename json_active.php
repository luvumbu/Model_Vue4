<div id="demo"></div>

<script>

const header ="header" ; 
const section ="section" ; 
const footer ="footer" ;  
const header_link ="json/header.json";
// liens vers fichier Json 
const section_link ="json/section.json";
// liens vers fichier Json 
const footer_link  ="json/footer.json";
// liens vers fichier Json 
let header_objet  ;
// preparation des object a cloner 
let section_objet ;
// preparation des object a cloner 
let footer_objet  ;
// preparation des object a cloner 
 

function body_link_fun(general_link,sourceX) { 

    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     
        text= this.responseText;   
      const myArr = JSON.parse(text);
 //dit = myArr.header1.Name_element ;

 switch(sourceX) {
  case "header":
    header_objet = myArr; 
    // clonage de l'objet dans une variable exterieur
    break;
  case "section":
    section_objet = myArr; 
    // clonage de l'objet dans une variable exterieur
    break;
    case "footer":
    footer_objet = myArr; 
    // clonage de l'objet dans une variable exterieur
    break;
  default:
    // code block
}
 
    }
  };
  xhttp.open("GET", general_link, true); 
 // xhttp.open("GET", "json/header.json", true);
  xhttp.send();
 
}
    body_link_fun("json/header.json",header) ; 
    body_link_fun("json/section.json",section) ; 
    body_link_fun("json/footer.json",footer) ; 


   
    const myTimeout_1 = setTimeout(syn_fun,250);
    /*
    const myTimeout_2 = setTimeout(section_syn,4000);
    const myTimeout_3 = setTimeout(footer_syn,4000);
 */

   // Action a executer apres synchronisation des fichier
 
 function syn_fun() {   

  header_syn("demo");
  // exemple 
  
 }


 function header_syn(source_div) {
  console.log("INFO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!") ;  
         document.getElementById(source_div).innerHTML=header_objet.header1.text ; 
         console.log(header_objet.header1.text) ; // information dans la premier table
         console.log(header_objet.header1.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header1.className) ;
         // identique header_objet.header1.title
         console.log(header_objet.header1.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header1.title) ;
         //header_objet.header1.id
         console.log(header_objet.header1.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",header_objet.header1.id) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header1.text) ; 
         //header_objet.header1.className  
 }
 /*
 function section_syn() {   
 
 console.log(section_objet) ;   

}

function footer_syn() {   
 
 console.log(footer_objet) ;   

}

*/



 



 




/*
function header_total_fun_active() { 
   
    var para = document.createElement("p");
    para.setAttribute("class", "democlass");
para.innerHTML =  header_total.header1.Name_element;
document.getElementById("header_0").appendChild(para);
     
}
*/




 
</script>
<style>
  .democlass_deux_class{
    background-color: red;
    color:white ;
    border:8px solid black ; 
    padding: 50px;
  }
</style>
</body>
</html>
