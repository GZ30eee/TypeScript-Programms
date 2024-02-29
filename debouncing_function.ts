// Implement a debouncing function that delays the execution of a given function until a certain time has passed since the last invocation

function debounce(func: () => void, delay: number): () => void {
    let timeoutId: NodeJS.Timeout;
    return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
    };
}

// Example usage:
const handleSearch = () => {
    console.log("Performing search...");
    // Actual search logic here
};

const debouncedSearch = debounce(handleSearch, 300); // Debounce with 300ms delay
window.addEventListener("input", debouncedSearch);
