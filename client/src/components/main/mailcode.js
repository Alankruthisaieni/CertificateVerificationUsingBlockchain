
	function sendEmail() {
	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "cserit4@gmail.com",
		Password: "26AED938423E23C21C0338F27DB1547DD9B2",
		To: '1703007@ritindia.edu',
		From: "cserit4@gmail.com",
		Subject: "Sending Email using javascript",
		Body: "Well that was easy!!",
	})
		.then(function (message) {
		alert("mail sent successfully")
		});
	}


