#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    // Bemenet
    double a, b, c;
    // Kimenet
    bool van_megoldas;
    double x1, x2;

    // Beolvasás
    cout << "a = ";
    cin >> a;
    cout << "b = ";
    cin >> b;
    cout << "c = ";
    cin >> c;

    // Elõfeltétel ellenõrzése
    if (a == 0)
    {
        return 1;
    }

    // Eredmény kiszámolása (feldolgozás)
    double d = b * b - 4 * a * c;
//    if (d < 0)
//    {
//        van_megoldas = false;
//    }
//    else
//    {
//        van_megoldas = true;
//    }
    van_megoldas = d >= 0;

    if (van_megoldas)
    {
        x1 = (-b + sqrt(d)) / (2 * a);
        x2 = (-b - sqrt(d)) / (2 * a);
    }

    // Kiírás
    if (van_megoldas)
    {
        cout << "A megoldasok "
             << x1 << ", " << x2 << endl;
    }
    else
    {
        cout << "Nincs valos megoldas" << endl;
    }

    return 0;
}
