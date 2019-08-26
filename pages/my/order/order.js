// pages/my/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:true,
    navbar:[
      { 
        
        
        name:'全部',
        carts:[]

       
       
       },
      { name:'待付款'},
      { name:'待发货'},
      { name:'待收货'},
      { name:'待评价'}
      ],
    currentTab:0,
    
  },

  navbarTap(e){
    console.log(e);
    this.setData({
      currentTab:e.currentTarget.dataset.idx
    })
  },

 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
              
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
    var arr = wx.getStorageSync('cart') || [];
    console.info("xx" + arr);    // 有数据的话，就遍历数据，计算总金额 和 总数量  
    if (arr.length > 0) {
      // 更新数据  
      this.setData({
        'navbar[0].carts': arr,
        iscart: true,
        hidden: false
      });
      console.info(this.data);
    } else {
      this.setData({
        iscart: false,
        hidden: true,
      });
    }



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