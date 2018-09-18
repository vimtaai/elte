#include <iostream>

using namespace std;

int main()
{
    unsigned int x, xf; // [a-zA-Z0-9_]

    cout << "x=";
    cin >> x;
    cout << x << endl;

    xf = 1;
    for (int i = 2; i <= x; ++i)
    {
        // xf = xf * i;
        xf *= i;
    }

    cout << x << "! = " << xf << endl;

    return 0;
}
