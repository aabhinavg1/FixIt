/** @type {import('@docusaurus/types').SidebarsConfig} */
const abiSidebar = {
  abiSidebar: [
    {
      type: 'doc',
      id: 'abi/index',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'CPU Architectures',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'abi/x86_64-sysv',
          label: 'x86_64 System V ABI',
        },
        {
          type: 'doc',
          id: 'abi/windows-x64',
          label: 'Windows x64 ABI',
        },
        {
          type: 'doc',
          id: 'abi/aarch64-aapcs64',
          label: 'AArch64 AAPCS64',
        },
        {
          type: 'doc',
          id: 'abi/riscv',
          label: 'RISC-V RV64 ABI',
        },
        {
          type: 'doc',
          id: 'abi/x86-sysv',
          label: 'x86 (32-bit) System V ABI',
        },
        {
          type: 'doc',
          id: 'abi/aarch32-aapcs',
          label: 'AArch32 AAPCS',
        },
        {
          type: 'doc',
          id: 'abi/powerpc64-elfv2',
          label: 'PowerPC64 ELFv2 ABI',
        },
        {
          type: 'doc',
          id: 'abi/mips-n32',
          label: 'MIPS N32 ABI',
        },
      ],
    },
    {
      type: 'category',
      label: 'GPU Architectures',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'abi/amdgpu',
          label: 'AMDGPU ABI',
        },
        {
          type: 'doc',
          id: 'abi/nvidia-ptx',
          label: 'NVIDIA PTX ABI',
        },
        {
          type: 'doc',
          id: 'abi/spir-v',
          label: 'SPIR-V ABI',
        },
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'ABI Explorer',
          href: '/abi',
        },
        {
          type: 'link',
          label: 'ABI Comparison',
          href: '/abi/compare',
        },
        {
          type: 'link',
          label: 'Clang Flags Explorer',
          href: '/tools/clang-flags-explorer',
        },
      ],
    },
  ],
};

module.exports = abiSidebar;
