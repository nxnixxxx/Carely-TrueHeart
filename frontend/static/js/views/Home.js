import AbstractView from "./AbstractView.js";

let isAdmin = 0;

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Carely");
    }

    async getHtml() {
        if(isAdmin){
            return `
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h1 class="title ">WELCOME TO CARELY PET</h1>
                    <h1 class="sub-title">CLICK TO FIND THE PERFECT PET HOTEL FOR YOU NEEDS.</h1>
                    <button id="btn-seach" type="button" class="btn">Search</button>
                </div>
            `;
        }else{
            // var node = document.createElement("a");                 // Create a <li> node
            // var textnode = document.createTextNode("Add Hotel");
            // node.appendChild(textnode); 
            // node.className = "nav-link nav__link";
            // node.href = "/addhotel";
            // var nav_help = document.getElementById("nav-help");
            // //alert(nav_signin.innerText);
            // nav_help.parentNode.insertBefore(node, nav_help.nextSibling);
            //document.getElementById("nav-header").appendChild(node);

            return `
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h1 class="title ">WELCOME TO CARELY PET</h1>
                    <h1 class="sub-title">CLICK TO FIND THE PERFECT PET HOTEL FOR YOU NEEDS.</h1>
                    <button id="btn-seach" type="button" class="btn">Search</button>
                </div>
            `;
        }
        
    }
}
