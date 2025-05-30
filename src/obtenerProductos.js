const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.obtenerProductos = async () => {
  try {
    const result = await dynamo.scan({ TableName: 'productosBoutique' }).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(result.Items)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
