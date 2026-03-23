// Small sort-heavy workload.

#include <algorithm>
#include <cstdint>
#include <iostream>
#include <vector>

int main() {
    constexpr std::size_t n = 1 << 18;
    std::vector<std::uint32_t> values(n);
    for (std::size_t i = 0; i < n; ++i) {
        values[i] = static_cast<std::uint32_t>((i * 1103515245u + 12345u) & 0x00ffffffu);
    }

    std::uint64_t checksum = 0;
    for (int repeat = 0; repeat < 8; ++repeat) {
        std::sort(values.begin(), values.end());
        checksum += values[n / 3] + values[n / 2] + values[(2 * n) / 3];
        std::rotate(values.begin(), values.begin() + 1024, values.end());
    }

    std::cout << checksum << '\n';
    return 0;
}
