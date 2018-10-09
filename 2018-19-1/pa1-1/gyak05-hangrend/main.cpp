#include <iostream>

using namespace std;
// ¡ visszatérési típus (bool)
//   ¡ azonosító (magashangrendu)
//                  ¡ bemeneti változók (string szo)
bool magashangrendu(string szo) {
    int i = 0;
    while (i < szo.length() &&
           (szo[i] != 'a' && szo[i] != 'o' && szo[i] != 'u'))
    {
        i += 1;
    }
    return (i == szo.length());
}

bool melyhangrendu(string szo) {
    int i = 0;
    while (i < szo.length() &&
           (szo[i] != 'e' && szo[i] != 'i'))
    {
        i += 1;
    }
    return (i == szo.length());
}

int main()
{
    setlocale(LC_ALL, "hungarian");

    int N;
    cout << "Hány darab szó lesz? ";
    cin >> N;

    string szavak[N];
    for (int i = 0; i < N; ++i)
    {
        cout << "Add meg az " << (i + 1) << ". szót: ";
        cin >> szavak[i];
    }

    int dbmely = 0, dbmagas = 0, dbvegyes = 0;
    // Megszámolás tétel
    for (int i = 0; i < N; ++i)
    {
        if (magashangrendu(szavak[i]))
        {
            dbmagas += 1;
        }
        else if (melyhangrendu(szavak[i]))
        {
            dbmely += 1;
        }
        else
        {
            dbvegyes += 1;
        }
    }

    cout << "Magas hangrendû szavak száma: " << dbmagas << endl;
    cout << "Mély hangrendû szavak száma: " << dbmely << endl;
    cout << "Vegyes hangrendû szavak száma: " << dbvegyes << endl;

    return 0;
}
