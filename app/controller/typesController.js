const dataMapper = require('../dataMapper');

const typesController = {
  typesList: async (request, response, next) => {
    try {
      const types = await dataMapper.findAllTypes();
      console.log(types)
      response.render('types', {types});
    } 
    catch (error) {
      console.trace(error);
      next();
    } 
  }
}

module.exports = typesController;