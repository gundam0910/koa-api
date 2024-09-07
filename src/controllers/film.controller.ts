import db from "../models";
import Film ,{ FilmMap } from "../models/film"

export const FilmController = () => {
  
    const create = async (ctx) => {
        try {
            ctx.body = await ctx.db.film.create({
                title: ctx.request.body.title,
                description: ctx.request.body.description,
                release_year: ctx.request.body.release_year
            })
        } catch (error) {
            ctx.throw(error);
            
        }
    };
    const findAll = async (ctx) => {
        FilmMap(db);
        try {
            ctx.body = await Film.findAll();
        } catch (error) {
            ctx.throw(error);
            
        }
    };
    return {
      create,
      findAll,
    };
  };