var mongo = require('mongodb')

var mongoclient = mongo.MongoClient;

var url = "mongodb://localhost:27017/";

mongoclient.connect(url,(err,conn)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("connected")
        var db = conn.db("My_data");
        db.collection('items').find({item:"pen"}).toArray(function(err,result){
            if(err) throw err;
            console.log(result)
            conn.close();

        })
        
    }
})

