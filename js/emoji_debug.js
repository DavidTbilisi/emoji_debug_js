class Emoji_debug {

    constructor(obj = {}) {
        this.emoji = {};
        this.emoji.error = obj.error ? obj.error:'😱';
        this.emoji.worning = obj.worning ? obj.worning:"😥";
        this.emoji.log = obj.log ? obj.log:'😃';
        this.emoji.fontsize = 50;
    }
    log(){
        console.log("%c"+this.emoji.log,`font-size:${this.emoji.fontsize}px`, ...arguments)

    }
    error(){
        console.error("%c"+this.emoji.error,`font-size:${this.emoji.fontsize}px`, ...arguments)
    }
    warn(){
        console.warn("%c"+this.emoji.worning,`font-size:${this.emoji.fontsize}px`, ...arguments)
    }

    table() {
        console.log("%c"+this.emoji.hm,`font-size:${this.emoji.fontsize}px`)
        console.table(...arguments)
    }
    g(name='Group') {
        console.group(name);
    }
    gEnd(){
        console.groupEnd()
    }

}