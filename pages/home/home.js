Page({
  data:{
    name:'卧槽',
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
  }
})