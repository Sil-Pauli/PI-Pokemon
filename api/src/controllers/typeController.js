const axios = require('axios');
const { Type } = require('../db.js');
const { API_TYPE} = process.env;


const getApiType = async () => {
  try{
    const typeApi = await axios.get(API_TYPE);
    const types = await typeApi.data.results.map((data)=>
    axios.get(data.url),
    );
    const typeResponse = await axios.all(types).then((r)=>
    r.map((p)=>{
      const typeAll= {
        id: p.data.id,
        name: p.data.name,
      };
      Type.findOrCreate({
        where: { name: p.data.name },
      });
      return typeAll
    })
    );
    return typeResponse;
  }catch(error){
    res.status(400)({error: error.message})
  }
}

module.exports = {
    getApiType
  }