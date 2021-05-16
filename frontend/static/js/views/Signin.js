import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Signin");
    }

    async getHtml() {
        return `
            <div id="login" class="container p-5">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h1>Login</h1>
                    <div class="d-flex flex-row w-100 align-items-center">
                        <form class="form-signin">
                            <div class="form-floating">
                            <input type="email" class="form-control" id="email" placeholder="name@example.com">
                            <label for="email">Email address</label>
                            </div>
                            <div class="form-floating">
                            <input type="password" class="form-control" id="password" placeholder="Password">
                            <label for="password">Password</label>
                            </div>
                        </form>
                        <div class="d-flex">
                            <button id="btn-login">Login</button>
                        </div>
                    </div>
                    <p>Don't have account? Click <a id="signup-link" href="\signup">here</a> to Sign up.</p>
                </div>
            </div>   
        `;
    }
}