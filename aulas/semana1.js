//SOBRE ARRAY
// let nome =["Gabriel", "Lucas", "Pablo","Giovanna"];
// //pop remove o ultimo elemento
// // console.log("remover"+ nome.push());;
// console.log(nome);
// nome.push("Novo") //acrescemta um novo elemento no final
// console.log(nome);

//SOBRE OBJETOS
// let tarefa = {"Descrição":"Estudar JS", "Local":"IFMG","Hora":"20:30"}
let lista = [
  {"Descrição":"Estudar JS", "Local":"IFMG","Hora":"20:30"},
  {"Descrição":"Estudar JS", "Local":"IFMG","Hora":"20:30"},
  {"Descrição":"Estudar MYSQL", "Local":"IFMG","Hora":"20:30"}
];
// console.log(lista[2]);

//SOBRE FUNÇÃO
function addLista(Descrição,Local,Hora){
  let novoElemento =  {"Descrição": Descrição, "Local": Local,"Hora": Hora}
  lista.push(novoElemento);
  console.log(lista)
}