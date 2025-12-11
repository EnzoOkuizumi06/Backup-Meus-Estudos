//Precisamos gerar o package.json (com npm init -y) para fazer funcionar a importação... Meio que ele faz tudo ser interpretado sendo um module
import {object2} from "./3 - spread.js"; //Desestruturação - O from está me retornando um objeto com todos os exports daquele arquivo. Como queremos o export "object2", eu tenho que desestruturar

console.log(object2)