export interface UserModelInterface {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
    [key:string]:any;
  }
  
 interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  }
  
 interface Company {
    name: string;
    catchPhrase: string;
    designation: string;
    bs: string;
  }