import CompassClient from './src/index.js'

CompassClient('mullauna-vic.compass.education','ASP.NET_SessionId=4f085678-db19-49ea-8a4e-39092336d83a')
.then(client => console.log(client.userInfo))