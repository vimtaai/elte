#include <iostream>

using namespace std;

bool prim_e(int x)
{
    int i = 2;
    while (i <= (x / 2) && x % i != 0)
    {
        i += 1;
    }
    return i > (x / 2);
}

long pow_int(int alap, int kitevo)
{
    long eredmeny = 1;
    for (int i = 0; i < kitevo; i += 1)
    {
        eredmeny *= alap;
    }
    return eredmeny;
}

int main()
{
    // Bemenet
    int N;
    // Beolvasás
    // Ef: N > 1
    do
    {
        cout << "Hany jegyu szamot szeretnel? ";
        cin >> N;
    } while(N <= 1);

    // Feldolgozás
    int i = pow_int(10, N - 1) + 1;
//    while (!(prim_e(i) && (i % 10 == 1)))
//    {
//        i += 1;
//    }
    while (!prim_e(i))
    {
        i += 10;
    }

    // Kiírás
    cout << "Az elso " << N << " jegyu prim: " << i << endl;

    return 0;
}
