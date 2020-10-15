#include "halmaz.hpp"

template<typename T>
Halmaz<T>::Halmaz()
{
  //ctor
}

template<typename T>
Halmaz<T>::~Halmaz()
{
  //dtor
}

template<typename T>
bool Halmaz<T>::TartalmazE(const T elem)
{
  // Eldöntés
  int i = 0;

  while (i < elemek.size() && elemek.at(i) != elem)
  {
    i++;
  }

  return i < elemek.size();
}

template<typename T>
void Halmaz<T>::Halmazba(const T elem)
{
  if (!TartalmazE(elem))
  {
    elemek.push_back(elem);
  }
}

template<typename T>
void Halmaz<T>::Halmazbol(const T elem)
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

template<typename T>
bool Halmaz<T>::UresE()
{
  return elemek.size() == 0;
}

template<typename T>
void Halmaz<T>::Ures()
{
  elemek.clear();
}

template<typename T>
Halmaz<T> Halmaz<T>::Metszet(Halmaz<T> &masik)
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

template<typename T>
Halmaz<T> Halmaz<T>::Unio(Halmaz<T> &masik)
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

template<typename T>
Halmaz<T> Halmaz<T>::Kulonbseg(Halmaz<T> &masik)
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

template<typename T>
bool Halmaz<T>::ReszhalmazaE(Halmaz<T> &masik)
{
  int i = 0;

  while (i < elemek.size() && masik.TartalmazE(elemek.at(i)))
  {
    i++;
  }

  return i == elemek.size();
}

template<typename T>
ostream& operator<<(ostream &os, const Halmaz<T> &h)
{
  os << "{";
  for (int i = 0; i < h.elemek.size(); ++i)
  {
    os << " " << h.elemek.at(i);
  }
  os << " }";
}

// Megadjuk, hogy konkrétan milyen T típusokra mûködjön
template ostream& operator<<(ostream &os, const Halmaz<int> &h);
template ostream& operator<<(ostream &os, const Halmaz<char> &h);

