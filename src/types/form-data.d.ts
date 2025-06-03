declare module 'form-data' {
    import { Readable } from 'stream';

    class FormData {
        constructor();
        append(name: string, value: string | Buffer | Readable, options?: {
            filename?: string;
            contentType?: string;
            knownLength?: number;
        }): void;
        getHeaders(): { [key: string]: string };
        getBoundary(): string;
        getLength(callback: (err: Error | null, length: number) => void): void;
        getLengthSync(): number;
        getBuffer(): Buffer;
        pipe(writable: NodeJS.WritableStream): NodeJS.WritableStream;
        submit(url: string, callback: (error: Error | null, response: any) => void): void;
        submit(url: string, options: {
            protocol?: string;
            hostname?: string;
            port?: number;
            path?: string;
            method?: string;
            headers?: { [key: string]: string };
        }, callback: (error: Error | null, response: any) => void): void;
    }

    export = FormData;
} 