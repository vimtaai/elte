#include <iostream>

using namespace std;

int main()
{
    // Statikus tömb
    const string napok[] = {"monday",
                            "tuesday",
                            "wednesday",
                            "thursday",
                            "friday",
                            "saturday",
                            "sunday"};
    // Be
    string nev;
    cin >> nev;
    // Feldolgozás
    int i = 0;
    while (napok[i] != nev)
    {
        ++i;
    }
    cout << i + 1 << endl;

    return 0;
}
