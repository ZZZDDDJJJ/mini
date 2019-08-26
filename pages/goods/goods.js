// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      scrollH:0,
      imgWidth:0,
      loadingCount:0,
      images:[],
      col1:[],
      col2:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
    wx.getSystemInfo({
      success: function(res) {
         let ww = res.windowWidth;
         let wh = res.windowHeight;
         let imgWidth = ww * 0.48;
         let scollH = wh;

         that.setData({
           scrollH:scollH,
           imgWidth:imgWidth
         });

         that.loadImages();

      },
    })

  },
      onImageLoad(e) {

       console.log(e);
       let imageId = e.currentTarget.id;
       let oImgW = e.detail.width;
       let oImgH = e.detail.height;

       let imgWidth = this.data.imgWidth;
       let scale = imgWidth / oImgW;
       let imgHeight = oImgH * scale;

    let images = this.data.images;
    let imageObj = null;

    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      if (img.id === imageId) {
        imageObj = img;
        break;
      }
    };
    console.log(images)
    console.log(imageObj)

    imageObj.height = imgHeight;


    let loadingCount = this.data.loadingCount - 1;
    let col1 = this.data.col1;
    let col2 = this.data.col2;

    if (col1.length <= col2.length) {
      col1.push(imageObj);
    } else {
      col2.push(imageObj)

    };
    let data = {
      loadingCount: loadingCount,
      col1: col1,
      col2: col2
    }

    if (!loadingCount) {
      this.data.images = [];
    }

    this.setData(data)
    console.log(this.data)
  },


  loadImages(e){
          console.log(e)
          console.log(this.data)
           let images = [
             {
               goodsId: 0,
               name: "无人生还",
               imageurl: '../../image/b2.jpg',
               newprice:'97.00',
               oldprice:"99.00",
               discount:"8.8",
               height:"0"

             },
             {
               goodsId: 1,
               name: "福尔摩斯侦探全集",
               imageurl: '../../image/b1.jpg',
               newprice: '97.00',
               oldprice: "99.00",
               discount: "8.8",
               height: "0"

             },
             {
               goodsId: 2,
               name: "肖申克的救赎",
               imageurl: '../../image/b3.jpg',
               newprice: '97.00',
               oldprice: "99.00",
               discount: "8.8",
               height: "0"


             },
            //   {
            //    goodsId: 3,
            //    name: "无人生还",
            //    imageurl: '../../image/b2.jpg',
            //    newprice: '97.00',
            //    oldprice: "99.00",
            //    discount: "8.8",
            //    height: "0"

            //  },
            //  {
            //    goodsId: 4,
            //    name: "福尔摩斯侦探全集",
            //    imageurl: '../../image/b1.jpg',
            //    newprice: '97.00',
            //    oldprice: "99.00",
            //    discount: "8.8",
            //    height: "0"

            //  },
            //  {
            //    goodsId: 5,
            //    name: "肖申克的救赎",
            //    imageurl: '../../image/b3.jpg',
            //    newprice: '97.00',
            //    oldprice: "99.00",
            //    discount: "8.8",
            //    height: "0"


            //  },
            //   {
            //    goodsId: 6,
            //    name: "无人生还",
            //    imageurl: '../../image/b2.jpg',
            //    newprice: '97.00',
            //    oldprice: "99.00",
            //    discount: "8.8",
            //    height: "0"

            //  },
            //  {
            //    goodsId: 7,
            //    name: "福尔摩斯侦探全集",
            //    imageurl: '../../image/b1.jpg',
            //    newprice: '97.00',
            //    oldprice: "99.00",
            //    discount: "8.8",
            //    height: "0"

            //  },
            //  {
            //    goodsId: 8,
            //    name: "肖申克的救赎",
            //    imageurl: '../../image/b3.jpg',
            //    newprice: '97.00',
            //    oldprice: "99.00",
            //    discount: "8.8",
            //    height: "0"


            //  }
           ];

           let baseId = "img-" + (+new Date() );

           for(let i= 0; i < images.length; i++){
             images[i].id = baseId + "-" + i;
           }
           
           this.setData({

             loadingCount: images.length,
             images:images
           });
          console.log(this.data)
            
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