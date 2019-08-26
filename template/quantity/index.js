const app = getApp()

page({
  data:{
    count:1,
    minusStatus:'disable',

  },
   delCount:function(){
     var count = this.data.count;
     if(count>1){
       count--;
     }
     var minusStatus = count > 1 ? 'normal' :'disable';
     this.setData({
       count: count,
       minusStatus:minusStatus
     })
   },
  addCount: function () {
    var count = this.data.count;
    
    count++;
    
    var minusStatus = count > 1 ? 'normal' : 'disable';
    this.setData({
      count: count,
      minusStatus: minusStatus
    })
  },
   bindManual(e){
     var count = e.detail.value;
     var minusStatus = count > 1 ? 'normal' : 'disable';
     this.setData({
       count: count,
       minusStatus:minusStatus
     })
   }
})