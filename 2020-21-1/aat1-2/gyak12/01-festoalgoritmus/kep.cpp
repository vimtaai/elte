#include "kep.hpp"
#include <fstream>
#include "szoveg.hpp"
#include <windows.h>

Kep::Kep()
{
  //ctor
}

Kep::Kep(string utvonal)
{
  ifstream file(utvonal);

  if (!file.is_open())
  {
    cout << "Nem tudtam megnyitni a kepfajlt" << endl;
    return;
  }

  while(!file.eof())
  {
    string sor;
    getline(file, sor);

    kepadat.push_back(stringvector_to_szinvector(split(sor, ',')));
  }

  file.close();
}

int Kep::GetSzelesseg()
{
  if (kepadat.size() == 0)
  {
    return 0;
  }
  else
  {
    return kepadat.at(0).size();
  }
}

int Kep::GetMagassag()
{
  return kepadat.size();
}

bool Kep::BenneVanE(int x, int y)
{
  return !(x < 0 || x >= GetSzelesseg() || y < 0 || y >= GetMagassag());
}

void Kep::Kitolt(int x, int y, Szin szin)
{
  // Ahhoz, hogy a tömbbbõl ne indexeljünk ki
  if (!BenneVanE(x, y))
  {
    return;
  }

  Szin regiszin = kepadat.at(y).at(x);
  kepadat.at(y).at(x) = szin;

  // A négy szomszédon végigmegyünk
//  for (int dx = -1; dx <= 1; ++dx)
//  {
//    for (int dy = -1; dy <= 1; ++dy)
//    {
//      if (dx == 0 || dy == 0 && dx != dy)
//      {
//        if (BenneVanE(x+dx, y+dy) && kepadat.at(y+dy).at(x+dx) == regiszin)
//        {
//          Kitolt(x+dx, y+dy, szin);
//        }
//      }
//    }
//  }

  if (BenneVanE(x, y-1) && kepadat.at(y-1).at(x) == regiszin)
  {
    Kitolt(x, y-1, szin);
  }
  if (BenneVanE(x, y+1) && kepadat.at(y+1).at(x) == regiszin)
  {
    Kitolt(x, y+1, szin);
  }
  if (BenneVanE(x-1, y) && kepadat.at(y).at(x-1) == regiszin)
  {
    Kitolt(x-1, y, szin);
  }
  if (BenneVanE(x+1, y) && kepadat.at(y).at(x+1) == regiszin)
  {
    Kitolt(x+1, y, szin);
  }
}

ostream& operator<<(ostream &os, Kep &kep)
{
  HANDLE hConsole;
  hConsole = GetStdHandle(STD_OUTPUT_HANDLE);

  for (int y = 0; y < kep.GetMagassag(); ++y)
  {
    for (int x = 0; x < kep.GetSzelesseg(); ++x)
    {
      SetConsoleTextAttribute(hConsole, kep.kepadat.at(y).at(x));
      os << kep.kepadat.at(y).at(x);
    }
    os << endl;
  }
  return os;
}
