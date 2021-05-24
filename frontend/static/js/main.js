function displayUploadFileName() {
    var files = document.getElementById("getfile").files;
    var filename = "";
    for (var i = 0; i < files.length; i++)
        filename += files[i].name + ", ";

    filename = filename.substring(0, filename.length-2);
    document.getElementById("uploadfile").value = "";
    document.getElementById("uploadfile").value = filename;
}