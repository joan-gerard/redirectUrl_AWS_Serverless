# URL Shortener

DESC HERE

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

### The Endpoint

```
https://
```

Example:
```
https://
```

### Project structure
```
.
├── serverless                  # Folder holding extra serverless configuration
│   ├── dynamoResources         # DynamoDB table configuration 
│   └── functions               # config pointing to handler path and http path 
├── src
│   ├── functions               # Lambda configuration and source code folder 
│   │   └── urlShortner
│   │       └── index.ts        # `urlShortner` lambda source code
│   │
│   └── libs                    # Lambda shared code
│       ├── dynamo.ts           # DynamoDB write function
│       └── apiGateway.ts       # API Gateway specific helpers
│
├── package.json
├── serverless.ts               # Serverless service file
├── tsconfig.json               # Typescript compiler configuration
├── webpack.config.js           # Webpack configuration
└── tsconfig.paths.json         # Typescript paths
```