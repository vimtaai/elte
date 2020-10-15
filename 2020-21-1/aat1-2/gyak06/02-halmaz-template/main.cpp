#include <iostream>
#include "halmaz.hpp"

using namespace std;

int main()
{
    int db2;
    Halmaz<char> h2;

    // Beolvasás
    cout << "Add meg a darabszamot: ";
    cin >> db2;
    for (int i = 0; i < db2; ++i)
    {
      char temp;
      cout << "Add meg a(z) " << (i + 1) << ". elemet: ";
      cin >> temp;
      h2.Halmazba(temp);
    }
    cout << h2 << endl;

    int db3;
    Halmaz<char> h3;

    // Beolvasás
    cout << "Add meg a darabszamot: ";
    cin >> db3;
    for (int i = 0; i < db3; ++i)
    {
      char temp;
      cout << "Add meg a(z) " << (i + 1) << ". elemet: ";
      cin >> temp;
      h3.Halmazba(temp);
    }
    cout << h3 << endl;

    cout << "Metszet: " << h2.Metszet(h3) << endl;
    cout << "Unio: " << h2.Unio(h3) << endl;
    cout << "Kulonbseg: " << h2.Kulonbseg(h3) << endl;
    cout << "ReszhalmazE: " << h2.ReszhalmazaE(h3) << endl;

    return 0;
}
