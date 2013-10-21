<?php

header('Content-type: text/json');
header('Content-type: application/json');

$response = '{}';

if(isset($_GET['q'])){

	$url = 'http://127.0.0.1:3000'.$_GET['q'];
	if(strtoupper($_SERVER['REQUEST_METHOD']) == 'POST'){

		$opts = array(
			'http' => array(
				'method'  => 'POST',
				'content' => file_get_contents("php://input"),
				'header' => "Content-Type: application/json\r\n"
			),
		);

		$context  = stream_context_create($opts);
		$response = file_get_contents($url, false, $context, -1, 40000);

	} else {
		$response = file_get_contents($url);
	}
}

echo $response;

?>