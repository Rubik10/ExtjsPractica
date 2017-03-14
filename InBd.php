<?php
include 'Alljson.php';
include("conectar.php");

$Marca = $_POST['Marca'];
$Ram = $_POST['Ram'];
$FechaCompra = $_POST['FechaCompra'];
$Usuario = $_POST['Usuario'];


$json = InsertarCompras($Marca, $Ram, $FechaCompra, $Usuario);

// consulta sql.
$sql  = sprintf("INSERT INTO  compra (Marca, Ram, FechaCompra, id_cliente) VALUES ('%s', '%s', '%s', '%s')",
 mysql_real_escape_string($json->Compra->Marca),
 mysql_real_escape_string($json->Compra->Ram),
 mysql_real_escape_string($json->Compra->FechaCompra),
 mysql_real_escape_string($json->Compra->Usuario));
//  $sql ="INSERT INTO name (name) values ('luis')";
$rs = mysql_query($sql);



 ?>
