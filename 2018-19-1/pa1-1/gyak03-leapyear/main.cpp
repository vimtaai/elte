#include <iostream>

using namespace std;

int main()
{
    setlocale(LC_ALL, "hungarian"); // Magyar ékezetes karakterek engedélyezése
    int evszam;
    bool szokoev;

    cout << "Adj meg egy évszamot: ";
    cin >> evszam;

    // Hosszú megoldás

    if (evszam % 400 == 0)
    {
        szokoev = true;
    }
    else if (evszam % 100 == 0)
    {
        szokoev = false;
    }
    else if (evszam % 4 == 0)
    {
        szokoev = true;
    }
    else
    {
        szokoev = false;
    }

    if (szokoev)
    {
        cout << "szökõév" << endl;
    }
    else
    {
        cout << "nem szökõév" << endl;
    }

    // Rövid megoldás

    if (evszam % 4 == 0 && evszam % 100 != 0 || evszam % 400 == 0)
    {
        cout << "szökõév" << endl;
    }
    else
    {
        cout << "nem szökõév" << endl;
    }

    return 0;
}
