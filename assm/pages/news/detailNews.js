import { get } from "../../api/admin";
import footer from "../../components/footer";
import header from "../../components/header";

const detailNews = {
    async render(id) {
        const { data: post } = await get(id);
        return /* html */`
            <div id="header">
                ${header.render()}
            </div>
            <div class="blog">
                <div class="container">

                    <div class="block-heading text-center">
                        <h2 class="text-4xl">Chi tiết bài viết</h2>
                        <div class="line"></div>
                    </div>

                    <div class="carousel slide carousel-dark" data-bs-ride="carousel" id="blogSlider" data-bs-interval="3000" data-bs-pause="false">
                    
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row gy-4">
                                   
                                        <div class="col-md-4">
                                            <a href="#">
                                                <img src="${post.img}" class="max-w-[450px] max-h-[200px]">
                                            </a>
                                            <h4 class="my-2">
                                                <a href="#">${post.price}</a>
                                            </h4>
                                            <h4 class="my-2">
                                                <a href="">${post.name}</a>
                                            </h4>
                                            <p>${post.desc}</p>
                                            <button data-id="${post.id}" id="btnaddtocart">add to cart</button>
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                ${footer.render()}
            </div>
        `;
    },
    afterRender() {
        const btnaddtocart = document.querySelector("#btnaddtocart");
        const m = btnaddtocart.dataset.id;
        btnaddtocart.addEventListener("click", () => {
            console.log("1");
        });
    },
};
export default detailNews;