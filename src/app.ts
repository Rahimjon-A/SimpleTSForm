import { ListItems } from './classes/ListItems.js';
import { Invoice } from './classes/Invoice.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { Payments } from './classes/Payments.js';

//---------------------------------
// examples
// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("Rahimjon", "working", 300);
// docTwo = new Payments("Behruz", "working", 500);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice('Aziz', 'Studying', 400);
// const invTwo = new Invoice('Nodir', 'working', 200);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// console.log(invoices);
//----------------------------------

// myFrom dan foydalanish uchun "!" qo'yilish sababi uni "null" emasligini bildirish bo'lmasa TS hatolik beradi

// element name bo'yicha olingani uchun element methodlari recmmend qiladi
// const myForm = document.querySelector('form')!;

// form
// "as" bu qayis HTML elementligini aytish uchun ishlatiladi
const myForm = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListItems(ul);

myForm.addEventListener('submit', (e: Event) => {

  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');

});
