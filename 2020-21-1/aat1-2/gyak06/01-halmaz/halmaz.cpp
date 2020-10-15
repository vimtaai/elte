#include "halmaz.hpp"

Halmaz::Halmaz()
{
  //ctor
}

Halmaz::~Halmaz()
{
  //dtor
}

bool Halmaz::TartalmazE(const int elem)
{
  // Eldöntés
  int i = 0;

  while (i < elemek.size() && elemek.at(i) != elem)
  {
    i++;
  }

  return i < elemek.size();
}

void Halmaz::Halmazba(const int elem)
{
  if (!TartalmazE(elem))
  {
    elemek.push_back(elem);
  }
}

void Halmaz::Halmazbol(const int elem)
{
  // Keresés
  int i = 0;

  while (i < elemek.size() && elemek.at(i) != elem)
  {
    i++;
  }

  if (i < elemek.size())
  {
    // Az utolsó elemet a helyére rakom
    elemek.at(i) = elemek.at(elemek.size() - 1);
    // Törlöm az utolsó elemet
    elemek.pop_back();
  }
}

bool Halmaz::UresE()
{
  return elemek.size() == 0;
}

void Halmaz::Ures()
{
  elemek.clear();
}

Halmaz Halmaz::Metszet(Halmaz &masik)
{
  Halmaz uj;

  for (int i = 0; i < elemek.size(); ++i)
  {
    if (masik.TartalmazE(elemek.at(i)))
    {
      uj.Halmazba(elemek.at(i));
    }
  }

  return uj;
}

Halmaz Halmaz::Unio(Halmaz &masik)
{
  Halmaz uj;

  for (int i = 0; i < elemek.size(); ++i)
  {
    uj.Halmazba(elemek.at(i));
  }

  for (int i = 0; i < masik.elemek.size(); ++i)
  {
    uj.Halmazba(masik.elemek.at(i));
  }

  return uj;
}

Halmaz Halmaz::Kulonbseg(Halmaz &masik)
{
  Halmaz uj;

  for (int i = 0; i < elemek.size(); ++i)
  {
    if (!masik.TartalmazE(elemek.at(i)))
    {
      uj.Halmazba(elemek.at(i));
    }
  }

  return uj;
}

bool Halmaz::ReszhalmazaE(Halmaz &masik)
{
  int i = 0;

  while (i < elemek.size() && masik.TartalmazE(elemek.at(i)))
  {
    i++;
  }

  return i == elemek.size();
}

ostream& operator<<(ostream &os, const Halmaz &h)
{
  os << "{";
  for (int i = 0; i < h.elemek.size(); ++i)
  {
    os << " " << h.elemek.at(i);
  }
  os << " }";
}



