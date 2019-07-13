class Emoji_debug {
    constructor( obj = {} ) {
        Array.prototype.randVal = function(){
            return this[Math.floor(Math.random()*this.length)];
        };
        this.emoji = {};
        this.emoji.error = obj.error ? obj.error:['😑','😱','😠'];
        this.emoji.worning = obj.worning ? obj.worning:"😥";
        this.emoji.log = obj.log ? obj.log:["😃","🙂"];
        this.emoji.fontsize = obj.fontsize ? obj.fontsize: 50;
        this.errCount = 1;
        // todo: switch to safely turn off logs;
        this.on = true;
        let that = this;
        let handler = {
            get: function(target, name) {
                if (that.on) {
                    return target[name];
                } else {
                    return that.empty;
                }
            }
        }
        this.p = new Proxy(this, handler);
    }
    empty() {
        return ''
    }
    log(){
        console.log("%c"+this.emoji.log.randVal(),`font-size:${this.emoji.fontsize}px`, ...arguments)
    }
    error(){
        if (this.errCount >= 20) {
            console.error("%c"+this.emoji.error[2],`font-size:${this.emoji.fontsize}px`, ...arguments)
        } else if (this.errCount >= 10) {
            console.error("%c"+this.emoji.error[1],`font-size:${this.emoji.fontsize}px`, ...arguments)
        } else{
            console.error("%c"+this.emoji.error[0],`font-size:${this.emoji.fontsize}px`, ...arguments)
        }
        this.errCount++
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
    gc(name='Group') {
        console.groupCollapsed(name);
    }
    gEnd(){
        console.groupEnd()
    }
}

let emo = new Emoji_debug().p;