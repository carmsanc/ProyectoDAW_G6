export class Startup {

    private _nombre: string;
    private _visitas: number;
    private _categoria: string;
    private _direccion: string;

    
    constructor(_nombre: string,_visitas: number,_categoria: string,_direccion: string) {
       this._nombre= _nombre;
        this._visitas= _visitas;
        this._categoria= _categoria;
        this._direccion= _direccion;
    }
  
    set nombre(_nombre:string) {this._nombre = _nombre;}
    get nombre() {return this._nombre;}
  
    set visitas(_visitas:number) {this._visitas = _visitas;}
    get visitas() {return this._visitas;}
    
    set categoria(_categoria:string) {this._categoria = _categoria;}
    get categoria() {return this._categoria;}

    set direccion(_direccion:string) {this._direccion = _direccion;}
    get direccion() {return this._direccion;}
  
  renderizarPlantilla():string {
    return `<tr>
    <td>
       ${this.nombre} 
    </td>
    <td>
        ${this.visitas}
    </td>
    <td>
        ${this.categoria}
    </td>
    <td>
        ${this.direccion}
    </td>
</tr>`
  }
}