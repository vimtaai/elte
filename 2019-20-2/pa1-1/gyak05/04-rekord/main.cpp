#include <iostream>

using namespace std;

struct Versenyzo {
    int indulas;
    int erkezes;
    string nev;
};

int main()
{
    int N; // Versenyzõk szám

    cout << "Add meg a versenyzok szamat: ";
    cin >> N;

    Versenyzo versenyzok[N];

    for (int i = 0; i < N; i += 1)
    {
        cout << "Add meg a(z) " << i << ". versenyzo adatait: ";
        cin >> versenyzok[i].indulas;
        cin >> versenyzok[i].erkezes;
        cin >> versenyzok[i].nev;
    }

    // TFH: az 1. a legkisebb
    int minInd = 0;
    int minErt = versenyzok[0].erkezes - versenyzok[0].indulas;

    for (int i = 1; i < N; i += 1)
    {
        if (versenyzok[i].erkezes - versenyzok[i].indulas < minErt)
        {
            // Találtam jobbat
            minInd = i;
            minErt = versenyzok[i].erkezes - versenyzok[i].indulas;
        }
    }

    cout << "A gyoztes: " << versenyzok[minInd].nev << endl;

    return 0;
}
