<template>
<transition name="el-alert-fade">
    <!-- 注意代码风格 :class是一个动态类，根据条件输出 typeClass->根据类型输出类名
    typeClass通过computed输出
     is-center是css类名-->
     <!-- is-center是css类名的名字，是否居中呢？ 再加上一个交互的作用，根据effect的不同有不同的特效-->
  <div 
    class="el-alert" 
    :class="[typeClass,center ? 'is-center' : '', 'is-' + effect]" 
    v-show="visible"
  >
    <i class="el-alert__icon" :class="[ iconClass,isBigIcon ]" v-if="showIcon" ></i>
    <!-- "el-alert__icon"是由图标字体库匹配图标的 -->
    <div class="el-alert__content">
        <!-- ElAlert -->
        <span class="el-alert__title">
            <slot name="title">{{ title }}</slot>
        </span>
    </div>
    <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
  </div>
</transition>
</template>

<script>
// 常量  约定大于配置 
const TYPE_CLASSES_MAP = {
  'success': 'el-icon-success',
  'warning': 'el-icon-warning',
  'error': 'el-icon-error'
};
export default {
    name:'ElAlert',
    props:{ //用的大括号
        type:{ //App的el-alert传过来的参数
            type:String, //属性type的类型，所以如果App.vue里面type写的是数字（通过:type="111"形式测试，加冒号用js运行的区域测试，不然会被自动转换成string类型），会报错
            default: 'info' //默认值，不用传了，使用默认值,即前面App.vue里面type定义的
        },
        title:{
            type:String,
            default: '' //默认为空
        },
        description: {
            type: String,
            default: ''
        },
        showIcon:Boolean,
        center:Boolean, //外面没传入就为false
        effect: {
            type:String,
            default: 'light', //浅的效果
            validator: function(value) { //验证
                // 表示是其中之一 ，因为为0就是里面有
                return ['light', 'dark'].indexOf(value) !== -1;
            }
        },
        closable: {
            type: Boolean,
            default: true
        },
        closeText: {
            type: String, //可自定义图标那里的内容
            default: '' 
        },
    },
    computed:{
        // 计算属性，根据外面传过来的值再计算一下，可以直接访问到template里面变量的名字
        typeClass(){ //el-alert--是typeClass的前缀，${ this.type }是个变量，不同的类型输出不同类名，展现不同的颜色，比如success是绿色
            return `el-alert--${ this.type }`; //花括号里面左右要空格
        },
        iconClass() {
            return TYPE_CLASSES_MAP[this.type] || 'el-icon-info'; //用常量的方式
        },
        isBigIcon(){
            return this.description || this.$slot.default ? 'is-big' : '';
        }
        
    },
    data(){
        return{
            visible:true
        }
    },
    methods:{
        close(){
            this.visible = false;
            this.$emit('close');
        }
    }
}
</script>