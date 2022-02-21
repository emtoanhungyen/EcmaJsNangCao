import "toastr/build/toastr.min.css";

const navAdmin = {
    render() {
        return /* html */`
            <nav class="bg-gray-800">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <a href="/">
                                    <img class="h-8 w-8" src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1645351972/icon_saisyu.png"
                                        alt="Workflow">
                                </a>
                            </div>
                            <div class="hidden md:block">
                                <div class="ml-10 flex items-baseline space-x-4">
                                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                                    <a href="/admin/dashboard" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                        aria-current="page">Bài viết</a>

                                    <a href="/admin/listProducts"
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sản phẩm</a>

                                    <a href="#"
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                                    <a href="#"
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>

                                    <a href="#"
                                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </nav>
        `;
    },
};
export default navAdmin;