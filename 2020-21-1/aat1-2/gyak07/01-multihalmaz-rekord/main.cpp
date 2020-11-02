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

    Multihalmaz m2, m3, m4;

    m2.Multihalmazba(1, 3);
    m2.Multihalmazba(2, 2);

    m3.Multihalmazba(1, 2);
    m3.Multihalmazba(3, 5);

    m4.Multihalmazba(1, 2);
    m4.Multihalmazba(2, 2);

    cout << m2.Metszet(m3) << endl;
    cout << m2.Unio(m3) << endl;
    cout << m2.Kulonbseg(m3) << endl;
    cout << m2.ReszeE(m3) << endl;
    cout << m4.ReszeE(m2) << endl;

    return 0;
}
