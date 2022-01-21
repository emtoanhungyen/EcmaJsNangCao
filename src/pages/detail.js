// import data from "../data";

import axios from "axios";

const DetailNewsPage = {
    async render(id) {
        const {data} = await axios.get(`https://5e79b4b817314d00161333da.mockapi.io/posts/${id}`);

        return `
            <h1>${data.title}</h1>
            <img src="${data.img}" />    
            <p>${data.desc}</p>
        `

        // const result = data.find((post) => post.id === id);
    },
};
export default DetailNewsPage;