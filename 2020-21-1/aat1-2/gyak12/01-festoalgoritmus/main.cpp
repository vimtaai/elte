#include <iostream>
#include "kep.hpp"
#include "szin.hpp"

using namespace std;

int main()
{
    Kep kep("1.kep");
    cout << kep << endl;
    kep.Kitolt(6, 2, TEAL);
    kep.Kitolt(10, 0, SILVER);
    cout << kep << endl;

    return 0;
}
