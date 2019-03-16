<template>
    <div class="pannel">
        <div v-html="outHtml"></div>
        <input type="text" v-model="text" @change="parseEmoji(text)" />
    </div>
</template>
<script>
    export default {
        data() {
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
    }
</script>