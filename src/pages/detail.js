// import data from "../data";

const DetailNewsPage = {
    render(id) {
        return fetch(`https://5e79b4b817314d00161333da.mockapi.io/posts/${id}`)
            .then((response) => response.json())
            .then((data) => `
                <h1>${data.title}</h1>
                <img src="${data.img}" />    
                <p>${data.desc}</p>
            `);

        // const result = data.find((post) => post.id === id);
    },
};
export default DetailNewsPage;