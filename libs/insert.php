
<?php

$data = json_decode(file_get_contents("php://input"));
$nom = mysql_real_escape_string($data->nom);
$intervenant = mysql_real_escape_string($data->intervenant);
$fonction = mysql_real_escape_string($data->fonction);
$message = mysql_real_escape_string($data->message);
$date = mysql_real_escape_string($data->date);

$con = mysql_connect('localhost', 'formiris', 'formiris75');
mysql_select_db('acteur_avenir', $con);

if($nom!="" && $intervenant!="" && $message!=""){
	$qry = 'INSERT INTO data (nom,intervenant,fonction,message,date) values ("' . $nom . '","' . $intervenant . '","' . $fonction . '","' . $message . '","' . $date . '")';
	$qry_res = mysql_query($qry);
	if ($qry_res) {
		$arr = array('msg' => "Votre message a bien été posté", 'error' => '');
		$jsn = json_encode($arr);
		print_r($jsn);
	} else {
		$arr = array('msg' => "", 'error' => "Erreur lors de l'envoi du message");
		$jsn = json_encode($arr);
		print_r($jsn);
	}
}elseif ($nom == "") {
	$arr = array('msg' => "", 'error' => "Veuillez remplir le champ Nom");
		$jsn = json_encode($arr);
		print_r($jsn);
}elseif ($intervenant == "") {
	$arr = array('msg' => "", 'error' => "Veuillez choisir un intervenant");
		$jsn = json_encode($arr);
		print_r($jsn);
}elseif ($message == "") {
	$arr = array('msg' => "", 'error' => "Veuillez remplir le champ message");
		$jsn = json_encode($arr);
		print_r($jsn);
}

?>