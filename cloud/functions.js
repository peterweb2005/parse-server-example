Parse.Cloud.define('hello', req => {
  req.log.info(req);
  return 'Hi';
});

Parse.Cloud.define('asyncFunction', async req => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  req.log.info(req);
  return 'Hi async';
});

Parse.Cloud.beforeSave('Test', () => {
  throw new Parse.Error(9001, 'Saving test objects is not available.');
});

Parse.Cloud.define('sumNumbers', async request => {
  return request.params.number1 + request.params.number2;
});

Parse.Cloud.define('createToDo', async request => {
  console.log('createToDo()');
  try {
    const title = request.params.title;
    const done = request.params.done;

    const Todo = Parse.Object.extend('ToDo');
    const todo = new Todo();
    todo.set('title', title);
    todo.set('done', done);
    console.log('todo: ', todo);

    const res = await todo.save();
    console.log('res: ', res);

    return res;
  } catch (e) {
    if (e instanceof Parse.Error) {
      console.log('e- ' + e.code + ' ' + e.message);
    } else {
      console.error('e: ', e);
    }
    throw e;
  }
});

Parse.Cloud.define('getListToDo', async request => {
  console.log('getListToDo()');
  try {
    const query = new Parse.Query('ToDo');
    query.descending('done');
    console.log('query: ', query);

    const res = await query.find();
    console.log('res: ', res);

    return res;
  } catch (e) {
    if (e instanceof Parse.Error) {
      console.log('e- ' + e.code + ' ' + e.message);
    } else {
      console.error('e: ', e);
    }
    throw e;
  }
});
