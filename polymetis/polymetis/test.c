#include <stdio.h>

#pragma message "Hello!"

#include <stdint.h>

uint32_t test_sdf;
uint64_t test_sdf;

uint32_t test(uint32_t x) {
    return x + 10;
}

uint64_t test(uint64_t x) {
    return x + 20;
}

int main() {
    uint32_t a = 1;
    uint64_t b = 2;

    printf("%d %d %d %d\n", a, b, test(a), test(b));
}
