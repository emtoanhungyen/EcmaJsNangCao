import Navigo from "navigo";
import AboutPage from "./pages/about";
import DashboardPage from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AdminNewsAddPage from "./pages/admin/news/add";
import DetailNewsPage from "./pages/detail";
import HomePage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/news/:id": (value) => print(DetailNewsPage, value.data.id),
    "/admin/dashboard": () => print(DashboardPage),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/add": () => print(AdminNewsAddPage),
});
router.resolve();

/**
 * ôn lại callback
 * ôn lại promise
 * Biết cách sử dụng async/await
 * API là gì? sử dụng API
 *                                                   /endpoint
 * Ví dụ: https://5e79b4b817314d00161333da.mockapi.io/user
 *      GET /user
*/

// sum(10,20, myFunction);
// const render = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try {
//             resolve("Mảng chứa dữ liệu từ server");
//         } catch (error) {
//             reject("Lỗi kết nối");
//         }
//     }, 3000);
// });

// cach 1
// const printA = render();
// printA
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));

// cach 2
// const printB = async () => {
//     try {
//         document.querySelector("#app").innerHTML = await render();
//     } catch (error) {
//         console.log(error);
//     }
// };
// printB();