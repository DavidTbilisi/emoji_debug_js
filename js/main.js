emo.on = false;
emo.gc('random emoji console.log')
    for (let i = 1; i<= 10; i++) {
        emo.log('normal log'+i);
    }
emo.gEnd();
emo.gc('error count emoji ')
    for (let i = 1; i<= 20; i++) {
        emo.error('this is error message '+i);
    }
emo.gEnd();

    emo.table({index1:"value1"});