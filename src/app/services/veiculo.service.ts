import { Vehicle } from 'src/app/models/veiculo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  findById(id:any): Observable<Vehicle>{
    console.log(id)
    return this.http.get<Vehicle>(`${API_CONFIG.baseUrl}/veiculos/${id}`);
  }

  findAll(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${API_CONFIG.baseUrl}/veiculos`);
  }

  create(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${API_CONFIG.baseUrl}/veiculos`, vehicle);
  }

  update(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(`${API_CONFIG.baseUrl}/veiculos/${vehicle.id}`, vehicle);
  }

  delete(id: any): Observable<Vehicle>{
    return this.http.delete<Vehicle>(`${API_CONFIG.baseUrl}/veiculos/${id}`);
  }
}
