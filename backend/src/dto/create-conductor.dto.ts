export class CreateConductorDto {
  name: string;
  email: string;
  phone: string;
  password: string;

  constructor(data: { name: string; email: string; phone: string; password: string }) {
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.password = data.password;
  }
}
