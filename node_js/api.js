/* 서버 닫는 명령어
Taskkill /IM node.exe /F
*/
const express = require('express');
const app = express();

/*API 키를 사용시 */
const uuidAPIKey = require('uuid-apikey');//API 키를 발급 받을 수 있는 명령어
//console.log(uuidAPIKey.create());

const key = {
    apiKey: '24GD2F1-C8T4DEK-PTX53D4-PVC0F7J',
    uuid: '1120d13c-6234-46ba-b6ba-51b4b6d8079e'
};
/*  */

const server = app.listen(3001, ()=>{
    console.log('3001 Host started');
});


app.get('/api/users/:apiKey/:type', async(req, res)=>{
    
    // 콜론이 붙으면 어떤 값이든 연결 가능
    //res.send('connect.');
    let {apikey, type} = req.params;

    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)){
        res.send('api key is not vaild');
    }

    else{
        if(type=='seoul'){
            let data = [
                {name : "홍길동", city: "Seoul"},
                {name : "김철수철수", city: "Seoul"}
            ];
            res.send(data);
        }
        else if(type=='jeju'){
            let data = [
                {name : "홍길동", city: "jeju"},
                {name : "김철수철수", city: "Jeju"}
            ];
            res.send(data);
        }
        else{
            res.send('Type is not correct.');
        }
        console.log(type);
        //res.send('ok');
    }

    
});