import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Help");
    }

    async getHtml() {
        return `
        <div id="search" class="container p-5">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <h1>Help Center</h1>
            </div> <br>

            <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="d-flex flex-row w-100 help-content">
                    <div class="form-check form-check-inline">
                        <img src="static/img/icon_tel.png" alt="" width="25" height="25">
                    </div>
                    <div class="form-check form-check-inline">
                        <h5> 094-493-6661 </h5>
                    </div>
                </div>

                <div class="d-flex flex-row w-100 help-content">
                    <div class="form-check form-check-inline">
                        <img src="static/img/icon_line.png" alt="" width="25" height="25">
                    </div>
                    <div class="form-check form-check-inline">
                        <h5> @carelypet_th </h5>
                    </div>
                </div>

                <div class="d-flex flex-row w-100 help-content">
                    <div class="form-check form-check-inline">
                        <img src="static/img/icon_mail.png" alt="" width="25" height="25">
                    </div>
                    <div class="form-check form-check-inline">
                    <h5>admin@carelypet.com </h5>
                    </div>
                </div>
                
                <div class="d-flex flex-row w-100 help-content">
                    <div class="form-check form-check-inline">
                        <img src="static/img/icon_www.png" alt="" width="25" height="25">
                    </div>
                    <div class="form-check form-check-inline">
                        <h5> www.carelypet.com </h5>
                    </div>
                </div>
            </div>
               

              
        </div>    
        `;
    }
}



