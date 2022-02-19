import content from "../components/content";
import footer from "../components/footer";
import header from "../components/header";

const home = {
    async render() {
        return /* html */`
            <div id="header">
                ${header.render()}
            </div>
            <div>
                ${await content.render()}
            </div>
            <div>
                ${footer.render()}
            </div>
        `;
    },
    afterRender(){
        header.afterRender();
    }
};
export default home;