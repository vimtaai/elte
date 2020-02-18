#include <iostream>

using namespace std;

// Feladat: határozzuk meg n! értékét
int main()
{
    // Bemenet
    int n;
    // Kimenet
    double eredmeny;

    // Beolvasás
    cout << "Adj meg egy pozitiv egesz szamot: ";
    cin >> n;

    // Elõfeltétel
    if (n < 1)
    {
        cout << "Ez nem pozitiv egesz" << endl;
        return 1;
    }

    // Feldolgozás
    eredmeny = 1;
    for (int i = 2; i <= n; i += 1)
    {
        eredmeny *= i;
    }

    // Kiírás
    cout << "n! = " << eredmeny;

    return 0;
}
