import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Navigo from "navigo";
import add from "./pages/admin/add";
import dashboard from "./pages/admin/dashboard";
import edit from "./pages/admin/edit";
import home from "./pages/home";
import signin from "./pages/signin";
import signup from "./pages/signup";

const router = new Navigo("/", {linksSelector: "a", hash: true});

const print = async (content, id) => {
    // DetailNewsPage.render(id).render();
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) await content.afterRender(id);
};

router.on("/admin/*", () => {}, {
    before: (done) =>{
        if (localStorage.getItem('user')) {
            const userId = JSON.parse(localStorage.getItem('user')).id;
            if (userId === 7) {
                done();
            } else {
                toastr.success("Bạn không phải là admin");
                setTimeout(() => {
                    document.location.href = "/";
                },500);
                
            }
        }
    }
})

router.on({
    "/": () => print(home),
    "/admin/dashboard": () => print(dashboard),
    "/admin/dashboard/add": () => print(add),
    "/admin/:id/edit": ({ data }) => print(edit, data.id),
    "/signin": () => print(signin),
    "/signup": () => print(signup),
});

router.resolve();