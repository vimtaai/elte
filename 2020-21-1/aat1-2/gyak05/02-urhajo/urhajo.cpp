#include "urhajo.hpp"

Urhajo::Urhajo()
{
  Nev = "";
  Azon = "";
  Tomeg = 0;
  Sebesseg = 0;
  Gyorsulas = 0;
}

Urhajo::~Urhajo()
{
  //dtor
}

Urhajo::Urhajo(const Urhajo &other)
{
  Nev = other.Nev;
  Azon = other.Azon;
  Tomeg = other.Tomeg;
  Sebesseg = other.Sebesseg;
  Gyorsulas = other.Gyorsulas;
}

void Urhajo::Gyorsul(float ido)
{
  Sebesseg += ido * Gyorsulas;
}
