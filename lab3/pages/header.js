const header = {
    render() {
        return /* html */`
            <div class="bg-orange-500">
                <ul class="flex">
                    <li><a href="/" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Home </a></li>
                    <li><a href="/signup" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Signup</a></li>
                    <li><a href="/signin" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Signin</a></li>
                    <li><a href="/admin/dashboard" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Dashboard</a></li>
                    <li><a href="/admin/news" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">News</a></li>
                    <li><a href="/admin/news/add" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">News add</a></li>
                </ul>
            </div>
        `;
    },
};
export default header;