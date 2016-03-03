var system = require('system');

if(system.args.length === 1){
    console.log('Try to pass some args when invoking thie script!');
}else{
    system.args.forEach(function(arg,i){
        console.log(i + ': ' + arg)
    })
}

phantom.exit();