import axios from "axios";

const newList = {
    async render() {
        const response = await axios.get('https://61e7a9a8e32cd90017acbc17.mockapi.io/asm');

        return /* html */ `
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