import bcrypt from "bcrypt";
import passport from 'koa-passport';
// import { pool } from "./db";
import Router from 'koa-router';
import { FilmController } from "../controllers"

const router = new Router();

const { create, findAll, findOne } = FilmController();

export function routes(router: any) {
  router.get("/", (ctx: any) => (ctx.body = "This is homepage"));
  router.get("/film", findAll);
  router.get("/film/:id", findOne);
  router.post("/register", async (ctx: any) => {

    ctx.body = "registered successfully";
  });

  router.post("/login", passport.authenticate("local", {
    successRedirect: '/app',
    failureRedirect: '/'
  }));

  router.get("/app", (ctx: any) => {
    const user = ctx.session.passport.user;
    console.log({ user });
    ctx.body = "App"
  });

    router.get('/logout', (ctx: any) => {
        ctx.logout();
    })
}