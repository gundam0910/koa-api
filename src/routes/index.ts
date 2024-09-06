import bcrypt from "bcrypt";
import passport from 'koa-passport';
// import { pool } from "./db";
import Router from 'koa-router';
import { FilmController } from "../controllers"

const router = new Router();

const { create, findAll } = FilmController();

export function routes(router) {
  router.get("/", (ctx) => (ctx.body = "This is homepage"));
  router.get("/film", findAll);
  router.post("/register", async (ctx) => {

    ctx.body = "registered successfully";
  });

  router.post("/login", passport.authenticate("local", {
    successRedirect: '/app',
    failureRedirect: '/'
  }));

  router.get("/app", (ctx) => {
    const user = ctx.session.passport.user;
    console.log({ user });
    ctx.body = "App"
  });

    router.get('/logout', ctx => {
        ctx.logout();
    })
}