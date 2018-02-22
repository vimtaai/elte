#include <iostream>
#include <vector>

using namespace std;

struct Sor {
    int ceg;
    int fajta;
    int ar;
};

int main()
{
    // Be:
    unsigned int M, K, N;
    vector<Sor> adatok;

    // Beolvasás:
    cin >> N >> M >> K;
    for (int i = 0; i < N; ++i)
    {
        Sor seged;
        cin >> seged.ceg >> seged.fajta >> seged.ar;
        adatok.push_back(seged);
    }

    // Ellenõrzés:
//    for (int i = 0; i < adatok.size(); ++i)
//    {
//        cout << adatok[i].ceg << " " << adatok[i].fajta << " "
//             << adatok[i].ar << endl;
//    }

    int minI = 0;
    for (int i = 1; i < adatok.size(); ++i)
    {
        if (adatok[minI].ar > adatok[i].ar)
        {
            minI = i;
        }
    }
    cout << adatok[minI].ceg << " " << adatok[minI].fajta << endl;

    vector<int> cegekDb;
    cegekDb.resize(M + 1);
    for (int i = 0; i < adatok.size(); ++i)
    {
        int ceg = adatok[i].ceg;
        cegekDb[ceg] += 1;
    }
    int maxI = 1;
    for (int i = 2; i < cegekDb.size(); ++i)
    {
        if (cegekDb[maxI] < cegekDb[i])
        {
            maxI = i;
        }
    }
    cout << maxI << endl;

    vector<int> cegekDraga;
    cegekDraga.resize(M + 1);
    int db = 0;
    for (int i = 0; i < adatok.size(); ++i)
    {
        int ceg = adatok[i].ceg;
        if (cegekDraga[ceg] < adatok[i].ar)
        {
            if (cegekDraga[ceg] == 0)
            {
                ++db;
            }
            cegekDraga[ceg] = adatok[i].ar;
        }
    }
    cout << db << " ";
    for (int i = 1; i < cegekDraga.size(); ++i)
    {
        if (cegekDraga[i] != 0)
        {
            cout << i << " " << cegekDraga[i] << " ";
        }
    }
    cout << endl;

    vector<bool> fajtaVolt;
    fajtaVolt.resize(K + 1);
    db = 0;
    for (int i = 0; i < adatok.size(); ++i)
    {
        int fajta = adatok[i].fajta;
        if (!fajtaVolt[fajta])
        {
            ++db;
            fajtaVolt[fajta] = true;
        }
    }
    cout << db << endl;

    vector<int> fajtak;
    for (int i = 1; i <= K; ++i)
    {
        // Megszámolás
        db = 0;
        for (int j = 0; j < adatok.size(); ++j)
        {
            if (adatok[j].fajta == i)
            {
                ++db;
            }
        }
        if (db == 1)
        {
            fajtak.push_back(i);
        }
    }
    cout << fajtak.size() << " ";
    for (vector<int>::iterator it = fajtak.begin();
         it != fajtak.end();
         ++it)
    {
        cout << *it << " ";
    }
    cout << endl;

    return 0;
}
