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