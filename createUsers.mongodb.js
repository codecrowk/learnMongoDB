db.createCollection('user');
db.user.insertOne(
  {
    nombre: 'Mario',
    apellido: 'Hernandez',
    correo: 'email@example.com',
    genero: ''
  }
)

db.user.insertMany(
  [
    {
      nombre: 'Jhon',
      apellido: 'Camilo',
      correo: 'test@example.com',
      genero: 'M',
      edad: 40
    },
    {
      nombre: 'Mario',
      apellido: 'Hernandez',
      correo: 'email@example.com',
      genero: 'M',
      edad: 12
    },
    {
      nombre: 'Laura',
      apellido: 'Quin',
      correo: 'test@example.com',
      genero: 'F',
      edad: 56
    },
    {
      nombre: 'Jhon',
      apellido: 'Camilo',
      correo: 'test@example.com',
      genero: 'M',
      edad: 32
    },
    {
      nombre: 'John',
      apellido: 'Doe',
      correo: 'johndoe@example.com',
      genero: 'M',
      edad: 45
    },
    {
      nombre: 'Jane',
      apellido: 'Doe',
      correo: 'janedoe@example.com',
      genero: 'F',
      edad: 35
    },
    {
      nombre: 'Jim',
      apellido: 'Hendrix',
      correo: 'jimhendrix@example.com',
      genero: 'M',
      edad: 70
    },
    {
      nombre: 'Judy',
      apellido: 'Garland',
      correo: 'judygarland@example.com',
      genero: 'F',
      edad: 47
    },
    {
      nombre: 'Joe',
      apellido: 'Strummer',
      correo: 'joestrummer@example.com',
      genero: 'M',
      edad: 65
    },
    {
      nombre: 'Jesse',
      apellido: 'James',
      correo: 'jessejames@example.com',
      genero: 'M',
      edad: 80
    }
  ]
);

db.user.find({edad: {$eq: 65}})
db.user.find({edad: {$ne: 20}})
db.user.find({edad: {$gt: 50}})
db.user.find({edad: {$lt: 50}})
// Grether and Lower (or equal) than
db.user.find({edad: {$gte: 50}})
db.user.find({edad: {$lte: 50}})
// Search in
db.user.find({edad: {$in: [5, 80, 65]}})
db.user.find({edad: {$nin: [5, 80, 65]}})
// Check if not exist
db.user.find({edad: {$exists: false}})
// Search like (regex)
db.user.find({nombre: {$regex: /^m/i}})
// Between
db.user.find({$and: [
  {  edad: {$gt: 20}},
  { edad: {$lt: 50}}
]})
// db.user.find({edad: {$notBetween: [50, 80]}})

// Working with string
db.user.find({nombre: {$eq: "Mario"}})