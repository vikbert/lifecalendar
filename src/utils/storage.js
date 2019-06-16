const STORAGE_KEY = 'REACT_APP_LIFE_GRID';
window.appStorage = {
    fetch: function() {
        try {
            const serializedState = localStorage.getItem(STORAGE_KEY);
            if (serializedState === null) {
                return undefined;
            }
            
            return JSON.parse(serializedState);
        } catch (err) {
            return undefined;
        }
    },
    save: function(data) {
        try {
            const serializedData = JSON.stringify(data);
            localStorage.setItem(STORAGE_KEY, serializedData);
        } catch {
            // ignore write errors
        }
    },
};
