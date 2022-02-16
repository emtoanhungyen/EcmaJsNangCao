import Navigo from "navigo";
import add from "./pages/admin/add";
import dashboard from "./pages/admin/dashboard";
import home from "./pages/home";
import signin from "./pages/signin";
import signup from "./pages/signup";

const router = new Navigo("/", {linksSelector: "a", hash: true});

const print = async (content, id) => {
    // DetailNewsPage.render(id).render();
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) await content.afterRender(id);
};
router.on({
    "/": () => print(home),
    "/admin/dashboard": () => print(dashboard),
    "/admin/add": () => print(add),
    "/signin": () => print(signin),
    "/signup": () => print(signup),
});

router.resolve();