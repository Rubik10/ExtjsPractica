<?php
    // Nombre del Servidor.
    $v_servidor = "127.0.0.1";

	// Usuario de la base de datos.
	$v_user = "root";

	// Contrasenha de la base de datos.
	$v_password = "";

	// Nombre de la base de datos.
	$v_db = "cliente";

	// Ejecuta la coneccion con la base de datos, caso contario muestra un error.
	$v_coneccion = mysql_connect($v_servidor, $v_user, $v_password) or die (mysql_error());

	// Seleccion la base de datos, caso contrario muestra un error.
    $v_banco = mysql_select_db($v_db, $v_coneccion) or die(mysql_error());
?>
