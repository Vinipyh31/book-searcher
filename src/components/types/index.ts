interface IIndustryIdentifier {
    type: string;
    identifier: string;
}

interface IReadingModes {
    text: boolean;
    image: boolean;
}

interface IPanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}

export interface IImageLinks {
    smallThumbnail?: string;
    thumbnail?: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
}

interface IVolumeInfo {
    title: string;
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: IIndustryIdentifier[];
    readingModes: IReadingModes;
    pageCount: number;
    printType: string;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: IPanelizationSummary;
    imageLinks?: IImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
    authors?: string[];
    categories?: string[];
}

export interface IBookRequest {
    items: IBookItem[];
    kind: string;
    totalItems: number;
}

export interface IBookItem {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: IVolumeInfo;
}

export type CategoriesTypes ='all' | 
    'art' | 
    'biography' | 
    'computers' | 
    'history' | 
    'medical' | 
    'poetry';


export type SortTypes =
    'relevance' |
    'newest'

