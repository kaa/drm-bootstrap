var request = require("request");
var emptyTemplate = '{ "$schema": "http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#", "contentVersion": "1.0.0.0", "resources": [] }';

module.exports = function(context,req) {
  var token = req.query.token || process.env["GITHUB_TOKEN"],
      path = req.query.path
      enabled = req.query.enabled !== "0";

  context.res = {
    isRaw: true,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
  };

  if(!enabled) {
    context.res.body = emptyTemplate;
    context.done();
    return;
  }
  var url = "https://raw.githubusercontent.com/"+path;
  context.log("proxying "+url);
  if(token) {
    url = url.replace("://","://"+token+"@");
  }
  request(url, function(err, response, body) {
    context.res.status = response.statusCode; 
    context.res.body = body;
    context.done();
  });
}