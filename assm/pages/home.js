import content from "../components/content";
import footer from "../components/footer";
import header from "../components/header";

const home = {
    render() {
        return /* html */`
            <div>
                ${header.render()}
            </div>
            <div>
                ${content.render()}
            </div>
            <div>
                ${footer.render()}
            </div>
        `;
    },
};
export default home;