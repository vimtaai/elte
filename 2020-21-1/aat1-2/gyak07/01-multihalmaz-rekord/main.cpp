#include <iostream>
#include "multihalmaz.hpp"

using namespace std;

int main()
{
    Multihalmaz mh1;
    cout << mh1 << endl;
    mh1.Multihalmazba(5, 10);
    mh1.Multihalmazba(2, 3);
    mh1.Multihalmazba(7, 2);
    mh1.Multihalmazba(5, 2);
    cout << mh1 << endl;
    cout << mh1.TartalmazE(3) << endl;
    cout << mh1.TartalmazE(5) << endl;
    cout << mh1.Multiplicitas(7) << endl;
    mh1.Mulithalmazbol(5, 5);
    mh1.Mulithalmazbol(7, 5);
    cout << mh1 << endl;

    return 0;
}
