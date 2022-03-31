<?php
header("Access-Control-Allow-Origin: *");
// fichier pour ajouter les mouvement de la sourie de chaque utilisateur
$servername = "localhost";
$x_position =$_POST["x_position"] ;
$y_position =$_POST["y_position"] ;

$showCoords_ =$_POST["showCoords_"] ;

$width_taille_page =$_POST["width_taille_page"] ;
$height_taille_page =$_POST["height_taille_page"] ;






$ajout = false;
$filename = 'connexion.php';
if (file_exists($filename)) {
    
    include("connexion.php") ;
    $ajout = true;
} else {
    echo "Le fichier $filename n'existe pas.";
    
}




echo $dbname ;
echo $username ;
echo $password ;
echo "position en x ".$x_position ; 
echo "position en y ".$y_position ; 
$REMOTE_ADDR = $_SERVER['REMOTE_ADDR'];

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


if($showCoords_=="1"){
  $sql = "INSERT INTO showCoords (adresse_ip,click,x_position,y_position,width_taille_page,height_taille_page)
  VALUES ('$REMOTE_ADDR','false','$x_position','$y_position','$width_taille_page','$height_taille_page')";
  }
  else {
    $sql = "INSERT INTO showCoords (adresse_ip,click,x_position,y_position,width_taille_page,height_taille_page)
VALUES ('$REMOTE_ADDR','true','$x_position','$y_position','$width_taille_page','$height_taille_page')";
  }
  
 

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();





?>