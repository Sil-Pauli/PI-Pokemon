const axios = require('axios');
const { Type } = require('../db.js');
const { API_TYPE} = process.env;

// async function getAllTypeApi(req, res, next) {
//    try{
//     const allTypes = await axios.get(API_TYPE);
//     const types = allTypes.data.map(e => e.name);
//     const typesEach= types.forEach( type => {
//         Type.findOrCreate({
//             where: { 
//                 name: type 
//             }
//         });
//     });
//     return res.json(await Type.findAll());
// } catch (error) {
// next(error);
// }
// };

const getApiType = async () => {
    const typeApi = await axios.get(API_TYPE);
    const types = typeApi.data.results;
    types.forEach((type) => {
      Type.findOrCreate({
        where: { name: type.name },
      });
    });
    const allTypes = await Type.findAll();
    return allTypes;
  };
module.exports = {
    getApiType
  }