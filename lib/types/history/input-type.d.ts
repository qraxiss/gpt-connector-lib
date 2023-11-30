export interface addRelatedHistory {
    body: {
        historyId: string;
        insert?: number;
    };
    query: {
        relatedId: string;
    };
    user?: {
        permissions?: any;
    };
}
export interface deleteRelatedHistory {
    body: object;
    query: {
        historyId: string;
        relatedId: string;
    };
    user?: {
        permissions?: any;
    };
}
export interface getMessages {
    body: object;
    query: {
        historyId?: string;
        relatedId?: string;
    };
    user?: {
        permissions?: any;
    };
}
export interface newHistory {
    body?: {
        messages: {
            content: string;
            date?: Date;
            role: 'function' | 'user' | 'system' | 'assistant';
        }[];
    };
    query: {
        id?: string;
    };
    user?: {
        permissions?: any;
    };
}
export interface newRelatedHistories {
    body: {
        histories: string[];
    };
    query: {
        id?: string;
    };
    user?: {
        permissions?: any;
    };
}
export interface sendMessage {
    body: {
        content: string;
        date?: Date;
        role: 'function' | 'user' | 'system' | 'assistant';
    } | {
        content: string;
        date?: Date;
        role: 'function' | 'user' | 'system' | 'assistant';
    }[];
    query: {
        id?: string;
    };
    user?: {
        permissions?: any;
    };
}
