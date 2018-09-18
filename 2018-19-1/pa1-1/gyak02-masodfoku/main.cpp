#include <iostream>

using namespace std;

int main()
{
    double a, b, c, d;
    unsigned int x;

    cout << "a=";
    cin >> a;
    cout << "b=";
    cin >> b;
    cout << "c=";
    cin >> c;

    cout << a << " " << b << " " << c << endl;

    if (a == 0)
    {
        cout << "Az egyenlet nem masodfoku!" << endl;
        return 1;
    }

    d = b * b - 4 * a * c;

    if (d < 0)
    {
        x = 0;
    }
    else if (d == 0) {
        x = 1;
    }
    else
    {
        x = 2;
    }

    cout << "A masodfoku egyenletnek " << x << " megoldasa van." << endl;

    return 0;
}
