const app = express();

app.use(express.static(__dirname+'/dist/hotel'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/hotel/index.html'));
});

app.listen(process.env.PORT || 8080);