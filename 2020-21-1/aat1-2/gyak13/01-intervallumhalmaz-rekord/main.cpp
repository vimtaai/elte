#include <iostream>
#include "intervallumhalmaz.hpp"

using namespace std;

int main()
{
//    IntervallumHalmaz ivh(5, 20);
    IntervallumHalmaz ivh(16);
    int mettol, meddig;
    int N;

    cin >> N;
    for (int i = 0; i < N; ++i)
    {
      cin >> mettol >> meddig;
      ivh.IntervallumHalmazba(mettol, meddig);
    }

    for (int i = 1; i <= 16; ++i)
    {
      cout << ivh.Multiplicitas(i) << " ";
//      if (ivh.Multiplicitas(i) == 0)
//      {
//        cout << i << " ";
//      }
    }
    cout << endl;

    return 0;
}
