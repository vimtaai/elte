#include "tanora.hpp"

ostream& operator<<(ostream &os, const Tanora &ora)
{
    int kezdes_ora = ora.kezdes / 60;
    int kezdes_perc = ora.kezdes % 60;

    os << ora.nap << " " << kezdes_ora << ":" << kezdes_perc << " - " << ora.nev;

    return os;
}
