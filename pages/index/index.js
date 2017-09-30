//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name: '黄埭纹身',
    shop: '丽人·纹身',
    address: '江苏省苏州市相城区黄埭镇裴阳路32号黄埭纹身',
    time:'8:00-20:00',
    tel: '13052806464',
    pic:'照片',
    //七千牛地址
    imgalist: ['http://owz7rfrqg.bkt.clouddn.com/wenshen1.jpg',  
       'http://owz7rfrqg.bkt.clouddn.com/wenshen2.jpg',  
       'http://owz7rfrqg.bkt.clouddn.com/wenshen3.jpg',  
       'http://owz7rfrqg.bkt.clouddn.com/wenshen4.jpg'   
    ],
    location: { latitude: '31.4296300000', longitude:'120.5519800000'},
  },
  /**   
 * 预览图片  
 */
  previewImage: function (e) {
    var current = e.target.dataset.src;
    // var current = encodeURI(this.data.imgalist[0])
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imgalist, // 需要预览的图片http链接列表  
        //   success: function (res) {
        //   // success

        // },
        // fail: function (res) {
        //   // fail
        //   console.log(res)
        // },
        // complete: function (res) {
        //   // complete
        //   console.log(1)
        //   console.log(res)
        // }
    })
  } ,
  //查看地图
  seeMap: function () {
    var that = this;
    wx.openLocation({
      latitude: +that.data.location.latitude,
      longitude: +that.data.location.longitude,
      name: '黄埭纹身',
      address:'苏州市相城区黄埭镇裴阳路32号'
    })
  },
  //打电话
  tapCall: function () {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.tel
    })
  },
})
