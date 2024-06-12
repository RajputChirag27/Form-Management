import { Component } from '@angular/core';
import { ColDef, PaginationNumberFormatterParams } from 'ag-grid-community'; 
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  rowData: any[] = [];
  public rowSelection: "single" | "multiple" = "multiple";
  public rowGroupPanelShow: "always" | "onlyWhenGrouping" | "never" = "always";
  public pivotPanelShow: "always" | "onlyWhenPivoting" | "never" = "always";
  public paginationPageSize = 10;
  public paginationPageSizeSelector: number[] | boolean = [10, 50, 100];
  public paginationNumberFormatter: (
    params: PaginationNumberFormatterParams,
  ) => string = (params: PaginationNumberFormatterParams) => {
    return "[" + params.value.toLocaleString() + "]";
  };
  backendMessage: any;
  public rowSelection: "single" | "multiple" = "multiple";
  public rowGroupPanelShow: "always" | "onlyWhenGrouping" | "never" = "always";
  public pivotPanelShow: "always" | "onlyWhenPivoting" | "never" = "always";
  public paginationPageSize = 500;
  public paginationPageSizeSelector: number[] | boolean = [200, 500, 1000];
  public paginationNumberFormatter: (
    params: PaginationNumberFormatterParams,
  ) => string = (params: PaginationNumberFormatterParams) => {
    return "[" + params.value.toLocaleString() + "]";
  };
  constructor(private formService : FormServiceService){

  }


  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.formService.getData().subscribe((data :any) => {
      // console.log(data);
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
    { field: 'firstname', filter: 'agTextColumnFilter' },
    { field: 'lastname', filter: 'agTextColumnFilter' },
    { field: 'email', filter: 'agTextColumnFilter' },
    { field: 'gender', filter: 'agTextColumnFilter' },
    { field: 'isMarried', filter: 'agTextColumnFilter' },
    { field: 'country', filter: 'agTextColumnFilter' },
    { field: 'state', filter: 'agTextColumnFilter' },
    { field: 'dob', filter: 'agDateColumnFilter' }
  ];
}
