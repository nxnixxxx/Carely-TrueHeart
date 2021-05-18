import AbstractView from "./AbstractView.js";


var hotelInfo = `
    <div class="container">
        <div class="d-flex flex-column justify-content-center w-100 align-items-center">
            <form class="form-hotelinfo w-100">
                <h4>Hotel Information : </h4>
                <div class="form-floating">
                    <input type="text" class="form-control" id="name" placeholder="name" required>
                    <label for="name">Name</label>
                </div>
                <div class="form-floating">
                    <textarea type="text" class="form-control" id="locate" placeholder="locate" rows="4" cols="50" maxlength="50"></textarea>
                    <label for="locate">Locate</label>
                </div>
                <div class="form-floating">
                    <input type="number" class="form-control" id="telephone" placeholder="telephone" maxlength="10";>
                    <label for="tel">Telephone</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="website" placeholder="website">
                    <label for="website">Website</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="price" placeholder="price">
                    <label for="price">Price (The most expensive room rate) </label>
                </div>
                <div class="form-floating">
                    <textarea maxlenght="10" type="text" class="form-control" id="description" placeholder="Description"></textarea>
                    <label for="description">Description</label>
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
        </div><br><hr style="width:90%;margin: auto"><br>
    </div>
`;



var typeOfPets = `
    <div class="container">
        <div class="d-flex justify-content-center w-100 align-items-center">
            <form class="form-typeofpets w-100">
                <h4>Pets : </h4>

                <p style="font-weight: bold; margin: 0; margin-left: 15px;">Type of Pets : </p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="a1" id="a1" value="a">
                    <label for="website">Dog</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="a1" id="a1" value="a">
                    <label for="website">Cat</label>
                </div>
                
                <p style="font-weight: bold; margin: 0; margin-left: 15px;">Weight : </p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="q3" id="a1" value="option1" required>
                    <label class="form-check-label" for="q3">1-10 kg</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="q3" id="a2" value="option2" required>
                    <label class="form-check-label" for="q3">10-20 kg</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="q3" id="a3" value="option2" required>
                    <label class="form-check-label" for="q3">20-30 kg</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="q3" id="a4" value="option2" required>
                    <label class="form-check-label" for="q3">40 kg+</label>
                </div>

                <p style="font-weight: bold; margin: 0; margin-left: 15px;">Amount of Pets : </p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="q3" id="a1" value="option1" required>
                    <label class="form-check-label" for="q3">1-2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="q3" id="a2" value="option2" required>
                    <label class="form-check-label" for="q3">3-4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="q3" id="a3" value="option2" required>
                    <label class="form-check-label" for="q3">4+</label>
                </div>
               
                <p style="font-weight: bold; margin: 0; margin-left: 15px;">Vaccine : </p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="a1" id="a1" value="a">
                    <label for="website">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="a1" id="a1" value="a">
                    <label for="website">No</label>
                </div>
                
                <p style="font-weight: bold; margin: 0; margin-left: 15px;">Years of Pets : </p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="q3" id="a1" value="option1" required>
                    <label class="form-check-label" for="q3">0-2 years.</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="q3" id="a2" value="option2" required>
                    <label class="form-check-label" for="q3">2-10 years.</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="q3" id="a3" value="option2" required>
                    <label class="form-check-label" for="q3">10 years+.</label>
                </div>
                </div><br><hr style="width:90%;margin: auto">
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
                    <h1>Add Pet Hotel</h1>
                    <div class="form-addHotel">
                        ${hotelInfo}
                        ${envAndService}
                        ${typeOfPets}
                        <br><button id="btn-addHotel" type="submit">Add</button>
                    </div>  
                    
                </div>
                
            </div>
        `;
       
    }
}