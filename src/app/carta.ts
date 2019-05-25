export interface CartasTipo {
    id: number;
    tipocarta: string;
}

export interface Cartas {
    id: number;
    nme_carta: string;
    qtd_carta: number;
    ataque_carta: string;
    defesa_carta: string;
    level_carta: string;
    favorito_carta: string;

}

export interface Deck{
    
    id: number;
    nme_deck: string;
    idt_usuario:number;
}

export class Usuario{
    email_usua: string;
    nme_usua: string;
    nicknme_usua: string;
    pwd_usua: string;
    

    constructor(
        email_usua: string,
        nme_usua: string,
        nicknme_usua: string,
        pwd_usua: string
       
        
        ){
            this.email_usua = email_usua;
            this.nme_usua = nme_usua;
            this.nicknme_usua = nicknme_usua;
            this.pwd_usua = pwd_usua;
          

    }


}
