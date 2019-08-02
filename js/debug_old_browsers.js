var Debug =
    (function() {
        function Debug(obj) {
            if (obj === void 0) {
                obj = {};
            }


            this.on = true;
            var that = this;
            var handler = {
                get: function get(target, name) {
                    if (that.on) {
                        return target[name];
                    } else {
                        return that.empty;
                    }
                }
            };
            this.p = new Proxy(this, handler);


            this.emoji = {};
            this.emoji.log = obj.log ? obj.log:["😃","🙂"];
            this.emoji.worning = obj.worning ? obj.worning:"😥";
            this.emoji.error = obj.error ? obj.error:['😑','😱','😠'];
            this.emoji.fontSize = obj.fontSize ? obj.fontSize : 50;
        }

        var _proto = Debug.prototype;


        let randVal = function(arr){
            return arr[Math.floor(Math.random()*arr.length)];
        };

        _proto.log = function log() { console.log("%c"+randVal(this.emoji.log),`font-size:${this.emoji.fontSize}px`, ...arguments)};


        _proto.empty = function empty() {
            return "";
        };



        return Debug;
    })();

var old_browsers = new Debug();