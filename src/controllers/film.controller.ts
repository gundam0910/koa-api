const db = require('../../sequelize/models');
const Film = db.film;

export const FilmController = () => {
  
    const create = async (ctx: any) => {
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
    const findAll = async (ctx: any) => {

        try {
            ctx.body = await Film.findAll();
        } catch (error) {
            ctx.throw(error);
            
        }
    };
    
    const findOne = async (ctx: any) => {

        try {
            ctx.body = await Film.findOne({
                where: { film_id : ctx.params.id}
            });
        } catch (error) {
            ctx.throw(error);
            
        }
    };
    return {
      create,
      findAll,
      findOne,
    };
  };