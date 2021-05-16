import AbstractView from "./AbstractView.js";


var hotelInfo = `
    <div class="container">
        <div class="d-flex flex-column justify-content-center w-100 align-items-center">
            <form class="form-hotelinfo w-100">
                <h4>Hotel Infomation : </h4>
                <div class="form-floating">
                    <input type="text" class="form-control" id="name" placeholder="name@example.com">
                    <label for="name">Name</label>
                </div>
                <div class="form-floating">
                    <textarea type="text" class="form-control" id="locate" placeholder="locate"></textarea>
                    <label for="locate">Locate</label>
                </div>
                <div class="form-floating">
                    <input type="number" class="form-control" id="telephone" placeholder="name@example.com" maxlength="10";>
                    <label for="tel">Telephone</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="website" placeholder="name@example.com">
                    <label for="website">Website</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="price" placeholder="name@example.com">
                    <label for="price">Price</label>
                </div>
            </form>
        </div> 
    </div><br><hr style="width:90%;margin: auto"><br>
`;

var envAndService = `
    <div class="container">
        <div class="d-flex justify-content-center w-100 align-items-center">
            <form class="form-envandservice w-100">
                <h4>Environment and Services : </h4>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="a1" id="a1" value="a">
                    <label for="website">CCTV 24 hr.</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="a1" id="a1" value="a">
                    <label for="website">Swimming</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="a1" id="a1" value="a">
                    <label for="website">Pet Food</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="a1" id="a1" value="a">
                    <label for="website">Grooming</label>
                </div>
                <p style="font-weight: bold; margin: 0; margin-left: 15px;">Walking : </p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="a1" id="a1" value="a">
                    <label for="website">1 times</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="a1" id="a1" value="a">
                    <label for="website">2 times</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="a1" id="a1" value="a">
                    <label for="website">3 times</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="a1" id="a1" value="a">
                    <label for="website">No</label>
                </div>
            </form>
        </div>
    </div>
`;






export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Signin");
    }

    async getHtml() {
        return `
            <div id="addHotel" class="container p-5">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h1>Add Hotel</h1>
                    <div class="form-addHotel">
                        ${hotelInfo}
                        ${envAndService}
                    </div>    
                </div>
            </div>
        `;
       
    }
}