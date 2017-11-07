#include <iostream>

using namespace std;

bool egynapos(double h, int e)
{
    return (h < 20 && e < 800);
}

double nehezseg(double h, int e)
{
    return h + (double)e / 100;
}

int main()
{
    const int MAXN = 256;
    // Be:
    double hossz[MAXN];
    int N, emelkedes[MAXN], csokkenes[MAXN];
    // Beolvasás
    cin >> N;
    for (int i = 0; i < N; ++i)
    {
        cin >> hossz[i] >> emelkedes[i] >> csokkenes[i];
    }
    // 1. feladat - eldöntés
    int i = 0;
    while (i < N && emelkedes[i] != 0)
    {
        ++i;
    }
    cout << ((i < N) ? "Volt" : "Nem volt") << endl;
//    if (i < N)
//    {
//        cout << "Volt" << endl;
//    }
//    else
//    {
//        cout << "Nem volt" << endl;
//    }
    // 2. feladat
    int db = 0;
    for (int j = 0; j < N; ++j)
    {
        if (egynapos(hossz[j], emelkedes[j]))
        {
            ++db;
        }
    }
    cout << db << endl;

    // 3. feladat
    int ind = 0;
    for (int j = 1; j < N; ++j)
    {
        if (nehezseg(hossz[j], emelkedes[j]) <
            nehezseg(hossz[ind], emelkedes[ind]))
        {
            ind = j;
        }
    }
    cout << ind << endl;

    return 0;
}
