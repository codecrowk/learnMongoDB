db.base_datos_empleados.deleteMany({});
// Get employees with age greater than 18
db.base_datos_empleados.find({edad: {$gt: 18}})

// Get employees that live in Londres or Paris
db.base_datos_empleados.find({ciudad: {$in: ["London", "Paris"]}})
db.base_datos_empleados.find({pais: {$in: ["France"]}})

// Get users who won more than 2000 per mount and have an age lower than 30
db.base_datos_empleados.find({
  $and: 
    [
      {salario: {$gt: 2000}},
      {edad: {$lte: 30}}
    ]
})

// Get users who live in spain and have a salary greather 3000/mount
db.base_datos_empleados.find({
  $and: 
    [
      {pais: {$eq: "Spain"}},
      {salario: {$gt: 3000}}
    ]
})

// Get user with age between 25 and 35
db.base_datos_empleados.find({
  $and:
    [
      {edad: {$gte: 25}},
      {edad: {$lte: 35}}
    ]
})

// Get users that doesn't live at US
db.base_datos_empleados.find({pais: {$nin: ["USA"]}})

// Get user that live in londren and have a salary greather than 2500 or have an age greather than 30
db.base_datos_empleados.find({
  $and:
    [
      {ciudad: {$eq: "London"}},
      // {pais: {$eq: "France"}},
      {$or: 
        [
          {salario: {$gte: 2500}},
          {age: {$gte: 30}}
        ]
      }
    ]
})

// Get users that live in Australia and have a weight greather than 140 lb
db.base_datos_empleados.find({
  $and:
    [
      {pais: {$eq: "Australia"}},
      {peso: {$gte: 140}},
    ]
})

// Get users that doesn't live in Londres or Paris
db.base_datos_empleados.find({ciudad: {$nin: ["London", "Paris"]}})

db.base_datos_empleados.find({
  $and:
    [
      {pais: {$eq: "France"}},
      {ciudad: {$nin: ["London", "Paris"]}},
    ]
})

// Get users with a salary lower than 2000/mount or have an age greater than 35
db.base_datos_empleados.find({
  $or:
    [
      {salario: {$lt: 2000}},
      {edad: {$gt: 35}},
    ]
})

// Get users that live in Canada and have a salary greater than 4000 or a heigth > 180
db.base_datos_empleados.find({
  $and:
    [
      {pais: {$eq: "Canada"}},
      {$or:
        [
          {salario: {$gt: 4000}},
          {peso: {$gt: 180}},
        ]
      }
    ]
})

// Get users that live in Italy and have an age in range of 20-30
db.base_datos_empleados.find({
  $and:
    [
      {pais: {$eq: "Italy"}},
      {$and: 
        [
          {edad: {$gte: 20}},
          {edad: {$lte: 30}}
        ]
      }
    ]
})

// Get users who doesn't have a register email
db.base_datos_empleados.find({correo: {$exists: false}})

// Get users who live in France and have a salary in range of 30000-50000/mount
db.base_datos_empleados.find({
  $and:
    [
      {pais: {$eq: "France"}},
      {$and: 
        [
          {salario: {$gte: 30000}},
          {salario: {$lte: 50000}}
        ]
      }
    ]
})

// Get users who lives in Brazil an have a weigth <= 120 || weigth > 140
db.base_datos_empleados.find({
  $and:
    [
      {pais: {$eq: "Brazil"}},
      {$or: 
        [
          {peso: {$lte: 120}},
          {peso: {$gt: 140}},
        ]
      }
    ]
})

// Get all users that live in Argentina or Chile and have an age < 25
db.base_datos_empleados.find({
  $and:
    [
      {pais: {$in: ["Argentina", "Chile"]}},
      {edad: {$lte: 25}},
    ]
})

// Get all users that doesn't live in Spain or Mexico and have a salary < 3000
db.base_datos_empleados
  .find({
    $and:
      [
        {pais: {$nin: ["Spain", "Mexico"]}},
        {salario: {$lte: 3000}},
      ],
  })
  .sort({
    salario: 1
  })

// Get all users from Germany and have a salary < 40000 || age > 35 
db.base_datos_empleados
  .find({
    $and:
      [
        {pais: {$eq: "Germany"}},
        {$or: 
          [
            {salario: {$lt: 40000}},
            {edad: {$gt: 35}}
          ]
        }
      ],
  })

// Get all user that aren't from Colombia and heigth < 170
db.base_datos_empleados
  .find({
    $and:
      [
        {pais: {$ne: "Colombia"}},
        {altura: {$lt: 170}},
      ],
  })
  .sort({
    altura: 1
  })

// Get users from India and doesn't have salary field registered
db.base_datos_empleados
  .find({
    $and:
      [
        {pais: {$eq: "India"}},
        {salario: {$exists: false}}
      ]
  })