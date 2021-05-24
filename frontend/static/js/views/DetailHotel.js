import AbstractView from "./AbstractView.js";



var content =  `
    <div class="d-flex flex-row justify-content-around align-items-center">
        <div class="d-flex flex-column justify-content-left align-items-center">
            <img src="static/img/image_test.jpg" alt="image1" class="img-responsive" width="365" height="auto" >
            <textarea type="text" class="form-control" id="comment_all" placeholder="Comment" rows="3" cols=40 maxlength="100" disabled ></textarea>
                    <div class="d-flex flex-row justify-content-around align-items-around" > 
                            <input type="text" class="form-control" id="comment" placeholder="Input your comment" >
                            <button id="btn-detailHotel" type="submit">Send</button>
                    </div>
        </div>
        <div class="d-flex flex-column justify-content-center ">
            <div class="container">
                <textarea type="text" class="form-control" id="detail_all" placeholder="Detail" rows="11" cols=40 maxlength="100" disabled ></textarea>
            <div>
            <div class="detail_all" >
                <h5>Hotel name</h5>
                <p>Place: </p>
                <p>Telephone: </p>
                <p>Website: </p>
            </div>
            
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