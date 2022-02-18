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
                    <li><a href="/signup/">ĐĂNG KÝ</a></li>
                    <li><a href="/signin/">ĐĂNG NHẬP</a></li>
                    <li>Xin chào: <a href="" id="email"></a></li>

                </ul>
            </div>
        </nav>
        `;
    },
    afterRender(){
        console.log();
        const email = document.querySelector('#email');
        if (email) {
            email.innerHTML = JSON.parse(localStorage.getItem('user')).email;
        }
    }
};
export default header;