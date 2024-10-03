import React, { useEffect } from 'react';

const NotFound = () => {
    useEffect(() => {
        // Redirect to the specified URL
        window.location.href = 'https://www.compilersutra.com/docs/llvm_basic/Build';
    }, []);

    return (
        <div>
            <h1>Page Not Found</h1>
            <p>Redirecting you to the relevant page...</p>
        </div>
    );
};

export default NotFound;
