import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Carely");
    }

    async getHtml() {
        return `
            <div class="d-flex flex-column justify-content-center align-items-center">
                <h1 class="title ">WELCOME TO CARELY PET</h1>
                <h1 class="sub-title">CLICK TO FIND THE PERFECT PET HOTEL FOR YOU NEEDS.</h1>
                <button id="btn-seach" type="button" class="btn">Search</button>
            </div>
        `;
    }
}