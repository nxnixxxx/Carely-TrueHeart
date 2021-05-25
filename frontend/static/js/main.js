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

window.addEventListener('load', function () {
    var auth = document.getElementById("authmsg").innerHTML;

    // แก้ตรงนี้
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.toString());
    
    var userexist = urlParams.has("userexist");
    if(userexist){
        document.getElementById("authmsg").innerHTML = "User exist";
    }else{
        document.getElementById("authmsg").innerHTML = "Register Success";
    }
  })

  //อิอิ เกทคิวรี่พารามมมมมมมม 
  //มาเซตไว้นะจ้ะ
