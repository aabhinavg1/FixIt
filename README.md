
# CompilerSutra

CompilerSutra is a platform dedicated to teaching compiler technologies, covering topics such as LLVM, GCC, TVM, MLIR, and more. Whether you are a beginner or an experienced developer, CompilerSutra provides tutorials, blog posts, and resources to help you understand and contribute to the world of compiler development.

## Installation

To get started, follow these steps:

```bash
$ npm install
```

## Local Development

Run the following command to start a local development server:

```
$ npm start
```

This command will open a browser window, and you can see live changes without restarting the server.

## Build

To build the static content:

```
$ npm run build
```

The generated static files will be available in the `build` directory, which can be deployed to any static hosting service.

## Deployment

To deploy using SSH:

```
$ USE_SSH=true npm run deploy
```

To deploy without SSH, use the following:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

This command builds the website and pushes it to the `gh-pages` branch of your GitHub repository.

## How to Contribute

Contributions are welcome! Here are a few ways you can get involved:

1. **Create tutorials or improve documentation**: If you have expertise in compilers, feel free to contribute by writing tutorials, improving the existing content, or helping to expand the knowledge base.

2. **Report issues**: If you find any bugs or issues on the website, open an issue in the [GitHub repository](https://github.com/aabhinavg1/FixIt/tree/main).

3. **Submit Pull Requests**: If you want to contribute code or make changes, fork the repository, create a new branch, make your changes, and submit a pull request.

4. **Join discussions**: We value community input. Join us in discussions on the latest developments in compiler technologies.

Follow CompilerSutra on Twitter [@CompilerSutra](https://x.com/CompilerSutra).

---