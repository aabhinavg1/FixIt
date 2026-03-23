// Integer-heavy bit mixing.

#include <cstdint>
#include <iostream>

int main() {
    constexpr std::size_t n = 1 << 24;
    std::uint64_t acc = 0x123456789abcdef0ull;

    for (int repeat = 0; repeat < 8; ++repeat) {
        for (std::size_t i = 0; i < n; ++i) {
            std::uint64_t x = static_cast<std::uint64_t>(i) + acc;
            x ^= x >> 33;
            x *= 0xff51afd7ed558ccdull;
            x ^= x >> 33;
            x *= 0xc4ceb9fe1a85ec53ull;
            x ^= x >> 33;
            acc += x;
        }
    }

    std::cout << acc << '\n';
    return 0;
}
