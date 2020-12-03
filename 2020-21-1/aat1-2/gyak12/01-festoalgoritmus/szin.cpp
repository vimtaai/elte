#include "szin.hpp"
#include <string>

Szin int_to_szin(int szam)
{
  return (Szin)(szam % 16);
}

Szin string_to_szin(string szoveg)
{
  return int_to_szin(stoi(szoveg));
}

vector<Szin> stringvector_to_szinvector(const vector<string> &szovegek)
{
  vector<Szin> kimenet(szovegek.size());

  for (int i = 0; i < szovegek.size(); ++i)
  {
    kimenet.at(i) = string_to_szin(szovegek.at(i));
  }

  return kimenet;
}

