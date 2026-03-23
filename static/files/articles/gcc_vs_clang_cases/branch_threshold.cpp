// Small branch-heavy loop.

#include <cstdint>
#include <iostream>
#include <vector>

int main() {
    constexpr std::size_t n = 1 << 20;
    std::vector<int> values(n);
    for (std::size_t i = 0; i < n; ++i) {
        values[i] = static_cast<int>((i * 17 + 23) % 101);
    }

    long long score = 0;
    for (int repeat = 0; repeat < 32; ++repeat) {
        for (int value : values) {
            if (value < 20) {
                score += value * 3;
            } else if (value < 70) {
                score += value * 2 - 7;
            } else {
                score -= value;
            }
        }
    }

    std::cout << score << '\n';
    return 0;
}
