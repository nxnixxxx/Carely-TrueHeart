// To visible AddHotel menu ~
/*let isAdmin = 1;
if(isAdmin){
    var node = document.createElement("a");                 // Create a <li> node
    var textnode = document.createTextNode("Add Hotel");
    node.appendChild(textnode); 
    node.className = "nav-link nav__link";
    node.href = "/addhotel";
    var nav_help = document.getElementById("nav-help");
    //alert(nav_signin.innerText);
    nav_help.parentNode.insertBefore(node, nav_help.nextSibling);
}*/

// const router = require("express").Router();
// const User = require("../../../model/User");

const setSignInValidate = () => {
  'use strict'
  alert('Hi');
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()

          router.post("/singup", async (req, res) => {
            const user = new User({
              username: document.getElementById("username").value,
              password:document.getElementById("password").value,
              name:,
              lastname:,
              telephone:
            });
          });
        }

        form.classList.add('was-validated')
      }, false)
    })
}

const setSignUpValidate = () => {
  'use strict'
  alert('Hi');
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()

          // router.post("/singup", async (req, res) => {
          //   const user = new User({
          //     username: document.getElementById("username").value,
          //     password:document.getElementById("password").value,
          //     name:,
          //     lastname:,
          //     telephone:
          //   });
          //});
        }

        form.classList.add('was-validated')
      }, false)
    })
}
