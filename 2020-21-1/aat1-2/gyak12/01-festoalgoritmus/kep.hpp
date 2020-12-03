#ifndef KEP_HPP
#define KEP_HPP

#include <iostream>
#include <vector>
#include "szin.hpp"

using namespace std;

class Kep
{
  public:
    Kep();
    Kep(string utvonal); // Túlterhelés (overloading)
    int GetSzelesseg();
    int GetMagassag();
    bool BenneVanE(int x, int y);
    void Kitolt(int x, int y, Szin szin);

    friend ostream& operator<<(ostream& os, Kep &kep);
  private:
    vector<vector<Szin>> kepadat;
};

#endif // KEP_HPP
