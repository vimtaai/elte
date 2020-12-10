#include "intervallumhalmaz.hpp"

IntervallumHalmaz::IntervallumHalmaz(int maximum)
{
  minimum = 1;
  elemek.resize(maximum);
}

IntervallumHalmaz::IntervallumHalmaz(int minimum, int maximum)
{
  this->minimum = minimum;
  elemek.resize(maximum - minimum + 1);
}

IntervallumHalmaz::~IntervallumHalmaz()
{
  //dtor
}

void IntervallumHalmaz::IntervallumHalmazba(int mettol, int meddig)
{
  for (int i = mettol; i <= meddig; ++i)
  {
    elemek.at(i - minimum) += 1;
  }
}

void IntervallumHalmaz::IntervallumHalmazbol(int mettol, int meddig)
{
  for (int i = mettol; i <= meddig; ++i)
  {
    if (elemek.at(i - minimum) > 0)
    {
      elemek.at(i - minimum) -= 1;
    }
  }
}

int IntervallumHalmaz::Multiplicitas(int elem)
{
  return elemek.at(elem - minimum);
}
