import koa from 'koa';
import session from 'koa-session';
import passport from 'koa-passport';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';
import { routes } from './routes';
import { authMiddleware } from './authMiddleware';
import dotenv from "dotenv"

// const { sequelize } = require('./sequelize/models');

// const connectDb = async () => {
//     console.log('Checking database connection...');

//     try {
//         await sequelize.authenticate();
//         console.log('Database connection established.');
//     } catch(e) {
//         console.log('Database connection failed', e);
//         process.exit(1);
//     }
// };

async function main() {
    dotenv.config();
    const app = new koa();
    const router = new Router();
    const PORT = 4000;

    // await connectDb();

    app.use(session({}, app));

    app.use(bodyParser());

    authMiddleware();
    app.use(passport.initialize());
    app.use(passport.session());

    routes(router);

    app.use(router.routes()).use(router.allowedMethods());

    app.listen(PORT);
}

main().catch(err => console.log(err));