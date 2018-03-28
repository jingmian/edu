//index.js
//获取应用实例
const app = getApp()
Page({
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '税小课',
      path: '/pages/logs/logs',
      success: function (res) {
        // 转发成功
        console.log("dsfd:",res)
      },
      fail: function (res) {
        // 转发失败
        console.log(res)
      }
    }
  },
  data: {
    topData: [
      {
        "cover":"https://oss-edu-prod.dingtax.cn/cover/idJVBp7XSuJonvyTnsN6UWAC.png",
        "id":10005
      },
      {
        "cover": "https://oss-edu-prod.dingtax.cn/cover/idMb7KmFmQtczTrN2yEVwK2C.jpg",
        "id": 10006
      }
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //首页显示分享
    wx.showShareMenu({
      withShareTicket: false
    })
    // 显示动态数字
    wx.setTabBarBadge({
      index: 2,
      text: '9+'
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
