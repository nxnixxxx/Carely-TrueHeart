import AbstractView from "./AbstractView.js";

var q1 = `
        <!-- No1 -->
        <div class="container">
            <div class="d-flex justify-content-center w-100 align-items-center">
                <p>How many pet do you need to board?</p>
            </div>
            <div class="d-flex flex-row justify-content-center w-100 align-items-center">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="amount" value="1" required>
                    <label class="form-check-label" for="amount">1-2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="amount" value="2" required>
                    <label class="form-check-label" for="amount">3-4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="amount" value="3" required>
                    <label class="form-check-label" for="amount">4+</label>
                </div>
            </div><hr style="width:90%;margin: auto">
        </div>
    `;
var q2 = `
        <!-- No2 -->
        <div class="container">
            <div class="d-flex justify-content-center w-100 align-items-center">
                <p>What type of pet?</p>
            </div>
            <div class="d-flex flex-row justify-content-center w-100 align-items-center">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="pet_type" value="dog" required>
                <label class="form-check-label" for="q2">Dog</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="pet_type" value="cat" required>
                <label class="form-check-label" for="q2">Cat</label>
            </div>
            </div><hr style="width:90%;margin: auto">
        </div>
    `;

var q3 = `
    <!-- No3 -->
    <div class="container">
        <div class="d-flex justify-content-center w-100 align-items-center">
            <p>What size of your pet?</p>
        </div>
        <div class="d-flex flex-row justify-content-center w-100 align-items-center">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="weight" value="1" required>
            <label class="form-check-label" for="weight">1-10 kg</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="weight" value="2" required>
            <label class="form-check-label" for="weight">10-20 kg</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="weight" value="3" required>
            <label class="form-check-label" for="weight">20-30 kg</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="weight" value="4" required>
            <label class="form-check-label" for="weight">40 kg+</label>
        </div>
        </div><hr style="width:90%;margin: auto">
    </div>
    `;

var q4 = `
<!-- No4 -->
<div class="container">
    <div class="d-flex justify-content-center w-100 align-items-center">
    <p>Has your pet fully vaccinated?</p>
    </div>
    <div class="d-flex flex-row justify-content-center w-100 align-items-center">
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="vaccine" value="1" required>
        <label class="form-check-label" for="vaccine">Yes</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="vaccine" value="0" required>
        <label class="form-check-label" for="vaccine">No</label>
    </div>
    </div><hr style="width:90%;margin: auto">
</div>
    `;

var q5 = `
<!-- No5 -->
    <div class="container">
        <div class="d-flex justify-content-center w-100 align-items-center">
            <p>How old are your pet?</p>
        </div>
        <div class="d-flex flex-row justify-content-center w-100 align-items-center">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="age" value="1" required>
            <label class="form-check-label" for="age">0-2 years.</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="age" value="2" required>
            <label class="form-check-label" for="age">2-10 years.</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="age" value="3" required>
            <label class="form-check-label" for="age">10 years+.</label>
        </div>
        
        </div><hr style="width:90%;margin: auto">
    </div>
`;

var q6 = `
<!-- No6 -->
    <div class="container">
        <div class="d-flex justify-content-center w-100 align-items-center">
        <p>Do you want CCTV?</p>
        </div>
        <div class="d-flex flex-row justify-content-center w-100 align-items-center">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="cctv" value="1" required>
            <label class="form-check-label" for="cctv">Yes</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="cctv" value="0" required>
            <label class="form-check-label" for="cctv">No</label>
        </div>
        </div><hr style="width:90%;margin: auto">
    </div>
`;


var q7 = `
<!-- No7 -->
    <div class="container">
        <div class="d-flex justify-content-center w-100 align-items-center">
        <p>Do you want air conditioner?</p>
        </div>
        <div class="d-flex flex-row justify-content-center w-100 align-items-center">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="air" value="1" required>
            <label class="form-check-label" for="air">Yes</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="air" value="0" required>
            <label class="form-check-label" for="air">No</label>
        </div>
        </div><hr style="width:90%;margin: auto">
    </div>
`;

var q8 = `
<!-- No8 -->
    <div class="container">
        <div class="d-flex justify-content-center w-100 align-items-center">
        <p>Do you want to take your pet for walking?</p>
        </div>
        <div class="d-flex flex-row justify-content-center w-100 align-items-center">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="walking" value="1" required>
            <label class="form-check-label" for="walking">1 time.</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="walking" value="2" required>
            <label class="form-check-label" for="walking">2 times.</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="walking" value="3" required>
            <label class="form-check-label" for="walking">3 times.</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="walking" value="4" required>
            <label class="form-check-label" for="walking">No.</label>
        </div>
        </div><hr style="width:90%;margin: auto">
    </div>
`;

var q9 = `
<!-- No9 -->
    <div class="container">
        <div class="d-flex justify-content-center w-100 align-items-center">
        <p>Do you want to take your pet swimming?</p>
        </div>
        <div class="d-flex flex-row justify-content-center w-100 align-items-center">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="swimming" value="1" required>
            <label class="form-check-label" for="swimming">Yes</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="swimming"  value="2" required>
            <label class="form-check-label" for="swimming">No</label>
        </div>
        </div><hr style="width:90%;margin: auto">
    </div>
`;
var q10 = `
<!-- No10 -->
    <div class="container">
        <div class="d-flex justify-content-center w-100 align-items-center">
        <p>Do you want Grooming?</p>
        </div>
        <div class="d-flex flex-row justify-content-center w-100 align-items-center">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="grooming"  value="1" required>
            <label class="form-check-label" for="q10">Yes</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="grooming"  value="0" required>
            <label class="form-check-label" for="q10">No</label>
        </div>
        </div><hr style="width:90%;margin: auto">
    </div>
`;

var q11 = `
<!-- No11 -->
    <div class="container">
        <div class="d-flex justify-content-center w-100 align-items-center">
        <p>Do you want Pet food?</p>
        </div>
        <div class="d-flex flex-row justify-content-center w-100 align-items-center">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="food" value="1" required>
            <label class="form-check-label" for="food">Yes</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="food" value="0" required>
            <label class="form-check-label" for="food">No</label>
        </div>
        </div><hr style="width:90%;margin: auto">
    </div>
`;

var q12 = `
<!-- No12 -->
    <div class="container">
        <div class="d-flex justify-content-center w-100 align-items-center">
        <p>How Price do you want?</p>
        </div>
        <div class="d-flex flex-row justify-content-center w-100 align-items-center">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="price" value="300" required>
            <label class="form-check-label" for="price"> ≤300฿ </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="price" value="500" required>
            <label class="form-check-label" for="price"> ≤500฿ </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="price" value="700" required>
            <label class="form-check-label" for="price"> ≤700฿ </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="price" value="1000" required>
            <label class="form-check-label" for="price"> ≤1000฿ </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="price" value="1001" required>
            <label class="form-check-label" for="price"> >1000฿ </label>
        </div>
        </div><hr style="width:90%;margin: auto; margin-bottom: 10px;">
    </div>
`;

var locate = `
    <div class="container">
        <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="form-floating w-100">
                <input type="text" class="form-control" type="text" id="searchTextField"  placeholder="Enter a location name" autocomplete="on" runat="server"/ required>
                <label for="searchTextField">Location</label>
                <input id="city2" name="city2" placeholder="City"/ hidden>
                <input id="cityLat" name="cityLat" placeholder="Latitude"/ hidden>
                <input id="cityLng" name="cityLng" placeholder="Longitude"/ hidden>
            </div>
        </div>
    </div>
`;  

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Search");
    }

    async getHtml() {
        return `
            <div id="search" class="container p-5">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h1>Search</h1>
                    <form id="form-search" method="post" action="/search" class="needs-validation" novalidate>
                            ${q1}
                            ${q2}
                            ${q3}
                            ${q4}
                            ${q5}
                            ${q6}
                            ${q7}
                            ${q8}
                            ${q9}
                            ${q10}
                            ${q11}
                            ${q12}
                            ${locate}
                        
                    </form>
                    <div class="d-flex">
                        <button id="btn-search" form="form-search" type="submit" onclick="">Search</button>
                    </div>  
                </div>
            </div>
        `;
    }
}