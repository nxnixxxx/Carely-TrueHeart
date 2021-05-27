import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Signin");
    }

    async getHtml() {
        return `
            <div id="login" class="container p-5">
                <div class="d-flex flex-column align-items-center">
                    <h1>Login</h1>
                    <div class="d-flex flex-row w-100">
                        <form id="form-signin" method="post" action="/signin" class="needs-validation" novalidate>
                            <div class="form-floating">
                            <input type="text" class="form-control" name="username" placeholder="Username" required>
                            <label for="username">Username</label>
                            </div>
                            <div class="form-floating">
                            <input type="password" class="form-control" name="password" placeholder="Password" required>
                            <label for="password">Password</label>
                            </div>
                        </form>
                        <div class="d-flex align-items-center">
                            <button id="btn-login" type="submit" form="form-signin" onclick="validate();">Login</button>
                        </div>
                    </div>
                    <p>Don't have account? Click <a id="signup-link" href="/signup">here</a> to Sign up.</p>
                </div>
            </div>   
        `;
    }
}