// A) Feladat: Adott, hogy az év hanyadik napja,
//    és hogy milyen nap volt jan. 1-e.
//    Milyen nap van ma?

#include <iostream>

using namespace std;

int main()
{
    const string hetnapjai[7] = {
        "hetfo", "kedd", "szerda", "csutortok",
        "pentek", "szombat", "vasarnap"
    };
    int nap;
    string jan1;

    cout << "Add hanyadik napja van most az evnek: ";
    cin >> nap;
    cout << "Add meg, hogy milyen nap volt jan. 1-e: ";
    cin >> jan1;

    int sorszam = 0;
    while (hetnapjai[sorszam] != jan1)
    {
        sorszam += 1;
    }

    cout << hetnapjai[(nap + sorszam - 1) % 7] << endl;

    return 0;
}
