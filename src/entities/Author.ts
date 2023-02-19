export class Author {
  id: number;
  first: string;
  last: string;
  DOB: number;

  constructor(first: string, last: string, DOB: number) {
    this.id = Math.round(Math.random() * 1_000_000);
    this.first = first;
    this.last = last;
    this.DOB = DOB;
  }
}
