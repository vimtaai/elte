#include <math.h>
#include "pont.hpp"

// Konstruktor
Pont::Pont()
{
  x = 0;
  y = 0;
}

Pont::Pont(float x, float y)
{
  this->x = x;
  this->y = y;
}

Pont::Pont(const Pont &p)
{
  x = p.x;
  y = p.y;
}

float Pont::GetX()
{
  return x;
}

void Pont::SetX(float new_x)
{
  x = new_x;
}

float Pont::GetY()
{
  return y;
}

void Pont::SetY(float new_y)
{
  y = new_y;
}

void Pont::Nagyit(float arany)
{
  x = x * arany;
  y = y * arany;
}

float Pont::Tavolsag(const Pont &p)
{
  return sqrt((p.x - x) * (p.x - x) + (p.y - y) * (p.y - y));
}

Pont operator+(const Pont &p1, const Pont &p2)
{
  Pont uj_pont(p1.x + p2.x, p1.y + p2.y);
  return uj_pont;
}

ostream& operator<<(ostream &os, const Pont &p)
{
  os << "(" << p.x << ";" << p.y << ")";
  return os;
}
