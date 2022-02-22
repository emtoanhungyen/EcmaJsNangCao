import toastr from "toastr";
import { getAll, remove } from "../../api/admin";
import navAdmin from "./navAdmin";
import "toastr/build/toastr.min.css";
import { reRender } from "../../utils/index";

const dashboard = {
    async render() {
        const response = await getAll();
        return /* html */`
            <div class="min-h-full"  id="dashboard">
                <div>
                    ${navAdmin.render()}
                </div>
                <div>
                    <header class="bg-white shadow">
                        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <h1 class="text-3xl font-bold text-gray-900">Danh sách bài viết</h1>
                        </div>
                        
                    </header>

                    <main>
                        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                            <!-- Replace with your content -->
                            <div class="px-4 py-6 sm:px-0">
                                <div class="">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Desc</th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    <div class="mt-4 flex lg:mt-0 lg:ml-4">
                                                        <a href="/admin/dashboard/add" class="sm:ml-3">
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
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            ${response.data.map((post, index) => `
                                                <tr>
                                                    <td class="px-6 py-4 whitespace-nowrap">${index + 1}</td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <img class="max-w-[200px] max-h-[150px]" src="${post.img}">
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">${post.name}</td>
                                                    <td class="px-6 py-4 whitespace-nowrap">${post.desc}</td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <a href="/#/admin/${post.id}/edit/" class="bg-blue-500 text-white inline-block py-3 px-5 rounded">Sửa</a>
                                                        <button data-id="${post.id}" id="btn" class="btn bg-red-500 text-white inline-block py-3 px-5 rounded">Xóa</button>
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
            </div>
            `;
    },
    afterRender() {
        const btns = document.querySelectorAll("#btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa?");
                if (confirm) {
                    remove(id).then(() => {
                        toastr.success("Ban da xoa thanh cong!");
                        reRender(dashboard, "#dashboard");
                    });
                }
            });
        });
        navAdmin.afterRender();
    },
};
export default dashboard;