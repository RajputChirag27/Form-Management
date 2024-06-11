import { NextFunction, Request, Response } from 'express'
import { inject } from 'inversify'
import {
  controller,
  httpGet,
  httpPost,
  httpDelete,
  httpPatch,
} from 'inversify-express-utils'
import { TestForm } from '../models/formModel';


@controller('/form')
export class FormController {


 @httpPost('/testForm')
  async createForm(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
        console.log(req.body)
        const {firstname,lastname, email, gender, isMarried, country, state, dob} = req.body;
        const sanitizedBody = {firstname,lastname, email, gender, isMarried, country, state, dob};
        const form = await TestForm.create(sanitizedBody)
        const result = await form.save();
        res.send({message: "Data sumbitted Successfully", success: true})
    } catch (err) {
        console.log(err)
    }
  }

  
 @httpGet('/testForm')
 async getForm(
   req: Request,
   res: Response,
   next: NextFunction
 ) {
   try {
       const data = await TestForm.find();
       res.send({message: data, success: true})
   } catch (err) {
       console.log(err)
   }
 }

}