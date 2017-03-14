<?php
include 'permisos.php';
include("conectar.php");

//$sql  = "SELECT * FROM compra";
$sql  = "SELECT Co.id, Co.Marca, Co.Ram, Co.FechaCompra, Ci.Nombre, Ci.Apellido FROM cliente Ci INNER JOIN compra Co ON Ci.id=Co.id_cliente ORDER BY Ci.Nombre";

//$v_consulta2= mysql_query($sql2) or die (mysql_error());


// Consulta sql.
   $v_consulta = mysql_query($sql) or die(mysql_error());

   // Se crea un array
   $v_array_compra = array();
   while($compra = mysql_fetch_assoc($v_consulta)) {
       $v_array_compra[] = $compra;
   }

   // Consulta de compras de la tabla.
   $v_cantidadTotal = mysql_query('SELECT count(*) as num FROM compra') or die(mysql_error());
   $v_row = mysql_fetch_assoc($v_cantidadTotal);
   $v_total = $v_row['num'];

   //encoda para formato JSON
   echo json_encode(array(
  "compra" => $v_array_compra
   ));


 ?>
