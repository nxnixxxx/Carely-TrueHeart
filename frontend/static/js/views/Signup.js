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
                    <form class="form-signup">
                        <div class="form-floating">
                        <input type="text" class="form-control" placeholder="Username">
                        <label for="floatingInput">Username</label>
                        </div>
                        <div class="form-floating">
                        <input type="text" class="form-control" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-floating">
                        <input type="text" class="form-control" placeholder="Name">
                        <label for="floatingPassword">Name</label>
                        </div>
                        <div class="form-floating">
                        <input type="text" class="form-control" placeholder="Lastname">
                        <label for="floatingPassword">Lastname</label>
                        </div>
                        <div class="form-floating">
                        <input type="text" class="form-control" placeholder="Telephone">
                        <label for="floatingPassword">Telephone</label>
                        </div>
                    </form>
                </div>
                <div class="d-flex justify-content-center w-100 align-items-center">
                    <button id="btn-signup">Register</button>
                </div>
            </div>
        `;
    }
}