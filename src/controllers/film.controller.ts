import db from "../../models";

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
        console.log('db', db)
        try {
            ctx.body = await db.film.findAll();
        } catch (error) {
            ctx.throw(error);
            
        }
    };
    return {
      create,
      findAll,
    };
  };