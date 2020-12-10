#ifndef INTERVALLUMHALMAZ_HPP
#define INTERVALLUMHALMAZ_HPP

#include <vector>

using namespace std;

class IntervallumHalmaz
{
  public:
    IntervallumHalmaz(int maximum);
    IntervallumHalmaz(int minimum, int maximum);
    virtual ~IntervallumHalmaz();
    void IntervallumHalmazba(int mettol, int meddig);
    void IntervallumHalmazbol(int mettol, int meddig);
    int Multiplicitas(int elem);
    IntervallumHalmaz Metszet(IntervallumHalmaz &ivh);
    IntervallumHalmaz Unio(IntervallumHalmaz &ivh);
    IntervallumHalmaz Kulonbseg(IntervallumHalmaz &ivh);
  private:
    vector<int> elemek;
    int minimum;
};

#endif // INTERVALLUMHALMAZ_HPP
