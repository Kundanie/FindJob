<?php
function p($input){
    $fileName="./log.txt";
    $handle=fopen($fileName,"w");
    fwrite($handle,$input. " ".date("Y-m-d h:i:s"));
    fclose($handle);
}
?>