import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import Grid from 'gridfs-stream'
import GridFsStorage  from 'multer-gridfs-storage';
import pusher from 'pusher';


const app=express();
const port=process.env.PORT||5000

app.use(express.json());
app.use(cors());

//monodb connection

const MONGO_URL='mongodb+srv://kishore:kishore@cluster0.lnn2t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const conn=mongoose.createConnection(MONGO_URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true  
})


mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useFindAndModify:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('mongodb connected');
}).catch((error)=>{
    console.log(error);
})

conn.once('open', function () {
    console.log('mongodb connected');
    var gfs = Grid(conn.db,mongoose.mongo);
    gfs.collection('images')
   })

   var storage = new GridFsStorage({
    url: MONGO_URL,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
          const filename = `image-${Date.now()}${ path.extname(file.originalname)}`;
          const fileInfo = {
            filename: filename,
            bucketName: 'images'
          };
          resolve(fileInfo);
        });
    
    }
  });

const upload =multer({storage})


app.get('/hello',(req,res)=>{
    res.status(200).send("hello");
})

app.post('/upload/image',upload.single('file'),(req,res)=>{
    res.status(201).send(req.file);
})

app.listen(port,(()=>console.log(`app is listing to the port ${port}`)))