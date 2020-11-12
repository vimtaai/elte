#include <iostream>
#include <fstream>
#include <vector>
#include <cstdlib>
#include <ctime>
#include "bemenet.hpp"
#include "idomero.hpp"

using namespace std;

string egyszeru_cseres_rendezes(vector<int> &bemenet)
{
  Idomero idomero(bemenet.size(), "Egyszerû cserés rendezés");

  idomero.Kezd();
  for (int i = 0; i < bemenet.size() - 1; ++i)
  {
    for (int j = i + 1 ; j < bemenet.size(); ++j)
    {
      if (bemenet.at(j) < bemenet.at(i))
      {
        int temp = bemenet.at(i);
        bemenet.at(i) = bemenet.at(j);
        bemenet.at(j) = temp;

        idomero.UjMozgatas(3);
      }
      idomero.UjOsszehasonlitas(1);
    }
  }
  idomero.Befejez();
  idomero.SzovegesStatisztika();

  return idomero.CSVStatisztika();
}

string maximum_kivalasztasos_rendezes(vector<int> &bemenet)
{
  Idomero idomero(bemenet.size(), "Maximum kiválasztásos rendezés");

  idomero.Kezd();
  for (int i = 0; i < bemenet.size() - 1; ++i)
  {
    int minind = i;
    for (int j = i + 1; j < bemenet.size(); ++j)
    {
      if (bemenet.at(j) < bemenet.at(minind))
      {
        minind = j;
      }
      idomero.UjOsszehasonlitas(1);
    }

    // Ha nincs jó helyen a vizsgált elem
    if (i != minind)
    {
      int temp = bemenet.at(i);
      bemenet.at(i) = bemenet.at(minind);
      bemenet.at(minind) = temp;

      idomero.UjMozgatas(3);
    }
  }
  idomero.Befejez();
  idomero.SzovegesStatisztika();

  return idomero.CSVStatisztika();
}

string buborekos_rendezes(vector<int> &bemenet)
{
  Idomero idomero(bemenet.size(), "Buborékos rendezés");

  idomero.Kezd();
  for (int i = bemenet.size(); i > 1; --i)
  {
    for (int j = 0; j < i - 1; ++j)
    {
      if (bemenet.at(j) > bemenet.at(j + 1))
      {
        int temp = bemenet.at(j + 1);
        bemenet.at(j + 1) = bemenet.at(j);
        bemenet.at(j) = temp;

        idomero.UjMozgatas(3);
      }
      idomero.UjOsszehasonlitas(1);
    }
  }
  idomero.Befejez();
  idomero.SzovegesStatisztika();

  return idomero.CSVStatisztika();
}

int main()
{
  // Nyelv beállítás
  setlocale(LC_ALL, "Hungarian");
  // Véletlenszám generátor init
  srand(time(nullptr));

  vector<int> bemenet;

  ofstream file("stat.csv");
  // CSV fejléc
  file << "Név" << ';'
       << "Elemek száma" << ';'
       << "Eltelt idõ" << ';'
       << "Összehasonlítások száma" << ';'
       << "Mozgatások száma" << ';'
       << "Mozgatások aránya" << ';'
       << "Mozgatások négyzetes aránya" << endl;

  bemenet = VeletlenszeruBemenet(100);
  file << maximum_kivalasztasos_rendezes(bemenet);
  bemenet = VeletlenszeruBemenet(250);
  file << maximum_kivalasztasos_rendezes(bemenet);
  bemenet = VeletlenszeruBemenet(500);
  file << maximum_kivalasztasos_rendezes(bemenet);
  bemenet = VeletlenszeruBemenet(1000);
  file << maximum_kivalasztasos_rendezes(bemenet);
  bemenet = VeletlenszeruBemenet(2500);
  file << maximum_kivalasztasos_rendezes(bemenet);
  bemenet = VeletlenszeruBemenet(5000);
  file << maximum_kivalasztasos_rendezes(bemenet);
  bemenet = VeletlenszeruBemenet(10000);
  file << maximum_kivalasztasos_rendezes(bemenet);

  file.close();

  return 0;
}
