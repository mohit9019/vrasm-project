var mongo = require('mongodb').MongoClient;
var url = 'mongodb+srv://vrasm:mongoVrasm@cluster0.jkjxk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const {v4:uuidv4} = require('uuid');
mongo.connect(url,(err,db)=>{
    if(err) throw err;
    console.log('Database connected.');
    let Obj = db.db('vrasmTemplate');
    {
        // Obj.createCollection('users',(err,res)=>{
        //     if(err) throw err;
        //     console.log('collection created.');
        //     console.log(res);

        // });
        let data = {
            name:'manav',
            status:'single',
            gender:'male',
            age:'20',
            phoneno:'1234123423'
        }
        let arr = [data,data,data,data];
        arr.forEach(data=>{data['_id']=uuidv4()});
        console.log(arr);
            
        
        // Obj.collection('users').insertMany(arr,(err,res)=>{
        //     if(err) throw err;
        //     console.log('data inserted.');
        //     console.log(res);
        // });
        // Obj.collection('users').deleteMany({name:'manav'},(err,res)=>{
        //     if(err) throw err;
        //     console.log(res);
        // });
    }
    // db.close();
})
console.log('project started.');