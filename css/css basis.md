# css 基础知识汇总
层叠样式表 (Cascading Style Sheets)

- 代码语法
    css 样式由选择符和声明组成，而声明又由属性和值组成，如下图所示：
    http://img.mukewang.com/52fde5c30001b0fe03030117.jpg
    选择符：又称选择器，指明网页中要应用样式规则的元素。
    声明：在英文大括号“｛｝”中的的就是声明，属性和值之间用英文冒号“：”分隔。当有多条声明时，中间可以英文分号“;”

    注：最后一条声明可以没有分号，但是为了以后修改方便，一般也加上分号。

- 书写方式
    内联式、嵌入式和外部式三种
    
    外部式css样式(也可称为外联式)就是把css代码写一个单独的外部文件中，这个css样式文件以“.css”为扩展名，在<head>内（不是在<style>标签内）使用<link>标签将css样式文件链接到HTML文件内，如下面代码：

    <link href="base.css" rel="stylesheet" type="text/css" />

    注意：

    1、css样式文件名称以有意义的英文字母命名，如 main.css。

    2、rel="stylesheet" type="text/css" 是固定写法不可修改。

    3、<link>标签位置一般写在<head>标签之内。

    优先级：内联式 > 嵌入式 > 外部式

- 选择器
    1. 标签选择器其实就是html代码中的标签。
    2. 类选择器   .类选器名称{css样式代码;}
    3. ID选择器  <span id="setGreen">公开课</span>    
                #setGreen{
                        color:green;
                        }
    4. 类和ID选择器的区别
        相同点：可以应用于任何元素
        不同点：
        1、ID选择器只能在文档中使用一次。与类选择器不同，在一个HTML文档中，ID选择器只能使用一次，而且仅一次。而类选择器可以使用多次。
        2、可以使用类选择器词列表方法为一个元素同时设置多个样式。我们可以为一个元素同时设多个样式，但只可以用类选择器的方法实现，ID选择器是不可以的（不能使用 ID 词列表）。
    5. 子选择器 
        使用大于符号(>),用于选择指定标签元素的第一代子元素。如代码：
        .food>li{border:1px solid red;}
        这行代码会使class名为food下的子元素li加入红色实线边框。
    6. 包含选择器，即加入空格,用于选择指定标签元素下的后辈元素。如右侧代码编辑器中的代码：
        .first  span{color:red;}
        这行代码会使第一段文字内容中的“胆小如鼠”字体颜色变为红色。

        5和6的区别：>作用于元素的第一代后代，空格作用于元素的所有后代。
    7. 通用选择器是功能最强大的选择器，它使用一个（*）号指定，它的作用是匹配html中所有标签元素。
    8. 伪类选择符
        它允许给html不存在的标签（标签的某种状态）设置样式，比如说我们给html中一个标签元素的鼠标滑过的状态来设置字体颜色：
        a:hover{color:red;}
        <a href="http://www.imooc.com">胆小如鼠</a>
        
        关于伪选择符：
        关于伪类选择符，到目前为止，可以兼容所有浏览器的“伪类选择符”就是 a 标签上使用 :hover 了（其实伪类选择符还有很多，尤其是 css3 中，但是因为不能兼容所有浏览器。
    9. 分组选择符
        当你想为html中多个标签元素设置同一个样式时，可以使用分组选择符（，），如下代码为右侧代码编辑器中的h1、span标签同时设置字体颜色为红色：
        h1,span{color:red;}

- 继承
    继承是一种规则，它允许样式不仅应用于某个特定html标签元素，而且应用于其后代。
- 特殊性
    浏览器是根据权值来判断使用哪种css样式的，权值高的就使用哪种css样式。
    权值的规则：
    标签的权值为1，类选择符的权值为10，ID选择符的权值最高为100。
    例如下面的代码：

    p{color:red;} /*权值为1*/
    p span{color:green;} /*权值为1+1=2*/
    .warning{color:white;} /*权值为10*/
    p span.warning{color:purple;} /*权值为1+1+10=12*/
    #footer .note p{color:yellow;} /*权值为100+10+1=111*/
- 层叠
    就是在html文件中对于同一个元素可以有多个css样式存在，当有相同权重的样式存在时，会根据这些css样式的前后顺序来决定，处于最后面的css样式会被应用。
- 重要性
    !important 特殊的情况需要为某些样式设置具有最高权值
    注意：!important要写在分号的前面
    p{color:red!important;}
    查看网页的文本更加清楚。这时注意样式优先级为：浏览器默认的样式 < 网页制作者样式 < 用户自己设置的样式，但记住!important优先级样式是个例外，权值高于用户自己设置的样式。
- css格式化排版
    1. 字体
    body{font-family:"Microsoft Yahei";}
    或body{font-family:"微软雅黑";}第一种方法比第二种方法兼容性更好一些。
    2. 字号颜色
        body{font-size:12px;color:#666}
    3. 粗体
        p span{font-weight:bold;}
    4. 斜体
        p a{font-style:italic;}
    5. 下划线
        p a{text-decoration:underline;}
    6. 删除线
        .oldPrice{text-decoration:line-through;}
    7. 缩进
        p{text-indent:2em;}/*2em的意思就是文字的2倍大小。*/
    8. 行间距（行高）
        p{line-height:1.5em;}/*段落行间距为1.5倍。*/
    9. 中文字间距、字母间距
        letter-spacing:50px;word-spacing:50px;
    10. 段落排版--对齐
        text-align:center;
- css盒子模型
    1. 元素
    三种不同的类型：块状元素、内联元素(又叫行内元素)和内联块状元素。
    常用的块状元素有：

    <div>、<p>、<h1>...<h6>、<ol>、<ul>、<dl>、<table>、<address>、<blockquote> 、<form>

    常用的内联元素有：

    <a>、<span>、<br>、<i>、<em>、<strong>、<label>、<q>、<var>、<cite>、<code>

    常用的内联块状元素有：

    <img>、<input>
    2. 内联元素
        在html中，<span>、<a>、<label>、 <strong> 和<em>就是典型的内联元素（行内元素）（inline）元素。当然块状元素也可以通过代码display:inline将元素设置为内联元素。
        内联元素特点：
        1、和其他元素都在一行上；
        2、元素的高度、宽度及顶部和底部边距不可设置；
        3、元素的宽度就是它包含的文字或图片的宽度，不可改变。
    3. 内联块状元素。
        内联块状元素（inline-block）就是同时具备内联元素、块状元素的特点，代码display:inline-block就是将元素设置为内联块状元素。(css2.1新增)，<img>、<input>标签就是这种内联块状标签。
        inline-block 元素特点：
        1、和其他元素都在一行上；
        2、元素的高度、宽度、行高以及顶和底边距都可设置。
    4. 块级元素
        设置display:block就是将元素显示为块级元素。如下代码就是将内联元素a转换为块状元素，从而使a元素具有块状元素特点。
        a{display:block;}
        块级元素特点：
        1、每个块级元素都从新的一行开始，并且其后的元素也另起一行。（真霸道，一个块级元素独占一行）

        2、元素的高度、宽度、行高以及顶和底边距都可设置。

        3、元素宽度在不设置的情况下，是它本身父容器的100%（和父元素的宽度一致），除非设定一个宽度。
    5. 盒模型--边框
        盒子模型的边框就是围绕着内容及补白的线，这条线你可以设置它的粗细、样式和颜色(边框三个属性)。
        border:2px  solid  red;
        border-width:2px;
        border-style:solid;
        border-color:red;
        border-style（边框样式）常见样式有：
        dashed（虚线）| dotted（点线）| solid（实线）。
        border-width（边框宽度）中的宽度也可以设置为：
        thin | medium | thick（但不是很常用），最常还是用像素（px）。
        border-bottom:1px dotted #ccc;
    6. 宽度和高度
        css内定义的宽（width）和高（height），指的是填充以里的内容范围。
        因此一个元素实际宽度（盒子的宽度）=左边界+左边框+左填充+内容宽度+右填充+右边框+右边界。
        http://img.mukewang.com/539fbb3a0001304305570259.jpg
        div{
        width:200px;
        padding:20px;
        border:1px solid red;
        margin:10px;    
        }
    7. 填充
        元素内容与边框之间是可以设置距离的，称之为“填充”。填充也可分为上、右、下、左(顺时针)
        div{padding:20px 10px 15px 30px;}
    8. 边界
        元素与其它元素之间的距离可以使用边界（margin）来设置。边界也是可分为上、右、下、左。如下代码：
        div{margin:20px 10px 15px 30px;}
        如果上下边界一样为10px，左右一样为20px，可以这么写：
        div{ margin:10px 20px;}
- css布局模型
    布局模型与盒模型一样都是 CSS 最基本、 最核心的概念。 但布局模型是建立在盒模型基础之上，又不同于我们常说的 CSS 布局样式或 CSS 布局模板。如果说布局模型是本，那么 CSS 布局模板就是末了，是外在的表现形式。 
    CSS包含3种基本的布局模型，用英文概括为：Flow、Layer 和 Float。
    在网页中，元素有三种布局模型：
    1、流动模型（Flow）
    2、浮动模型 (Float)
    3、层模型（Layer）
    
    1. 流动模型
    流动模型，流动（Flow）是默认的网页布局模式。也就是说网页在默认状态下的 HTML 网页元素都是根据流动模型来分布网页内容的。
    流动布局模型具有2个比较典型的特征：

        第一点，块状元素都会在所处的包含元素内自上而下按顺序垂直延伸分布，因为在默认状态下，块状元素的宽度都为100%。实际上，块状元素都会以行的形式占据位置。如右侧代码编辑器中三个块状元素标签(div，h1，p)宽度显示为100%。
        第二点，在流动模型下，内联元素都会在所处的包含元素内从左到右水平分布显示。（内联元素可不像块状元素这么霸道独占一行）
    2. 浮动模型
    块状元素这么霸道都是独占一行，如果现在我们想让两个块状元素并排显示，怎么办呢？不要着急，设置元素浮动就可以实现这一愿望。
    div{
    width:200px;
    height:200px;
    border:2px red solid;
    float:left;
        }
    3. 层模型
        层布局模型就像是图像软件PhotoShop中非常流行的图层编辑功能一样，每个图层能够精确定位操作，但在网页设计领域，由于网页大小的活动性，层布局没能受到热捧。但是在网页上局部使用层布局还是有其方便之处的。
        层模型有三种形式：

        1、绝对定位(position: absolute)

        2、相对定位(position: relative)

        3、固定定位(position: fixed)
    4. 绝对定位
        如果想为元素设置层模型中的绝对定位，需要设置position:absolute(表示绝对定位)，这条语句的作用将元素从文档流中拖出来，然后使用left、right、top、bottom属性相对于其最接近的一个具有定位属性的父包含块进行绝对定位。如果不存在这样的包含块，则相对于body元素，即相对于浏览器窗口。
        如下面代码可以实现div元素相对于浏览器窗口向右移动100px，向下移动50px。
        div{
        width:200px;
        height:200px;
        border:2px red solid;
        position:absolute;
        left:100px;
        top:50px;
        }
        <div id="div1"></div>
        http://img.mukewang.com/53a00b130001e86707360547.jpg
    5. 相对定位
        如果想为元素设置层模型中的相对定位，需要设置position:relative（表示相对定位），它通过left、right、top、bottom属性确定元素在正常文档流中的偏移位置。相对定位完成的过程是首先按static(float)方式生成一个元素(并且元素像层一样浮动了起来)，然后相对于以前的位置移动，移动的方向和幅度由left、right、top、bottom属性确定，偏移前的位置保留不动。
        如下代码实现相对于以前位置向下移动50px，向右移动100px;

                #div1{
                    width:200px;
                    height:200px;
                    border:2px red solid;
                    position:relative;
                    left:100px;
                    top:50px;
                    }

                    <div id="div1"></div>
                    http://img.mukewang.com/53a00d2b00015c4b06190509.jpg
    6. 固定定位
        fixed：表示固定定位，与absolute定位类型类似，但它的相对移动的坐标是视图（屏幕内的网页窗口）本身。由于视图本身是固定的，它不会随浏览器窗口的滚动条滚动而变化，除非你在屏幕中移动浏览器窗口的屏幕位置，或改变浏览器窗口的显示大小，因此固定定位的元素会始终位于浏览器窗口内视图的某个位置，不会受文档流动影响，这与background-attachment:fixed;属性功能相同。以下代码可以实现相对于浏览器视图向右移动100px，向下移动50px。并且拖动滚动条时位置固定不变。
        #div1{
            width:200px;
            height:200px;
            border:2px red solid;
            position:fixed;
            left:100px;
            top:50px;
            }
    <p>文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本。</p>
    7. Relative与Absolute组合使用
    1、参照定位的元素必须是相对定位元素的前辈元素。
    2、参照定位的元素必须加入position:relative;
    3、定位元素加入position:absolute，便可以使用top、bottom、left、right来进行偏移定位了。

- css代码缩写，占用更少的带宽
    1. 盒模型代码简写
    通常有下面三种缩写方法:

    1、如果top、right、bottom、left的值相同，如下面代码：
        margin:10px 10px 10px 10px;
        可缩写为：
        margin:10px;
    2、如果top和bottom值相同、left和 right的值相同，如下面代码：
    margin:10px 20px 10px 20px;
    可缩写为：
    margin:10px 20px;
    3、如果left和right的值相同，如下面代码：
    margin:10px 20px 30px 20px;
    可缩写为：
    margin:10px 20px 30px;
    注意：padding、border的缩写方法和margin是一致的。
    2. 颜色值缩写
    关于颜色的css样式也是可以缩写的，当你设置的颜色是16进制的色彩值时，如果每两位的值相同，可以缩写一半。
    3. 字体缩写
        网页中的字体css样式代码也有他自己的缩写方式，下面是给网页设置字体的代码：
        body{
            font-style:italic;
            font-variant:small-caps; 
            font-weight:bold; 
            font-size:12px; 
            line-height:1.5em; 
            font-family:"宋体",sans-serif;
            }
            这么多行的代码其实可以缩写为一句：
        body{
            font:italic  small-caps  bold  12px/1.5em  "宋体",sans-serif;
            }
            注意：
            1、使用这一简写方式你至少要指定 font-size 和 font-family 属性，其他的属性(如 font-weight、font-style、font-variant、line-height)如未指定将自动使用默认值。
            2、在缩写时 font-size 与 line-height 中间要加入“/”斜扛。

- css单位值
        1、像素
        像素为什么是相对单位呢？因为像素指的是显示器上的小点（CSS规范中假设“90像素=1英寸”）。实际情况是浏览器会使用显示器的实际像素值有关，在目前大多数的设计者都倾向于使用像素（px）作为单位。
        2、em
        就是本元素给定字体的 font-size 值，如果元素的 font-size 为 14px ，那么 1em = 14px；如果 font-size 为 18px，那么 1em = 18px。如下代码：
            p{font-size:12px;text-indent:2em;}
            上面代码就是可以实现段落首行缩进 24px（也就是两个字体大小的距离）。
            但当给 font-size 设置单位为 em 时，此时计算的标准以 p 的父元素的 font-size 为基础。如下代码
            html:

            <p>以这个<span>例子</span>为例。</p>
            css:

            p{font-size:14px}
            span{font-size:0.8em;}
            结果 span 中的字体“例子”字体大小就为 11.2px（14 * 0.8 = 11.2px）。
        3、百分比
            p{font-size:12px;line-height:130%}
            设置行高（行间距）为字体的130%（12 * 1.3 = 15.6px）。
- css样式设计小技巧
        
