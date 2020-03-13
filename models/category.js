import {Http} from "../utils/http";

class Category {
    static async getCategory() {
        return await Http.request({
            url: '/category/all'
        })
    }
}

export {
    Category
}