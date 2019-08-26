//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      '../../image/one.jpg',
      '../../image/two.jpg',
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls1:[
      { title: "我的班级", message:'../../image/class.png'},
      { title: "晨午日报", message:'../../image/daily.png'},
      { title: "班级管理", message:'../../image/admin.png'},
      { title: "请假管理", message:'../../image/leave.png'},
      { title: "公告发布", message:'../../image/notice.png'},
      { title: "学校管理", message:'../../image/school.png'},
      { title: "学生管理", message:'../../image/student.png'},
      { title: "年级管理", message:'../../image/grade.png'}
    ],
      book:[
        { id: 1, url: '../../image/b1.jpg' },
        { id: 2, url: '../../image/b2.jpg' },
        { id: 3, url: '../../image/b3.jpg' }
      
      ]




  },
  //事件处理函数
  onPullDownRefresh: function (){
    console.log(app.globalData.userInfo)
    this.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: true,
    })
  },
  bindViewTap: function() {
    wx.navigateTo ({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      console.log(app.globalData.userInfo)
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
  },
  searchBox(){
    wx.navigateTo({
      url: '../search/search',
    })
  }
})
