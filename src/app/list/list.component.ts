import { List } from './models/list.model';
import { ListService } from './services/list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 isLoading = true;
 projects: Array<List>;
  constructor( private _listService: ListService) { }

  ngOnInit() {
    this._listService.getAll().subscribe(
      (data: List[]) => {
        this.projects = data;
        this.isLoading = false;
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('Finished!');
      }
    );
  }

  onDelete(listado: List) {
    alert(listado.id);
  }

}
