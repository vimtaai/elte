#ifndef NAP_HPP_INCLUDED
#define NAP_HPP_INCLUDED

#include <iostream>

using namespace std;

enum Nap { HETFO, KEDD, SZERDA, CSUTORTOK, PENTEK, SZOMBAT, VASARNAP };
const int NAPOK_SZAMA = 7;

Nap operator++(Nap &nap); // ++nap (prefix)
Nap operator++(Nap &nap, int); // nap++ (postfix)
ostream& operator<<(ostream &os, const Nap &nap);

#endif // NAP_HPP_INCLUDED
