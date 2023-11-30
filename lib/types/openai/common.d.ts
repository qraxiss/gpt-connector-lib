export interface base {
    body: {
        apiKey: string;
        openai?: {
            frequency_penalty?: number;
            function_call?: object;
            functions?: string[];
            logit_bias?: object;
            max_tokens?: number;
            model?: string;
            n?: number;
            presence_penalty?: number;
            stop?: object;
            stream?: boolean;
            temperature?: number;
            top_p?: number;
            user?: string;
        };
    };
    query: any;
    user?: {
        permissions?: any;
    };
}
export interface openai {
    frequency_penalty?: number;
    function_call?: object;
    functions?: string[];
    logit_bias?: object;
    max_tokens?: number;
    model?: string;
    n?: number;
    presence_penalty?: number;
    stop?: object;
    stream?: boolean;
    temperature?: number;
    top_p?: number;
    user?: string;
}
