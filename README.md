## Who am i?
I am a plugin that integrate twitter emoji library with VueJS 2.x. 
I made it because i like to. 

## How to install ?

```
npm i vutimoji
```

## Usage

```
import vuetwemoji from 'vue-twemoji'

Vue.use(vuetwemoji, [options])
```

### Available options


```
<template>
  <div v-html="outHtml"></div>
  <input type="text" v-model="text" @change="parseEmoji(text)" />
</template>
<script>
...
data(){
  return {
    text: 'I \u2764\uFE0F emoji!',
    outHtml: null
  }
},
methods:{
  parseEmoji: function (string) {
    let self = this
    this.outHtml = this.$twemoji.parse(string, function (emoji, options) {
      return options.base + emoji + options.extension
    })
  }
}
...
</script>
```

Example: <update later>
