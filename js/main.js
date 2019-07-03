let c = new Emoji_debug();
c.on = false;
c.gc('random emoji console.log')
    for (let i = 1; i<= 10; i++) {
        c.log('normal log'+i);
    }
c.gEnd();
c.gc('error count emoji ')
    for (let i = 1; i<= 20; i++) {
        c.error('this is error message '+i);
    }
c.gEnd();

    c.table({index1:"value1"});