#include <iostream>
#include <vector>

using namespace std;

struct Konyv
{
    string szerzo;
    string cim;
    int peldanyszam;
    int kikolcsonozve;
};

bool keves_maradt(Konyv k)
{
    return (k.peldanyszam - k.kikolcsonozve <= 2);
}

int main()
{
    int N;
    cin >> N;
    Konyv konyvek[N];

    for (int i = 0; i < N; ++i)
    {
        cin >> konyvek[i].szerzo
            >> konyvek[i].cim
            >> konyvek[i].peldanyszam
            >> konyvek[i].kikolcsonozve;
    }

    //int db = 0;
    //string keveskonyv[N];
    vector<string> keveskonyv;

    for (int i = 0; i < N; ++i)
    {
        if (keves_maradt(konyvek[i]))
        {
            //keveskonyv[db] = konyvek[i].szerzo + ": " + konyvek[i].cim;
            //db += 1;
            keveskonyv.push_back(konyvek[i].szerzo + ": " + konyvek[i].cim);
        }
    }

    //for (int i = 0; i < db; ++i)
    for (int i = 0; i < keveskonyv.size(); ++i)
    {
        cout << keveskonyv[i] << endl;
    }

    return 0;
}
