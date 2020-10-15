#include <iostream>
#include "halmaz.hpp"

using namespace std;

int main()
{
//    Halmaz h;
//    h.Halmazba(5);
//    h.Halmazba(10);
//    h.Halmazba(2);
//    h.Halmazba(7);
//
//    cout << h.TartalmazE(5) << endl;
//    cout << h.TartalmazE(7) << endl;
//    cout << h.TartalmazE(9) << endl;
//
//    h.Halmazba(5);
//    h.Halmazbol(5);
//    cout << h << endl;
//
//    cout << h.TartalmazE(5) << endl;
//
//    h.Ures();
//
//    cout << h.TartalmazE(10) << endl;
//    cout << h.TartalmazE(7) << endl;
//    cout << h << endl;

    int db2;
    Halmaz h2;

    // Beolvasás
    cout << "Add meg a darabszamot: ";
    cin >> db2;
    for (int i = 0; i < db2; ++i)
    {
      int temp;
      cout << "Add meg a(z) " << (i + 1) << ". elemet: ";
      cin >> temp;
      h2.Halmazba(temp);
    }
    cout << h2 << endl;

    int db3;
    Halmaz h3;

    // Beolvasás
    cout << "Add meg a darabszamot: ";
    cin >> db3;
    for (int i = 0; i < db3; ++i)
    {
      int temp;
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
