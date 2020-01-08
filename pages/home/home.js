// 获取App示例
const app =  getApp();
console.log(app.globalData.name)

Page({
  // 初始化数据
  data:{
    name:'白云电气',
    movies:[
      {id:1,name:'天生杀人狂',year:1994},
      {id:2,name:'落水狗',year:1994},
      {id:3,name:'阿甘正传',year:1994},
    ],
    counter:0
  },
  handleAdd(){
    this.setData({
      counter:this.data.counter +=1
    })
  },
  handleSubtract(){
    this.setData({
      counter:this.data.counter -=1
    })
  },
  handUserInfo(userInfo){
    console.log(userInfo)
  },
  // 1.监听生命周期函数
  onLoad(){

  },
  onShow(){

  },
  onHide(){

  },

  // 监听其它事件
  onPullDownRefresh(){
    console.log("下拉刷新啦")
  },
  onReachBottom(){
    console.log("到底了")
  },
  onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  }
})