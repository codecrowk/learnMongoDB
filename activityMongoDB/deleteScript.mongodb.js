// Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.
db.base_datos_empleados.deleteMany(
  {salario: {$lt: 2000}}
  )

// Eliminar usuarios que tienen una edad menor que 25 años.
db.base_datos_empleados.deleteMany(
  {edad: {$lt: 25}}
  )

// Borrar todos los usuarios que viven en "París".
db.base_datos_empleados.deleteMany(
  {ciudad: {$eq: "Paris"}}
  )

// Eliminar usuarios que tienen un peso superior a 180 libras.
db.base_datos_empleados.deleteMany(
  {peso: {$gte: 180}}
)

// Eliminar usuarios que tienen una altura inferior a 160 centímetros.
db.base_datos_empleados.deleteMany(
  {altura: {$lte: 160}}
)

// Eliminar todos los usuarios que tienen el nombre "Ana" y el apellido "Hernandez".
db.base_datos_empleados.deleteMany(
  {
    $and: 
      [
        {nombres: {$eq: "Ana"}},
        {apellidos: {$eq: "Hernandez"}}
      ]
  }
)

// Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.io".
db.base_datos_empleados.deleteMany(
  {correo: {$eq: "borrar@riwi.io"}}
)

// Eliminar usuarios que no tienen una dirección de correo electrónico registrada.
db.base_datos_empleados.deleteMany(
  {correo: {$exists: false}}
)

// Eliminar usuarios que viven en "Tokyo".
db.base_datos_empleados.deleteMany(
  {ciudad: {$eq: "Tokyo"}}
)

// Borrar todos los usuarios que son menores de 18 años.
db.base_datos_empleados.deleteMany(
  {edad: {$lt: 18}}
)

// Eliminar usuarios que tienen un salario igual a 0.
db.base_datos_empleados.deleteMany(
  {salario: {$lte: 0}}
)

// Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.
db.base_datos_empleados.deleteMany(
  {
    $and: 
      [
        {ciudad: {$regex: /new york/gi}},
        {salario: {$gt: 5000}}
      ]
  }
)

// Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".
db.base_datos_empleados.deleteMany(
  {correo: {$regex: /spam/gi}}
)

// Borrar usuarios que viven en "Bello" y tienen más de 50 años.
db.base_datos_empleados.deleteMany(
  {
    $and: 
      [
        {ciudad: {$regex: /bello/gi}},
        {edad: {$gte: 50}}
      ]
  }
)

// Eliminar todos los usuarios que tienen el apellido "González".
db.base_datos_empleados.deleteMany(
  {apellidos: {$eq: "Gonzalez"}}
)

// PARA LAS PRUEBAS
db.base_datos_empleados.find(
  {apellidos: {$eq: "Gonzalez"}}
)
