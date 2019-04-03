import { Usuario } from './usuario';


// Centralizando la logica de los usuarios

export class UsuariosLista{

    private lista: Usuario []=[];

    constructor(){}

    // Agregar un usuario
    public agregar(usuario: Usuario){
        this.lista.push(usuario);
        // console.log(this.lista);
        return usuario;
    }

    // Actualizar usuario
    public actualizaNombre( id: string, nombre: string){
        // Si fuera BD realizamos la consulta correspondiente
        for(let usuario of this.lista){
            if(usuario.id === id){
                usuario.nombre = nombre;
                break;
            }
        }
        console.log('======> Actualizar Usuario <======');
        console.log(this.lista);
    }

    // Obtener la lista de los usuarios
    public getLista(){
        return this.lista.filter( usuario => usuario.nombre !== 'sin-nombre');
    }

    // Regresar un usuario especifico
    public getUsuario( id: string){
        return this.lista.find( usuario => usuario.id === id);
    }
    
    // Obtener los usuario de una sala en particular
    public getUsuariosEnSala( sala: string){
        return this.lista.filter( usuario => usuario.sala === sala);
    }

    // Borrar Usuario
    public borrarUsuario( id: string){
        const tempUser = this.getUsuario(id);

        this.lista = this.lista.filter(usuario => usuario.id !== id);
        return tempUser;
    }
}