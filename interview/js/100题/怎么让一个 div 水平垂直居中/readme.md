# 水平垂直居中
 ```html
 <div class="parent">
   <div class="child"></div>
 </div>
 ```
 
 1. 父元素使用flex布局，justify-content: center;align-items: center;
 ```css
 div.parent {
     display: flex;
     justify-content: center;
     align-items: center;
 }
 ```
 
 2. 子元素使用absolute利用top,left 50%,transform-50%;父元素使用relative
 3. margin: auto;
 ```css
 div.parent {
     position: relative; 
 }
 div.child {
     position: absolute; 
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);  
 }
 /* 或者 */
 div.child {
     width: 50px;
     height: 10px;
     position: absolute;
     top: 50%;
     left: 50%;
     margin-left: -25px;
     margin-top: -5px;
 }
 /* 或 */

 div.child {
     width: 50px;
     height: 10px;
     position: absolute;
     left: 0;
     top: 0;
     right: 0;
     bottom: 0;
     margin: auto;
 }
 ```
 
 4. 父元素使用grid;子元素使用justify-self: center；align-self: center;
 ```css
 div.parent {
     display: grid;
 }
 div.child {
     justify-self: center;
     align-self: center;
 }
 ```
 
 
 ```sass
 div.parent {
     font-size: 0;
     text-align: center;
     &::before {
         content: "";
         display: inline-block;
         width: 0;
         height: 100%;
         vertical-align: middle;
     }
 }
 div.child{
   display: inline-block;
   vertical-align: middle;
 }
 ```
- 设置inline-block和vertical-align:middle后，里面的元素会基于中间的文字准线居中对齐（学生时代的英语本子里面写字母，都是4条线形成三个空白区域，文字的对齐就是根据这几条线的）vertical-align更多信息可以看看张鑫旭博文；
然后，由于伪类是position:static(默认）的，那么伪类撑开了父元素的基准线（高度是100%），使得此时文字的基准线就是整个div.parent的中心了，另外vertical-align只影响inline或者inline-block的，所以div.child设置vertical-align就能居中了。

5. 父元素设置table;子元素设置table-cell;vertical-align: middle;text-align: center;
```css
div.parent {
display: table;
}
div.child {
display: table-cell
vertical-align: middle;
text-align: center;
}
```


