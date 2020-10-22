#include "multihalmaz.hpp"

Multihalmaz::Multihalmaz()
{
  //ctor
}

Multihalmaz::~Multihalmaz()
{
  //dtor
}

/** \brief Meghatározza, hogy egy érték hanyadik helyen szerepel az elemek vektorban
 *
 * \param int elem a keresett érték
 * \return int az adott elem sorszáma az elemek vektorban, ha nem szerepel, akkor -1
 */
int Multihalmaz::Hanyadik(const int elem)
{
  // Keresés
  int i = 0;
  while (i < elemek.size() && elemek.at(i).elem != elem)
  {
    ++i;
  }

  if (i < elemek.size())
  {
    return i;
  }
  else
  {
    return -1;
  }
}

bool Multihalmaz::TartalmazE(const int elem)
{
  int index = Hanyadik(elem);
  return index != -1;
}

void Multihalmaz::Multihalmazba(const int elem, const int db)
{
  int index = Hanyadik(elem);

  if (index != -1)
  {
    elemek.at(index).db += db;
  }
  else
  {
    ElemDarab uj;
    uj.elem = elem;
    uj.db = db;
    elemek.push_back(uj);
  }
}

void Multihalmaz::Mulithalmazbol(const int elem, const int db)
{
  int index = Hanyadik(elem);

  if (index != -1)
  {
    // Ha van benne elég darab, akkor csökkentjük a dbszámot
    if (elemek.at(index).db > db)
    {
      elemek.at(index).db -= db;
    }
    // Ha nincs, akkor kivesszük az elemet
    else
    {
      // Az utolsó helyen lévõ rekordot átrakjuk a törlendõ helyére
      elemek.at(index) = elemek.at(elemek.size() - 1);
      // Az utolsó rekordot töröljük
      elemek.pop_back();
    }
  }
}

int Multihalmaz::Multiplicitas(const int elem)
{
  int index = Hanyadik(elem);

  if (index != -1)
  {
    return elemek.at(index).db;
  }
  else
  {
    return 0;
  }
}

bool Multihalmaz::UresE()
{
  return elemek.size() == 0;
}

void Multihalmaz::Ures()
{
  elemek.clear();
}

Multihalmaz Multihalmaz::Metszet(Multihalmaz &masik)
{

}

Multihalmaz Multihalmaz::Unio(Multihalmaz &masik)
{

}

Multihalmaz Multihalmaz::Kulonbseg(Multihalmaz &masik)
{

}

bool Multihalmaz::ReszeE(Multihalmaz &masik)
{

}

ostream& operator<<(ostream &os, const Multihalmaz &h)
{
  os << "{";
  for (int i = 0; i < h.elemek.size(); ++i)
  {
    os << " " << h.elemek.at(i).elem << ":" << h.elemek.at(i).db;
  }
  os << " }";
}
