#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <cstdlib>

#include "nap.hpp"
#include "tanora.hpp"

using namespace std;

int main()
{
    Nap nap;
    cout << "Adj meg egy napot: ";
    cin >> nap;

    string fajlnev;
    ifstream input;

    do
    {
      cout << "Add meg az adatfajl elereset: ";
      cin >> fajlnev;

      // Fájl megnyitása késõbb
      input.open(fajlnev);

      if (!input.is_open()) {
        cout << "A megadott fajl nem nyithato meg olvasasra" << endl;
      }
    } while (!input.is_open());

    vector<Tanora> adott_napi_orarend;
    while (!input.eof())
    {
      Tanora ora;
      input >> ora;

      if (ora.nap == nap)
      {
        adott_napi_orarend.push_back(ora);
      }
    }

    // Fájl lezárása
    input.close();

    for (int i = 0; i < adott_napi_orarend.size(); ++i)
    {
      cout << adott_napi_orarend.at(i) << endl;
    }
    return 0;
}
