// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [], //数据 
    iscart: false,
    hidden: null,
    isAllSelect: false,
    totalMoney: 0,

  },

   switchSelect(e){
     var Allprice = 0 , i = 0;
     let id = e.target.dataset.id,
          index = parseInt(e.target.dataset.index);

          this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
          if(this.data.carts[index].isSelect){
             this.data.totalMoney = parseFloat((this.data.totalMoney + (this.data.carts[index].price * this.data.carts[index].count)).toFixed(2));

          }
          else {
            this.data.totalMoney = parseFloat((this.data.totalMoney - (this.data.carts[index].price * this.data.carts[index].count)).toFixed(2));
            console.log(this.data)
          }


     //是否全选判断
          for (i = 0; i < this.data.carts.length; i++) {
                 Allprice = Allprice + (this.data.carts[i].price * this.data.carts[i].count);
                 console.log(Allprice)
                 console.log(index)
               }
           if (Allprice == this.data.totalMoney) {
              this.data.isAllSelect = true;
            } else {
              this.data.isAllSelect = false;
            }
            this.setData({
               carts: this.data.carts,
               totalMoney: this.data.totalMoney,
               isAllSelect: this.data.isAllSelect,
            })
  },
  allSelect(e){
    let i = 0;
    if(!this.data.isAllSelect){
      this.data.totalMoney = 0;
      for(i=0;i < this.data.carts .length; i++ ){
          this.data.carts[i].isSelect =   true;
          this.data.totalMoney = parseFloat((this.data.totalMoney + (this.data.carts[i].price * this.data.carts[i].count)).toFixed(2));
      }
    }else{
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = false;
      }
      this.data.totalMoney = 0;
    }
    this.setData({
      carts: this.data.carts,
      isAllSelect: !this.data.isAllSelect,
      totalMoney: this.data.totalMoney,
    })
     
  },
  toBuy() {
    wx.showToast({
      title: '去结算',
      icon: 'success',
      duration: 3000
    });
    this.setData({
      showDialog: !this.data.showDialog
    });

    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
    })
  },
  bindManual(e) {    
     console.log(e)
      var count = e.detail.value;    
      var index = e.target.dataset.index;    
      this.data.carts[index].count= count;    
      this.setData({      
         carts: this.data.carts,
    });
    this.priceCount();
  },  
   /* 减数 */
  delCount: function (e) {    
    console.log(e)
   var index = e.target.dataset.index;    
   console.log("刚刚您点击了加一");    
   var count = this.data.carts[index].count;    // 商品总数量-1
    if (count > 1) {      
       this.data.carts[index].count--;
    }    
       // 将数值与状态写回  
    this.setData({      
       carts: this.data.carts
    });    
       console.log("carts:" + this.data.carts);    
       this.priceCount();
  },  
       /* 加数 */
  addCount: function (e) {    
       var index = e.target.dataset.index;    
       console.log("刚刚您点击了加+");    
       var count = this.data.carts[index].count;    // 商品总数量+1  
    if (count < 999) {      
       this.data.carts[index].count++;
    }    
       // 将数值与状态写回  
    this.setData({      
       carts: this.data.carts
    });    
       console.log( this.data.carts);    
       this.priceCount();
  }, 
  priceCount: function (e) {
    this.data.totalMoney = 0;
    for (var i = 0; i < this.data.carts.length; i++) {
      if (this.data.carts[i].isSelect == true) {
        this.data.totalMoney = parseFloat( (this.data.totalMoney + (this.data.carts[i].price * this.data.carts[i].count)).toFixed(2));
      }

    }
    this.setData({
      totalMoney: this.data.totalMoney,
    })
  },  

  delGoods(e) {
    console.log(e)
    this.data.carts.splice(e.target.id.substring(3), 1)
    console.log(this.data.carts)
    if (this.data.carts.length > 0) {
      this.setData({
        carts: this.data.carts
      })
      wx.setStorageSync('cart',this.data.carts);
         this.priceCount();

    }else{
      this.setData({
        cart: this.data.carts,
        iscart: false,
        hidden: true,
      })
      wx.setStorageSync('cart', []);
    
    }
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
    // 获取产品展示页保存的缓存数据（购物车的缓存数组，没有数据，则赋予一个空数组）  
    var arr = wx.getStorageSync('cart') || [];
    console.info("缓存数据：" + arr);    // 有数据的话，就遍历数据，计算总金额 和 总数量  
    if (arr.length > 0) {
      // 更新数据  
      this.setData({
        carts: arr,
        iscart: true,
        hidden: false
      });
      console.info( this.data);
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
    console.log('haha')
    
    var carts = this.data.carts

    try {
      wx.setStorageSync('cart', carts)
    } catch (e) {
      console.log(e)
    }
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