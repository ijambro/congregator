export declare interface User {
  id: number;
  createdDate?: Date;
  updatedDate?: Date;
  email: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
  photoUrl?: string;
}
