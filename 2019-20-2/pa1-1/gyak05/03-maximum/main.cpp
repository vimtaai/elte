#include <iostream>

using namespace std;

int main()
{
    int N; // Versenyzõk szám

    cout << "Add meg a versenyzok szamat: ";
    cin >> N;

    int indulasok[N];
    int erkezesek[N];
    string nevek[N];

    for (int i = 0; i < N; i += 1)
    {
        cout << "Add meg a(z) " << i << ". versenyzo adatait: ";
        cin >> indulasok[i];
        cin >> erkezesek[i];
        cin >> nevek[i];
    }

    // TFH: az 1. a legkisebb
    int minInd = 0;
    int minErt = erkezesek[0] - indulasok[0];

    for (int i = 1; i < N; i += 1)
    {
        if (erkezesek[i] - indulasok[i] < minErt)
        {
            // Találtam jobbat
            minInd = i;
            minErt = erkezesek[i] - indulasok[i];
        }
    }

    cout << "A gyoztes: " << nevek[minInd] << endl;

    return 0;
}
