// QUICKFIX unknown when reference js file
declare var Parse: any;

//
Parse.Cloud.define('hello1', (req: any) => {
  req.log.info(req);
  return 'Hi';
});
