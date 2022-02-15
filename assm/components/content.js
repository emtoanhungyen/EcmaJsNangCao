import newList from "./newList";

const content = {
    async render() {
        return /* html */`
        <main>
            <section class="banner">
                <a href="#"><img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1644766805/img_ecma_js/banner_jfhnrx.jpg" alt="banner vinfat"></a>
            </section>

            <div>
                ${await newList.render()}
            </div>

            <section class="sub-banner">
                <a href="#"><img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1644766804/img_ecma_js/sub-banner_fl5pzx.jpg" alt="sub banner"></a>
            </section>

        </main>
        `
    },
};
export default content;