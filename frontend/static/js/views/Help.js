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
            </div>

            <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="d-flex flex-row w-100 help-content">
                    <div class="form-check form-check-inline">
                        <img src="static/img/icon_tel.png" alt="" width="25" height="25">
                    </div>
                    <div class="form-check form-check-inline">
                        <h5>094-4936661</h5>
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
             
            
            <div class="d-flex flex-column justify-content-center align-items-center" >
                <iframe id="helpcenter-map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.695414174016!2d100.54969021470451!3d13.79722599995679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29c3e05ece9ab%3A0x7b5566db33c72072!2z4LmA4Lit4LmH4LihIOC4iOC4leC4uOC4iOC4seC4geC4ow!5e0!3m2!1sth!2sth!4v1621831815297!5m2!1sth!2sth" 
                width="500" height="250" allowfullscreen="" loading="lazy"></iframe>
            </div>
            
        </div>    
        `;
    }
}



