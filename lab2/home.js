import content from "./content";
import header from "./header";

const home = {
    render() {
        return /* html */`
            ${header.render()}
            ${content.render()}
        `;
    },
};
export default home;