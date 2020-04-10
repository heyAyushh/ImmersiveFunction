![blog here](imfn.svg)
***
# ImmersiveFunction - Azure function helper for Immersive Reader.

This is a helper program to show, how we can integrate immersive reader to any HTML web page using Azure functions and any static website Hosting.

Authenticate your immersive Reader with azure function and don't leave your secrets in client.

#### Read my [blog here](https://kutt.it/immersiveFunction)

***
## Quick Deploy to Azure  
  
[![Deploy to Azure](http://azuredeploy.net/deploybutton.svg)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FheyAyushh%2FImmersiveFunction%2Fmaster%2Fazuredeploy.json)  

- You should go and read my blog first.
- Set up your [credentials](https://docs.microsoft.com/en-us/azure/cognitive-services/immersive-reader/how-to-create-immersive-reader) in `.env` file.

## Running Locally  
  
- Install Azure funtion core tools and execute `func host start`

- Run npm install in `./immersiveFunctions`
- Setup [credentials](https://docs.microsoft.com/en-us/azure/cognitive-services/immersive-reader/how-to-create-immersive-reader) in `.env` file
- Go to `localhost:7071` to see your Site with Reader Enabled  

***
#### Documentation - 

Read more about [Immersive reader here](https://azure.microsoft.com/en-us/services/cognitive-services/immersive-reader/).

 - NodeJS  - [Starter here](https://docs.microsoft.com/en-us/azure/cognitive-services/immersive-reader/quickstart-nodejs) 

 - JavaScipt/TypeScript - [SDK Here](https://docs.microsoft.com/en-us/azure/cognitive-services/immersive-reader/reference)