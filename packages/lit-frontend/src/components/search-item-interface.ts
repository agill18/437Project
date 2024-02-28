export interface SearchItemInterface {
    // Method to get the all the relevant data needed for comparison in the search
    getData(): string; 
    // Method to show/hide the item based on filtering criteria
    setFilter(filter: boolean): void;
}