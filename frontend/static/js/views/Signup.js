import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Signup");
    }

    async getHtml() {
        return `
            <div id="signup" class="container p-5">
                <div class="d-flex justify-content-center w-100 align-items-center">
                    <h1>Sign Up</h1>
                </div>
                <div class="d-flex flex-row justify-content-center w-100 align-items-center">
                    <form id="form-signup" class="needs-validation" novalidate method="post" action="/auth">
                        <div class="form-floating">
                            <input name="username"type="text" class="form-control" placeholder="Username" required>
                            <label for="username">Username</label>
                        </div>
                        <div class="form-floating">
                            <input name="password" type="text" class="form-control" placeholder="Password" required>
                            <label for="password">Password</label>
                        </div>
                        <div class="form-floating">
                            <input name="name" type="text" class="form-control" placeholder="Name" required>
                            <label for="name">Name</label>
                        </div>
                        <div class="form-floating">
                            <input name="lastname" type="text" class="form-control" placeholder="Lastname" required>
                            <label for="lastname">Lastname</label>
                        </div>
                        <div class="form-floating">
                            <input name="tel" type="text" class="form-control" placeholder="Telephone" required>
                            <label for="tel">Telephone</label>
                        </div>
                    </form>
                </div>
                <div class="d-flex justify-content-center">
                    <button id="btn-signup" type"submit" form="form-signup" onclcik="validate();">Register</button>
                </div>
            </div>
        `;
    }
}