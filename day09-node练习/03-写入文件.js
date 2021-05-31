const fs=require('fs')

//1.简单写入
//  fs.writeFile('./assets/test1.txt','傻逼小兵哥',(err) => {

//     console.log(err,data)})
 

// fs.writeFile('./assets/test.txt','吼吼吼', {
//         flag: 'a',
//       },
//       (err) => {
//         console.log(err,data)
//       })

//2.流式写入
const rs=fs.createReadStream('./assets/music.mp3')
const ws=fs.createWriteStream('./assets/other.mp3')

rs.on('data',(data)=>{
    ws.write(data)
   
}) 
rs.on('open',function(){
   
    console.log('读取流开启了')
})


rs.on('close',function(){
    console.log('读取流关闭了')
    ws.end()

   
})
ws.on('open', function () {
    console.log('写入流开启了')
  })

ws.on('close', function () {
   
    console.log('写入流关闭了')
  })

