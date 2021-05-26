import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Authen");
    }

    async getHtml() {
        return `
            <div id="auth" class="container p-5">
                <div class="d-flex flex-row justify-content-center align-items-center">
                    <h1 id="authmsg"></h1>  
                </div>  
            </div>  
        `;
    }
}