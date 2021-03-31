var data = []; // Array lưu thông tin object
var showId = document.getElementById('id');
var showName = document.getElementById('name');
var showMail = document.getElementById('email');
var showPhone = document.getElementById('phone');
// check trùng id
function checkID(id) {
	var list = this.data;
	for (var i = 0; i < list.length; i++) {
		if (list[i].id == id) {
			return true;
		}
	}
}

// Hiển thị
function viewData() {
	var list = this.data;
	var table =
		'<table border="1" cellpadding="5"><thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Action</th></tr></thead><tbody>';


	for (var i = 0; i < list.length; i++) {
		table += '<tr>';
		table += '<td>' + list[i].id + '</td>';
		table += '<td>' + list[i].name + '</td>';
		table += '<td>' + list[i].email + '</td>';
		table += '<td>' + list[i].phone + '</td>';
		table += '<td><button class = "button" onclick="deletePerson(' + i + ');">Delete</button></td>';
		table += '</tr>';
	}

	table += '</tbody></table>';
	document.getElementById('database').innerHTML = table;
}

// Thêm mới
function addData() {
	var id = document.getElementById('id').value;
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;

	if (id == ''){
		alert("Please fullfill these information");
		resetScreen();
		return;
	}

	if (name == ''){
		alert("Please fullfill these information");
		resetScreen();
		return;
	}

	if (email == ''){
		alert("Please fullfill these information");
		resetScreen();
		return;
	}

	if (phone == ''){
		alert("Please fullfill these information");
		resetScreen();
		return;
	}



	var item = {
		id: id,
		name: name,
		email: email,
		phone: phone
	};

	if (!checkID(id)) {
		this.data.push(item);
		viewData();
		alert('Add succesfully!');
	} else {
		alert('This ID has been existed');
	}

	resetScreen();

}

// Delete
function deletePerson(index) {
	if (confirm("Are you sure you want to delete this student")) {
		// Xóa
		data.splice(index, 1);
		if ( this.data.length === 0){
			clearScreen();
		}
		else{
			viewData();
		}
	}
}

//clearInput
function resetScreen() {
	//alert(123);

	showId.value = null;
	showName.value = null;
	showMail.value = null;
	showPhone.value = null;
}

//search
function search() {
	var input = document.getElementById('id').value;
	let flag = 0;
	for (let i = 0; i < data.length; i++) {
		if (input == data[i].id) {
			//alert();
			showId.value = data[i].id;
			showName.value = data[i].name;
			showMail.value = data[i].email;
			showPhone.value = data[i].phone;
			return;
		}
	}
	if (flag == 0) {
		alert("Input ID is not existed!");
		resetScreen();
	}
	// alert();
}

//edit
function saveData() {
	var id = document.getElementById('id').value;
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;

	// let item = {
	// 	id: id,
	// 	name: name,
	// 	email: email,
	// 	phone: phone
	// };
	//check wether ID existed

	if (id == ''){
		alert("You have to search for the ID first");
	}
	else {
		let index = traverseID(id);
		if (index == -1){
			alert("Input ID is not existed!");
			resetScreen();
			viewData();
			return;
		}
		else {
			data[index].id = id;
			data[index].name = name;
			data[index].email = email;
			data[index].phone = phone;
		}
	}
	resetScreen();
	viewData();
}


function traverseID (input) {
	for (let i = 0; i < data.length; i++){
		if (input == data[i].id) {
			return i;
		}
		else return -1;
	}
}

function clearScreen() {
	if (this.data.length === 0) {
		location.reload();
	}
}
