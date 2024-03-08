import CompassClient from './src/index.js';
import 'dotenv/config';

(async()=>{
  let token = process.env.TOKEN
  if(!token) throw new Error('Error: No Cookies')
  const client = await CompassClient.init('mullauna-vic.compass.education',token);
  console.log(client.userInfo);
})();