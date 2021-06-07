export interface Platform {
    sku: string;
    nome: string;
    descricao: string;
}

export interface PlatformResponse {
    plataformas: Platform[];
}

export type PlatformType = 'TBT01' | 'CPT02' | 'WF03';
