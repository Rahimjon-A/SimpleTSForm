export class Invoice {
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
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details} `;
    }
}
