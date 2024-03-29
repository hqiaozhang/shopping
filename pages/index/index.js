// pages/index/index.js
let constant = require('../../utils/constant.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let firstFlag = wx.getStorageSync(constant.firstFlagKey);
    console.log('firstFlag===', firstFlag)
    if(firstFlag && firstFlag === 1) {
      // 查看是否获取
      wx.getSetting({
        success: res => {
          if(res.authSetting['scope.userInfo']) {
            // 已经授权
            wx.switchTab({
              url: '/pages/home/home',
            })
          }
        }
      })
    }else {
      console.log('xxxx')
      //首次登陆
      wx.setStorage({
        key: constant.firstFlagKey,
        data: 1,
      })
      // 去授权
      wx.redirectTo({
        url: '../auth/auth',
      })
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