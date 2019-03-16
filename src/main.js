import twemoji from 'twemoji';

export default {
    install (Vue, options) {
        if(options){
            twemoji.base = options.baseUrl || twemoji.base;
            twemoji.ext = options.extension || twemoji.ext;
            twemoji.className = options.className || twemoji.className;
            twemoji.size = options.size || twemoji.size;
        }

        Object.defineProperty(
            Vue.prototype, '$vutimoji', { value: twemoji }
        );
    }
}
