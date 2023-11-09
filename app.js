const express = require('express');
const app = express();

app.use(express.json()); // app.use => 모든미들웨어(전역)에 body-parser를 적용하겠다

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/products', function(req, res){
    res.send('고양이용품 사이트입니다');
});



app.get('/:id', (req, res)=>{
    // const q= req.params
    // console.log(q.id)
    const q = req.query
    console.log(q.q)
    console.log(q.name)

    res.send({'userid':q.name})

});



app.listen(3000, function(){
    console.log('listening on 3000')
});
