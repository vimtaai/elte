#include <iostream>
#include <math.h>

using namespace std;

int main()
{
//    const int MAXN = 20;
//    int N;
//    string szemelyik[20];
//    cin >> N;
//    for (int i = 0; i < N; ++i)
//    {
//        cin >> szemelyik[i];
//    }
//    int i = 0;
//    while (i < N && szemelyik[i][0] != '1')
//    {
//        ++i;
//    }
//    if (i < N)
//    {
//        cout << "volt" << endl;
//    }
//    elseif (i < N)
//    {
//        cout << "volt" << endl;
//    }
//    else
//    {
//        cout << "nem volt" << endl;
//    }
//    {
//        cout << "nem volt" << endl;
//    }
//
//    int hom[MAXN];
//    cin >> N;
//    for (int i = 0; i < N; ++i)
//    {
//        cin >> hom[i];
//    }
//    i = 1;
//    while (i < N && hom[i]>hom[i-1])
//    {
//        ++i;
//    }
//    if (i < N-1)
//    {
//        cout << "nem szigmon" << endl;
//    }
//    else
//    {
//        cout << "szigmon" << endl;
//    }
//
//
//    string szoveg;
//    getline(cin, szoveg, '\n');
//    i = 0;
//    while (i < szoveg.length() - 1 &&
//           (szoveg[i] == '.' || szoveg[i] == '!' ||
//            szoveg[i] == '?') && szoveg[i + 1] == ' ')
//    {
//        ++i;
//    }
//    if (i < szoveg.length()-1)
//    {
//        cout << "tobb mondat" << endl;
//    }
//    else
//    {
//        cout << "egy mondat" << endl;
//    }
//
//    string kartyak[] = {"7", "8", "9", "10", "A", "F", "K", "ASZ"};
//    int ertekek[] = {7, 8, 9, 10, 2, 3, 4, 11};
//    string kartya;
//    cin >> kartya;
//    i = 0;
//    while(kartyak[i] != kartya)
//    {
//        ++i;
//    }
//    cout << ertekek[i];

    int szam;
    cin >> szam;
    double gyok = sqrt(szam);
    //cout << (int)gyok << endl;
    int gyokN = (int)gyok;
    if (szam - gyokN*gyokN < ((gyokN+1)*(gyokN+1) - szam))
    {
        cout << gyokN << endl;
    }
    else
    {
        cout << gyokN+1 << endl;
    }

    return 0;
}
