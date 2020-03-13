// pages/home/home.js
import {Theme} from "../../models/theme";
import {Banner} from "../../models/banner";
import {Category} from "../../models/category";

Page({
    /**
     * 页面的初始数据
     */
    data: {
        ThemeA: null,
        BannerB: null,
        grid: []

    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options){
        this.initAllData();
    },

    async initAllData(format, data) {
        const ThemeA = await Theme.getHomeLocationA();
        const BannerB = await Banner.getHomeLocationB();
        const grid = await Category.getCategory();
        this.setData({
            ThemeA: ThemeA.data,
            BannerB,
            grid
        })
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})