import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface SortOption {
  key: string;
  order: number;
}

export interface TableHeading {
  label: string;
  field: string;
}

export interface Product {
  name: string;
  price: string;
  category: string;
}

@Component({
  selector: "app-table-component",
  templateUrl: "./table-component.component.html",
  styleUrls: ["./table-component.component.scss"],
})
export class TableComponentComponent implements OnInit {
  tableData: Product[] = [];
  headings: TableHeading[] = [
    {
      label: 'Product Name',
      field: 'name',
    },
    {
      label: 'Price',
      field: 'price'
    },
    {
      label: 'Category',
      field: 'category'
    }
  ];
  sortDefault: boolean = true;
  sortOption: SortOption = {
    key: 'name',
    order: 1
  };

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.loadCookies();
  }

  //API Call
  loadCookies(): void {
    this.httpClient
      .get(
        "https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json"
      )
      .subscribe((data: any) => {
        this.tableData = data?.cookies || [];
      });
  }


  //sorting
  sortBy(key: string): void {
    this.sortDefault = false;
    if (this.sortOption.key === key) {
      this.sortOption.order = this.sortOption.order === -1 ? 1 : -1;
    } else {
      this.sortOption = {
        key,
        order: 1
      };
    }
    this.tableData.sort((a: any, b: any) => {
      return a[key].localeCompare(b[key]) * this.sortOption.order;
    });
  }

}
