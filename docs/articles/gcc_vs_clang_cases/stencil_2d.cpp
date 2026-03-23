// Compact 2D stencil update.

#include <iostream>
#include <vector>

int main() {
    constexpr std::size_t n = 1024;
    std::vector<float> a(n * n, 1.0f);
    std::vector<float> b(n * n, 0.0f);

    double checksum = 0.0;
    for (int repeat = 0; repeat < 12; ++repeat) {
        for (std::size_t i = 1; i + 1 < n; ++i) {
            for (std::size_t j = 1; j + 1 < n; ++j) {
                const std::size_t idx = i * n + j;
                b[idx] = 0.5f * a[idx] + 0.125f * (a[idx - 1] + a[idx + 1] + a[idx - n] + a[idx + n]);
                checksum += b[idx];
            }
        }
        a.swap(b);
    }

    std::cout << checksum << '\n';
    return 0;
}
