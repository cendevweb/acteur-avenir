
<?php

$datas = array();
$con = mysql_connect('localhost', 'formiris', 'formiris75');
mysql_select_db('acteur_avenir', $con);


$qry = 'SELECT * FROM data';
$qry_res = mysql_query($qry);
while ($row = mysql_fetch_array($qry_res, MYSQL_ASSOC)) {
   array_push($datas, $row);
}

$jsn = json_encode($datas);
print_r($jsn);
?>