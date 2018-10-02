#include <iostream>

using namespace std;

int main()
{
    int N; // Elemszám
    cin >> N;
    int T[N];
    // Beolvasás
    for (int i = 0; i < N; ++i)
    {
        cin >> T[i];
    }
    // Számolás

    // 1. összegzés
    int osszeg = 0;
    for (int i = 0; i < N; ++i)
    {
        osszeg += T[i];
    }
    cout << osszeg << endl;

    // 2. megszámolás
    int db = 0;
    for (int i = 0; i < N; ++i)
    {
        if (T[i] < 0)
        {
            db += 1;
        }
    }

    // 3. maximumkiválasztás
    int minimum = T[0];
    for (int i = 1; i < N; ++i)
    {
        if (T[i] < minimum)
        {
            minimum = T[i];
        }
    }
    cout << minimum << endl;

    // 4. eldöntés
    int i = 0;
    while (i < N && T[i] >= 0)
    {
        i += 1;
    }
    bool van_e = i < N;
    cout << van_e << endl;

    // 6. keresés
    int j = 0;
    while (j < N && T[j] != 5)
    {
        j += 1;
    }
    bool van_e_2 = j < N;
    int hanyadik = j;
    if (van_e_2)
    {
        cout << hanyadik << endl;
    }
    else
    {
        cout << "nincs" << endl;
    }

    return 0;
}
