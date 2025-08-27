import {Page,Locator, expect} from "@playwright/test"

export class ZalandoPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly firstSearchOption: Locator;
    readonly sortByButton: Locator;
    readonly womenCategoryLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('#header-search-input');
        this.firstSearchOption = page.locator('#header-search-option-0');
        this.sortByButton = page.getByRole('button', { name: 'Sort by' });
        this.womenCategoryLink = page.locator('header a[href="/women-home/"]')
}

async gotoHome () {
    await this.page.goto("https://en.zalando.de")
}

async selectWomenCategory () {
    await this.womenCategoryLink.click()
}
async searchItem (item: string) {
    await this.searchInput.fill(item);
    await this.firstSearchOption.click()
}
}