import {greet, root, getStudents} from './controller.js';

function router(app) {
  app.get('/', root)
  app.get('/greet', greet)
  app.get('/students', getStudents)
}

export default router;