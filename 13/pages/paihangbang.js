// pages/paihangbang.js
var app = getApp();
var that; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    playerId:"",
    score:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    wx.request({
      url: "https://api.shisanshui.rtxux.xyz/game/rank",
      method: "GET",
      header: {
        //请求头和ajax写法一样
        'X-Auth-Token': app.globalData.token
      },
      success: function (res) {
        // app.globalData.username=this.data.username;
        console.log(res);
      },
      complete: function (res) {
        if (res == null || res.data == null) {
          console.error('网络请求失败');
          return;
        }
      },
      fail: function (error) {
        console.log("请求失败!");
      }
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