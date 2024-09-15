import { ListItems } from './classes/ListItems.js';
import { Invoice } from './classes/Invoice.js';
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
const myForm = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListItems(ul);
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
