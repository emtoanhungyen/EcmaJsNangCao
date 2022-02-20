import { getAll } from "../api/admin";

const newList = {
    async render() {
        const response = await getAll();
        return /* html */ `
            <div class="blog">
                <div class="container">

                    <div class="block-heading text-center">
                        <h2 class="text-4xl">Danh sách bài viết</h2>
                        <div class="line"></div>
                        <p class="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>

                    <div class="carousel slide carousel-dark" data-bs-ride="carousel" id="blogSlider" data-bs-interval="3000" data-bs-pause="false">
                    
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row gy-4">
                                ${response.data.map((post) => `
                                    <div class="col-md-4">
                                        <a href="#">
                                            <img src="${post.img}" class="img-fluid max-w-[300px]">
                                        </a>
                                        <h4 class="my-2">
                                            <a href="#">${post.name}</a>
                                        </h4>
                                        <div class="date small text-muted mb-2">14/10/2020 - Admin</div>
                                        <p>${post.desc}</p>
                                        <a href="#">Read More</a>
                                    </div>
                                    `).join("")}
                                </div>
                            </div>
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#blogSlider" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#blogSlider" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>

                    </div>
                </div>
            </div>
        `;
    },
};
export default newList;