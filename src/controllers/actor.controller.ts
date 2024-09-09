const db = require('../../sequelize/models');
const Actor = db.actor;

export const ActorController = () => {
  
    const createActor = async (ctx: any) => {
        try {
            ctx.body = await Actor.create({
                title: ctx.request.body.title,
                description: ctx.request.body.description,
                release_year: ctx.request.body.release_year
            })
        } catch (error) {
            ctx.throw(error);
            
        }
    };
    const findAllActor = async (ctx: any) => {

        try {
            ctx.body = await Actor.findAll();
        } catch (error) {
            ctx.throw(error);
            
        }
    };
    
    const findOneActor = async (ctx: any) => {

        try {
            ctx.body = await Actor.findOne({
                where: { actor_id : ctx.params.id}
            });
        } catch (error) {
            ctx.throw(error);
            
        }
    };

    const updateActor = async (ctx: any) => {

        try {
            ctx.body = await Actor.update({
                title: ctx.request.body.title,
                description: ctx.request.body.description,
                release_year: ctx.request.body.release_year
            },
                {
                where: { actor_id : ctx.params.id}
            });
        } catch (error) {
            ctx.throw(error);
            
        }
    };
    return {
      createActor,
      findAllActor,
      findOneActor,
      updateActor
    };
  };