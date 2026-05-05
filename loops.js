let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
  }
];

let option = "";

while (true) {

  option = prompt(
    "Escolha uma opção:\n" +
    "primeiro\núltimo\ntodos\nnovo\nencerrar"
  );

  if (!option) continue;

  option = option.toLowerCase();

  if (option === "encerrar") {
    console.log("Programa encerrado.");
    break;
  }

  if (option === "primeiro") {
    if (contacts.length === 0) {
      console.log("Lista vazia.");
      continue;
    }

    let c = contacts[0];
    console.log(`Name: ${c.name}, Phone: ${c.phone}, Email: ${c.email}`);
    continue;
  }

  if (option === "último") {
    if (contacts.length === 0) {
      console.log("Lista vazia.");
      continue;
    }

    let c = contacts[contacts.length - 1];
    console.log(`Name: ${c.name}, Phone: ${c.phone}, Email: ${c.email}`);
    continue;
  }

  if (option === "todos") {
    if (contacts.length === 0) {
      console.log("Lista vazia.");
      continue;
    }

    for (let contact of contacts) {
      console.log(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
    }
    continue;
  }

  if (option === "novo") {
    let name = prompt("Digite o nome:");
    let phone = prompt("Digite o telefone:");
    let email = prompt("Digite o email:");

    if (!name || !phone || !email) {
      console.log("Dados inválidos!");
      continue;
    }

    contacts.push({ name, phone, email });
    console.log("Contato adicionado!");
    continue;
  }

  console.log("Opção inválida!");
}