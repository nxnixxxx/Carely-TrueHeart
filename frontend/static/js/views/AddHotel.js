import AbstractView from "./AbstractView.js";


var hotelInfo = `
    <div class="container">
        <div class="d-flex flex-column justify-content-center w-100 align-items-center">
            <form class="form-hotelinfo w-100">
                <h4>Hotel Information : </h4>
                <div class="form-floating">
                    <input type="text" class="form-control" name="name" placeholder="name" required>
                    <label for="name">Name</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="searchTextField"  placeholder="Enter a location name" autocomplete="on" runat="server"/>  
                    <label for="locate">Enter a location name</label>
                   <!-- <input id="city2" name="city2" placeholder="City"/>
                    <input id="cityLat" name="cityLat" placeholder="Latitude"/>
                    <input id="cityLng" name="cityLng" placeholder="Longitude"/>  -->
                </div>
                <div class="form-floating">
                    <input type="number" class="form-control" name="telephone" placeholder="telephone" maxlength="10";>
                    <label for="tel">Telephone</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" name="website" placeholder="website">
                    <label for="website">Website</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" name="price" placeholder="price">
                    <label for="price">Price (The most expensive room rate) </label>
                </div>
                <div class="form-floating">
                    <textarea maxlenght="10" type="text" class="form-control" name="description" placeholder="Description"></textarea>
                    <label for="description">Description</label>
                </div>
            </form>
            
        </div> <br><hr style="width:90%;margin: auto"><br>
`;

var envAndService = `
    <div class="container">
        <div class="d-flex justify-content-center w-100 align-items-center">
            <form class="form-floating w-100">
                <h4>Environment and Services : </h4>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="cctv">
                    <label for="cctv">CCTV 24 hr.</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="swimming">
                    <label for="swimming">Swimming</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="food">
                    <label for="food">Pet Food</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="grooming">
                    <label for="grooming">Grooming</label>
                </div>
                <p style="font-weight: bold; margin: 0; margin-left: 15px;">Walking : </p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="walking_1">
                    <label for="walking_1">1 times</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="walking_2">
                    <label for="walking_2">2 times</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="walking_3">
                    <label for="walking_3">3 times</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="walking_no">
                    <label for="walking_no">No</label>
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
                    <input class="form-check-input" type="radio" name="type" value="dog">
                    <label for="dog">Dog</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="type" value="cat">
                    <label for="cat">Cat</label>
                </div>
                
                <p style="font-weight: bold; margin: 0; margin-left: 15px;">Weight : </p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="weight_1" required>
                    <label class="form-check-label" for="weight_1">1-10 kg</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="weight_2" required>
                    <label class="form-check-label" for="weight_2">10-20 kg</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="weight_3" required>
                    <label class="form-check-label" for="weight_3">20-30 kg</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="weight_4" required>
                    <label class="form-check-label" for="weight_4">40 kg+</label>
                </div>

                <p style="font-weight: bold; margin: 0; margin-left: 15px;">Amount of Pets : </p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="amount_1" required>
                    <label class="form-check-label" for="amount_1">1-2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="amount_2" required>
                    <label class="form-check-label" for="amount_2">3-4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="amount_3" required>
                    <label class="form-check-label" for="amount_3">4+</label>
                </div>
               
                <p style="font-weight: bold; margin: 0; margin-left: 15px;">Vaccine : </p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="vaccine">
                    <label for="vaccine_yes">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="vaccine">
                    <label for="vaccine_no">No</label>
                </div>
                
                <p style="font-weight: bold; margin: 0; margin-left: 15px;">Years of Pets : </p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="age_1" required>
                    <label class="form-check-label" for="age_1">0-2 years.</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="age_2"  required>
                    <label class="form-check-label" for="age_2">2-10 years.</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="age_3"  required>
                    <label class="form-check-label" for="q3age_3">10 years+.</label>
                </div>
                </div><br><hr style="width:90%;margin: auto">
            </form>
        </div>
    </div>
`;

var uploadFile =`
    <div class="container" style="margin-top: 10px;">
        <div class="form-floating" style="display: none">
            <input type="file" name="getfile" accept="image/*" multiple class="form-control" id="getfile" placeholder="getfile" onChange="displayUploadFileName()";>
            <label for="getfile" >getfile</label>
        </div>
        <div class="form-floating">
            <input type="text" class="form-control" id="uploadfile" placeholder="uploadfile" onclick="document.getElementById('getfile').click()" required>
            <label for="uploadfile">Upload File</label>
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
                        <br>
                        <h4>Hotel image : </h4>
                        ${uploadFile}
                    </div>   
                    <br><button id="btn-addHotel" type="submit">Add</button>
                </div>
                
            </div>
        `;
       
    }
}