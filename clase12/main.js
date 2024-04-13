const usuario1 = {
  nombre: "Juan",
  edad: 24,
  curso: "Javascript",
};

/* const usuario2 = usuario1;


const usuario3 = JSON.parse(JSON.stringify(usuario1));

console.log(usuario1);
console.log(usuario2);
console.log(usuario3)

console.log(usuario1 == usuario2);
console.log(usuario1 == usuario3);

usuario2.nombre = "Adrian";
console.log(usuario1);
console.log(usuario2);
console.log(usuario3); */


const usuario2 = {
  ...usuario1,
};

console.log(usuario2); // { nombre: 'Juan', edad: 24, curso: 'Javascript' }
console.log(usuario1); // { nombre: 'Juan', edad: 24, curso: 'Javascript' }
console.log(usuario1 == usuario2)


const usuario3 = {
  ...usuario1,
  curso: "ReactJS",
  email: "juan@doe.com",
};

console.log(usuario3);


const producto = {
  nombre: "TV", 
  precio: 20000,
  disponible: true
}

const medidas = {
  peso: "1kg",
  alto: "1 metro"
}

const fullProducto = {...producto, info: {...medidas}}
console.log(fullProducto)
