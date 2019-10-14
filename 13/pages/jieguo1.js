// pages/jieguo1.js
var app = getApp();
var that; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:[''],
    card:[""],
    score:[''],
    st:['']
   // x:[""]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for (var index in app.globalData.limit) {
     /* id[index] = app.globalData.res[index].id;
      card[index] = app.globalData.res[index].card;
      score[index] = app.globalData.res[index].score;
      st[index] = app.globalData.res[index].timestamp;
      x[index] = id[index] + card[index] + score[index] + st[index];   */
    }
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