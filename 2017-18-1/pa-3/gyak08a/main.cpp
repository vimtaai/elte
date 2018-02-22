#include <iostream>
#include <iomanip>

using namespace std;

double atlag(const int x[], const int n) {
    int s = 0;
    for (int i = 0; i < n; ++i)
    {
        s += x[i];
    }
    return (double)s / n;
}

int main()
{
    unsigned int N, M;
    cin >> N >> M;
    // Tömb létrehozása
    int** v = new int*[N];
    for (int i = 0; i < N; ++i)
    {
        v[i] = new int[M];
    }

    // Adatok beolvasása
    for (int i = 0; i < N; ++i)
    {
        for (int j = 0; j < M; ++j)
        {
            cin >> v[i][j];
        }
    }
    // Feldolgozás
    double s = 0;
    for (int i = 1; i < N; ++i)
    {
        s += atlag(v[i], M);

    }
    cout << "Atlag: " << (s / N) << endl;


//    for (int i = 0; i < N; ++i)
//    {
//        for (int j = 0; j < M; ++j)
//        {
//            cout << setw(4) << v[i][j] << " ";
//        }
//        cout << endl;
//    }
    return 0;
}
