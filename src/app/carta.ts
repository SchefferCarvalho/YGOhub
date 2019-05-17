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

export interface Usuario{
    id: number;
    email_usua: string;
    nme_usua: string;
    pwd_usua: string;
    nicknme_usua: string;

}

