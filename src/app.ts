import express  from 'express'
import morgan from 'morgan'
import exphbs from "express-handlebars";
import path from 'path'
//Routes
import indexRoutes from './routes'
import taskRoutes from "./routes/tasks";


class Application {

    app: express.Application;


    constructor(){

        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    // Handle and set default params
    settings(){
        this.app.set('port', 4000);

        this.app.set('views', path.join(__dirname, 'views'));

        this.app.engine('.hbs', exphbs({
            layoutsDir: path.join(this.app.get('views'), 'layouts'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs'
        }));

        this.app.set('view engine', '.hbs')
    }


    //Handle middlewares app
    middlewares(){
        this.app.use(morgan("dev"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false } ));

    }


    //Handle Routes
    routes(){

        this.app.use(indexRoutes)
        this.app.use('/tasks',taskRoutes)

        this.app.use(express.static(path.join(__dirname, 'public') ))

    }


    //Run apps
    start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log(`Server running on port`, this.app.get('port'))
        })
    }
}



export default Application