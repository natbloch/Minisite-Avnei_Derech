


<?
		$ProjectID = "f28c64f1-77e8-46ae-9231-eff17123d016";
		$Projectname = "עפולה";

		$name = $_POST['Name'] . ' ' . $_POST['Family'];
		$Phone  =$_POST['Phone'];
		$MediaTitle   = $_POST['utm_source'];
		if ($MediaTitle == "") {
			$MediaTitle = "direct";
		}
		$email  = $_POST['Mail'];
		$AllowedMail= 'false';

		if(isset($_POST['Agree']) && $_POST['Agree']==true){
			$AllowedMail= 'true';
		}


		$IP =$_SERVER['REMOTE_ADDR'];

/*

		$fields = array(
			'a5'=>$MediaTitle,
			's10'=>$Projectname
		);

		$action="http://app.yoatsim.co.il/api/landingPage" ;
		$post_array = array(
			'landingPageToken'=>$ProjectID,
			'name'=>$name,
			'phone'=>$Phone,
			'allowMail'=>$AllowedMail,
			'allowSms'=>$AllowedMail,
			'fields'=>$fields,
			'email'=>$email
		);

		$jsonDataEncoded = json_encode($post_array);
			$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL, $action );
				curl_setopt($ch, CURLOPT_POST, TRUE);
				curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonDataEncoded);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
				curl_setopt($ch, CURLOPT_HTTPHEADER, array(
																						'Content-Type: application/json'
																						));
				$response = curl_exec($ch );
			curl_close($ch );

*/
//----------------  BAMBI  -----------------

		$ProjectID2 = '7947';
		$Password2 ='zxc3110';

			$mishtahen = $_POST['va3'];
			$AllowedMail2=2;

			if(isset($_POST['Agree']) && $_POST['Agree']==true){
$AllowedMail2=0;
}


			$IP =$_SERVER['REMOTE_ADDR'];

			$action="http://www.bmby.com/shared/AddClient/index.php" ;
			$post_array = array(
				'Fname'=>$_POST['Name'] ,
				'Lname'=>$_POST['Family'] ,
				'Phone'=>$Phone,
				'Email'=>$email,
				'WPrice'=>$mishtahen,
				'MediaTitle'=>$MediaTitle,
				'IP'=>$IP,
				'ProjectID'=>$ProjectID2,
				'Password'=>$Password2,
				'EmailOk'=>$AllowedMail
			);
				$ch = curl_init();
					curl_setopt($ch, CURLOPT_URL, $action );
					curl_setopt($ch, CURLOPT_POST, TRUE);
					curl_setopt($ch, CURLOPT_POSTFIELDS, $post_array);
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
					$response = curl_exec($ch );
				curl_close($ch );


			/*	// ----------- EMAIL --------------------------------
				$to = 'studio8@twisted.co.il';
				$subject= "New Lead";
				$msg = "Hi, we just received a new lead for this campaign:\n\n"
				."     string: "
				.$message
				." Server Response: \n\n" . $response;


					// use wordwrap() if lines are longer than 70 characters
					$msg = wordwrap($msg,70);

				// send email
				mail($to, $subject, $msg, 'From: <studio8@twisted.co.il>');*/


?>
