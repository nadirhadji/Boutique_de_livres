import { AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import { Livre } from '../entite/Livre';
import { BdService } from '../services/bd.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['cpr','nis','aut','titre','prix','rab','action'];
  bookList : Array<Livre>= new Array<Livre>();
  filteredBookList : Array<Livre>= new Array<Livre>();
  dataSource: MatTableDataSource<Livre> = new MatTableDataSource<Livre>();
  selectedFilter: string= 'none';
  filter1: string = '';
  filter2: string = '';

 @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator ;
  
 constructor(private bdService: BdService, private snackBar : MatSnackBar) { 
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
  
  deleteBook(book: Livre){
    this.bookList.splice(this.bookList.indexOf(book), 1);
    this.bdService.deleteBook(book);
    this.resetValues();
    this.snackBar.open("votre livre "+ book.titre +" a été suprimé avec succès !", 'fermer'); 
  }

  filterBy(discount?: {max: number , min: number}, inputValue?: string ){
    switch (this.selectedFilter) {
      case 'category' :
        this.filteredBookList = this.bookList.filter( bookIterator => 
          bookIterator.nis === inputValue );
      break;
      case 'title' :
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
