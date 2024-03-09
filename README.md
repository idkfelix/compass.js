<h1 align='center'>Compass.JS</h1>
<p align='center'>API Client for Compass Education written in JavaScript and typed with JSDoc</p>

<div align='center'>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat-square" alt="JavaScript Badge">
<img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff&style=flat-square" alt="npm Badge">
<img src="https://img.shields.io/badge/Singapore%20Airlines-F99F1C?logo=singaporeairlines&logoColor=fff&style=flat-square" alt="Singapore Airlines Badge">
</div>
</br>

## Resources
NPM Package: https://www.npmjs.com/package/@idkfelix/compass.js \
GitHub Repo: https://github.com/idkfelix/compass.js \
Compass Website: https://www.compass.education/

## Installation

Install the latest version from npm locally and save it in your project's `package.json` file:
```bash
$ npm install --save @idkfelix/compass.js
```

## Example Usage

Initialise a new Compass client and console log the returned user info:

> index.js
```javascript
import CompassClient from '@idkfelix/compass.js';
import 'dotenv/config';

(async()=>{
  let cookie = process.env.COOKIE
  if(!token) throw new Error('Error: No cookie')
  const client = await CompassClient.init('example.compass.education',cookie);
  console.log(client.userInfo);
})();
```
> .env
```bash
COOKIE='ASP.NET_SessionId=...'
```

## Services and Locations

#### Accounts.svc
- /GetAccount
#### Activity.svc
- /GetLessonsByActivityId
- /GetLessonsByActivityIdQuick
- /GetLessonsByInstanceId
- /GetLessonsByInstanceIdQuick
#### Calendar.svc
- /GetCalendarEventsByUser
#### LearningTasks.svc
- /GetAllLearningTasksByUserId
- /GetAllLearningTasksByActivityId
#### TaskService.svc
- /GetTaskItems
- /GetAllTaskItems
- /SaveTaskItem
- /DeleteTaskItem
- /UpdateTaskItem
#### Users.svc
- /GetAllStaff