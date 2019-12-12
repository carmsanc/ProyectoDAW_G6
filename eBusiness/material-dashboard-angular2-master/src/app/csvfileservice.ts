import{Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})

export class CsvFile{
    constructor(private http: HttpClient){}

    getCSVFile(url: string){
        return this.http.get(url,{responseType: 'text'});
    }
}
