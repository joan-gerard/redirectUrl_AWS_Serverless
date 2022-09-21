# Redirect URL

For this project I practiced interacting with dynamodb from an AWS lambda. 
A dynamo resource was added to the sls infrastructure so that it gets deployed with the lambdas.
A dynamo library was created to make writing and getting data from dynamo a bit easier.
I have passed the name of the table into the lambda as an env variable.

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

### The Endpoints

POST:
Endpoint requires url as body and returns an 8 character code 
```
https://5ad8ww7w5l.execute-api.eu-central-1.amazonaws.com/
```

GET: 
Endpoint redirects to the original url set with the first endpoint
```
https://5ad8ww7w5l.execute-api.eu-central-1.amazonaws.com/[code]
```

This example should redirect you to my online portfolio
```
[https://5ad8ww7w5l.execute-api.eu-central-1.amazonaws.com/433ac958]
```


### Project structure
```
.
├── serverless                  # Folder holding extra serverless configuration
│   ├── dynamoResources         # DynamoDB table configuration 
│   └── functions               # config pointing to handlers path and http method 
├── src
│   ├── functions               # Folder containing lambda fn 
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