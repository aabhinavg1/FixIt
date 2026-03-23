// Small memory-access benchmark.

#include <cstdint>
#include <iostream>
#include <vector>

int main() {
    constexpr std::size_t rows = 2048;
    constexpr std::size_t cols = 2048;
    std::vector<float> matrix(rows * cols, 1.0f);

    double sum = 0.0;
    for (int repeat = 0; repeat < 8; ++repeat) {
        for (std::size_t col = 0; col < cols; col += 2) {
            for (std::size_t row = 0; row < rows; ++row) {
                sum += matrix[row * cols + col];
            }
        }
    }

    std::cout << sum << '\n';
    return 0;
}
