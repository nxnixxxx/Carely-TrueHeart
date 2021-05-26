import AbstractView from "./AbstractView.js";


var hotelInfo = `
    <h4>Hotel Information : </h4>
    <div class="form-floating">
        <input type="text" class="form-control" name="name" placeholder="name" required>
        <label for="name">Name</label>
    </div>
    <div class="form-floating">
        <input type="text" name="locate" class="form-control" id="searchTextField"  placeholder="Enter a location name" autocomplete="on" runat="server" required/>  
        <label for="locate">Enter a location name</label>
        <input id="city2" name="city2" placeholder="City" hidden/>
        <input id="cityLat" name="cityLat" placeholder="Latitude" hidden/>
        <input id="cityLng" name="cityLng" placeholder="Longitude" hidden/>
    </div>
    <div class="form-floating">
        <input type="number" class="form-control" name="telephone" placeholder="telephone" maxlength="10"; required>
        <label for="tel">Telephone</label>
    </div>
    <div class="form-floating">
        <input type="text" class="form-control" name="website" placeholder="website"required>
        <label for="website">Website</label>
    </div>
    <div class="form-floating">
        <input type="text" class="form-control" name="price" placeholder="price"required>
        <label for="price">Price (The most expensive room rate) </label>
    </div>
    <div class="form-floating">
        <textarea maxlenght="10" type="text" class="form-control" name="description" placeholder="Description" rows="4" cols="50"></textarea>
        <label for="description">Description</label>
    </div><br><hr style="width:90%;margin: auto"><br>
`;

var envAndService = `
    <h4>Environment and Services : </h4>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="cctv" value="1" >
        <label for="cctv">CCTV 24 hr.</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="swimming" value="1" >
        <label for="swimming">Swimming</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="food" value="1" >
        <label for="food">Pet Food</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="grooming" value="1" >
        <label for="grooming">Grooming</label>
    </div>
    <p style="font-weight: bold; margin: 0; margin-left: 15px;">Walking : </p>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="walking_1" value="1">
        <label for="walking_1">1 times</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="walking_2" value="2" >
        <label for="walking_2">2 times</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="walking_3"  value="3" >
        <label for="walking_3">3 times</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="walking_no" value="4" >
        <label for="walking_no">No</label>
    </div><br><hr style="width:90%;margin-top: 20px;">
`;

var typeOfPets = `
    <h4>Pets : </h4>

    <p style="font-weight: bold; margin: 0; margin-left: 15px;">Type of Pets : </p>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="pet_type" value="dog" required>
        <label for="dog">Dog</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="pet_type" value="cat" required>
        <label for="cat">Cat</label>
    </div>
    
    <p style="font-weight: bold; margin: 0; margin-left: 15px;">Weight : </p>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="weight_1" value="1">
        <label class="form-check-label" for="weight_1">1-10 kg</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="weight_2" value="2">
        <label class="form-check-label" for="weight_2">10-20 kg</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="weight_3" value="3">
        <label class="form-check-label" for="weight_3">20-30 kg</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="weight_4" value="4">
        <label class="form-check-label" for="weight_4">40 kg+</label>
    </div>

    <p style="font-weight: bold; margin: 0; margin-left: 15px;">Amount of Pets : </p>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="amount_1" value="1">
        <label class="form-check-label" for="amount_1">1-2</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="amount_2" value="2">
        <label class="form-check-label" for="amount_2">3-4</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="amount_3" value="3">
        <label class="form-check-label" for="amount_3">4+</label>
    </div>
    
    <p style="font-weight: bold; margin: 0; margin-left: 15px;">Vaccine : </p>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="vaccine" value="1" required>
        <label for="vaccine_yes">Yes</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="vaccine" value="0" required>
        <label for="vaccine_no">No</label>
    </div>
    
    <p style="font-weight: bold; margin: 0; margin-left: 15px;">Years of Pets : </p>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="age_1" value="1" >
        <label class="form-check-label" for="age_1">0-2 years.</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="age_2" value="2" >
        <label class="form-check-label" for="age_2">2-10 years.</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" name="age_3" value="3" >
        <label class="form-check-label" for="q3age_3">10 years+.</label>
    </div><br><hr style="width:90%;margin-top: 20px;">
`;

var uploadFile =`
    <div class="form-floating" style="display: none">
        <input type="file" name="getfile" accept="image/*" multiple class="form-control" id="getfile" placeholder="getfile" onChange="displayUploadFileName()"; >
        <label for="getfile" >getfile</label>
    </div>
    <div class="form-floating">
        <input type="text" class="form-control" id="uploadfile" placeholder="uploadfile" onclick="document.getElementById('getfile').click()" >
        <label for="uploadfile">Upload File</label>
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
                <div class="d-flex flex-column w-100 justify-content-center align-items-center">
                    <h1>Add Pet Hotel</h1>
                    <form id="form-addHotel" method="post" action="/addhotel" class="needs-validation" novalidate>
                        ${hotelInfo}
                        ${envAndService}
                        ${typeOfPets}
                        <h4>Hotel image :</h4>
                        ${uploadFile}
                    </form>   
                    <br><button id="btn-addHotel" form="form-addHotel" onclick="validate()">Add</button>
                </div>
            </div>
        `;
       
    }
}