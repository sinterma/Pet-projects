import { test } from "../fixtures/zalando.fixture"
import {expect} from "@playwright/test"

test.describe("test suit 1", () => {

  test("has title", async ({ zalando }) => {
    await expect(zalando.page).toHaveTitle(
      "Shop Shoes, Fashion & Accessories Online | Zalando"
    );
  });

  test("select category women", async ({ zalando }) => {
    await zalando.selectWomenCategory()
    await expect(zalando.page).toHaveTitle("Women’s Shoes & Fashion Online | ZALANDO");
  });

  test("search item", async ({zalando}) => {
    await zalando.searchItem('jeans');
    await expect(zalando.sortByButton).toBeVisible();
  })
});
