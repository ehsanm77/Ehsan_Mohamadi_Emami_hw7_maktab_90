let btn = document.getElementById("btn");

function validateForm(e) {
  e.preventDefault();
  let firstName = document.getElementById("firstName").value;
  let middleName = document.getElementById("middleName").value;
  let lastName = document.getElementById("lastName").value;
  let selectOption = document.getElementById("selectOption").value;
  let phoneCode = document.getElementById("phone").value;
  let phoneNumber = document.getElementById("phone").value;
  let textArea = document.getElementById("textarea").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let rePassword = document.getElementById("rePassword").value;

  if (firstName === "" || middleName === "" || lastName === "") {
    alert("Name fields cannot be empty");
    return false;
  }

  if (selectOption === "") {
    alert("Please select an option");
    return false;
  }

  if (phoneCode === "" || phoneNumber === "" || phoneCode === "91") {
    alert("Phone fields cannot be empty");
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

  if (password === "" || rePassword === "") {
    alert("Password fields cannot be empty");
    return false;
  }

  if (password !== rePassword) {
    alert("Passwords do not match");
    return false;
  }
  let obj = {
    "First name": firstName,
  };
  console.log(obj);
  return true;
}
btn.addEventListener("click", validateForm);
