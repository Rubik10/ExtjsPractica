<?php
include 'permisos.php';
include("conectar.php");

$sql  = "SELECT * FROM cliente";

// Consulta sql.
   $v_consulta = mysql_query($sql) or die(mysql_error());

   // Se crea un array
   $v_array_clientes = array();
   while($cliente = mysql_fetch_assoc($v_consulta)) {
       $v_array_clientes[] = $cliente;
   }

   // Consulta de clientes de la tabla.
   $v_cantidadTotal = mysql_query('SELECT count(*) as num FROM cliente') or die(mysql_error());
   $v_row = mysql_fetch_assoc($v_cantidadTotal);
   $v_total = $v_row['num'];

   //encoda para formato JSON
   echo json_encode(array(
  "clientes" => $v_array_clientes
   ));

 ?>
