const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.obtenerProducto = async (event) => {
  try {
    const { id } = event.pathParameters;

    const result = await dynamo.get({
      TableName: 'productosBoutique',
      Key: { id }
    }).promise();

    if (!result.Item) {
      return { statusCode: 404, body: JSON.stringify({ message: "Producto no encontrado" }) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result.Item)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
