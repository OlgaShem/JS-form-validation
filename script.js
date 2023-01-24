let submit = document.querySelector('.registration__button');
let firstName = document.getElementById("name");
let surname = document.getElementById("surname");
let company = document.getElementById("company");
let email = document.getElementById("email");

submit.addEventListener("click",  function (event) {
	checkEmail();
	checkName();
	checkSurname();
	checkCompany();
});

function checkName() {
	document.getElementById("error-name").innerHTML = "";
		if (firstName.value.length >= 3) {
			firstName.classList.remove("invalid");
			firstName.classList.add("valid");
		} else {
			document.getElementById("error-name").innerHTML +=
				"Write your name - min 3 characters";
				firstName.classList.add("invalid");
				event.preventDefault();

		}
}

function checkSurname() {
	document.getElementById("error-surname").innerHTML = "";
		if (surname.value.length > 0) {
			surname.classList.remove("invalid");
			surname.classList.add("valid");
		} else {
			document.getElementById("error-surname").innerHTML +=
				"Write your surname";
				surname.classList.add("invalid");
				event.preventDefault();

		}
	}

function checkCompany() {
	document.getElementById("error-company").innerHTML = "";
		if (company.value.length >= 3) {
			company.classList.remove("invalid");
			company.classList.add("valid");
		} else {
			document.getElementById("error-company").innerHTML +=
				"Write your company - min 3 characters";
				company.classList.add("invalid");
				event.preventDefault();

		}
}

function checkEmail() {
	document.getElementById("error-email").innerHTML = "";
		if (email.value.match(/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/)) {
			email.classList.remove("invalid");
			email.classList.add("valid");
			document.getElementById("error-email").innerHTML = "";
		} else {
			
			document.getElementById("error-email").innerHTML +=
				'Use email format name@mail.com';
				email.classList.add("invalid");
				event.preventDefault();

		}
}


const form = document.forms['reg'];

const inputName = document.querySelector('[name="name"]'); 
const inputSurname = document.querySelector('[name="surname"]');
const inputEmail = document.querySelector('[name="email"]');
const inputCompany = document.querySelector('[name="company"]');
inputName.addEventListener('change', changeHandler);
inputSurname.addEventListener('change', changeHandler);
inputEmail.addEventListener('change', changeHandler);
inputCompany.addEventListener('change', changeHandler);

function changeHandler() {
  const formData = new FormData(form);
  for (key of formData.keys()) {
    console.log(`${key}: ${formData.get(key)}`);
  }
}