window.appStorage = {
    fetch: function(key) {
        try {
            const serializedState = localStorage.getItem(key);
            if (serializedState === null) {
                return undefined;
            }
            
            return JSON.parse(serializedState);
        } catch (err) {
            return undefined;
        }
    },
    save: function(key, data) {
        try {
            const serializedData = JSON.stringify(data);
            localStorage.setItem(key, serializedData);
        } catch {
            // ignore write errors
        }
    },
};
