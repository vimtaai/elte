#include <iostream>
#include "nap.hpp"
#include "tanora.hpp"

using namespace std;

int main()
{
    Tanora algtan1;
    algtan1.nev = "Algoritmizalas, adatmodellezes tanitasa 1.";
    algtan1.nap = CSUTORTOK;
    algtan1.kezdes = 14 * 60 + 15;
    algtan1.hossz = 90;

    cout << algtan1 << endl;

    return 0;
}
