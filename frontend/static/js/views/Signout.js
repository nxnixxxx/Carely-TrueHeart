import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Signout");
    }

    async getHtml() {
        return `
            <div id="signout" class="d-flex flex-column justify-content-center align-items-center">
                <h1 class="title ">Signout</h1>
            </div>
        `;
    }
}