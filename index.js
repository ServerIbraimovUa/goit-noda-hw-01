const contacts = require("./contacts");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await contacts.listContacts();
      console.table(contactsList);
      break;

    case "get":
      const getById = await contacts.getContactById(id);
      console.table(getById);
      break;

    case "add":
      const add = await contacts.addContact(name, email, phone);
      console.table(add);
      break;

    case "update":
      const updateById = await contacts.updateContact(id, name, email, phone);
      console.table(updateById);
      break;

    case "remove":
      const removeById = await contacts.removeContact(id);
      console.table(removeById);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const arr = hideBin(process.argv);

const { argv } = yargs(arr);

invokeAction(argv);

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction({ action });
// }
