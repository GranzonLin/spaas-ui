## RadioImgButton 带图片的radio

基本用法

:::demo
```html
<template>
   <div style="display: flex">
       <el-radio-img-button v-model="value" imgUrl="https://deepexi.oss-cn-shenzhen.aliyuncs.com/deepexi-official-3.0/news/img_index_conceptmap.png?x-oss-process=image/format,webp" label="1" text="radio-img-button" disabled width="506px" description="真是一段很长很长很真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字长的文字"></el-radio-img-button>
       <el-radio-img-button v-model="value" imgUrl="static/2.0f40ea1.png" label="2" text="radio-img-button" vertical description="真是一段很长很长很真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字长的文字"></el-radio-img-button>
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
