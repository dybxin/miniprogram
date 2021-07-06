// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        let random = Math.random()
        console.log('random', random)
        if (random > 0.5) {
          wx.setStorageSync('role', 'admin')
        } else {
          wx.setStorageSync('role', 'visitor')
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
