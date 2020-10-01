#include "tanora.hpp"
#include <sstream>

ostream& operator<<(ostream &os, const Tanora &ora)
{
    os << tanora_to_string(ora);
    return os;
}

istream& operator>>(istream &is, Tanora &ora)
{
    string bemenet;
    is >> bemenet;
    ora = string_to_tanora(bemenet);
    return is;
}

Tanora string_to_tanora(const string &str)
{
    istringstream iss(str);
    Tanora ora;

    string bemenet;

    getline(iss, bemenet, ';');
    ora.nev = bemenet;

    getline(iss, bemenet, ';');
    ora.nap = string_to_nap(bemenet);

    getline(iss, bemenet, ';');
    ora.kezdes = atoi(bemenet.c_str()); // Régi

    getline(iss, bemenet); // sor végéig olvasunk
    ora.hossz = stoi(bemenet); // Új

    return ora;
}

string tanora_to_string(const Tanora &ora)
{
    ostringstream oss;

    int kezdes_ora = ora.kezdes / 60;
    int kezdes_perc = ora.kezdes % 60;

    oss << ora.nap << " " << kezdes_ora << ":" << kezdes_perc << " - " << ora.nev;

    return oss.str();
}
