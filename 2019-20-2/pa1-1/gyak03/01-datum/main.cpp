// A) Feladat: Adott egy egész szám 1-7 között.
//    A hétnek melyik napját jelöli az adott szám?

#include <iostream>

using namespace std;

int main()
{
    const string hetnapjai[7] = {
        "hetfo", "kedd", "szerda", "csutortok",
        "pentek", "szombat", "vasarnap"
    };
    int nap;

    cout << "Add meg a napnak a sorszamat: ";
    cin >> nap;

    cout << hetnapjai[nap - 1] << endl;

    return 0;
}
