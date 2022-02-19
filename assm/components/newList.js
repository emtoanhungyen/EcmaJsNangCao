import { getAll } from "../api/admin";
import header from "./header";

const newList = {
    async render() {
        const response = await getAll();

        return /* html */ `
        <div>
        
        
        
        
        </div>
        <section class="content">
            ${response.data.map((demo) => `
            <div class="box">
                <div class="image">
                    <a href="#"><img src="${demo.img}"></a>
                </div>
                <div class="text">
                    <h1>${demo.name}</h1>
                    <p>${demo.desc}</p>
                </div>
            </div>
            `).join("")}
        </section>
        `;
    },
};
export default newList;