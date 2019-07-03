let c = new Emoji_debug({log:1});

c.g('this is group one')
    c.log('normal log');
    c.error('this is error message');
    c.table({index1:"value1"});
c.gEnd();