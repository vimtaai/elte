#ifndef TANORA_HPP_INCLUDED
#define TANORA_HPP_INCLUDED

#include <iostream>
#include "nap.hpp"

using namespace std;

struct Tanora
{
  string nev;
  Nap nap;
  int kezdes;
  int hossz;
};

ostream& operator<<(ostream &os, const Tanora ora);

#endif // TANORA_HPP_INCLUDED
