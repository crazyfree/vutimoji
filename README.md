## Who am i?
I am a plugin that integrate twitter emoji library with VueJS 2.x. 
I made it because i can't found an up to date version on internet. 

## How to install ?

```
npm i vutimoji
```

## Usage

```
import vutimoji from 'vutimoji'

Vue.use(vutimoji)
```

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
    this.outHtml = this.$vutimoji.parse(string)
  }
}
...
</script>
```

### Available options
No options is available now, request if you want

### Demo
Please clone project and `npm run dev` and then run `index.html` in test folder


### License
MIT


