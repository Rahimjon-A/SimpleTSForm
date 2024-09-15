import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Invoice implements HasFormatter {
  // -------------------
  // ananaviy usul bilan ishlash
  // client: string;
  // details: string;
  // amount: number;

  // constructor(c: string, d: string, a: number) {
  //   this.client = c;
  //   this.details = d;
  //   this.amount = a;
  // }
  // --------------------

  // malumot turlarini berib prametrlarini elon qilish
  constructor(readonly client: string, private details: string, public amount: number) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details} `;
  }
}
