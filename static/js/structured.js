const scriptId = "compilersutra-global-structured-data";

if (!document.getElementById(scriptId)) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CompilerSutra",
      "url": "https://www.compilersutra.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.compilersutra.com/img/logo.svg"
      },
      "sameAs": [
        "https://twitter.com/CompilerSutra",
        "https://www.youtube.com/@compilersutra",
        "https://github.com/aabhinavg1/FixIt",
        "https://www.linkedin.com/in/abhinavcompilerllvm/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "CompilerSutra",
      "url": "https://www.compilersutra.com/",
      "description": "Compiler engineering tutorials covering LLVM, MLIR, TVM, GPU programming, systems fundamentals, and low-level software."
    }
  ];

  const script = document.createElement("script");
  script.id = scriptId;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
}
  
