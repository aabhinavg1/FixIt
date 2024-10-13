document.addEventListener("DOMContentLoaded", function () {
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            securityLevel: 'loose',
            logLevel: 'debug', // Set logging to debug for troubleshooting
            flowchart: { curve: 'linear' },
            sequence: { actorMargin: 50 }
        });
        
    } else {
        console.error("Mermaid.js not found. Please ensure Mermaid is loaded properly.");
    }
});
