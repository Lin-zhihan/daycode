const fs=require('fs')
const rs=fs.createReadStream('./assets/music.mp3')
const ws=fs.createWriteStream('./assets/other.mp3')
rs.pipe(ws)

ws.on('close', function () {
    
    console.log('可写流关闭了')
  })