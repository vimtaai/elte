#ifndef BEMENT_HPP_INCLUDED
#define BEMENT_HPP_INCLUDED

#include <vector>

using namespace std;

vector<int> RendezettBemenet(int elemszam);
vector<int> ForditvaRendezettBemenet(int elemszam);
vector<int> VeletlenszeruBemenet(int elemszam);
vector<int> MajdnemRendezettBemenet(int elemszam, int rendezetlenseg = 0.1);

void BemenetKiir(const vector<int> &bemenet);
void BemenetMasol(const vector<int> &egyik, vector<int> &masik);

#endif // BEMENT_HPP_INCLUDED
