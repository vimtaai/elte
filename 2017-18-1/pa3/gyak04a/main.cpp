#include <iostream>

using namespace std;

int beInt(int minimum, int max)
{
    int szam;
    do
    {
       cin >> szam;
    }
    while(szam < minimum || szam > max); // Amíg nem jó
    return szam;
}

int main()
{
    const int MAXN = 180;
    // Be:
    int jegyek[MAXN], kreditek[MAXN];
    int N;
    // Ki
    double atlag, kreditindex;
    bool bukott_e;

    // Beolvasás
    cout << "Hany targyat vegeztel iden?" << endl;
    N = beInt(0, MAXN);
    for (int i = 0; i < N; ++i)
    {
        cout << "Add meg a(z) " << i+1 << ". jegyet!" << endl;
        jegyek[i] = beInt(1, 5);
        cout << "Add meg a(z) " << i+1 << ". kreditet!" << endl;
        kreditek[i] = beInt(0, 30);
    }

    // Feldolgozás

    // Átlagszámítás
    int S = 0;
    for (int i = 0; i < N; ++i)
    {
        S += jegyek[i];
    }
    atlag = (double)S / N;
    cout << "Atlag: " << atlag << endl;

    // Kreditindex-számítás
    int K = 0;
    for (int i = 0; i < N; ++i)
    {
        if (jegyek[i] != 1)
        {
            K += jegyek[i] * kreditek[i];
        }
    }
    kreditindex = (double)K / 30;
    cout << "Kreditindex: " << kreditindex << endl;

    // Bukott-e
    int j = 0;
    while (j < N && !(jegyek[j] == 1))
    {
        ++j;
    }
    bukott_e = j < N;
    if (bukott_e)
    {
        cout << "Volt bukas" << endl;
    }
    else
    {
        cout << "Nem volt bukas" << endl;
    }

    // Ötösök száma
    int db = 0;
    for (int i = 0; i < N; ++i)
    {
        if (jegyek[i] == 5)
        {
            ++db;
        }
    }
    cout << db << " db 5-os jegyet szerzett." << endl;

    // Legrosszabb jegy
    int minimum = jegyek[0];
    for (int i = 1; i < N; ++i)
    {
        if (jegyek[i] < minimum)
        {
            minimum = jegyek[i];
        }
    }
    cout << "A legrosszabb jegy: " << minimum << endl;

    // Ha volt bukás, akkor hanyadik tárgyból?
    if (bukott_e)
    {
        int m = 0;
        while (jegyek[m] != 1)
        {
            ++m;
        }
        cout << "A(z) " << m+1 << ". targy volt 1-es" << endl;
    }

    // Hanyadik tárgy volt 5 kredites?
    bool l;
    int index;

    int p = 0;
    while (p < N && kreditek[p] != 5)
    {
        ++p;
    }
    l = p < N;
    if (l)
    {
        index = p;
        cout << "A(z) " << index+1 << ". targy 5 kredites." << endl;
    }
    else
    {
        cout << "Nincs 5 kredites targy" << endl;
    }

    return 0;
}
