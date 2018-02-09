
<?php

$data = json_decode(file_get_contents("php://input"));
$id = mysql_real_escape_string($data->id);

$con = mysql_connect('localhost', 'formiris', 'formiris75');
mysql_select_db('acteur_avenir', $con);

$qry = "DELETE FROM `data` WHERE `id`=".$id;
$qry_res = mysql_query($qry);
if ($qry_res) {
	$arr = array('msg' => "Votre message a bien été supprimer", 'error' => '');
	$jsn = json_encode($arr);
	print_r($jsn);
} else {
	$arr = array('msg' => "", 'error' => "Erreur lors de la suppression du message");
	$jsn = json_encode($arr);
	print_r($jsn);
}
?>