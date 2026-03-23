// Prefix-sum style dependency chain.

#include <iostream>
#include <vector>

int main() {
    constexpr std::size_t n = 1 << 22;
    std::vector<int> values(n, 1);

    long long checksum = 0;
    for (int repeat = 0; repeat < 16; ++repeat) {
        for (std::size_t i = 1; i < values.size(); ++i) {
            values[i] += values[i - 1] & 7;
        }
        checksum += values.back();
    }

    std::cout << checksum << '\n';
    return 0;
}
