# drm-bootstrap
Bootstrap OPS environment

- DNS Zone (dermosil.io)
- CNAME (arm.dermosil.io)
- KeyVault
- PKCS12 format certificate
- Storage (drmopsstorage)
- App Service Plan (drm-ops-fnasp)
- Functions App (drm-ops-armfn)
  - Custom hostname
  - Certificate

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fmios-fi%2Fdrm-bootstrap%2Fmaster%2Fazuredeploy.json)