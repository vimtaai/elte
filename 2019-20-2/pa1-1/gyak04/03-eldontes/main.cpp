#include <iostream>

using namespace std;

int main()
{
    // Be, beolvasas
    int N;
    cout << "Add meg a napok szamat: ";
    cin >> N;

    double homersekletek[N];
    for (int i = 0; i < N; i += 1)
    {
        cout << "Add meg a(z) " << i+1 << ". homersekletet: ";
        cin >> homersekletek[i];
    }

    // Ki
    bool szmonoton;

    // Feldolgozás
    int i = 1;
    while (i < N && homersekletek[i] > homersekletek[i - 1])
    {
        i += 1;
    }
    szmonoton = i >= N;

    // Kiírás
    if (szmonoton)
    {
        cout << "Szigoruan monoton" << endl;
    }
    else
    {
        cout << "Nem szigoruan monoton" << endl;
    }

    return 0;
}
