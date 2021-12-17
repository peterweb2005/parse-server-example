Parse.Cloud.define('helloTypes', (req: any) => {
  req.log.info(req);
  return 'Hi Types';
});
