import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Authen");
    }

    async getHtml() {
        return `
            <div id="login" class="container p-5">
                <div class="d-flex flex-column align-items-center">
                    <h1>Authen</h1>  
            </div>   
        `;
    }
}