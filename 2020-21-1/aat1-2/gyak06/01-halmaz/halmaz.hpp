#ifndef HALMAZ_HPP
#define HALMAZ_HPP

#include <iostream>
#include <vector>

using namespace std;

class Halmaz
{
  public:
    Halmaz();
    virtual ~Halmaz();
    bool TartalmazE(const int elem);
    void Halmazba(const int elem);
    void Halmazbol(const int elem);
    bool UresE();
    void Ures();
    Halmaz Metszet(Halmaz &masik);
    Halmaz Unio(Halmaz &masik);
    Halmaz Kulonbseg(Halmaz &masik);
    bool ReszhalmazaE(Halmaz &masik);
    friend ostream& operator<<(ostream &os, const Halmaz &h);
  private:
    vector<int> elemek;
};

#endif // HALMAZ_HPP
