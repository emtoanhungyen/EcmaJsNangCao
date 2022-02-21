import { get } from "../api/admin";
import footer from "../components/footer";
import header from "../components/header";

const detailNews = {
    async render(id) {
        const response = await get(id);
        return /* html */`
            <div id="header">
                ${header.render()}
            </div>
            <div>
                ${response.data.map((post) => `
                    <img src="${post.img}">
                    <a>${post.name}</a>
                    <p>${post.desc}</p>
                `).join("")}
            </div>
            <div id="footer">
                ${footer.render()}
            </div>

        `;
    },
};
export default detailNews;