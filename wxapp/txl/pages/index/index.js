Page({
  onLoad(){
    //1. 歌手要按index 分组 数组
    //2. 排序
    let list = this.data.list;
    this.setData({
      logs: this._normalizeSinger(list)
    });
  },
  _normalizeSinger(list){
    // 热门榜单
    let map = {
      hot: {
        title: this.data.HOT_NAME,
        items: []
      }
    }

    list.forEach((item, index) => {
      if (index < this.data.HOT_SINGER_LEN) {
        map.hot.items.push({
          name: item.name,
          avatar: item.img
        });
      }
      const key = item.index;
      // console.log(key);
      if (!map[key]) { // 之前还未创建A 
        map[key] = {
          title: key,
          items: []
        }
      }
      map[key].items.push({
        name: item.name,
        avatar: item.img
      });
    })

     console.log(map);
     // for 顺序 hot A->Z
     //JSON 没有顺序 JSON -》 ARRAY
    //  [
    //    []
    //  ]
    let ret = [],
      hot = [];
      for(let key in map) {
        let val = map[key];
        if(val.title === this.data.HOT_NAME){
          hot.push(val)
        }else{
          ret.push(val)
        }

      }
      console.log(ret, hot);
      ret.sort((a, b) =>{
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)//获取啊斯卡🐎 进行排序，如果更小就调换顺序
      })
      // console.log(ret);
      return hot.concat(ret);
  },
  data:{
    currentIndex: 0,
    HOT_NAME: '热',
    HOT_SINGER_LEN: 10,
    scrollTop:0,
    logs: [],
    list: [
      {
        "index": "L",
        "name": "李荣浩",
        "img": 'https://y.gtimg.cn/music/photo_new/T001R150x150M000000aHmbL2aPXWH.jpg?max_age=2592000'
      },
      {
        "index": "X",
        "name": "薛之谦",
        "img": 'https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000'
      },
      {
        "index": "Z",
        "name": "周杰伦",
        "img": 'https://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.jpg?max_age=2592000'
      },
      {
        "index": "B",
        "name": "BIGBANG (빅뱅)",
        "img": 'https://y.gtimg.cn/music/photo_new/T001R300x300M000004AlfUb0cVkN1.jpg?max_age=2592000'
      },
      {
        "index": "C",
        "name": "陈奕迅",
        "img": 'https://y.gtimg.cn/music/photo_new/T001R150x150M000003Nz2So3XXYek.jpg?max_age=2592000'
      },
      {
        "index": "L",
        "name": "林俊杰",
        "img": 'https://y.gtimg.cn/music/photo_new/T001R150x150M000001BLpXF2DyJe2.jpg?max_age=2592000'
      },
      {
        "index": "A",
        "name": "Alan Walker (艾伦·沃克)",
        "img": 'https://y.gtimg.cn/music/photo_new/T001R300x300M000003oUwJ54CMqTT.jpg?max_age=2592000'
      },
    ]

  },
  scroll(){
    
  },
  scrollToView(e){
    let id = e.target.dataset.id;
    if(id === '热'){
      this.setData({
        scrollTop: 0
      })
    } else{
      this.setData({
        toView:id,
        currentIndex: e.target.dataset.index
      })
    }
  }
})
