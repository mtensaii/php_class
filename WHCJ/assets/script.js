function registerMember() {
	//nameValidation
	// alert("longminhtest");
	var flag = 0;
	var name = document.getElementById('name').value;
	var invalidName = document.getElementById('errorName');
	var regName = /^[^\d+]*[\d+]{0}[^\d+]*$/;

	if (name == '' || name == null) {
		invalidName.innerHTML = 'Please fill in this box!';
	}
	else if (regName.test(name) == false) {
		invalidName.innerHTML = 'Invalid name input!';
	}
	else {
		invalidName.innerHTML = '';
		flag++;
	}

	//phoneValidation
	var phone = document.getElementById('phone').value;
	var invalidPhone = document.getElementById('errorPhone');
	var regGexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

	if (phone == '' || phone == null) {
		invalidPhone.innerHTML = 'Please fill in this box!';
	} else if (!regGexPhone.test(phone)) {
		invalidPhone.innerHTML = 'Invalid phone number input!';
		phone = '';
	} else {
		invalidPhone.innerHTML = '';
		flag++;
	}

	//emailValidation
	var regexEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
	var invalidEmail = document.getElementById('errorEmail');
	var email = document.getElementById('email').value;
	if (email == '' || email == null) {
		invalidEmail.innerHTML = 'Please fill in this box! ';
	}
	else if (!regexEmail.test(email)) {
		invalidEmail.innerHTML = 'Invalid email input! ';
	}
	else {
		invalidEmail.innerHTML = '';
		flag++;
	}

	// password Invalidation
	var regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	var password = document.getElementById('pass').value;
	var invalidPassword = document.getElementById('errorPass');
	if (password == '' || pass == null) {
		invalidPassword.innerHTML = 'Please fill in this box';
	}
	else if (!regexPass.test(password)) {
		invalidPassword.innerHTML = 'Invalid password! Password must has at least eight characters, one letter and one number.';
	}
	else {
		invalidPassword.innerHTML = '';
		flag++;
	}

	// check 
	var passw = document.getElementById('passw').value;
	var invalidConPass = document.getElementById('errorConPass');

	if (passw == '' || passw == null) {
		invalidConPass.innerHTML = 'Please fill in this box!';
	} else if (password != passw) {
		invalidConPass.innerHTML = 'Passwords are not matching!';
	} else {
		invalidConPass.innerHTML = '';
		flag++;
	}

	if (flag ===5) {
		var printName = document.getElementById('printName');
		var printPhone = document.getElementById('printPhone');
		var printEmail = document.getElementById('printEmail');
		var printPass = document.getElementById('printPass');
		var printPassw= document.getElementById('printPassw');

		printName.value = name;
		printPhone.value = phone;
		printEmail.value = email;
		printPass.value = password;
		printPassw.value = passw;
	}

	return false;
}