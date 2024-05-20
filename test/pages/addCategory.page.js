const assert = require('assert');

class AddCategoryPage {
    // Disini didefinisikan locator dari element
    get AddButton() {
        return $('a.chakra-button.css-1piskbq[href="/categories/create"]');
    }

    get nameInput() {
        return $('#nama'); // Locator field nama
    }

    get descriptionInput() {
        return $('#deskripsi'); // Locator field deskripsi
    }

    get saveButton() {
        return $('button.chakra-button.css-l5lnz6'); // Locator tombol simpan
    }

    // Disini didefinisikan action yang akan dilakukan kepada element
    async clickAddButton() {
        await this.AddButton.click();
    }

    async Input(nama, deskripsi) {
        await this.nameInput.setValue(nama);
        await this.descriptionInput.setValue(deskripsi);
        await this.saveButton.click();
    }

    async assertAddCategory() {
        const validasi = $('td.css-u3dlpe');
        const text = await validasi.getText();
        assert(text.includes('Cahyo Eko'), 'kategori dua tidak ditemukan');
    }

    async waitForNewPage() {
        await browser.waitUntil(async () => {
            const url = await browser.getUrl();
            return url.includes('/categories/create');
        });
    }
}

module.exports = new AddCategoryPage();
