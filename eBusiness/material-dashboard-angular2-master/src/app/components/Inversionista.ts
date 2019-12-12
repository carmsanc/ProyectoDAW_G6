export class Inversionista {

    private _nombre: string;
    private _interes: string;
    private _inversiones: number;
    private _financiamiento: string;

    
    constructor(_nombre: string,_interes: string,_inversiones: number,_financiamiento: string) {
       this._nombre= _nombre;
        this._interes= _interes;
        this._inversiones= _inversiones;
        this._financiamiento= _financiamiento;
    }
  
    set nombre(_nombre:string) {this._nombre = _nombre;}
    get nombre() {return this._nombre;}
  
    set interes(_interes:string) {this._interes = _interes;}
    get interes() {return this._interes;}
    
    set inversiones(_inversiones:number) {this._inversiones = _inversiones;}
    get inversiones() {return this._inversiones;}

    set financiamiento(_financiamiento:string) {this._financiamiento = _financiamiento;}
    get financiamiento() {return this._financiamiento;}
  
  renderizarPlantilla():string {
    return `<tr>
    <td>
       ${this.nombre} 
    </td>
    <td>
        ${this.interes}
    </td>
    <td>
        &nbsp${this.inversiones}
    </td>
    <td>
        ${this.financiamiento}
    </td>
</tr>`
  }
}