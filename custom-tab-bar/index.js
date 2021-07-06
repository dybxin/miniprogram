Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    visitor: [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/images/extui.png",
        "selectedIconPath": "/images/extuiHL.png",
        "text": "首页"
      }, {
        "pagePath": "/pages/login/index",
        "iconPath": "/images/template.png",
        "selectedIconPath": "/images/templateHL.png",
        "text": "登录"
      }
    ],
    admin: [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/images/extui.png",
        "selectedIconPath": "/images/extuiHL.png",
        "text": "首页"
      }, {
        "pagePath": "/pages/login/index",
        "iconPath": "/images/template.png",
        "selectedIconPath": "/images/templateHL.png",
        "text": "登录"
      }, {
        "pagePath": "/pages/logs/logs",
        "iconPath": "/images/component.png",
        "selectedIconPath": "/images/componentHL.png",
        "text": "日志"
      }
    ],
    list: []
  },
  attached() {
    let role = wx.getStorageSync('role') || ""
    console.log('r', role)
    if (role ==='visitor') {
      this.setData({
        list: this.data.visitor
      })
    } else {
      this.setData({
        list: this.data.admin
      })
    }
  },
  methods: {
    switchTab(e) {
      console.log('data', e.currentTarget.dataset)
      const data = e.currentTarget.dataset
      const url = data.path

      this.setData({
        selected: data.index
      })

      wx.switchTab({ url })
    }
  }
})