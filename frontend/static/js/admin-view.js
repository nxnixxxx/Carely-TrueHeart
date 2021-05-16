let isAdmin = 1;
if(isAdmin){
    var node = document.createElement("a");                 // Create a <li> node
    var textnode = document.createTextNode("Add Hotel");
    node.appendChild(textnode); 
    node.className = "nav-link nav__link";
    node.href = "/addhotel";
    var nav_help = document.getElementById("nav-help");
    //alert(nav_signin.innerText);
    nav_help.parentNode.insertBefore(node, nav_help.nextSibling);
}