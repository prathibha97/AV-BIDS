export interface User {
  _id:string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: 'PLANNER' | 'PROVIDER';
  refreshToken: string[];
  imageUrl: string;
  phone: string;
  website: string;
  company: string;
}

export interface Member{
  name: string;
  email: string;
  role: string;
}