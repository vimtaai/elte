#include <iostream>

using namespace std;

bool ferfi_e(string szemelyi_szam)
{
    return szemelyi_szam[0] == '1';
}

int main()
{
    // Be
    int db;

    // Beolvasas
    cout << "Hanyan dolgoznak itt? ";
    cin >> db;

    // Be
    string szemelyi_szamok[db];
    for (int i = 0; i < db; i += 1)
    {
        cout << "Add meg a(z) " << i+1 << ". szemelyi szamot: ";
        cin >> szemelyi_szamok[i];
    }

    // Ki
    bool van_ferfi;

    // Feldolgozás
    int i = 0;
    while (i < db && !ferfi_e(szemelyi_szamok[i]))
    {
        i += 1;
    }
    van_ferfi = i < db;

    // Kiírás
    if (van_ferfi)
    {
        cout << "Van ferfi" << endl;
    }
    else
    {
        cout << "Nincs ferfi" << endl;
    }

    return 0;
}
