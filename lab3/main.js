import Navigo from "navigo";
import newAdd from "./admin/add";
import detailNews from "./admin/detailNews";
import newList from "./admin/newList";
import header from "./pages/header";
import home from "./pages/home";
import signin from "./pages/signin";
import signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("menu").innerHTML = header.render();
    document.getElementById("lab3").innerHTML = content;
};
router.on({
    "/": () => {
        print(home.render());
    },
    "/signin": () => {
        print(signin.render());
    },
    "/signup": () => {
        print(signup.render());
    },
    "/admin/news": () => {
        print(newList.render());
    },
    "/admin/news/add": () => {
        print(newAdd.render());
    },
    "/admin/news/:id": ({ dataz }) => {
        print(detailNews.render(dataz.id));
    },
});
router.resolve();