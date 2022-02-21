import newList from "./newList";
import productList from "./productList";

const content = {
    async render() {
        return /* html */`
        <main>
            <div>
                ${await newList.render()}
            </div>
            <div>
                ${await productList.render()}
            </div>
        </main>
        `;
    },
};
export default content;