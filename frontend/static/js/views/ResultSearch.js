import AbstractView from "./AbstractView.js";

    var locate = `
    <div class="container">
    
        <div class="d-flex flex-row justify-content-center align-items-center">
                <div class=" d-flex align-items-center form-floating w-100">
                    <input type="text" class="form-control" type="text" id="searchTextField"  placeholder="Enter a location name" autocomplete="on" runat="server"/>
                    <label for="searchTextField">Location</label>

                    <!-- <input id="city2" name="city2" placeholder="City"/>
                        <input id="cityLat" name="cityLat" placeholder="Latitude"/>
                        <input id="cityLng" name="cityLng" placeholder="Longitude"/> -->
                </div>
                <div class="d-flex align-items-center">
                    <button id="next_result" type="submit">Search</button>
                </div>
        </div>
        <br>
    </div>
    `; 

    var displayResult = `
        <div class="container">
            <div class="d-flex flex-row justify-content-around align-items-center">
                <div class="d-flex flex-column justify-content-center">
                    <div class="container align-content-center">
                        <img src="static/img/image_test.jpg" alt="image1" class="img-responsive" width="290" height="250">
                        <div class="d-flex text-block"> 
                            <p><img src="static/img/icon_tagprice.png" class="rounded mx-auto d-block " width="25" height="25"></p>
                            <p>Price < 1000</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-around align-items-center">
                        <h4>Hotel Name</h4>
                        <p>City of hotel</p>
                    </div>
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <div class="container align-content-center">
                        <img src="static/img/image_test.jpg" alt="image1" class="img-responsive" width="290" height="250">
                        <div class="d-flex text-block"> 
                            <p><img src="static/img/icon_tagprice.png" class="rounded mx-auto d-block " width="25" height="25"></p>
                            <p>Price < 1000</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-around align-items-center">
                        <h4>Hotel Name</h4>
                        <p>City of hotel</p>
                    </div>
                </div>
                <div class="d-flex flex-column justify-content-center">
                    <div class="container align-content-center">
                        <img src="static/img/image_test.jpg" alt="image1" class="img-responsive" width="290" height="250">
                        <div class="d-flex text-block"> 
                            <p><img src="static/img/icon_tagprice.png" class="rounded mx-auto d-block " width="25" height="25"></p>
                            <p>Price < 1000</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-around align-items-center">
                        <h4>Hotel Name</h4>
                        <p>City of hotel</p>
                    </div>
                </div>
            </div>
            <br>
        </div>
    `;

                
    export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("ResultSearch");
    }

    async getHtml() {
        return `
        <div id="result" class="container p-5">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <h1>Result Search</h1>
                <div class="result-search">
                    ${locate}
                    ${displayResult}
                    ${displayResult}
                </div>
            
            </div>
        </div>
        `;
    }
}