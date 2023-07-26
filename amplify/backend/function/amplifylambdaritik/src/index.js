/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
  
    return {
      statusCode: 200,
      headers: {
        // Allow requests from http://localhost:3000
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Headers": "Content-Type,Authorization,token", // Add "token" header to the allowed headers
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        "Access-Control-Allow-Credentials": true, // Allow credentials (e.g., cookies, authorization headers)
      },
      body: JSON.stringify('Hello from Lambda!'),
    };
  };
  