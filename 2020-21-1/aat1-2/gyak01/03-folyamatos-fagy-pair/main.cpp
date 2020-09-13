/**
 * Szint: kezdő
 * Téma: Programozási tételek: összeépítése
 * Feladat: Folyamatos fagy
 */
#include <iostream>
#include <vector>
#include <utility>

using namespace std;

int main()
{
  int N, K;
  cin >> N >> K;

  vector<pair<int, int>> napok(N);
  for (int i = 0; i < N; ++i)
  {
    cin >> napok.at(i).first >> napok.at(i).second;
  }

  int akthossz = 0;
  int i = 0;
  while (i < napok.size() && akthossz < K)
  {
    if (napok.at(i).second < 0)
    {
      akthossz += 1;
    }
    else
    {
      akthossz = 0;
    }
    ++i;
  }

  if (akthossz == K)
  {
    cout << i - K + 1 << " " << i << endl;
  }
  else
  {
    cout << -1 << endl;
  }


  return 0;
}
