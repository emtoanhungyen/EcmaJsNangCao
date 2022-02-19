const navAdmin = {
    render() {
        return /* html */`
            <nav class="bg-gray-800">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <a href="/">
                                    <img class="h-8 w-8" src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1645024770/jgv8xksethqrpveljqtr.png"
                                        alt="Workflow">
                                </a>
                            </div>
                            <div class="hidden md:block">
                                <div class="ml-10 flex items-baseline space-x-4">
                                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                    <a href="/admin/dashboard" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        aria-current="page">Danh sách sản phẩm</a>

                                    <a href="#"
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

                                    <a href="#"
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                                    <a href="#"
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>

                                    <a href="#"
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>
                                </div>
                            </div>
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-4 flex items-center md:ml-6">
                                ${localStorage.getItem('user') ? `
                                    <a href="" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" 
                                    id="email"></a>
                                    <a href="" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" 
                                    id="logout">Logout</a>
                                `: ""}
                            
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    },
    afterRender(){
        const email = document.querySelector('#email');
        const logout = document.querySelector('#logout');
        if (email) {
            email.innerHTML = JSON.parse(localStorage.getItem('user')).email;
        }
        if (logout) {
            logout.addEventListener('click', function(){
                localStorage.removeItem('user');
                toastr.success("Đăng xuất thành công, bai bai!")
                setTimeout(() => {
                    document.location.href = "/";
                },1000);
            })
        };
    }
};
export default navAdmin;