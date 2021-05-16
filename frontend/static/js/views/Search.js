import AbstractView from "./AbstractView.js";

var q1 = `
        <!-- No1 -->
        <div class="container">
            <div class="d-flex justify-content-center w-100 align-items-center">
                <p>How many pet do you need to board?</p>
            </div>
            <div class="d-flex flex-row justify-content-center w-100 align-items-center">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="q1" id="a1" value="option1">
                    <label class="form-check-label" for="q1">1-2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="q1" id="a2" value="option2">
                    <label class="form-check-label" for="q1">3-4</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="q1" id="a3" value="option3">
                    <label class="form-check-label" for="q1">4+</label>
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
                <input class="form-check-input" type="radio" name="q2" id="a1" value="option1">
                <label class="form-check-label" for="q2">Dog</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="q2" id="a2" value="option2">
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
            <input class="form-check-input" type="radio" name="q3" id="a1" value="option1">
            <label class="form-check-label" for="q3">1-10 kg</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q3" id="a2" value="option2">
            <label class="form-check-label" for="q3">10-20 kg</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q3" id="a3" value="option2">
            <label class="form-check-label" for="q3">20-30 kg</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q3" id="a4" value="option2">
            <label class="form-check-label" for="q3">40 kg+</label>
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
        <input class="form-check-input" type="radio" name="q4" id="a1" value="option1">
        <label class="form-check-label" for="q4">Yes</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="q4" id="a2" value="option2">
        <label class="form-check-label" for="q4">No</label>
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
            <input class="form-check-input" type="radio" name="q5" id="a1" value="option1">
            <label class="form-check-label" for="q5">0-2 years.</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q5" id="a2" value="option2">
            <label class="form-check-label" for="q5">2-10 years.</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q5" id="a3" value="option3">
            <label class="form-check-label" for="q5">10 years+.</label>
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
            <input class="form-check-input" type="radio" name="q6" id="a1" value="option1">
            <label class="form-check-label" for="q6">Yes</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q6" id="a2" value="option2">
            <label class="form-check-label" for="q6">No</label>
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
            <input class="form-check-input" type="radio" name="q7" id="a1" value="option1">
            <label class="form-check-label" for="q7">Yes</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q7" id="a2" value="option2">
            <label class="form-check-label" for="q7">No</label>
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
            <input class="form-check-input" type="radio" name="q8" id="a1" value="option1">
            <label class="form-check-label" for="q8">1 time.</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q8" id="a2" value="option2">
            <label class="form-check-label" for="q8">2 times.</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q8" id="a3" value="option3">
            <label class="form-check-label" for="q8">3 times.</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q8" id="a4" value="option4">
            <label class="form-check-label" for="q8">No.</label>
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
            <input class="form-check-input" type="radio" name="q9" id="a1" value="option1">
            <label class="form-check-label" for="q9">Yes</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q9" id="a2" value="option2">
            <label class="form-check-label" for="q9">No</label>
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
            <input class="form-check-input" type="radio" name="q10" id="a1" value="option1">
            <label class="form-check-label" for="q10">Yes</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q10" id="a2" value="option2">
            <label class="form-check-label" for="q10">No</label>
        </div>
        </div><hr style="width:90%;margin: auto">
    </div>
`;

var q11 = `
<!-- No11 -->
    <div class="container">
        <div class="d-flex justify-content-center w-100 align-items-center">
        <p>Do you have your own food?</p>
        </div>
        <div class="d-flex flex-row justify-content-center w-100 align-items-center">
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q11" id="a1" value="option1">
            <label class="form-check-label" for="q11">Yes</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q11" id="a2" value="option2">
            <label class="form-check-label" for="q11">No</label>
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
            <input class="form-check-input" type="radio" name="q12" id="a1" value="option1">
            <label class="form-check-label" for="q12"> ≤300฿ </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q12" id="a2" value="option2">
            <label class="form-check-label" for="q12"> ≤500฿ </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q12" id="a3" value="option3">
            <label class="form-check-label" for="q12"> ≤700฿ </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q12" id="a4" value="option4">
            <label class="form-check-label" for="q12"> ≤1000฿ </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q12" id="a4" value="option4">
            <label class="form-check-label" for="q12"> >1000฿ </label>
        </div>
        </div><hr style="width:90%;margin: auto">
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
                    <div class="form-search">
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
                    </div><br> 
                    <div class="d-flex">
                        <button id="next">Next</button>
                    </div>  
                </div>
            </div>
        `;
    }
}