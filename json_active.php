<!DOCTYPE html>
<html>
<body>

 

<div id="myDIV" style="padding:16px;background-color:lightgray">

 
<script>

document.getElementById("app_section").innerhtml ="test" ; 
 var dit="" ; 

 var header_total =""; 
 var section_total =""; 
 var footer_total =""; 


 

function header_total_fun(link) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     
        text= this.responseText;   
      const myArr = JSON.parse(text);
 //dit = myArr.header1[0].Name_element ;   
 header_total = myArr; 
  
    }
  };
  xhttp.open("GET", link, true);
 
 // xhttp.open("GET", "json/header.json", true);
  xhttp.send();
}
function section_total_fun(link) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     
        text= this.responseText;   
      const myArr = JSON.parse(text);
 //dit = myArr.section1[0].Name_element ;   
 section_total = myArr; 
  
    }
  };
  xhttp.open("GET", link, true);
 
 // xhttp.open("GET", "json/section.json", true);
  xhttp.send();
}
function footer_total_fun(link) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     
        text= this.responseText;   
      const myArr = JSON.parse(text);
 //dit = myArr.footer1[0].Name_element ;   
 footer_total = myArr; 
  
    }
  };
  xhttp.open("GET", link, true);
 
 // xhttp.open("GET", "json/footer.json", true);
  xhttp.send();
}








header_total_fun("json/header.json") ; 
section_total_fun("json/section.json") ; 
footer_total_fun("json/footer.json") ; 




const myTimeout_1 = setTimeout(header_total_fun_active,250);
const myTimeout_2 = setTimeout(section_total_fun_active,250);
const myTimeout_3 = setTimeout(footer_total_fun_active,250);



function header_total_fun_active() { 
    console.log( header_total.header1[0].Name_element +'1 ???') ; 
}
function section_total_fun_active() { 
    console.log( section_total.section1[0].Name_element +'2 ???') ; 
}
function footer_total_fun_active() { 
    console.log( footer_total.footer1[0].Name_element +'3 ???') ; 
}
 
</script>

</body>
</html>