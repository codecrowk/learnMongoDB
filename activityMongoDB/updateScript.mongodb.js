db.base_datos_empleados.find({correo: {$eq: "maria.garcia@example.com"}})

// db.base_datos_empleados.aggregate(
//   [
//     {
//       $match: {correo: {$eq: "maria.garcia@example.com"}}
//     },
//     {
//       $project: {
//         salario: {$multiply: ["$salario", 1.1]}
//       }
//     }
//   ])

// db.base_datos_empleados.updateOne(
//   {correo: {$eq: "maria.garcia@example.com"}},
//   {$set: {salario: 2000}},
// )

// Incrementar el salario de todos los usuarios en un 10%.
db.base_datos_empleados.updateMany(
  {},
  {$mul: {salario: 1.1}},
)

// Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".
db.base_datos_empleados.updateMany(
  {ciudad: {$regex: /New York/i}},
  {$set: {ciudad: "Los Angeles"}}
)

// Agregar el correo electrónico "nuevo@riwi.com" al usuario con nombre "Diego" y apellido "Ramirez".
db.base_datos_empleados.updateMany(
  {
    $and: 
    [
      {nombres: {$regex: /Diego/i}},
      {apellidos: {$regex: /Ramirez/}}
    ] 
  },
  {
    $set: {correo: "nuevo@riwi.io"}
  })
// Actualizar la edad del usuario con correo electrónico "ejemplo@riwi.io" a 35 años.
db.base_datos_empleados.updateMany(
  {correo: {$eq: "ejemplo@riwi.io"}},
  {$set: {edad: 35}}
  )

// Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".
db.base_datos_empleados.updateMany(
  {pais: {$regex: /Mexico/i}},
  {$set: {pais: "Canada"}}
  )

// Aumentar la altura de todos los usuarios en 5 centímetros.
db.base_datos_empleados.updateMany(
  {},
  {
    $inc: {altura: 5}
  }
  )

// Cambiar el apellido del usuario con correo electrónico "otro@riwi.net" a "González".
db.base_datos_empleados.updateOne(
  {correo: {$eq: "otro@riwi.io"}},
  {$set: {apellidos: "Gonzalez"}}
  )

// Actualizar el peso del usuario con nombre "Maria" a 140 libras.
db.base_datos_empleados.updateMany(
  {nombres: {$eq: "Maria"}},
  {$set: {peso: 140}}
  )

// Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.
db.base_datos_empleados.updateMany(
  {pais: {$eq: "USA"}},
  {$mul: {salario: 1.15}}
  )

// Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".
db.base_datos_empleados.updateMany(
  {nombres: {$regex: /pedro/i}},
  {$set: {correo: "nuevo_correo@riwi.io"}}
  )

// Cambiar la edad de todos los usuarios menores de 30 años a 30 años.
db.base_datos_empleados.updateMany(
  {edad: {$lt: 30}},
  {$set: {edad: 30}}
  )
  
// Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.
db.base_datos_empleados.updateMany(
  {salario: {$lte: 3000}},
  {$mul: {salario: 1.2}}
  )

// Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".
db.base_datos_empleados.updateMany(
  {ciudad: {$regex: /bogota/ig}},
  {$set: {ciudad: "Medellin"}}
  )

// Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".
db.base_datos_empleados.updateMany(
  {salario: {$gt: 5000}},
  {$set: {pais: "Australia"}}
  )

// Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.
db.base_datos_empleados.updateMany(
  {edad: {$gt: 50}},
  {$inc: {edad: -5}} 
  )

// Actualizar el peso de los usuarios que pesan más de 180 libras a 160 libras.
db.base_datos_empleados.updateMany(
  {peso: {$gte: 180}},
  {$set: {peso: 160}}
  )

// Incrementar el salario de los usuarios que viven en "London" en un 25%.
db.base_datos_empleados.updateMany(
  {ciudad: {$eq: "London"}},
  {$mul: {salario: 1.25}},
  )

// Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".
db.base_datos_empleados.updateMany(
  {salario: {$gt: 40000}},
  {$set: {apellidos: "Smith"}}
  )

// Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.io".
db.base_datos_empleados.updateMany(
  {nombres: {$regex: /^a/gi}},
  {$set: {correo: "nuevo@riwi.io"}}
  )

// Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".
db.base_datos_empleados.updateMany(
  {altura: {$lt: 160}},
  {$set: {ciudad: "Paris"}}
  )

// PARA LAS PRUEBAS
db.base_datos_empleados.find(
  {salario: {$lt: 2000}}
  )

