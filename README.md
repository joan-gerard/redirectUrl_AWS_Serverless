# Redirect URL

DESC HERE

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

### The Endpoints

POST:
```
https://5ad8ww7w5l.execute-api.eu-central-1.amazonaws.com/
```
Endpoint requires url as body and returns an 8 character code 

GET: 
```
https://5ad8ww7w5l.execute-api.eu-central-1.amazonaws.com/[code]
```
Endpoint redirects to the original url set with the first endpoint

### Project structure
```
.
├── serverless                  # Folder holding extra serverless configuration
│   ├── dynamoResources         # DynamoDB table configuration 
│   └── functions               # config pointing to handlers path and http method 
├── src
│   ├── functions               # Lambda configuration and source code folder 
│   │   ├── getUrl
│   │   │   └── index.ts        # lambda reading from dynamodb table
│   │   └── setUrl
│   │       └── index.ts        # lambda adding to dynamodb table
│   │
│   └── libs                    
│       ├── dynamo.ts           # DynamoDB 'write' and 'get' functions
│       └── apiGateway.ts       # API Gateway specific helpers
│
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
├── webpack.config.js           # Webpack configuration
└── tsconfig.paths.json         # Typescript paths
```