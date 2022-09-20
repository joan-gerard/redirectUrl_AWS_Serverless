import { APIGatewayProxyEvent } from "aws-lambda";
import { v4 as uuid } from "uuid";

import { formatJSONResponse } from "@libs/apiGateway";

export const handler = async (event: APIGatewayProxyEvent) => {
  try {
    const body = JSON.parse(event.body);
    const tableName = process.env.urlTable
    const baseUrl = process.env.baseUrl

    const originalUrl = body.url;
    const code = uuid().slice(0, 8);
    const shortUrl = `${baseUrl}/${code}`;

    const data = {
      id: code,
      shortUrl,
      originalUrl,
    };

    await dynamo.write(data, tableName);

    return formatJSONResponse({ data: { shortUrl, originalUrl } });
  } catch (error) {
    console.log("error", error);
    return formatJSONResponse({
      statusCode: 502,
      data: {
        message: error.message,
      },
    });
  }
};