## RadioImgButton 带有图片的radio

### 基本用法

除了能够使用普通radio的所有属性之外，我们还给单选按钮添加了具有图片的样式，使用该组件需要设置组件的图片地址imgUrl和宽度width，按钮默认宽度为160px

:::demo
```html
<template>
   <div style="display: flex">
       <el-radio-img-button v-model="value" imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg" label="2" text="radio-img-button" vertical description="真是一段很长很长很真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字长的文字"></el-radio-img-button>
   </div>
</template>
<script>
export default {
    data () {
      return {
        value: '2'
      };
    }
  }
</script>
```
:::

### 横向布局

当设置为横向布局，记住一定要设置width

:::demo 默认只有两种布局，设置为横向布局时只需要去掉vertical属性或者设置其值为false即可
```html
<template>
   <div style="display: flex">
       <el-radio-img-button v-model="value" imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg" label="1" width="586px" text="radio-img-button" description="此处风景优美，令人身心向往；但是却带一股寒冷之气，恰恰还是那些市井之地，才充满生活气息；不知是知了还是蛐蛐的叫声，使得夜晚更加的宁静安逸"></el-radio-img-button>
   </div>
</template>
<script>
export default {
    data () {
      return {
        value: '1'
      };
    }
  }
</script>
```
:::

### 按钮文字与描述

与radio不同的是，如果我们需要给按钮添加文字和描述，则用text和description

:::demo 值得注意的是，description只有在横向布局时才有效
```html
<template>
   <div style="display: flex">
       <el-radio-img-button v-model="value" imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg" label="1" width="310px" text="按钮文字" description="按钮描述"></el-radio-img-button>
   </div>
</template>
<script>
export default {
    data () {
      return {
        value: ''
      };
    }
  }
</script>
```
:::

### Radio-img-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| disabled  | 是否禁用    | boolean   | — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |
| width | 按钮宽度 | string | — | 160px |
| imgUrl | 图片地址 | string | — |  — |
| text | 按钮文字 | string | — |  — |
| description | 按钮描述 | string | — |  — |

