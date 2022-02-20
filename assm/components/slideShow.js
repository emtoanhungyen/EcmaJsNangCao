const slideShow = {
    render() {
        return /* html */`
            <div class="showcase text-center">
                <div class="carousel slide" data-bs-ride="carousel" id="topSlider" data-bs-interval="3000" data-bs-pause="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <h1>Reen Creative Agency</h1>
                            <div class="line"></div>
                            <p class="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <a href="#" class="btn btn-primary btn-lg">See Portfolio</a>
                        </div>
                        <div class="carousel-item">
                            <h1>Reen Creative Agency</h1>
                            <div class="line"></div>
                            <p class="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <a href="#" class="btn btn-primary btn-lg">See Portfolio</a>
                        </div>
                        <div class="carousel-item">
                            <h1>Reen Creative Agency</h1>
                            <div class="line"></div>
                            <p class="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <a href="#" class="btn btn-primary btn-lg">See Portfolio</a>
                        </div>
                    </div>
            
                    <button class="carousel-control-prev" type="button" data-bs-target="#topSlider" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>

                    <button class="carousel-control-next" type="button" data-bs-target="#topSlider" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        `;
    },
};
export default slideShow;