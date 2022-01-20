const header = {
    render() {
        return /* html */`
        <header>
        <div class="bg-[#272f54] py-4">
          <a href="#"><img class="m-auto" src="https://picsum.photos/250/75" alt=""></a>
        </div>
        <div class="bg-[#cb7802] flex">
          <ul class="w-100 flex">
            <li><a href="/" class="block py-3 px-5 text-stone-50 text-base hover:text-blue-800">Home</a></li>
            <li><a href="/about" class="block py-3 px-5 text-stone-50 text-base hover:text-blue-800">About</a></li>
            <li><a href="/product" class="block py-3 px-5 text-stone-50 text-base hover:text-blue-800">Product</a></li>
            <li><a href="/contact" class="block py-3 px-5 text-stone-50 text-base hover:text-blue-800">Contact</a></li>
          </ul>
          <div class="py-3 flex ml-80">
            <input class="w-60" type="text">
            <button class="bg-[#272f54] text-stone-50 text-sm w-20 ml-2 border">TÌM KIẾM</button>
          </div>
        </div>
      </header>
        `;
    },
};
export default header;