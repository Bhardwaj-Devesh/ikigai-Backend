declare module 'mammoth' {
    interface ConversionResult {
        value: string;
        messages: Array<{
            type: string;
            message: string;
            paragraph?: number;
        }>;
    }

    interface Options {
        buffer?: Buffer;
        styleMap?: string;
        includeDefaultStyleMap?: boolean;
        includeEmbeddedStyleMap?: boolean;
        idPrefix?: string;
        transformDocument?: (document: any) => any;
        ignoreEmptyParagraphs?: boolean;
        convertImage?: (image: any) => Promise<any>;
    }

    function convertToHtml(options: Options): Promise<ConversionResult>;
    function convertToMarkdown(options: Options): Promise<ConversionResult>;
    function extractRawText(options: Options): Promise<ConversionResult>;
    function images(options: Options): Promise<any>;

    export = {
        convertToHtml,
        convertToMarkdown,
        extractRawText,
        images
    };
} 