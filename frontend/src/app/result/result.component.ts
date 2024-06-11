import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community'; 
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  rowData: any[] = [];
  backendMessage: any;
  constructor(private formService : FormServiceService){

  }


  ngOnInit() {
    this.loadUsers();
    // If you also want to load car data, you can call loadCars() similarly
  }

  loadUsers() {
    this.formService.getData().subscribe((data :any) => {
      console.log(data);
      this.rowData = data.message.map((user : any) => ({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        gender: user.gender,
        isMarried: user.isMarried,
        country: user.country,
        state: user.state,
        dob: new Date(user.dob).toLocaleDateString()
      }));
    });
  }


  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: 'firstname' },
    { field: 'lastname' },
    { field: 'email' },
    { field: 'gender' },
    { field: 'isMarried' },
    { field: 'country' },
    { field: 'state' },
    { field: 'dob' }
  ];
}
