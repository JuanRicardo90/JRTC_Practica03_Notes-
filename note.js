const notas = require("fs");
const chalk = require("chalk");

const agregar = function (title, body) {
  const notes = abrirNotas();
  const notaDuplicada = notes.find((note) => note.title === title);

  if (notaDuplicada) {
    console.log(chalk.yellow.inverse("Ya existe esta nota"));
  } else {
    notes.push({
      title: title,
      body: body,
    });
    guardarNotas(notes);
    console.log(chalk.green.inverse("Nota agregada!"));
  }
};

const eliminar = function (title) {
  const notes = abrirNotas();
  const noEliminar = notes.filter((note) => note.title !== title);

  if (notes.length > noEliminar.length) {
    console.log(chalk.red.inverse("Nota eliminada!"));
    guardarNotas(noEliminar);
  } else {
    console.log(chalk.red.inverse("No existe esta nota"));
  }
};

const consultar = function (title) {
  const notes = abrirNotas();
  const notaEncontrada = notes.find((note) => note.title === title);

  if (notaEncontrada) {
    console.log(notaEncontrada.title);
    console.log(notaEncontrada.body);
  } else {
    console.log(chalk.inverse.red("Nota no encontrada"));
  }
};

const abrirNotas = function () {
  try {
    const buffer = notas.readFileSync("notas.json");
    const dataJson = buffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const guardarNotas = function (notes) {
  const dataJson = JSON.stringify(notes);
  notas.writeFileSync("notas.json", dataJson);
};

module.exports = {
  agregar: agregar,
  eliminar: eliminar,
  consultar: consultar,
};
