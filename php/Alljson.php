<?php


  function InsertarCompras($Marca, $Ram, $FechaCompra, $Usuario){
    $arr = array('Compra'=>array('Marca' => $Marca, 'Ram' => $Ram, 'FechaCompra' => $FechaCompra, 'Usuario' => $Usuario));
    $json = json_encode($arr);
    $recoJson = json_decode(stripslashes($json));

    return $recoJson;
  }
  function InsertarClientes($Nombre, $Apellido, $Email, $Telefono){
    $arr = array('cliente'=>array('Nombre' => $Nombre, 'Apellido' => $Apellido, 'Email' => $Email, 'Telefono' => $Telefono));
    $json = json_encode($arr);
    $recoJson = json_decode(stripslashes($json));

    return $recoJson;
  }

 ?>
