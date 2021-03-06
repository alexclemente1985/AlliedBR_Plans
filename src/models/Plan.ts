interface Device {
    nome: string;
    valor: string;
    numeroParcelas: number;
    valorParcela: string;
}

export interface Plan {
    sku: string;
    franquia: string;
    valor: string;
    ativo: boolean;
    aparelho?: Device;
}

export interface PlanResponse {
    planos: Plan[];
}

export interface PlanRequest {
    id: string;
}
