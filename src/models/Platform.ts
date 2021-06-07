export interface Platform {
    sku: string;
    nome: string;
    descricao: string;
}

export interface PlatformRequest {
    plataformas: Platform[];
}
