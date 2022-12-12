<?php
$url=explode('/',$_SERVER["REQUEST_URI"]);
$meretLeker="SELECT * FROM meretek";

function adatokLekerese($sql)
{
    $db=new mysqli("localhost","root","","webshop");
    if($db->connect_error)
    {
        $valasz=array("valasz"=>$db->connect_error);
    }
    else
    {
        $eredmeny=$db->query($sql);
        if($db->errno==0)
        {
            if($eredmeny->num_rows>0)
            {
                $valasz=$eredmeny->fetch_all(MYSQLI_ASSOC);
            }
            else
            {
                $valasz=array("valasz"=>"Nincsenek találati sorok.");
            }
        }
        else
        {
            $valasz=array("valasz"=>$db->error);
        }
    }
    return json_encode($valasz,JSON_UNESCAPED_UNICODE);
}

switch (end($url))
{
    case "meretek":
        echo adatokLekerese($meretLeker);
        break;
    default:
        echo "404";
        break;
}
?>