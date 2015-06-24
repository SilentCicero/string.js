// Browser environment
if(typeof window !== 'undefined') {
    S = (typeof window.S !== 'undefined') ? window.S : require('string');
}

// Node environment
if(typeof global !== 'undefined') {
    S = (typeof global.S !== 'undefined') ? global.S : require('string');
}