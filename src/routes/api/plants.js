const {PlantsController} = include('controllers');

module.exports = router => {
    router.get('/', PlantsController.fetch);
    return router;
};
