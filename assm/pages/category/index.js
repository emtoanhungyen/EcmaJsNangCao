import header from "../../components/header";
import footer from "../../components/footer";

const listCategory = {
    render() {
        return /* html */`
            <div id="header">
                ${header.render()}
            </div>

            

            <div id="footer">
                ${footer.render()}
            </div>
        `;
    },
};
export default listCategory;