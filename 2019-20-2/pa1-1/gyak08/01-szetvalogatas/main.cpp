#include <iostream>
#include <string> // to_string (ha c++11-re van állítva a fordító)
#include <stdlib.h> // itoa, atoi

using namespace std;

struct Jarat
{
    int ferohely;
    int foglalt;

    double foglaltsag()
    {
        return (double)foglalt / ferohely;
    }

    bool ures()
    {
        return foglaltsag() < 0.2;
    }

    bool zsufolt()
    {
         return foglaltsag() > 0.8;
    }
};

string tomb_szovegge(const int tomb[], const int db)
{
    string kimenet = "";
    for (int i = 0; i < db; i += 1)
    {
        //kimenet += to_string(tomb[i]) + " ";
        char szovegkent[20];
        itoa(tomb[i], szovegkent, 10);
        kimenet += szovegkent;
        kimenet += " ";
    }
    return kimenet;
}

void tomb_ki(const int tomb[], const int db)
{
    for (int i = 0; i < db; i += 1)
    {
        cout << tomb[i] + 1 << ((i < db - 1) ? " " : "");
    }
}

int main()
{
    // Be:
    int N;
    cin >> N;
    Jarat X[N];
    // Ki:
    int DbUres, DbZsufolt, DbEgyeb;
    int YUres[N], YZsufolt[N], YEgyeb[N];

    // Beolvasás:
    for (int i = 0; i < N; i += 1)
    {
        cin >> X[i].ferohely >> X[i].foglalt;
    }

    // Feldogozás:
    DbUres = 0;
    DbZsufolt = 0;
    DbEgyeb = 0;
    for (int i = 0; i < N; i += 1)
    {
        if (X[i].ures())
        {
            YUres[DbUres] = i;
            DbUres += 1;
        }
        else if (X[i].zsufolt())
        {
            YZsufolt[DbZsufolt] = i;
            DbZsufolt += 1;
        }
        else
        {
            YEgyeb[DbEgyeb] = i;
            DbEgyeb += 1;
        }
    }

    // Kíírás:
    cout << "Ures: " << tomb_szovegge(YUres, DbUres) << endl;
    cout << "Zsufolt: " << tomb_szovegge(YZsufolt, DbZsufolt) << endl;
    cout << "Egyeb: " << tomb_szovegge(YEgyeb, DbEgyeb) << endl;

    cout << "Ures: ";
    tomb_ki(YUres, DbUres);
    cout << "Zsufolt: ";
    tomb_ki(YZsufolt, DbZsufolt);
    cout << "Egyeb: ";
    tomb_ki(YEgyeb, DbEgyeb);

    return 0;
}








