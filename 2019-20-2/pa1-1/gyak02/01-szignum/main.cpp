#include <iostream>

using namespace std;

int main()
{
    double szam;
    cout << "Adj meg egy szamot: ";
    cin >> szam;

    if (szam < 0)
    {
        cout << -1 << endl;
    }
    else if (szam > 0)
    {
        cout << 1 << endl;
    }
    else
    {
        cout << 0 << endl;
    }

    return 0;
}
