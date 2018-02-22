#include <iostream>

using namespace std;

int main()
{
    const int MAXN = 32;
    // Be
    string mondat;
    // Ki
    int magasdb, melydb, vegyesdb;

    // Beolvasas
    getline(cin, mondat);

    string szavak[MAXN];
    int szoszam = 0;
    for(int i = 0; i < mondat.length(); ++i)
    {
        if (mondat[i] == ' ')
        {
            ++szoszam;
        } else {
            szavak[szoszam] += mondat[i];
        }
    }
    //cout << szoszam + 1 << endl;

    // Megszámolás
    magasdb = 0;
    for (int i = 0; i <= szoszam; ++i)
    {
        // Eldöntés
        bool magase;
        int j = 0;
        while (j < szavak[i].length() &&
               szavak[i][j] != 'a' &&
               szavak[i][j] != 'o' &&
               szavak[i][j] != 'u')
        {
            ++j;
        }
        magase = (j == szavak[i].length());
        // Eldöntés vége

        if (magase)
        {
            ++magasdb;
        }
    }
    cout << "Magas hangrendu: " << magasdb << endl;

    // Megszámolás
    melydb = 0;
    for (int i = 0; i <= szoszam; ++i)
    {
        // Eldöntés
        bool melye;
        int j = 0;
        while (j < szavak[i].length() &&
               szavak[i][j] != 'e' &&
               szavak[i][j] != 'i')
        {
            ++j;
        }
        melye = (j == szavak[i].length());
        // Eldöntés vége

        if (melye)
        {
            ++melydb;
        }
    }
    cout << "Mely hangrendu: " << melydb << endl;
    cout << "Vegyes hangrendu: " <<
            szoszam + 1 - magasdb - melydb << endl;

//    for (int i = 0; i <= szoszam; ++i)
//    {
//        cout << szavak[i] << endl;
//    }


    return 0;
}
