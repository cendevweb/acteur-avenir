
<?php

$data = json_decode(file_get_contents("php://input"));
$id = mysql_real_escape_string($data->id);
$nom = mysql_real_escape_string($data->nom);
$intervenant = mysql_real_escape_string($data->intervenant);
$fonction = mysql_real_escape_string($data->fonction);
$message = mysql_real_escape_string($data->message);

$con = mysql_connect('localhost', 'formiris', 'formiris75');
mysql_select_db('acteur_avenir', $con);

$qry = 'UPDATE data
		SET nom	 		= "' . $nom . '",
			fonction 	= "' . $fonction . '",
			intervenant 	= "' . $intervenant . '",
			message 	= "' . $message . '"
		WHERE id = "' . $id . '"';
$qry_res = mysql_query($qry);
if ($qry_res) {
	$arr = array('msg' => "Votre message a bien été modifié", 'error' => '');
	$jsn = json_encode($arr);
	print_r($jsn);
} else {
	$arr = array('msg' => "", 'error' => "Erreur lors de la modification du message");
	$jsn = json_encode($arr);
	print_r($jsn);
}
?>