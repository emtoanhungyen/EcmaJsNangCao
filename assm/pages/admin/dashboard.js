import axios from "axios";
import navAdmin from "./navAdmin";

const dashboard = {
    async render() {
        const response = await axios.get('https://61e7a9a8e32cd90017acbc17.mockapi.io/asm');    
        return /* html */`
            <div class="min-h-full">
                <div>
                    ${navAdmin.render()}
                </div>

                <header class="bg-white shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 class="text-3xl font-bold text-gray-900">Danh sách sản phẩm</h1>
                    </div>
                    
                </header>

                <main>
                    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <!-- Replace with your content -->
                        <div class="px-4 py-6 sm:px-0">
                            <div class="">
                                <table class="table-auto">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Desc</th>
                                            <th>
                                                <div class="mt-4 flex lg:mt-0 lg:ml-4">
                                                    <a href="/admin/add/" class="sm:ml-3">
                                                        <button
                                                            type="button"
                                                            class="inline-flex items-center px-2 py-1  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        >
                                                            <!-- Heroicon name: solid/check -->
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                            </svg>
                                                            Thêm mới
                                                        </button>
                                                    </a>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${response.data.map((post, index) => `
                                            <tr>
                                                <td>${index + 1}</td>
                                                <td>
                                                    <img src="${post.img}">
                                                </td>
                                                <td>${post.name}</td>
                                                <td>${post.desc}</td>
                                                <td>
                                                    <button data-id="${post.id}" id="btn" class="btn bg-red-500 text-white inline-block py-3 px-5 rounded">Delete</button>
                                                </td>
                                            </tr>
                                        `).join("")}
                                    </tbody>
                                </table>
                            </div>                
                        </div>
                        <!-- /End replace -->
                    </div>
                </main>
            </div>
            `;
    },
    afterRender(){
        const btns = document.querySelectorAll('#btn');
            btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', function(){
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa?");
                axios.delete('https://61e7a9a8e32cd90017acbc17.mockapi.io/asm/${id}');
            })  
        });
    }
};
export default dashboard;