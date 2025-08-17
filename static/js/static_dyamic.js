const libraryFaqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        // Static Library FAQs
        {
            "@type": "Question",
            "name": "What is a static library?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A static library is a collection of precompiled object files that are linked directly into an executable at compile time. The library code becomes part of the final binary."
            }
        },
        {
            "@type": "Question",
            "name": "What are the advantages of static libraries?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "1) Faster execution (no runtime linking), 2) No external dependencies, 3) Simplified deployment (single executable), 4) Better optimization potential, 5) No version conflicts."
            }
        },
        {
            "@type": "Question",
            "name": "What are the disadvantages of static libraries?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "1) Larger executable size, 2) Requires recompilation for updates, 3) Wastes memory when used by multiple programs, 4) Difficult to patch security issues."
            }
        },
        {
            "@type": "Question",
            "name": "When should I use static libraries?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use static libraries for small utilities, embedded systems, or when you need guaranteed compatibility and don't expect frequent updates."
            }
        },
        {
            "@type": "Question",
            "name": "How do I create a static library in Linux?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "1) Compile source files to .o files: gcc -c file1.c file2.c\n2) Create archive: ar rcs libname.a file1.o file2.o\n3) Link with your program: gcc main.c -L. -lname -o program"
            }
        },

        // Dynamic Library FAQs
        {
            "@type": "Question",
            "name": "What is a dynamic library?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A dynamic library (shared library) is loaded at runtime rather than being embedded in the executable. Multiple programs can share the same library code in memory."
            }
        },
        {
            "@type": "Question",
            "name": "What are the advantages of dynamic libraries?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "1) Smaller executables, 2) Memory efficient (shared code), 3) Easy updates without recompiling, 4) Supports plugin architectures, 5) Reduced disk space usage."
            }
        },
        {
            "@type": "Question",
            "name": "What are the disadvantages of dynamic libraries?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "1) Runtime dependencies, 2) Versioning issues ('DLL hell'), 3) Slower startup time, 4) More complex deployment, 5) Potential security risks from library replacement."
            }
        },
        {
            "@type": "Question",
            "name": "When should I use dynamic libraries?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use dynamic libraries for system libraries, large applications, or when memory efficiency across multiple processes is important."
            }
        },
        {
            "@type": "Question",
            "name": "How do I create a dynamic library in Linux?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "1) Compile with -fPIC: gcc -fPIC -c file1.c file2.c\n2) Create shared library: gcc -shared -o libname.so file1.o file2.o\n3) Use LD_LIBRARY_PATH or install the library"
            }
        },
        {
            "@type": "Question",
            "name": "What's the difference between static and dynamic linking?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Static linking copies library code into the executable at compile time. Dynamic linking loads library code at runtime when the program executes."
            }
        }
    ]
};

// Append script dynamically
const libraryFaqScript = document.createElement("script");
libraryFaqScript.type = "application/ld+json";
libraryFaqScript.textContent = JSON.stringify(libraryFaqData);
document.head.appendChild(libraryFaqScript);