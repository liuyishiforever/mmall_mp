import {Http} from "../utils/http";

class Banner {
    static bannerName = 'b-1';
    static async getHomeLocationB() {
        return await Http.request({
            url: `/banner/names/${Banner.bannerName}`
        })
    }
}

export {
    Banner
}