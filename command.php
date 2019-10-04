<?php
    include 'conect.php';

    $cmd = $_GET['cmd'];

    switch ($cmd){
  
     case 'insertar':

     
        $nombre     = $_GET['nombre'];
        $apellido   = $_GET['apellido'];
        $email      = $_GET['email'];
        $telefono   = $_GET['telefono'];

            $consulta2 = "INSERT INTO `persona`(`nombre`, `apellido`, `email`, `telefono`) VALUES ('$nombre','$apellido','$email','$telefono')";
            $resultado2  = mysqli_query($con, $consulta2);

     break;

    case 'enviar':
    $destino    = "jreyesalvarez18@gmail.com";
    $nombre2     = $_POST['nombre'];
    $apellido2     = $_POST['apellido'];
    $email2      = $_POST['email'];
    $telefono2   = $_POST['telefono'];

    var_dump($nombre2, $apellido2, $email2, $telefono2);
    $contenido  = "Nombre: " .$nombre2. '' .$apellido2. "\nCorre: ".$email2. "\nTelefono: ".$telefono2;
    mail($destino, "Contacto Montemar", $contenido);

    break;

     default :
     echo "comando no valido";
    }

