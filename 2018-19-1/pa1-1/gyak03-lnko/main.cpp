#include <iostream>

using namespace std;

int main()
{
    int a, b, maradek;

    cout << "a = ";
    cin >> a;
    cout << "b = ";
    cin >> b;

    if (a < b)
    {
        // csere(a, b)
        int c = a;
        a = b;
        b = c;
    }

    maradek = a % b;

    while (maradek > 0)
    {
        a = b;
        b = maradek;
        maradek = a % b;
    }

    cout << "lnko(a, b) = " << b << endl;

    return 0;
}
