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
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">Yes</label>
    </div>
    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">No</label>
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
                    </div> 
                    <div class="d-flex">
                        <button id="next">Next</button>
                    </div>  
                </div>
            </div>
        `;
    }
}