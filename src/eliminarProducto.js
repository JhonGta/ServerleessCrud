const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.eliminarProducto = async (event) => {
  try {
    const { id } = event.pathParameters;

    await dynamo.delete({
      TableName: 'productosBoutique',
      Key: { id }
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Producto eliminado correctamente" })
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
