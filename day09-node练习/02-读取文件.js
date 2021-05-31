  const fs=require('fs')

// //异步读取
// fs.readFile('./assets/防盗链.txt',(err,data)=>{
//     console.log(err,data.toString())
// })



const rs=fs.createReadStream('./assets/music.mp3')
rs.on('data',(data)=>{   // data就是读取到的数据,默认是一个buffer对象
    console.log(data)
})
rs.on('open',function(){
    console.log('读取流开启了')
})
rs.on('close',function(){
    console.log('读取流关闭了')
})