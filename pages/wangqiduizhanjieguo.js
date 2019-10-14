// pages/wangqiduizhanjieguo.js
var app = getApp();
var that; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    n1:'',
    n2:''
  },
  jumpPage1: function () {
    app.globalData.pi = this.data.id,
    app.globalData.limit = this.data.n1,
    app.globalData.page = this.data.n2,
    that = this;
    wx.request({
      url: "https://api.shisanshui.rtxux.xyz/history",
      data: {
        "player_id": this.data.id,
        "limit": this.data.n1,
        "page": this.data.n2
      },
      method: "GET",
      header: {
        //请求头和ajax写法一样
        'content-type': 'application/json',
        'X-Auth-Token': app.globalData.token
      },
      success: function (res) {
        app.globalData.res = res.data;
        // app.globalData.username=this.data.username;
        console.log(res);
        wx.navigateTo({
          url: '/pages/jieguo1'
        })
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
   * 生命周期函数--监听页面加载
   */
  
  idInput: function (e) {
    this.setData({
      id: e.detail.value
    })
  },
  n1Input: function (e) {
    this.setData({
      n1: e.detail.value
    })
  },
  n2Input: function (e) {
    this.setData({
      n2: e.detail.value
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