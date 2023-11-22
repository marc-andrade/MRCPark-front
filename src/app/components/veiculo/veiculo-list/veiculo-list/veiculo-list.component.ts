import { ViewChild, OnInit, Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Vehicle } from '../../../../models/veiculo.model';
import { VehicleService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css'],
})
export class VeiculoListComponent implements OnInit {

  ELEMENT_DATA: Vehicle[] = [];

  displayedColumns: string[] = ['id', 'marca','modelo','placa','cor'];
  dataSource = new MatTableDataSource<Vehicle>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private service: VehicleService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;

      this.dataSource = new MatTableDataSource<Vehicle>(resposta);
      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator = this.paginator;
    })
    console.log(this.ELEMENT_DATA)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
