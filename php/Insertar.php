<?php
include 'permisos.php';
include 'Alljson.php';
include("conectar.php");

$Nombre = $_POST['Nombre'];
$Apellido = $_POST['Apellido'];
$Email = $_POST['Email'];
$Telefono = $_POST['Telefono'];


$json = InsertarClientes($Nombre, $Apellido, $Email, $Telefono);




      //$sql = "INSERT INTO name (name) values ('$Nombre')";

    // consulta sql.
   $sql  = sprintf("INSERT INTO  cliente (Nombre, Apellido, Email, Telefono) VALUES ('%s', '%s', '%s', '%s')",
     mysql_real_escape_string($json->cliente->Nombre),
     mysql_real_escape_string($json->cliente->Apellido),
     mysql_real_escape_string($json->cliente->Email),
     mysql_real_escape_string($json->cliente->Telefono));
  //  $sql ="INSERT INTO name (name) values ('luis')";
    $rs = mysql_query($sql);




?>
