import content from "../components/content";
import footer from "../components/footer";
import header from "../components/header";
import slideShow from "../components/slideShow";

const home = {
    async render() {
        return /* html */`
            <div id="header">
                ${header.render()}
            </div>
            <div>
                ${slideShow.render()}
            </div>
            <div>
                ${await content.render()}
            </div>
            <div>
                ${footer.render()}
            </div>
        `;
    },
    afterRender() {
        header.afterRender();
    },
};
export default home;