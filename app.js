const getNotes = require("./note.js");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Agrega una nota",
  builder: {
    title: {
      describe: "Titulo de la nota",
      demandOption: true,
      type: "String",
    },
    body: {
      describe: "Contenido de la nota",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    getNotes.agregar(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Eliminar una nota",
  builder: {
    title: {
      describe: "Titulo de la nota",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    getNotes.eliminar(argv.title);
  },
});

yargs.command({
  command: "consult",
  describe: "Consultar la nota",
  builder: {
    title: {
      describe: "Titulo de la nota",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    getNotes.consultar(argv.title);
  },
});

console.log(yargs.argv);
