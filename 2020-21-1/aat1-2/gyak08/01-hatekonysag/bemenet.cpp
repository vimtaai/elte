#include "bemenet.hpp"
#include <cstdlib>
#include <iostream>

using namespace std;

int veletlen_kozott(int minimum, int maximum)
{
  return rand() % (maximum - minimum + 1) + minimum;
}

vector<int> RendezettBemenet(int elemszam) {
  vector<int> bemenet(elemszam);

  bemenet.at(0) = veletlen_kozott(0, 100);
  for (int i = 1; i < bemenet.size(); ++i)
  {
    bemenet.at(i) = bemenet.at(i - 1) + veletlen_kozott(0, 5);
  }

  return bemenet;
}

vector<int> ForditvaRendezettBemenet(int elemszam) {
  vector<int> bemenet(elemszam);

  bemenet.at(0) = veletlen_kozott(1000, 2000);
  for (int i = 1; i < bemenet.size(); ++i)
  {
    bemenet.at(i) = bemenet.at(i - 1) - veletlen_kozott(0, 5);
  }

  return bemenet;
}

vector<int> VeletlenszeruBemenet(int elemszam) {
  vector<int> bemenet(elemszam);

  for (int i = 0; i < bemenet.size(); ++i)
  {
    bemenet.at(i) = veletlen_kozott(0, 10000);
  }

  return bemenet;
}

vector<int> MajdnemRendezettBemenet(int elemszam, int rendezetlenseg) {
  vector<int> bemenet = RendezettBemenet(elemszam);

  for (int i = 0; i < elemszam * rendezetlenseg; ++i)
  {
    int index = veletlen_kozott(0, bemenet.size() - 1);
    bemenet.at(i) = veletlen_kozott(0, 100);
  }

  return bemenet;
}


void BemenetKiir(const vector<int> &bemenet) {
  for (int i = 0; i < bemenet.size(); ++i)
  {
    cout << bemenet.at(i) << " ";
  }
  cout << endl;
}

void BemenetMasol(const vector<int> &egyik, vector<int> &masik)
{
  masik.clear();
  masik.resize(egyik.size());
  for (int i = 0; i < egyik.size(); ++i)
  {
    masik.at(i) = egyik.at(i);
  }
}
