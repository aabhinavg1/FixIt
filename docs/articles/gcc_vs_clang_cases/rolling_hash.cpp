// Small text-scan style benchmark.

#include <cstdint>
#include <iostream>
#include <string>

int main() {
    std::string text;
    text.reserve(1 << 22);
    for (int i = 0; i < (1 << 18); ++i) {
        text += "alpha beta42 gamma_delta ";
    }

    std::uint32_t hash = 2166136261u;
    std::uint64_t checksum = 0;
    for (int repeat = 0; repeat < 8; ++repeat) {
        for (unsigned char ch : text) {
            hash ^= ch;
            hash *= 16777619u;
            if (ch == ' ') {
                checksum += hash;
                hash = 2166136261u;
            }
        }
    }

    std::cout << checksum << '\n';
    return 0;
}
