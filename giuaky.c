//bai1

#include <stdio.h>

int main() {
    char name[50];
    char studentID[20];
    
    printf("Nhập họ tên: ");
    fgets(name, sizeof(name), stdin);
    
    printf("Nhập mã số sinh viên: ");
    fgets(studentID, sizeof(studentID), stdin);
    
    printf("\nThông tin sinh viên:\n");
    printf("Họ tên: %s", name);
    printf("Mã số sinh viên: %s", studentID);
    
    return 0;
}

//bai2

#include <stdio.h>

void sortArray(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

int main() {
    int n, digits[10], count = 0;
    
    printf("Nhập số nguyên n: ");
    scanf("%d", &n);
    
    while (n > 0) {
        digits[count++] = n % 10;
        n /= 10;
    }
    
    sortArray(digits, count);
    
    printf("Các chữ số sau khi sắp xếp: ");
    for (int i = 0; i < count; i++) {
        printf("%d ", digits[i]);
    }
    
    return 0;
}

//bai3 

#include <stdio.h>

double calculateSum(int n) {
    double sum = 0.0;
    for (int i = 1; i <= n; i++) {
        sum += 1.0 / i;
    }
    return sum;
}

int main() {
    int n;
    printf("Nhập n (n > 0): ");
    scanf("%d", &n);
    
    if (n > 0) {
        printf("Tổng: %.6lf\n", calculateSum(n));
    } else {
        printf("n phải lớn hơn 0\n");
    }
    
    return 0;
}

//bai4 

#include <stdio.h>
#include <math.h>

int main() {
    double S = 0.0, S0 = 1.0; // Giả sử S0 là giá trị gần đúng ban đầu
    double deltaS = 0.00002;
    int n = 1;
    
    while (fabs(S - S0) > deltaS) {
        S0 = S;
        S += 1.0 / n;
        n++;
    }
    
    printf("Tổng S: %.6lf\n", S);
    return 0;
}

//bai5 

#include <stdio.h>

int main() {
    int number;
    
    while (1) {
        printf("Nhập số nguyên: ");
        scanf("%d", &number);
        
        switch (number) {
            case 1:
                printf("Đây là số 1\n");
                break;
            case 2:
                printf("Đây là số 2\n");
                break;
            case 3:
                printf("Đây là số 3\n");
                break;
            default:
                printf("Dừng chương trình\n");
                return 0;
        }
    }
    
    return 0;
}

//bai6

#include <stdio.h>
#include <locale.h>

int main() {
    // Thiết lập môi trường để hỗ trợ tiếng Việt
    setlocale(LC_ALL, "");

    // Hiển thị tên và lời chào
    printf("Chào bạn! Tên tôi là [Tên của bạn].\n");
    printf("Chúc bạn một ngày vui vẻ và thành công!\n");

    return 0;
}