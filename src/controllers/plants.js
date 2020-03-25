const {Plant} = include('models');

class PlantsController {
    static async fetch(req, res, next) {
        try {
            const plants = await Plant.find(req.query);

            res.locals = {plants};
            return next();
        } catch(err) {
            next(err);
        }
    }
}

module.exports = PlantsController;
