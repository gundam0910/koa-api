const db = require('../../sequelize/models');
const Film = db.film;

export const FilmController = () => {
  
    const createFilm = async (ctx: any) => {
        try {
            ctx.body = await Film.create({
                title: ctx.request.body.title,
                description: ctx.request.body.description,
                release_year: ctx.request.body.release_year
            })
        } catch (error) {
            ctx.throw(error);
            
        }
    };
    const findAllFilm = async (ctx: any) => {

        try {
            ctx.body = await Film.findAll();
        } catch (error) {
            ctx.throw(error);
            
        }
    };
    
    const findOneFilm = async (ctx: any) => {

        try {
            ctx.body = await Film.findOne({
                where: { film_id : ctx.params.id}
            });
        } catch (error) {
            ctx.throw(error);
            
        }
    };

    const updateFilm = async (ctx: any) => {

        try {
            ctx.body = await Film.update({
                title: ctx.request.body.title,
                description: ctx.request.body.description,
                release_year: ctx.request.body.release_year
            },
                {
                where: { film_id : ctx.params.id}
            });
        } catch (error) {
            ctx.throw(error);
            
        }
    };
    return {
      createFilm,
      findAllFilm,
      findOneFilm,
      updateFilm
    };
  };