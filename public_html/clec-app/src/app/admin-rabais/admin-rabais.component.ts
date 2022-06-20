import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { Livre } from '../entite/Livre';
import { BdService } from '../services/bd.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-rabais',
  templateUrl: './admin-rabais.component.html',
  styleUrls: ['./admin-rabais.component.css']
})
export class AdminRabaisComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['cpr','nis','aut','titre','prix','rab','finalPrice'];
  bookList : Array<Livre>= new Array<Livre>();
  filteredBookList : Array<Livre>= new Array<Livre>();
  dataSource: MatTableDataSource<Livre> = new MatTableDataSource<Livre>();
  selectedFilter: string= 'none';
  filter1: string = '';
  filter2: string = '';

 @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator ;
  
 constructor(private bdService: BdService) { 
    this.bdService.updateLivres();
  }
  
  ngOnInit(): void {
    this.bookList = this.bdService.lstlivres;
    this.dataSource = new MatTableDataSource<Livre>(this.bookList); 
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  formatLabel(value: number) {
    if (value > 100) {
      return Math.round(value / 100);
    }
    return value;
  }
  
  addDiscount(book: Livre, discount : number){
    book.rab = discount;
    book.finalPrice = Math.round(book.prix * (1 - discount/100));
  }

  filterBy(discount?: {max: number , min: number}, inputValue?: string ){
    switch (this.selectedFilter) {
      case 'category' :
        this.filteredBookList = this.bookList.filter( bookIterator => 
          bookIterator.nis === inputValue );
      break;
      case 'title' :
<<<<<<< HEAD
=======
        console.log(this.bookList);
>>>>>>> 7f7315d2f8f9c9008b1db92d3d7adfd5bca7bfad
        this.filteredBookList = this.bookList.filter( bookIterator => 
          bookIterator.titre.includes(inputValue ?? ''));
      break;
      case 'discount' :
      this.filteredBookList = this.bookList.filter( bookIterator => 
        bookIterator.rab <= discount!.max  && bookIterator.rab >= discount!.min );
      break;
    }
    this.dataSource = new MatTableDataSource<Livre>(this.filteredBookList);
    this.dataSource.paginator = this.paginator;
  }
  
  resetValues(){
    this.dataSource = new MatTableDataSource<Livre>(this.bookList);
    this.dataSource.paginator = this.paginator;
  }
}
