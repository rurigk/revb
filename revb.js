var buffertools = require('buffertools');
var fs = require('fs');
var path = require('path');
var noflags = [];
for(i = 2; i < process.argv.length; i++) {
    if(process.argv[i].substr(0,1) != '-'){
        noflags[noflags.length] = process.argv[i];
    }
}
function findFlag(flag){
    for(i = 2; i < process.argv.length; i++) {
        if(process.argv[i] == flag){
            return true;
        }
    }
    return false;
}
if(typeof noflags[0] != 'undefined'){
    try{
        fs.statSync(noflags[0]);
    }catch(e){
        console.log('File no exist or wrong permissions');
        return false;
    }
    if(typeof noflags[1] != 'undefined'){
        fs.readFile(noflags[0],function(err,buff){
            fs.writeFileSync(noflags[1],buffertools.reverse(buff));
        })
    }else{
        if(findFlag('-r')){
            fs.readFile(noflags[0],function(err,buff){
                fs.writeFileSync(noflags[0],buffertools.reverse(buff));
            })
        }else{
            fs.readFile(noflags[0],function(err,buff){
                process.stdout.write(buffertools.reverse(buff));
            })
        }
    }
}else{
    var stdin = process.openStdin();
    var data = new Buffer('');
    stdin.on('data', (chunk) => {
        if (chunk == null) {
            process.stderr.write('None\n');
        }else{
            data = buffertools.concat(data,chunk);
        }
    });

    stdin.on('end', () => {
        process.stdout.write(buffertools.reverse(data));
    });
}