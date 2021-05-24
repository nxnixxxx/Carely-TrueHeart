import AbstractView from "./AbstractView.js";



var content =  `
    <div class="d-flex flex-row justify-content-around align-items-center">
        

        <div class="d-flex flex-column justify-content-left align-items-center">

            <img src="static/img/image_test.jpg" alt="image1" class="img-responsive" width="auto" height="300">
            
                    <div class"d-flex flex-row justify-content-left align-items-center">
                        <textarea maxlenght="10" type="text" class="form-control" id="commentall" placeholder="Comment" rows="4" cols="50" maxlength="100"></textarea>
                        <div class "d-flex flex-row justify-content-center align-items-center">
                            <input type="text" class="form-control" id="comment" placeholder="Input your comment">
                            <button class="justify-content-center align-content-center" id="btn-detailHotel" type="submit">Send</button>
                        </div>
                    </div>
            
                
        </div>
        <div class="d-flex flex-column justify-content-around align-items-center">
            <p>333333333333</p>
        </div>

    </div>
    

`;




export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("DetailHotel");
    }

    async getHtml() {
        return `
        <div id="detail" class="container p-5">
            <h1>Hotel Name</h1>
            <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="form-detailHotel">
                    ${content}
                </div>
            
            </div>
        </div>
        `;
    }
}