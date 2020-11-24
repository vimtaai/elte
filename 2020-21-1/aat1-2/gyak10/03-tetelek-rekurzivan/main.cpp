#include <iostream>
#include <vector>
#include "bemenet.hpp"
#include "idomero.hpp"

using namespace std;

int sorozatszamitas(const vector<int> &bemenet)
{
  int osszeg = 0;
  for (int i = 0; i < bemenet.size(); ++i)
  {
    osszeg += bemenet.at(i);
  }
  return osszeg;
}

int sorozatszamitas_rekurzivan(vector<int> &bemenet)
{
  // Báziseset
  if (bemenet.size() == 0)
  {
    return 0;
  }

  // Általános eset
  int utolso_elem = bemenet.at(bemenet.size() - 1);
  bemenet.pop_back();
  return utolso_elem + sorozatszamitas_rekurzivan(bemenet);
}

int main()
{
    vector<int> bemenet;

    const int BEMENET_MERET = 40000;
    bemenet = VeletlenszeruBemenet(BEMENET_MERET);

    Idomero idomero(BEMENET_MERET, "Sorozatszámítás");
    idomero.Kezd();
    int osszeg = sorozatszamitas(bemenet);
    idomero.Befejez();
    idomero.SzovegesStatisztika();
    cout << osszeg << endl;

    Idomero idomero2(BEMENET_MERET, "Sorozatszámítás rekurzívan");
    idomero2.Kezd();
    int osszeg2 = sorozatszamitas_rekurzivan(bemenet);
    idomero2.Befejez();
    idomero2.SzovegesStatisztika();
    cout << osszeg2 << endl;
    return 0;
}
