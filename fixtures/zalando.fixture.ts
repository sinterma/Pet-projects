import { test as base} from "@playwright/test"
import { ZalandoPage } from "../pages/zalando.page"

type MyFixture = {
    zalando: ZalandoPage;
}

export const test = base.extend<MyFixture>({
    zalando: async ({page}, use) => {
        const zalando = new ZalandoPage(page);
        await zalando.gotoHome();
        await use(zalando)
    }
})