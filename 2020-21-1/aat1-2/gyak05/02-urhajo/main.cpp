#include <iostream>
#include "urhajo.hpp"

using namespace std;

int main()
{
    Urhajo u;
    u.SetGyorsulas(40);

    u.Gyorsul(2);

    cout << u.GetSebesseg() << endl;

    return 0;
}
