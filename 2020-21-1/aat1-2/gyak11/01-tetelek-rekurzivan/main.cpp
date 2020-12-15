#include <iostream>
#include <vector>
#include "bemenet.hpp"
#include "idomero.hpp"

using namespace std;

int sorozatszamitas(const vector<int> &bemenet, Idomero &idomero)
{
  int osszeg = 0;
  for (int i = 0; i < bemenet.size(); ++i)
  {
    osszeg += bemenet.at(i);
  }
  return osszeg;
}

int sorozatszamitas_rekurzivan(vector<int> &bemenet, Idomero &idomero)
{
  // Báziseset
  if (bemenet.size() == 0)
  {
    return 0;
  }

  // Általános eset
  int utolso_elem = bemenet.at(bemenet.size() - 1);
  bemenet.pop_back();

  idomero.UjRekurzio();
  int eredmeny = sorozatszamitas_rekurzivan(bemenet, idomero);
  idomero.RekurzioVege();
  eredmeny += utolso_elem;

  return eredmeny;
}

vector<int> masolas(vector<int> &bemenet, Idomero &idomero)
{
  vector<int> eredmeny(bemenet.size());

  for (int i = 0; i < bemenet.size(); ++i)
  {
    eredmeny.at(i) = (bemenet.at(i) * bemenet.at(i));
  }

  return eredmeny;
}

vector<int> masolas_rekurzivan(vector<int> &bemenet, Idomero &idomero)
{
  // Báziseset
  if (bemenet.size() == 0)
  {
    return vector<int>();
  }
  // Általános eset
  else
  {
    int utolso_elem = bemenet.at(bemenet.size() - 1);
    bemenet.pop_back();

    idomero.UjRekurzio();
    vector<int> eredemeny = masolas_rekurzivan(bemenet, idomero);
    idomero.RekurzioVege();
    eredemeny.push_back(utolso_elem * utolso_elem);

    return eredemeny;
  }
}

vector<int> kivalogatas(vector<int> &bemenet, Idomero &idomero)
{
  vector<int> eredmeny;

  for (int i = 0; i < bemenet.size(); ++i)
  {
    if (bemenet.at(i) % 2 == 0)
    {
      eredmeny.push_back(bemenet.at(i));
    }
  }

  return eredmeny;
}

vector<int> kivalogatas_rekurzivan(vector<int> &bemenet, Idomero &idomero)
{
  // Báziseset
  if (bemenet.size() == 0)
  {
    return vector<int>();
  }
  // Általános eset
  else
  {
    int utolso_elem = bemenet.at(bemenet.size() - 1);
    bemenet.pop_back();

    idomero.UjRekurzio();
    vector<int> eredmeny = kivalogatas_rekurzivan(bemenet, idomero);
    idomero.RekurzioVege();
    if (utolso_elem % 2 == 0)
    {
      eredmeny.push_back(utolso_elem);
    }

    return eredmeny;
  }
}

int main()
{
  setlocale(LC_ALL, "Hungarian");
  vector<int> bemenet;

  const int BEMENET_MERET = 20;
  bemenet = VeletlenszeruBemenet(BEMENET_MERET);

  Idomero idomero(BEMENET_MERET, "Sorozatszámítás");
  idomero.Kezd();
  int osszeg = sorozatszamitas(bemenet, idomero);
  idomero.Befejez();
  idomero.SzovegesStatisztika();
  cout << osszeg << endl;

  Idomero idomero2(BEMENET_MERET, "Sorozatszámítás rekurzívan");
  idomero2.Kezd();
  int osszeg2 = sorozatszamitas_rekurzivan(bemenet, idomero2);
  idomero2.Befejez();
  idomero2.SzovegesStatisztika();
  cout << osszeg2 << endl;

  bemenet = VeletlenszeruBemenet(BEMENET_MERET);

  Idomero idomero3(BEMENET_MERET, "Másolás");
  idomero3.Kezd();
  vector<int> eredmeny = masolas(bemenet, idomero3);
  idomero3.Befejez();
  idomero3.SzovegesStatisztika();
  for (int i = 0; i < eredmeny.size(); ++i)
  {
    cout << eredmeny.at(i) << " ";
  }
  cout << endl;

  Idomero idomero4(BEMENET_MERET, "Másolás rekurzívan");
  idomero4.Kezd();
  vector<int> eredmeny2 = masolas_rekurzivan(bemenet, idomero4);
  idomero4.Befejez();
  idomero4.SzovegesStatisztika();
  for (int i = 0; i < eredmeny2.size(); ++i)
  {
    cout << eredmeny2.at(i) << " ";
  }
  cout << endl;

  bemenet = VeletlenszeruBemenet(BEMENET_MERET);

  Idomero idomero5(BEMENET_MERET, "Kiválogatás");
  idomero5.Kezd();
  vector<int> eredmeny3 = kivalogatas(bemenet, idomero5);
  idomero5.Befejez();
  idomero5.SzovegesStatisztika();
  for (int i = 0; i < eredmeny3.size(); ++i)
  {
    cout << eredmeny3.at(i) << " ";
  }
  cout << endl;

  Idomero idomero6(BEMENET_MERET, "Kiválogatás rekurzívan");
  idomero6.Kezd();
  vector<int> eredmeny4 = kivalogatas_rekurzivan(bemenet, idomero6);
  idomero6.Befejez();
  idomero6.SzovegesStatisztika();
  for (int i = 0; i < eredmeny4.size(); ++i)
  {
    cout << eredmeny4.at(i) << " ";
  }
  cout << endl;
  return 0;
}
