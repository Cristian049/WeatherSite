const formContact = document.querySelector("#form-contact");

formContact.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  const formData = {
    name: name,
    email: email,
    message: message,
  };
  console.log(formData);
  if (name && email && message) {
    console.log("Message sent successfully");
    formContact.reset();
  } else {
    alert("Please fill in all fields");
  }
});
