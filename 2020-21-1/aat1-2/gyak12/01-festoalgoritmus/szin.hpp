#ifndef SZIN_HPP_INCLUDED
#define SZIN_HPP_INCLUDED

#include <iostream>
#include <vector>

using namespace std;

enum Szin {
  BLACK,
  NAVY,
  GREEN,
  TEAL,
  MAROON,
  PURPLE,
  OLIVE,
  SILVER,
  GRAY,
  BLUE,
  LIME,
  AQUA,
  RED,
  FUCHSIA,
  YELLOW,
  WHITE
};

Szin int_to_szin(int szam);
Szin string_to_szin(string szoveg);
vector<Szin> stringvector_to_szinvector(const vector<string> &szovegek);

#endif // SZIN_HPP_INCLUDED
