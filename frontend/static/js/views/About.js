import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }

    async getHtml() {
        return `
            <div class="d-flex flex-column justify-content-center align-items-center">
                <h1 class="title ">About</h1>
            </div>
        `;
    }
}