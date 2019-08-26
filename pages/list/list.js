// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      Items:[
      {
        id : 0,
        desc:'热搜推荐',
        children:
        [
            
            
              {
                child_id: 0,
                desc: "无人生还",
                logo: '../../image/b2.jpg'
              },
              {
                child_id: 1,
                desc: "福尔摩斯侦探全集",
                logo: '../../image/b1.jpg'
              },
              {
                child_id: 2,
                desc: "肖申克的救赎",
                logo: '../../image/b3.jpg'
              },
        ]
      }, 
      {
        id: 1,
        desc: '侦探悬疑',
        children:[
          {
            child_id: 1,
            desc: "福尔摩斯",
            logo: '../../image/b1.jpg'
          },
          {
            child_id: 2,
            desc: "肖申克的救赎",
            logo: '../../image/b3.jpg'
          },
          {
            child_id: 3,
            desc: "福尔摩斯",
            logo: '../../image/b1.jpg'
          },
          {
            child_id: 4,
            desc: "福尔摩斯",
            logo: '../../image/b1.jpg'
          },
          {
            child_id: 5,
            desc: "福尔摩斯",
            logo: '../../image/b1.jpg'
          },
        ]
      }, 
      {
        id: 2,
        desc: '金融'
      }, 
      {
        id: 3,
        desc: '计算机'
      }, 
      {
        id: 4,
        
         desc: '医学'
      },
      {
        id: 5,
    
        desc: '历史'
        
      },
      {
        id: 6,
        desc: '悬疑'
        
      },
      {
        id: 7,
        
        desc: '悬疑'
        
      },
      {
        id: 8,
          desc: '悬疑'
        
      },
      {
        id: 9,
          desc: '悬疑'
        
      },
      {
        id: 10,
        
        desc: '悬疑'
        
      },
      {
        id: 11,
        desc: '悬疑'
        
      },
      {
        id: 12,
          desc: '悬疑'
        
      },
      {
        id: 13,
          desc: '悬疑'
        
      },
      {
        id: 14,
        
          desc: '悬疑'
        
      },
      {
        id: 15,
        
          desc: '悬疑'
        
      },
      {
        id: 16,
        
          desc: '悬疑'
        
      },
      {
        id: 17,
        desc: '悬疑'
        
      },
      {
        id: 18,
        
        desc: '悬疑'
        
      }
      
      
    ],
   
    curNav: 1,
    curIndex:1

  },
  switchRightTab(e){
    let id = e.target.dataset.id;
    let index = parseInt(e.target.dataset.index);
    this.setData({
      curNav:id,
      curIndex:index

    })
    
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: '',
      method:'GET',
      data:{},
      header:{
        'Accept':'application/json' 
      },
      success(res){
        console.log(res)
        this.setData({
          navLeftItems:res.data,
          navRightItems:res.data
        })

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