export type SearchResultType =
    | "place"
    | "person"
    | "event"
    | "journey"
    | "scripture";

export type SearchResult = {
    id: string;
    type: SearchResultType;
    title: string;
    subtitle?: string;
    searchText: string;
    aliases?: string[];
};