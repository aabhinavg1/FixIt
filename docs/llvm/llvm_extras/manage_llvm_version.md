
# Managing LLVM Versions

LLVM (Low-Level Virtual Machine) is a collection of modular and reusable compiler and toolchain technologies. Developers often need to manage multiple versions of LLVM for different projects or environments. In this guide, we will cover how to manage multiple LLVM versions and download the appropriate version for your needs.

## Table of Contents

- [Installing LLVM](#installing-llvm)
- [Managing Multiple Versions](#managing-multiple-versions)
- [Using `llvm-config`](#using-llvm-config)
- [Switching LLVM Versions](#switching-llvm-versions)
- [Download Links](#download-links)

## Installing LLVM

LLVM can be installed in different ways depending on your operating system.

### macOS

On macOS, you can use Homebrew to install LLVM:

```bash
brew install llvm
```

You can then access LLVM binaries (like `clang`, `llvm-config`, etc.) by adding the LLVM path to your `PATH`:

```bash
echo 'export PATH="/usr/local/opt/llvm/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Ubuntu

On Ubuntu, LLVM can be installed using apt:

```bash
sudo apt install llvm
```

If you want a specific version of LLVM, you can add the LLVM repository:

```bash
sudo apt-add-repository "deb http://apt.llvm.org/focal/ llvm-toolchain-focal-13 main"
sudo apt-get update
sudo apt-get install llvm-13
```

Replace \`13\` with the desired version.

## Managing Multiple Versions

If you need to manage different versions of LLVM for multiple projects, you can install them side by side. To make switching between versions easier, use the \`update-alternatives\` tool.

For example, to install both LLVM 12 and LLVM 13:

```bash
sudo apt install llvm-12 llvm-13
```

You can then configure \`update-alternatives\` to switch between versions:

```bash
sudo update-alternatives --install /usr/bin/clang clang /usr/bin/clang-12 20
sudo update-alternatives --install /usr/bin/clang clang /usr/bin/clang-13 10
```

To choose the version:

```bash
sudo update-alternatives --config clang
```

This will present a prompt to select the preferred version of LLVM.

## Using `llvm-config`

LLVM includes a tool called \`llvm-config\`, which provides information about the LLVM installation. It is especially useful when compiling programs with LLVM.

To get the version of LLVM:

```bash
llvm-config --version
```

To get information about LLVM components:

```bash
llvm-config --components
```

This tool can also help you set the correct include paths, libraries, and flags when compiling.

## Switching LLVM Versions

When you have multiple LLVM versions installed, it’s important to switch the version you want to use in your environment. Here’s how to change between them.

### macOS

If you installed LLVM via Homebrew, you can switch versions using the following commands:

```bash
brew switch llvm version
```

Replace \`version\` with the specific version number you want to switch to.

### Ubuntu

On Ubuntu, use the \`update-alternatives\` command to switch versions:

```bash
sudo update-alternatives --config clang
```

Similarly, you can configure \`update-alternatives\` for other tools like \`clang++\`, \`lld\`, \`lldb\`, etc.

## Download Links

You can download LLVM binaries directly from the official LLVM website or through package managers like Homebrew, \`apt\`, or \`yum\`.

- [LLVM Pre-built Binaries](https://releases.llvm.org/download.html)
- [LLVM GitHub Repository](https://github.com/llvm/llvm-project)

For older versions of LLVM, refer to the [LLVM Release Archive](https://releases.llvm.org/).

## Conclusion

Managing multiple LLVM versions is a common requirement for developers working with different compilers or toolchains. Using tools like `update-alternatives` or Homebrew makes switching between versions much easier. Ensure you always check the LLVM version using `llvm-config` to avoid mismatches when building your projects.
