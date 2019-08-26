// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minusStatus: 'disable',
    showDialog:false,
     nav:0,
     isLike:true,
     goods:
       {
         goodsId: "0",
         title: '无人生还',
         price: '17.30',
         totalMoney:'17.30',
         isSelect:false,
         count:1,
         imgUrls: [
           '../../image/wu.jpg',
           '../../image/wu1.jpg'
         ],
         detail:[
           '../../image/wudetail.jpg'
         ],
         imgUrl:'../../image/wu.jpg'

       }
    //    {
    //    id: "1",
    //    name:'福尔摩斯探案全集',
    //    price:'￥160.00',
    //    imgUrls:[
    //    '../../image/zt1.jpg',
    //    '../../image/zt2.jpg',
    //    '../../image/zt3.jpg',
    //    '../../image/zt4.jpg',
    //    '../../image/zt5.jpg',
    //    '../../image/zt6.jpg',
    //    '../../image/zt7.jpg'
    //    ],
    //    detail:[
    //        '../../image/ztx.jpg'
    //    ],
    //    url:'../../image/zt1.jpg'
    //  },
    //  {
    //    id: "2",
    //    name: '肖申克的救赎',
    //    price: '￥31.70',
    //    imgUrls: [
    //      '../../image/xiao.jpg'
         
    //    ],
    //    url: '../../image/xiao.jpg'
    //  }
     ,
     
     indicatorDots:true,
     autoplay:true,
     interval:3000,
     duration:1000,
  },


     previewImage(e){
       var current = e.target.dataset.src;
       wx.previewImage({
         current: current,
         urls: this.data.imgUrls
       })
     },

     addLike(){
       this.setData({
         isLike:!this.data.isLike
       })
     },
     toCar(){
       wx.switchTab({
         url: '/pages/cart/cart',
       })

     },
     immeBuy(){
       wx.showToast({
         title: '购买成功',
         icon:'success',
         duration:2000
       })
     },

     toggleDialog(){
       this.setData({
         showDialog:!this.showDialog
       })
     },
     closeDialog() {
        this.setData({
           showDialog: false
         })
       },
  delCount: function (e) {
    var index = e.target.dataset.index;
    var count = this.data.goods.count;
    if (count > 1) {
      this.data.goods.count--;
    }
    
    this.setData({
      goods: this.data.goods
      
    })
  },
  addCount: function () {
    var count = this.data.goods.count;
    console.log('jia')

    if(count < 999){

    this.data.goods.count++;
    }

    
    this.setData({
      goods: this.data.goods
    })
  },

  bindManual(e) {
    console.log(e)
     this.data.goods.count = e.detail.value;
    this.setData({
      goods: this.data.goods
    })
    console.log(this.data)
  },


  addCar: function (e) {
    console.log(e)
     var goodsId = e.target.dataset.goodid
    var goods = this.data.goods;
    goods.isSelect = false;
    var count = this.data.goods.count;
    var title = this.data.goods.title;
    if (title.length > 13) {
      goods.title = title.substring(0, 13) + '...';
    }
    // 获取购物车的缓存数组（没有数据，则赋予一个空数组）  
    var arr = wx.getStorageSync('cart') || [];
    console.log("arr,{}", arr);
    if (arr.length > 0) {
      // 遍历购物车数组  
      for (var j in arr) {
        // 判断购物车内的item的id，和事件传递过来的id，是否相等  
        if (arr[j].goodsId == goodsId) {
          // 相等的话，给count+1（即再次添加入购物车，数量+1）  
          arr[j].count = arr[j].count + 1;
          // 最后，把购物车数据，存放入缓存（此处不用再给购物车数组push元素进去，因为这个是购物车有的，直接更新当前数组即可）  
          try {
            wx.setStorageSync('cart', arr)
          } catch (e) {
            console.log(e)
          }
          //关闭窗口
          wx.showToast({
            title: '加入购物车成功！',
            icon: 'success',
            duration: 2000
          });
          this.closeDialog();
          // 返回（在if内使用return，跳出循环节约运算，节约性能） 
          return;
        }
      }
      // 遍历完购物车后，没有对应的item项，把goodslist的当前项放入购物车数组  
      arr.push(goods);
    } else {
      arr.push(goods);
    }
    // 最后，把购物车数据，存放入缓存  
    try {
      wx.setStorageSync('cart', arr)
      // 返回（在if内使用return，跳出循环节约运算，节约性能） 
      //关闭窗口
      wx.showToast({
        title: '加入购物车成功！',
        icon: 'success',
        duration: 2000
      });
      this.closeDialog();
      return;
    } catch (e) {
      console.log(e)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that = this;
      var goodsId = options.goodsId;
     console.log('goodsId' + goodsId)
     that.goodsInfoShow();
  },

   goodsInfoShow(){
      var that = this;
      wx.request({
        url: 'goods/getGoodsInfo?key=' + utils.key + '&goodsId=' + goodsId,
        method:'GET',
        success : data => {
          var goodsItem = data.result;
          for(var i = 0; i <goodsItem.shopGoodsImageList.length; i++){
              imgUrls[i] = goodsItem.shopGoodsImageList[i].imgUrl;
          }
          var details = goodsItem.details.split(';');
          for(var j = 0; j < details.length; j++ ){
            detailImg[j] = details[j];
          }

          goods={
            imgUrls : imgUrls,
            title : goodsItem.name,
            price : goodsItem.price,
            privilegePrice : goodsItem.privilegePrice,
            detailImg : detailImg,
            imgUrl : goodsItem.imgUrl,
            buyRate : goodsItem.buyRate,
            goodsId : goodsId,
            count : 1,
            totalMoney : goodsItem.price,

          }
          that.setData({
            goods:goods
          })
           console.log(goods.title)
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