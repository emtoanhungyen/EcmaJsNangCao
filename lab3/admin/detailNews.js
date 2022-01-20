import dataz from "../dataz";

const detailNews = {
    render(id) {
        const result = dataz.find((post) => post.id === id);
        return `
            <h1>${result.title}</h1>
            <img src="${result.img}" />
            <p>${result.desc}</p>
        `;
    },
};

export default detailNews;