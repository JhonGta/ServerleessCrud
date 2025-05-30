const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.agregarProducto = async (event) => {
  try {
    const { nombre, categoria, talla, precio, color } = JSON.parse(event.body);

    const nuevoProducto = {
      id: uuidv4(),
      nombre,
      categoria,
      talla,
      precio,
      color,
      fechaIngreso: new Date().toISOString()
    };

    await dynamo.put({
      TableName: 'productosBoutique',
      Item: nuevoProducto
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Producto agregado correctamente", data: nuevoProducto })
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
