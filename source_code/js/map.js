/** 
     *  
     * 描述：js实现的map方法 
     * @returns {Map} 
     */  
    function Map(){  
        var struct = function(key, value) {  
         this.key = key;  
         this.value = value;  
        };  
       // 添加map键值对  
        var put = function(key, value){  
          for (var i = 0; i < this.arr.length; i++) {  
          if ( this.arr[i].key === key ) {  
           this.arr[i].value = value;  
           return;  
          }  
         };  
         this.arr[this.arr.length] = new struct(key, value);  
        };  
       //  根据key获取value   
        var get = function(key) {  
         for (var i = 0; i < this.arr.length; i++) {  
          if ( this.arr[i].key === key ) {  
           return this.arr[i].value;  
          }  
         }  
        return null;  
        };  
       //   根据key删除  
        var remove = function(key) {  
         var v;  
         for (var i = 0; i < this.arr.length; i++) {  
          v = this.arr.pop();  
          if ( v.key === key ) {  
           continue;  
          }  
          this.arr.unshift(v);  
         }  
        };  
       //   获取map键值对个数  
        var size = function() {  
         return this.arr.length;  
        };  
       // 判断map是否为空    
        var isEmpty = function() {  
         return this.arr.length <= 0;  
        };  
        this.arr = new Array();  
        this.get = get;  
        this.put = put;  
        this.remove = remove;  
        this.size = size;  
        this.isEmpty = isEmpty;  
       }

       var map=new Map();  
       map.put("xxyang",100);  
       map.put("xp","dz");
       console.log(map.get('xxyang'));
       console.log(map.get('xp')); 
    
    //    console.log(map.size());//2  
    //    console.log(map.get("num"));//1  
    //    map.remove("num");
    //    map.remove("ss");
    //    console.log(map.get("wss"));   
    //    console.log(map.size());//1  
    //    console.log(map.get("num"));//null       
 