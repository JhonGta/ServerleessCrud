const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.actualizarProducto = async (event) => {
  try {
    const { id } = event.pathParameters;
    const { nombre, categoria, talla, precio, color } = JSON.parse(event.body);

    await dynamo.update({
      TableName: 'productosBoutique',
      Key: { id },
      UpdateExpression: 'set nombre = :n, categoria = :c, talla = :t, precio = :p, color = :co',
      ExpressionAttributeValues: {
        ':n': nombre,
        ':c': categoria,
        ':t': talla,
        ':p': precio,
        ':co': color
      }
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Producto actualizado correctamente" })
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
