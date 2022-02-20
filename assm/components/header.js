import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const header = {
    render() {
        return /* html */`
            <div class="header" id="header">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <!-- Logo -->
                        <a class="navbar-brand" href="/"><img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1645286901/Logo_rbcynk.png"></a>

                        <!-- Mobile button -->
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>

                        <!-- Menu -->
                        <div class="collapse navbar-collapse" id="navbar">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Trang chủ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Web Design</a></li>
                                    <li><a class="dropdown-item" href="#">Brand Identity Design</a></li>
                                    <li><a class="dropdown-item" href="#">Digital Marketing</a></li>
                                    <div class="dropdown-item">
                                    <input type="text" name="search" class="form-control" placeholder="Search...">
                                    <a href="#" class="btn btn-secondary p-2 my-1">Search</a>
                                    </div>
                                </ul>
                            </li>
                            ${localStorage.getItem("user") ? `
                                <li class="nav-item">
                                    <a class="nav-link" id="email"></a>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link" id="logout">Logout</a>
                                </li>
                            ` : `
                                <li class="nav-item">
                                    <a href="/signup" class="nav-link">Đăng ký</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/signin" class="nav-link">Đăng nhập</a>
                                </li>
                            `}
                            <li class="nav-item">
                                <a class="nav-link">
                                    <i class="fas fa-search"></i>
                                </a>
                            </li>
                        </ul>
                        <!-- FORM -->
                        ${localStorage.getItem("user") ? `
                            <a href="/admin/dashboard" class="btn btn-primary">Dashboard</a>
                        ` : `
                            <a href="" class="btn btn-primary">CONTRACT US</a>
                        `}
                        </div>
                    </div>
                </nav>   
            </div>
        `;
    },
    afterRender() {
        const email = document.querySelector("#email");
        const logout = document.querySelector("#logout");
        if (email) {
            // JSON.parse để chuyển đổi chuỗi sang object
            email.innerHTML = JSON.parse(localStorage.getItem("user")).email;
        }
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                toastr.success("Đăng xuất thành công, bai bai!");
                reRender(header, "#header");
            });
        }
    },
};
export default header;