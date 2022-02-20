import newList from "./newList";

const content = {
    async render() {
        return /* html */`
        <main>
            <div>
                ${await newList.render()}
            </div>
        </main>
        `;
    },
};
export default content;