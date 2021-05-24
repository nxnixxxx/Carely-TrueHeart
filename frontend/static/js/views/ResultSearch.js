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
    </div>
    `; 

    var resultRow1 = `
        <div class="container">
            <div class="d-flex flex-row justify-content-around align-items-center">
                <div class="d-flex justify-content-center">1
                </div>
                <div class="d-flex justify-content-center">2
                </div>
                <div class="d-flex justify-content-center">3
                </div>
            </div>
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
            <h1>ResultSearch</h1>
            <div class="result-search">
                ${locate}
                ${this.displayResult};
            </div>
           
        </div>
    </div>
        `;
    }
}