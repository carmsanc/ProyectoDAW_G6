export class Startup {
    private _id?: String;
    private nombre: string;
    private visitas: number;
    private categoria: string;
    private direccion: string;

    
    constructor(_id: String,nombre: string,visitas: number,categoria: string,direccion: string) {
        this._id = _id;
        this.nombre= nombre;
        this.visitas= visitas;
        this.categoria= categoria;
        this.direccion= direccion;
    }
  
    set _nombre(_nombre:string) {this.nombre = _nombre;}
    get _nombre() {return this._nombre;}
  
    set _visitas(_visitas:number) {this.visitas = _visitas;}
    get _visitas() {return this._visitas;}
    
    set _categoria(_categoria:string) {this.categoria = _categoria;}
    get _categoria() {return this._categoria;}

    set _direccion(_direccion:string) {this.direccion = _direccion;}
    get _direccion() {return this._direccion;}
  
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
    <td>
        <button type="button" class="btn btn-default">Editar</button>
    </td>
</tr>`
  }
}