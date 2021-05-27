const displayUploadFileName = () => {
    var files = document.getElementById("getfile").files;
    var filename = "";
    for (var i = 0; i < files.length; i++)
        filename += files[i].name + ", ";

    filename = filename.substring(0, filename.length-2);
    document.getElementById("uploadfile").value = "";
    document.getElementById("uploadfile").value = filename;
}

const validate = () => {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
}

window.addEventListener('load', () => {

    // Singin success
    if(document.getElementById("home")){
        var urlParams = new URLSearchParams(window.location.search);
        var signinSuccess = urlParams.has("signinsuccess");
        if(signinSuccess){
            document.getElementById("nav-signin").hidden = true;
            document.getElementById("nav-signout").hidden = false;
            localStorage.setItem("userSession", "true");
        }
    }

    // Auth
    if(document.getElementById("auth")){
        var urlParams = new URLSearchParams(window.location.search);
        var autherror = urlParams.has("autherror");
        var signininvalid = urlParams.has("invalid");
        if(autherror){
            document.getElementById("authmsg").innerHTML = "User already exist";
            localStorage.setItem("userSession", "false");
        }else if(signininvalid){
            document.getElementById("authmsg").innerHTML = "Invalid Username/Password";
            localStorage.setItem("userSession", "false");
        }else{
            document.getElementById("authmsg").innerHTML = "Registration Success";
            document.getElementById("nav-signin").hidden = true;
            document.getElementById("nav-signout").hidden = false;
            localStorage.setItem("userSession", "true");
        }
    }

    //SignOut
    document.getElementById("nav-signout").addEventListener("click", () =>{
        console.log("Singout")
        document.getElementById("nav-signin").hidden = false;
        document.getElementById("nav-signout").hidden = true;
        window.location.href = '/';
        localStorage.setItem("userSession", "false");
    }); 

  });
  
  //อิอิ เกทคิวรี่พารามมมมมมมม 
  //มาเซตไว้นะจ้ะ
