const assert = require('assert');

class CategoryPage {
    // Disini didefinisikan locator dari element
    get CategoryButton() {
        return $("#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div > div > div"); //button category
    }

    // Disini didefinisikan action yang akan dilakukan kepada element
    async click() {
        await this.CategoryButton.waitForExist({ timeout: 15000 }); // nunggu page loading sebentar
        await this.CategoryButton.click();
        await this.assertCategoryURL(); // assert setelah klik tombol
    }

    // assert pada URL setelah klik tombol
    async assertCategoryURL() {
        const expectedURL = 'https://kasirdemo.belajarqa.com/categories'; // URL yang diharapkan

        await browser.waitUntil(async () => {
            const currentURL = await browser.getUrl(); // Mendapatkan URL saat ini
            return currentURL === expectedURL; // Kembali true jika URL saat ini sesuai dengan yang diharapkan
        }, { timeout: 5000, timeoutMsg: 'URL tidak sesuai setelah mengklik tombol kategori' }); // Tunggu hingga 5 detik, jika tidak, berikan pesan timeout
    }
}

module.exports = new CategoryPage();
