import { Document } from "mongoose";

export interface TestFormData extends Document{
    firstname: string;
    lastname: string;
    email: string;
    gender: string;
    isMarried: boolean;
    country: string;
    state: string;
    dob: Date;
  }
  