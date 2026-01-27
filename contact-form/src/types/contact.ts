import { IContact } from "@/models/SchemaModels";

export interface ContactDTO extends IContact {
    _id: string;
    createdAt: string;
}

export interface ContactStats {
    total: number;
    newCount: number;
    readCount: number;    
    repliedCount: number;
}