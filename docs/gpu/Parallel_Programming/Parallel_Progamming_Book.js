import React from "react";

const books = [
  // GPU Programming + CUDA Focused Books
  {
    title: "CUDA Programming: A Developer's Guide to Parallel Computing with GPUs",
    author: "Shane Cook",
    description:
      "An advanced and practical guide for developers working with NVIDIA CUDA to harness GPU power in high-performance computing applications.",
    features: [
      "Covers advanced CUDA concepts like streams and memory optimization",
      "Includes debugging, profiling, and optimization techniques",
      "Real-world use cases and design patterns",
      "Ideal for professionals working in HPC or deep learning",
    ],
    amazonLink: "https://amzn.to/41Zvz3l",
  },
  {
    title: "GPU Parallel Program Development Using CUDA",
    author: "Tolga Soyata",
    description:
      "This book introduces parallel programming concepts using CUDA with a focus on real-world applications and performance optimization.",
    features: [
      "Step-by-step CUDA project development workflow",
      "Topics like memory hierarchy, warp scheduling, and coalescing",
      "Useful for students and professionals diving into GPU programming",
      "Includes lab-style exercises and examples",
    ],
    amazonLink: "https://amzn.to/448Yt2e",
  },

  // General Parallel Programming Books
  {
    title: "Programming Massively Parallel Processors",
    author: "David B. Kirk & Wen-mei W. Hwu",
    description:
      "A comprehensive guide to GPU computing and CUDA programming, this book covers parallel computation fundamentals, optimization strategies, and practical CUDA code examples.",
    features: [
      "Introduction to GPU architecture and CUDA programming",
      "Covers parallel algorithm design and performance analysis",
      "Practical examples for real-world problems",
      "Used widely in academic courses and industry",
    ],
    amazonLink: "https://amzn.to/3FQGiVf",
  },
  {
    title: "Parallel Programming in C with MPI and OpenMP",
    author: "Michael J. Quinn",
    description:
      "Focused on writing parallel programs in C using MPI and OpenMP, this book is ideal for students and developers looking to build high-performance applications.",
    features: [
      "Fundamentals of message passing and shared-memory models",
      "Hands-on C code with MPI and OpenMP",
      "Topics include load balancing, synchronization, and scalability",
      "Great for academic courses and competitive coding",
    ],
    amazonLink: "https://amzn.to/43E68p7",
  },
  {
    title: "CUDA by Example: An Introduction to General-Purpose GPU Programming",
    author: "Jason Sanders & Edward Kandrot",
    description:
      "This book introduces CUDA programming through practical examples and intuitive explanations, making it easy for newcomers to dive into GPU computing.",
    features: [
      "Step-by-step CUDA code explanations",
      "Focus on accelerating real applications with GPU",
      "Easy transition from serial to parallel thinking",
      "Ideal for beginners in GPU programming",
    ],
    amazonLink: "https://amzn.to/3Rz8yOt",
  },
  {
    title: "Introduction to Parallel Computing",
    author: "Ananth Grama, Anshul Gupta, George Karypis & Vipin Kumar",
    description:
      "An in-depth resource on parallel algorithm design, performance modeling, and scalability across different hardware platforms.",
    features: [
      "Detailed discussion on parallel architectures",
      "Task and data decomposition strategies",
      "Modeling, analysis, and scalability considerations",
      "Academic and research-oriented content",
    ],
    amazonLink: "https://amzn.to/4j9V3k0",
  },
  {
    title: "High Performance Python",
    author: "Micha Gorelick & Ian Ozsvald",
    description:
      "A practical guide to optimizing Python programs using parallelism, concurrency, and performance tools.",
    features: [
      "Techniques for parallel processing and concurrency in Python",
      "Cython, NumPy, and multi-core optimization examples",
      "Best practices for memory and CPU usage",
      "Useful for data scientists and engineers",
    ],
    amazonLink: "https://amzn.to/3DURO1b",
  },
];

export default function Parallel_ProgrammingBook() {
  return (
    <div style={{ padding: "10px" }}>
      <div style={{ background: "#e6f7ff", padding: "10px", borderRadius: "5px", marginBottom: "10px" }}>
        <strong>📢 Amazon Affiliate Tip:</strong>  
        If you purchase through these links, we may earn a small commission at no extra cost to you.  
        <br />
        <a href="https://amzn.to/3Jd7kSD" target="_blank" rel="noopener noreferrer">
          👉 Browse More Parallel Programming Books on Amazon
        </a>
      </div>

      <h2>⚡ Recommended Books on Parallel & GPU Programming</h2>
      {books.map((book, index) => (
        <details key={index} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}>
          <summary style={{ cursor: "pointer", fontWeight: "bold", fontSize: "18px" }}>📗 {book.title} – {book.author}</summary>
          <p><strong>Author:</strong> {book.author}</p>
          <p>{book.description}</p>
          <h4>🔹 What to Expect:</h4>
          <ul>
            {book.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">
            👉 Buy Now on Amazon
          </a>
        </details>
      ))}
    </div>
  );
}
