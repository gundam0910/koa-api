import bcrypt from "bcrypt";
import passport from 'koa-passport';
// import { pool } from "./db";
import Router from 'koa-router';
import { FilmController, ActorController } from "../controllers"

const router = new Router();

const { createFilm, findAllFilm, findOneFilm, updateFilm } = FilmController();
const { createActor, findAllActor, findOneActor, updateActor } = ActorController();

export function routes(router: any) {
  router.get("/", (ctx: any) => (ctx.body = "This is homepage"));
  router.get("/film", findAllFilm);
  router.get("/film/:id", findOneFilm);
  router.post("/film", createFilm);
  router.put("/film/:id", updateFilm);
  router.get("/actor", findAllActor);
  router.get("/actor/:id", findOneActor);
  router.post("/actor", createActor);
  router.put("/actor/:id", updateActor);

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