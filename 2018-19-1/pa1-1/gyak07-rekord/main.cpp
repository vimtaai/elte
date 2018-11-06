#include <iostream>

using namespace std;

int main()
{
    int N;
    cin >> N;

    int magassagok[N];
    string nevek[N];

    for (int i = 0; i < N; ++i)
    {
        cin >> nevek[i];
        cin >> magassagok[i];
    }

    int m = 0;
    for (int i = 1; i < N; ++i)
    {
        if (magassagok[i] > magassagok[m])
        {
            m = i;
        }
    }

    cout << nevek[m] << endl;

    // REKORD
    struct ember {
        int magassag;
        string nev;
    };

    int N2;
    cin >> N2;
    // típus változó név
    // int szamok[N2];
    ember emberek[N2];

    for (int i = 0; i < N2; ++i)
    {
        cin >> emberek[i].nev;
        cin >> emberek[i].magassag;
    }

    int m2 = 0;
    for (int i = 1; i < N2; ++i)
    {
        if (emberek[i].magassag > emberek[m2].magassag)
        {
            m2 = i;
        }
    }
    cout << emberek[m2].nev << endl;


    return 0;
}
