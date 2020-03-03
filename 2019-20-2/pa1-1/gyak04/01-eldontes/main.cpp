#include <iostream>

using namespace std;

bool irasjel_e(char karakter)
{
    return karakter == '.' || karakter == '!' || karakter == '?';
}

bool nagybetus_e(char karakter)
{
    int karakter_kod = (int)karakter;
    int kodA = (int)'A';
    int kodZ = (int)'Z';
    return karakter_kod >= kodA && karakter_kod <= kodZ;
}

int main()
{
    // Be
    string szoveg;
    // Ki
    bool tobb_mondat_e;
    // Beolvasás
    // cin >> szoveg; // nem jó!
    //      honnan, hova
    getline(cin   , szoveg);
    // Feldolgozás
    int i = 0;
    while ((i < szoveg.size() - 2) && !(irasjel_e(szoveg[i]) && szoveg[i+1] == ' ' && nagybetus_e(szoveg[i+2])))
    {
        i += 1;
    }
    tobb_mondat_e = i < szoveg.size() - 2;
    // Kiírás
    if (tobb_mondat_e)
    {
        cout << "Tobb mondat" << endl;
    }
    else
    {
        cout << "Egy mondat" << endl;
    }
    return 0;
}
