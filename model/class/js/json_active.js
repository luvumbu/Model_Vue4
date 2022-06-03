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
 
let array_test ;
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
    /*
    const myTimeout_2 = setTimeout(section_syn,4000);
    const myTimeout_3 = setTimeout(footer_syn,4000);
 */

   // Action a executer apres synchronisation des fichier
 
 function syn_fun() { 
 parent_syn_1("header_0",true);// synchronisation de la pache enfant et parent
 children_syn_1("header_0",true);// synchronisation de la pache enfant et parent

 parent_syn_2("app_section1",true);// synchronisation de la pache enfant et parent
 children_syn_2("app_section1",true);// synchronisation de la pache enfant et parent
 parent_syn_2("app_section2",true);// synchronisation de la pache enfant et parent
 children_syn_2("app_section2",true);// synchronisation de la pache enfant et parent
 
 parent_syn_3("app_section3",true);// synchronisation de la pache enfant et parent
 children_syn_3("app_section3",true);// synchronisation de la pache enfant et parent

 parent_syn_4("app_section4",true);// synchronisation de la pache enfant et parent
 children_syn_4("app_section4",true);// synchronisation de la pache enfant et parent

 parent_syn_5("app_section5",true);// synchronisation de la pache enfant et parent
 children_syn_5("app_section5",true);// synchronisation de la pache enfant et parent

 parent_syn_6("app_section6",true);// synchronisation de la pache enfant et parent
 children_syn_6("app_section6",true);// synchronisation de la pache enfant et parent
 

 parent_syn_7("app_section7",true);// synchronisation de la pache enfant et parent
 children_syn_7("app_section7",true);// synchronisation de la pache enfant et parent

 parent_syn_8("app_section8",true);// synchronisation de la pache enfant et parent
 children_syn_8("app_section8",true);// synchronisation de la pache enfant et parent

 parent_syn_9("app_section9",true);// synchronisation de la pache enfant et parent
 children_syn_9("app_section9",true);// synchronisation de la pache enfant et parent

 parent_syn_10("app_section10",true);// synchronisation de la pache enfant et parent
 children_syn_10("app_section10",true);// synchronisation de la pache enfant et parent

 parent_syn_11("app_section11",true);// synchronisation de la pache enfant et parent
 children_syn_11("app_section11",true);// synchronisation de la pache enfant et parent

 parent_syn_12("app_section12",true);// synchronisation de la pache enfant et parent
 children_syn_12("app_section12",true);// synchronisation de la pache enfant et parent

 parent_syn_13("app_section13",true);// synchronisation de la pache enfant et parent
 children_syn_13("app_section13",true);// synchronisation de la pache enfant et parent

 parent_syn_14("app_section14",true);// synchronisation de la pache enfant et parent
 children_syn_14("app_section14",true);// synchronisation de la pache enfant et parent

 parent_syn_15("app_section15",true);// synchronisation de la pache enfant et parent
 children_syn_15("app_section15",true);// synchronisation de la pache enfant et parent

 parent_syn_16("app_section16",true);// synchronisation de la pache enfant et parent
 children_syn_16("app_section16",true);// synchronisation de la pache enfant et parent

 parent_syn_17("app_section17",true);// synchronisation de la pache enfant et parent
 children_syn_17("app_section17",true);// synchronisation de la pache enfant et parent

 parent_syn_18("app_section18",true);// synchronisation de la pache enfant et parent
 children_syn_18("app_section18",true);// synchronisation de la pache enfant et parent

 

 parent_syn_19("app_section19",true);// synchronisation de la pache enfant et parent
 children_syn_19("app_section19",true);// synchronisation de la pache enfant et parent

 parent_syn_20("app_section20",true);// synchronisation de la pache enfant et parent
 children_syn_20("app_section20",true);// synchronisation de la pache enfant et parent

 parent_syn_21("app_section21",true);// synchronisation de la pache enfant et parent
 children_syn_21("app_section21",true);// synchronisation de la pache enfant et parent

 parent_syn_22("app_section22",true);// synchronisation de la pache enfant et parent
 children_syn_22("app_section22",true);// synchronisation de la pache enfant et parent

 parent_syn_23("app_section23",true);// synchronisation de la pache enfant et parent
 children_syn_23("app_section23",true);// synchronisation de la pache enfant et parent

 parent_syn_24("app_section24",true);// synchronisation de la pache enfant et parent
 children_syn_24("app_section24",true);// synchronisation de la pache enfant et parent

 parent_syn_25("app_section25",true);// synchronisation de la pache enfant et parent
 children_syn_25("app_section25",true);// synchronisation de la pache enfant et parent

 
 
  // exemple 
  
 }
 


 

 function parent_syn_1(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header1.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header1.text ; 
         console.log(header_objet.header1.text) ; // information dans la premier table
         console.log(header_objet.header1.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header1.className) ;
         // identique header_objet.header1.title
         console.log(header_objet.header1.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header1.title) ;
         //header_objet.header1.id
         console.log(header_objet.header1.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header1.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_1(parent_id,value) {
let quantite1= header_objet.header1.elementchildNodes.length ; 
let quantite2= header_objet.header1.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header1.elementchildNodes[i][y]) ; 
    if(header_objet.header1.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header1.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header1.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header1.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header1.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header1.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }


 function parent_syn_2(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header2.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header2.text ; 
         console.log(header_objet.header2.text) ; // information dans la premier table
         console.log(header_objet.header2.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header2.className) ;
         // identique header_objet.header2.title
         console.log(header_objet.header2.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header2.title) ;
         //header_objet.header2.id
         console.log(header_objet.header2.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header2.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_2(parent_id,value) {
let quantite1= header_objet.header2.elementchildNodes.length ; 
let quantite2= header_objet.header2.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header2.elementchildNodes[i][y]) ; 
    if(header_objet.header2.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header2.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header2.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header2.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header2.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header2.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
// !!!!!!!!!
 function parent_syn_3(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header3.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header3.text ; 
         console.log(header_objet.header3.text) ; // information dans la premier table
         console.log(header_objet.header3.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header3.className) ;
         // identique header_objet.header3.title
         console.log(header_objet.header3.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header3.title) ;
         //header_objet.header3.id
         console.log(header_objet.header3.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header3.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_3(parent_id,value) {
let quantite1= header_objet.header3.elementchildNodes.length ; 
let quantite2= header_objet.header3.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header3.elementchildNodes[i][y]) ; 
    if(header_objet.header3.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header3.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header3.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header3.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header3.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header3.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }

 function parent_syn_4(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header4.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header4.text ; 
         console.log(header_objet.header4.text) ; // information dans la premier table
         console.log(header_objet.header4.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header4.className) ;
         // identique header_objet.header4.title
         console.log(header_objet.header4.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header4.title) ;
         //header_objet.header4.id
         console.log(header_objet.header4.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header4.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_4(parent_id,value) {
let quantite1= header_objet.header4.elementchildNodes.length ; 
let quantite2= header_objet.header4.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header4.elementchildNodes[i][y]) ; 
    if(header_objet.header4.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header4.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header4.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header4.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header4.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header4.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_5(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header5.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header5.text ; 
         console.log(header_objet.header5.text) ; // information dans la premier table
         console.log(header_objet.header5.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header5.className) ;
         // identique header_objet.header5.title
         console.log(header_objet.header5.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header5.title) ;
         //header_objet.header5.id
         console.log(header_objet.header5.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header5.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_5(parent_id,value) {
let quantite1= header_objet.header5.elementchildNodes.length ; 
let quantite2= header_objet.header5.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header5.elementchildNodes[i][y]) ; 
    if(header_objet.header5.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header5.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header5.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header5.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header5.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header5.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_6(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header6.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header6.text ; 
         console.log(header_objet.header6.text) ; // information dans la premier table
         console.log(header_objet.header6.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header6.className) ;
         // identique header_objet.header6.title
         console.log(header_objet.header6.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header6.title) ;
         //header_objet.header6.id
         console.log(header_objet.header6.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header6.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_6(parent_id,value) {
let quantite1= header_objet.header6.elementchildNodes.length ; 
let quantite2= header_objet.header6.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header6.elementchildNodes[i][y]) ; 
    if(header_objet.header6.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header6.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header6.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header6.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header6.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header6.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_7(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header7.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header7.text ; 
         console.log(header_objet.header7.text) ; // information dans la premier table
         console.log(header_objet.header7.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header7.className) ;
         // identique header_objet.header7.title
         console.log(header_objet.header7.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header7.title) ;
         //header_objet.header7.id
         console.log(header_objet.header7.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header7.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_7(parent_id,value) {
let quantite1= header_objet.header7.elementchildNodes.length ; 
let quantite2= header_objet.header7.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header7.elementchildNodes[i][y]) ; 
    if(header_objet.header7.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header7.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header7.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header7.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header7.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header7.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_8(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header8.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header8.text ; 
         console.log(header_objet.header8.text) ; // information dans la premier table
         console.log(header_objet.header8.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header8.className) ;
         // identique header_objet.header8.title
         console.log(header_objet.header8.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header8.title) ;
         //header_objet.header8.id
         console.log(header_objet.header8.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header8.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_8(parent_id,value) {
let quantite1= header_objet.header8.elementchildNodes.length ; 
let quantite2= header_objet.header8.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header8.elementchildNodes[i][y]) ; 
    if(header_objet.header8.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header8.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header8.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header8.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header8.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header8.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_9(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header9.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header9.text ; 
         console.log(header_objet.header9.text) ; // information dans la premier table
         console.log(header_objet.header9.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header9.className) ;
         // identique header_objet.header9.title
         console.log(header_objet.header9.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header9.title) ;
         //header_objet.header9.id
         console.log(header_objet.header9.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header9.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_9(parent_id,value) {
let quantite1= header_objet.header9.elementchildNodes.length ; 
let quantite2= header_objet.header9.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header9.elementchildNodes[i][y]) ; 
    if(header_objet.header9.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header9.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header9.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header9.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header9.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header9.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_10(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header10.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header10.text ; 
         console.log(header_objet.header10.text) ; // information dans la premier table
         console.log(header_objet.header10.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header10.className) ;
         // identique header_objet.header10.title
         console.log(header_objet.header10.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header10.title) ;
         //header_objet.header10.id
         console.log(header_objet.header10.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header10.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_10(parent_id,value) {
let quantite1= header_objet.header10.elementchildNodes.length ; 
let quantite2= header_objet.header10.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header10.elementchildNodes[i][y]) ; 
    if(header_objet.header10.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header10.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header10.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header10.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header10.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header10.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_11(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header11.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header11.text ; 
         console.log(header_objet.header11.text) ; // information dans la premier table
         console.log(header_objet.header11.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header11.className) ;
         // identique header_objet.header11.title
         console.log(header_objet.header11.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header11.title) ;
         //header_objet.header11.id
         console.log(header_objet.header11.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header11.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_11(parent_id,value) {
let quantite1= header_objet.header11.elementchildNodes.length ; 
let quantite2= header_objet.header11.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header11.elementchildNodes[i][y]) ; 
    if(header_objet.header11.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header11.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header11.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header11.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header11.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header11.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_12(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header12.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header12.text ; 
         console.log(header_objet.header12.text) ; // information dans la premier table
         console.log(header_objet.header12.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header12.className) ;
         // identique header_objet.header12.title
         console.log(header_objet.header12.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header12.title) ;
         //header_objet.header12.id
         console.log(header_objet.header12.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header12.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_12(parent_id,value) {
let quantite1= header_objet.header12.elementchildNodes.length ; 
let quantite2= header_objet.header12.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header12.elementchildNodes[i][y]) ; 
    if(header_objet.header12.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header12.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header12.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header12.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header12.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header12.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_13(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header13.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header13.text ; 
         console.log(header_objet.header13.text) ; // information dans la premier table
         console.log(header_objet.header13.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header13.className) ;
         // identique header_objet.header13.title
         console.log(header_objet.header13.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header13.title) ;
         //header_objet.header13.id
         console.log(header_objet.header13.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header13.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_13(parent_id,value) {
let quantite1= header_objet.header13.elementchildNodes.length ; 
let quantite2= header_objet.header13.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header13.elementchildNodes[i][y]) ; 
    if(header_objet.header13.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header13.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header13.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header13.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header13.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header13.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_14(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header14.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header14.text ; 
         console.log(header_objet.header14.text) ; // information dans la premier table
         console.log(header_objet.header14.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header14.className) ;
         // identique header_objet.header14.title
         console.log(header_objet.header14.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header14.title) ;
         //header_objet.header14.id
         console.log(header_objet.header14.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header14.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_14(parent_id,value) {
let quantite1= header_objet.header14.elementchildNodes.length ; 
let quantite2= header_objet.header14.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header14.elementchildNodes[i][y]) ; 
    if(header_objet.header14.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header14.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header14.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header14.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header14.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header14.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_15(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header15.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header15.text ; 
         console.log(header_objet.header15.text) ; // information dans la premier table
         console.log(header_objet.header15.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header15.className) ;
         // identique header_objet.header15.title
         console.log(header_objet.header15.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header15.title) ;
         //header_objet.header15.id
         console.log(header_objet.header15.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header15.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_15(parent_id,value) {
let quantite1= header_objet.header15.elementchildNodes.length ; 
let quantite2= header_objet.header15.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header15.elementchildNodes[i][y]) ; 
    if(header_objet.header15.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header15.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header15.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header15.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header15.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header15.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_16(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header16.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header16.text ; 
         console.log(header_objet.header16.text) ; // information dans la premier table
         console.log(header_objet.header16.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header16.className) ;
         // identique header_objet.header16.title
         console.log(header_objet.header16.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header16.title) ;
         //header_objet.header16.id
         console.log(header_objet.header16.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header16.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_16(parent_id,value) {
let quantite1= header_objet.header16.elementchildNodes.length ; 
let quantite2= header_objet.header16.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header16.elementchildNodes[i][y]) ; 
    if(header_objet.header16.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header16.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header16.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header16.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header16.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header16.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_17(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header17.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header17.text ; 
         console.log(header_objet.header17.text) ; // information dans la premier table
         console.log(header_objet.header17.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header17.className) ;
         // identique header_objet.header17.title
         console.log(header_objet.header17.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header17.title) ;
         //header_objet.header17.id
         console.log(header_objet.header17.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header17.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_17(parent_id,value) {
let quantite1= header_objet.header17.elementchildNodes.length ; 
let quantite2= header_objet.header17.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header17.elementchildNodes[i][y]) ; 
    if(header_objet.header17.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header17.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header17.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header17.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header17.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header17.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_18(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header18.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header18.text ; 
         console.log(header_objet.header18.text) ; // information dans la premier table
         console.log(header_objet.header18.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header18.className) ;
         // identique header_objet.header18.title
         console.log(header_objet.header18.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header18.title) ;
         //header_objet.header18.id
         console.log(header_objet.header18.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header18.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_18(parent_id,value) {
let quantite1= header_objet.header18.elementchildNodes.length ; 
let quantite2= header_objet.header18.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header18.elementchildNodes[i][y]) ; 
    if(header_objet.header18.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header18.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header18.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header18.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header18.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header18.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_19(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header19.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header19.text ; 
         console.log(header_objet.header19.text) ; // information dans la premier table
         console.log(header_objet.header19.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header19.className) ;
         // identique header_objet.header19.title
         console.log(header_objet.header19.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header19.title) ;
         //header_objet.header19.id
         console.log(header_objet.header19.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header19.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_19(parent_id,value) {
let quantite1= header_objet.header19.elementchildNodes.length ; 
let quantite2= header_objet.header19.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header19.elementchildNodes[i][y]) ; 
    if(header_objet.header19.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header19.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header19.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header19.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header19.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header19.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_20(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header20.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header20.text ; 
         console.log(header_objet.header20.text) ; // information dans la premier table
         console.log(header_objet.header20.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header20.className) ;
         // identique header_objet.header20.title
         console.log(header_objet.header20.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header20.title) ;
         //header_objet.header20.id
         console.log(header_objet.header20.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header20.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_20(parent_id,value) {
let quantite1= header_objet.header20.elementchildNodes.length ; 
let quantite2= header_objet.header20.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header20.elementchildNodes[i][y]) ; 
    if(header_objet.header20.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header20.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header20.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header20.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header20.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header20.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_21(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header21.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header21.text ; 
         console.log(header_objet.header21.text) ; // information dans la premier table
         console.log(header_objet.header21.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header21.className) ;
         // identique header_objet.header21.title
         console.log(header_objet.header21.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header21.title) ;
         //header_objet.header21.id
         console.log(header_objet.header21.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header21.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_21(parent_id,value) {
let quantite1= header_objet.header21.elementchildNodes.length ; 
let quantite2= header_objet.header21.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header21.elementchildNodes[i][y]) ; 
    if(header_objet.header21.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header21.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header21.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header21.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header21.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header21.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_22(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header22.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header22.text ; 
         console.log(header_objet.header22.text) ; // information dans la premier table
         console.log(header_objet.header22.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header22.className) ;
         // identique header_objet.header22.title
         console.log(header_objet.header22.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header22.title) ;
         //header_objet.header22.id
         console.log(header_objet.header22.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header22.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_22(parent_id,value) {
let quantite1= header_objet.header22.elementchildNodes.length ; 
let quantite2= header_objet.header22.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header22.elementchildNodes[i][y]) ; 
    if(header_objet.header22.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header22.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header22.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header22.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header22.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header22.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_23(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header23.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header23.text ; 
         console.log(header_objet.header23.text) ; // information dans la premier table
         console.log(header_objet.header23.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header23.className) ;
         // identique header_objet.header23.title
         console.log(header_objet.header23.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header23.title) ;
         //header_objet.header23.id
         console.log(header_objet.header23.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header23.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_23(parent_id,value) {
let quantite1= header_objet.header23.elementchildNodes.length ; 
let quantite2= header_objet.header23.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header23.elementchildNodes[i][y]) ; 
    if(header_objet.header23.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header23.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header23.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header23.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header23.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header23.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_24(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header24.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header24.text ; 
         console.log(header_objet.header24.text) ; // information dans la premier table
         console.log(header_objet.header24.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header24.className) ;
         // identique header_objet.header24.title
         console.log(header_objet.header24.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header24.title) ;
         //header_objet.header24.id
         console.log(header_objet.header24.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header24.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_24(parent_id,value) {
let quantite1= header_objet.header24.elementchildNodes.length ; 
let quantite2= header_objet.header24.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header24.elementchildNodes[i][y]) ; 
    if(header_objet.header24.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header24.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header24.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header24.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header24.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header24.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }
 function parent_syn_25(source_div,value) {
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header25.value==value){
    document.getElementById(source_div).innerHTML=header_objet.header25.text ; 
         console.log(header_objet.header25.text) ; // information dans la premier table
         console.log(header_objet.header25.elementchildNodes[0][0]) ;
         document.getElementById(source_div).setAttribute("class",header_objet.header25.className) ;
         // identique header_objet.header25.title
         console.log(header_objet.header25.elementchildNodes[0][1]) ;
         document.getElementById(source_div).setAttribute("title",header_objet.header25.title) ;
         //header_objet.header25.id
         console.log(header_objet.header25.elementchildNodes[0][2]) ;
         document.getElementById(source_div).setAttribute("id",source_div) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header25.text) ; 
         //header_objet.header1.className 
  }
 
 }

 function children_syn_25(parent_id,value) {
let quantite1= header_objet.header25.elementchildNodes.length ; 
let quantite2= header_objet.header25.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header25.elementchildNodes[i][y]) ; 
    if(header_objet.header25.elementchildNodes[i][y]==value){
         // Create an "li" node:

                  const node = document.createElement(header_objet.header25.elementchildNodes[i][4]); // atribute
                  const textnode = document.createTextNode(header_objet.header25.elementchildNodes[i][5]); //text
                  node.setAttribute("id", header_objet.header25.elementchildNodes[i][2]); // id
                  node.setAttribute("title", header_objet.header25.elementchildNodes[i][1]);// title                  
                  node.setAttribute("class", header_objet.header25.elementchildNodes[i][3]);// class
                  // donne un atribut
                  // Create a text node:                  
                  // Append the text node to the "li" node:
                  node.appendChild(textnode);                 
                  // Append the "li" node to the list:
                  document.getElementById(parent_id).appendChild(node);
        }
  }
} 
}

 }


 const myTimeout_1 = setTimeout(syn_fun,250);
 const myTimeout_2 = setTimeout(syn_fun,250);
 const myTimeout_3 = setTimeout(syn_fun,250);
 const myTimeout_4 = setTimeout(syn_fun,250);
 const myTimeout_5 = setTimeout(syn_fun,250);
 

 const myTimeout_6 = setTimeout(syn_fun,250);
 const myTimeout_7 = setTimeout(syn_fun,250);
 const myTimeout_8 = setTimeout(syn_fun,250);
 const myTimeout_9 = setTimeout(syn_fun,250);
 const myTimeout_10 = setTimeout(syn_fun,250);
 

 const myTimeout_11 = setTimeout(syn_fun,250);
 const myTimeout_12 = setTimeout(syn_fun,250);
 const myTimeout_13 = setTimeout(syn_fun,250);
 const myTimeout_14 = setTimeout(syn_fun,250);
 const myTimeout_15 = setTimeout(syn_fun,250);
 

 const myTimeout_16 = setTimeout(syn_fun,250);
 const myTimeout_17 = setTimeout(syn_fun,250);
 const myTimeout_18 = setTimeout(syn_fun,250);
 const myTimeout_19 = setTimeout(syn_fun,250);
 const myTimeout_20 = setTimeout(syn_fun,250);
 

 const myTimeout_21 = setTimeout(syn_fun,250);
 const myTimeout_22 = setTimeout(syn_fun,250);
 const myTimeout_23 = setTimeout(syn_fun,250);
 const myTimeout_24 = setTimeout(syn_fun,250);
 const myTimeout_25 = setTimeout(syn_fun,250);
  