import Navigo from "navigo";
import home from "./home";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};
router.on({
    "/": () => {
        print(home.render());
    },

});
router.resolve();