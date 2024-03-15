db.base_datos_empleados.deleteMany({});
db.base_datos_empleados.find({nombres: {$eq: "Juan"}})