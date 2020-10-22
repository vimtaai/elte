#ifndef MULTIHALMAZ_HPP
#define MULTIHALMAZ_HPP

#include <iostream>
#include <vector>

using namespace std;

struct ElemDarab
{
  int elem;
  int db;
};

class Multihalmaz
{
  public:
    Multihalmaz();
    virtual ~Multihalmaz();
    bool TartalmazE(const int elem); // elemeE
    void Multihalmazba(const int elem, const int db);
    void Mulithalmazbol(const int elem, const int db);
    int Multiplicitas(const int elem);
    bool UresE();
    void Ures();
    Multihalmaz Metszet(Multihalmaz &masik);
    Multihalmaz Unio(Multihalmaz &masik);
    Multihalmaz Kulonbseg(Multihalmaz &masik);
    bool ReszeE(Multihalmaz &masik); // ReszhalmazaE

    friend ostream& operator<<(ostream &os, const Multihalmaz &h);
  private:
    vector<ElemDarab> elemek;
    int Hanyadik(const int elem);
};

#endif // MULTIHALMAZ_HPP
