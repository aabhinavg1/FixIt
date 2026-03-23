// Indirect indexing and gather-style access.

#include <cstdint>
#include <iostream>
#include <vector>

int main() {
    constexpr std::size_t n = 1 << 20;
    std::vector<float> data(n, 1.0f);
    std::vector<std::uint32_t> index(n);
    for (std::size_t i = 0; i < n; ++i) {
        index[i] = static_cast<std::uint32_t>((i * 48271u + 17u) % n);
    }

    double sum = 0.0;
    for (int repeat = 0; repeat < 32; ++repeat) {
        for (std::size_t i = 0; i < n; ++i) {
            sum += data[index[i]];
        }
    }

    std::cout << sum << '\n';
    return 0;
}
