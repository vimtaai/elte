#include <iostream>

using namespace std;

int main()
{
    // Bemenet
    string szoveg;

    // Beolvasás
    cout << "Add meg a szoveget: " << endl;
    getline(cin, szoveg);

    string maxszo = "";
    string szo = "";
    for (int i = 0; i < szoveg.size(); i += 1)
    {
        // Sorozatszámítás
        if (szoveg[i] != ' ')
        {
            szo += szoveg[i];
        }
        // Maximumkiválasztás
        else
        {
            if (szo.size() > maxszo.size())
            {
                maxszo = szo;
            }
            szo = "";
        }
    }

    if (szo.size() > maxszo.size())
    {
        maxszo = szo;
    }

    // Kiírás
    cout << "A leghosszabb szo: " << maxszo << endl;

    return 0;
}
