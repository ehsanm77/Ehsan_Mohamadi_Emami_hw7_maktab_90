let btn = document.getElementById("btn");

function validateForm(e) {
  e.preventDefault();
  let firstName = document.getElementById("firstName").value.trim();
  let middleName = document.getElementById("middleName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let selectOption = document.getElementById("selectOption").value;
  let maleRadio = document.getElementById("male");
  let femaleRadio = document.getElementById("female");
  let otherRadio = document.getElementById("other");
  let selectedGender;
  console.log(gender);
  let phoneNumber = document.getElementById("phone").value.trim();
  let phoneCode = document.getElementById("phone-code").value.trim();
  let textArea = document.getElementById("textarea").value;
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let rePassword = document.getElementById("rePassword").value;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (firstName === "" || middleName === "" || lastName === "" || undefined) {
    alert("Name fields cannot be empty");
    return false;
  }

  if (selectOption === "") {
    alert("Please select an option");
    return false;
  }

  if (maleRadio.checked) {
    selectedGender = "male";
  } else if (femaleRadio.checked) {
    selectedGender = "female";
  } else if (otherRadio.checked) {
    selectedGender = "other";
  }
  if (!selectedGender) {
    alert("Please select gender");
    return false;
  }
  if (phoneCode === "" || phoneNumber === "") {
    alert("Phone fields cannot be empty");
    return false;
  }
  if (phoneNumber.length < 10) {
    alert("Its not correct number");
    return false;
  }
  if (textArea === "") {
    alert("Text area cannot be empty");
    return false;
  }

  if (email === "") {
    alert("Email cannot be empty");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Invalid email address");
    return false;
  }

  if (password === "") {
    alert("Password fields cannot be empty");
    return false;
  }
  if (password.length < 8) {
    alert("The password should not be less than 8");
    return false;
  }

  if (rePassword === "") {
    alert("Password fields cannot be empty");
    return false;
  }
  if (!passwordPattern.test(password)) {
    alert(
      "Invalid password. Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character."
    );
    return false;
  }
  if (password !== rePassword) {
    alert("Passwords do not match");
    return false;
  }

  let obj = {
    "First name": firstName,
    "Middle Name": middleName,
    "last name": lastName,
    Course: selectOption,
    Gender: selectedGender,
    "Phone Number": phoneNumber,
    Email: email,
    Pasword: password,
  };
  console.log(obj);
  // form.reset();
  return true;
}
btn.addEventListener("click", validateForm);
