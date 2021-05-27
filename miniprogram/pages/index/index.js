
// index/pages/tree/tree.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    djshu:4,//树的等级1，2，3，4
    level:0,
    tree:false,
    waternum:0,
    nownum:0,
    waterbool:false,
    animation:true,
    shutree:false,
    bottle:false
  },
  treeend(){//树动画结束
    this.setData({
      tree:false,
      shutree:false,
      animation:true,
      waternum:this.data.waternum+=90,
      nownum:this.data.nownum+=90
    })
    if(this.data.nownum>=100){
      wx.showToast({
        title: '恭喜你，升级啦',
      })
      this.data.nownum = this.data.nownum%100
      this.setData({
        level:this.data.level+=1,
        nownum:this.data.nownum
      })
      return true
    }
  },
  before(){
    wx.navigateBack({
      delta: 1,
    })
  },
  bottlestart(){//水滴动画开始前
    this.setData({
      bottle:true
    })
  },
  bottleend(){//水滴动画结束
    this.setData({
      bottle:false,
      tree:false,
      waterbool:true,
    })
    setTimeout(()=>{
      this.setData({
        shutree:true,
        waterbool:false,
      })
    },500)
  },
  animation(){//动画事件启动
    var animation=this.data.animation
    if(animation){
      this.setData({
        animation:false,
        tree:true
      })
    }else{
      return false
    }
    
  },
  answer(){
    wx.navigateTo({
      url: '/index/pages/dati/dati',
    })
  },
  tosign(){
    wx.navigateTo({
      url: '/index/pages/qiandao/qiandao',
    })
  },
  shaomiao(){
    wx.switchTab({
      url: '/pages/zwy/zwy',
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
