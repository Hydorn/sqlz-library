import cors from 'cors';
import express , {Application} from 'express';
import authorRouter from '../routes/author';
import Author from './author';
import Book from './book';
import db from './Conection';

class Server {
    app:Application;
    port:string;
    apiPaths = {
        Author: 'api/authors'
    }
    constructor(){
        this.app = express();
        this.port = process.env.PORT || "3001";

        
        this.dbConnection();
        this.routes();   //Define routes 
        this.middleware();
        this.dbSync();
    }
    async dbSync(){
        try {
            await Author.sync({force:true});
            await Book.sync({force:true});
        } catch (error) {
            console.log(error);
        }
    }
    async dbConnection(){
        try {
            await db.authenticate();
            console.log("Connected to DB");
            
        } catch (err:any) {
            console.error(err);
            
        }
    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.apiPaths.Author, authorRouter)
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log("Server running on port " + this.port);
        })
    }
}
export default Server;