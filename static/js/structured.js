const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CompilerSutra",
    "url": "https://compilersutra.com/",
    "description": "Unleashing Compiler Power for Cutting-Edge Innovation!",
    "publisher": {
      "@type": "Organization",
      "name": "CompilerSutra",
      "logo": {
        "@type": "ImageObject",
        "url": "https://compilersutra.com/img/logo.svg"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://compilersutra.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  
  // Append script dynamically
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
  