/**
 * Szint: középhaladó
 * Téma: Időjárás
 * Feladat: Legmelegebb napok
 */
#include <iostream>
#include <vector>

using namespace std;

int main()
{
  int N, M;
  cin >> N >> M;


  // vector<vector<int>> homerseklet(N, vector<int>(M));
  // vagy
  vector<vector<int>> homerseklet = vector<vector<int>>(N, vector<int>(M));

  // Beolvas�s
  for (int telep = 0; telep < homerseklet.size(); ++telep)
  {
    for (int nap = 0; nap < homerseklet.at(telep).size(); ++nap)
    {
      cin >> homerseklet.at(telep).at(nap);
    }
  }

  // Maximumkiv�laszt�s m�trixra
  int maxhom = homerseklet.at(0).at(0);
  for (int telep = 0; telep < homerseklet.size(); ++telep)
  {
    for (int nap = 0; nap < homerseklet.at(telep).size(); ++nap)
    {
      if (homerseklet.at(telep).at(nap) > maxhom)
      {
        maxhom = homerseklet.at(telep).at(nap);
      }
    }
  }

  // Kiv�logat�sban eld�nt�s t�tel oszlopokra
  vector<int> legmelegebb_napok;
  for (int nap = 0; nap < homerseklet.at(0).size(); ++nap)
  {
    int telep = 0;
    while (telep < homerseklet.size() &&
           homerseklet.at(telep).at(nap) != maxhom)
    {
      ++telep;
    }

    if (telep < homerseklet.size())
    {
      legmelegebb_napok.push_back(nap);
    }
  }

  cout << legmelegebb_napok.size();
  for (int i = 0; i < legmelegebb_napok.size(); ++i)
  {
    cout << " " << legmelegebb_napok.at(i) + 1;
  }
  cout << endl;

  return 0;
}
