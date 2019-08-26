// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    recordList:[
      {keyword:"zzzz"},
      {keyword:"dddd"}
    ],


  },
   confirm(e){
     wx.navigateTo({
       url: '',
     })
     console.log(e.detail)
     e.detail.value="";
   },

   inputBind(e){
     this.setData({
       inputValue:e.detail.value
     })
     console.log(e)
   },
   goReseach(e){
     const that = this;
     console.log(e.currentTarget.id)
     wx.navigateTo({
       url: '',
     })

   },

   query(event){
     var that = this;

     wx.request({
       url: 'https://www.baidu.com',
       data:{
         inputValue:this.data.inputValue
       },
       method:'GET',
       success:function(res){
         console.log(res.data)
         var searchData = res.data
         that.setData({
           searchData
         })

       }

     })

   },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('load')

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('ready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('show')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('hide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('unload')
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