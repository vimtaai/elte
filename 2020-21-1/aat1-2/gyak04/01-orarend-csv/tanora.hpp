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

ostream& operator<<(ostream &os, const Tanora &ora);
istream& operator>>(istream &is, Tanora &ora);

Tanora string_to_tanora(const string &str);
string tanora_to_string(const Tanora &ora);

#endif // TANORA_HPP_INCLUDED
