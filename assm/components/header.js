import { reRender } from "../utils";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const header = {
    render() {
        return /* html */`
        <nav>
            <div class="logo">
                <a href="#"><img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1644766803/img_ecma_js/logo_a99f29.png" alt="logo"></a>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="#">Ô TÔ</a></li>
                    <li><a href="#">XE MÁY ĐIỆN</a></li>
                    <li><a href="#">ƯU ĐÃI</a></li>
                    <li><a href="#">DỊCH VỤ</a></li>
                    
                    ${localStorage.getItem('user') ? `
                        <li><a href="/admin/dashboard">Dashboard</li>                    
                        <li>Xin chào: <a href="" id="email"></a></li>
                        <li><a id="logout">Đăng xuất</a></li>
                    `: `
                        <li><a href="/signup/">ĐĂNG KÝ</a></li>
                        <li><a href="/signin/">ĐĂNG NHẬP</a></li>
                    `}
                </ul>
            </div>
        </nav>
        `;
    },
    afterRender(){
        const email = document.querySelector('#email');
        const logout = document.querySelector('#logout');
        if (email) {
            // JSON.parse để chuyển đổi chuỗi sang object
            email.innerHTML = JSON.parse(localStorage.getItem('user')).email;
        }
        if (logout) {
            logout.addEventListener('click', function(){
                localStorage.removeItem('user');
                toastr.success("Đăng xuất thành công, bai bai!")
                reRender(header, "#header");
            })
        }
    }
};
export default header;