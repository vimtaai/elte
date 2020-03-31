#include <iostream>

using namespace std;

struct Jarat
{
    int ferohely;
    int foglalt;

    double foglaltsag()
    {
        return (double)foglalt / ferohely;
    }

    bool problemas()
    {
        return foglaltsag() < 0.2 || foglaltsag() > 0.8;
    }
};

int main()
{
    // Be:
    int N;
    cin >> N;
    Jarat X[N];
    // Ki:
    int Db;
    int Y[N]; // HIBA!!!

    // Beolvasás:
    for (int i = 0; i < N; i += 1)
    {
        cin >> X[i].ferohely >> X[i].foglalt;
    }

    // Feldolgozás:
    Db = 0;
    for (int i = 0; i < N; i += 1)
    {
        // DEBUG
        // cout << X[i].ferohely << " " << X[i].foglalt << " " << X[i].foglaltsag() << " "
        //     << X[i].problemas() << endl;
        // /DEBUG
        if (X[i].problemas())
        {
            Y[Db] = i;
            Db += 1;
        }
    }

    // Kiírás
    for (int i = 0; i < Db; i += 1)
    {
        cout << Y[i] + 1 << ((i < Db - 1) ? " " : "");
    }
    cout << endl;

    return 0;
}





