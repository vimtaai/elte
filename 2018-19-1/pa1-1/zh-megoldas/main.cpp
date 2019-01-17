#include <iostream>

using namespace std;

struct Allomas {
    int ind;
    int erk;
};

int main()
{
    int N;
    cin >> N;
    Allomas allomasok[N];
    for (int i = 0; i < N; ++i)
    {
        cin >> allomasok[i].erk >> allomasok[i].ind;
    }
    cout << "#" << endl; // 1. feladat
    int mini = 30001, maxi = -1;
    int ind, erk; // maxind, minind
    for (int i = 0; i < N; ++i)
    {
        if (allomasok[i].erk > maxi && allomasok[i].erk != 0)
        {
            maxi = allomasok[i].erk;
            erk = i;
        }

        if (allomasok[i].ind < mini && allomasok[i].ind != 0)
        {
            mini = allomasok[i].ind;
            ind = i;
        }
    }
    cout << maxi - mini << endl;

    cout << "#" << endl; // 2. feladat
    int db = 0;
    for (int i = 0; i < N; ++i)
    {
        if (allomasok[i].erk == allomasok[i].ind && allomasok[i].ind != 0)
        {
            db += 1;
        }
    }
    cout << db << endl;

    cout << "#" << endl; // 3. feladat
    int elozo = -1;
    bool voltejo = false;
    for (int i = ind + 1; i < erk; ++i)
    {
        if (allomasok[i].ind != allomasok[i].erk)
        {
            if (elozo != -1)
            {
                int allti = allomasok[i].ind - allomasok[i].erk;
                int alltelozo = allomasok[elozo].ind - allomasok[elozo].erk;
                if ((allti) > (alltelozo))
                {
                    cout << (i + 1) << " ";
                    voltejo = true;
                }
            }
            elozo = i;
        }
    }
    if (elozo == -1)
    {
        cout << -2;
    }
    else if (!voltejo)
    {
        cout << -1;
    }
    cout << endl;

    cout << "#" << endl; // 4. feladat

    int eleje = -1;
    for (int i = ind + 1; i <= erk; ++i)
    {
        // ha olyan, ahol áthaladt
        if (allomasok[i].ind == allomasok[i].erk && allomasok[i].erk != 0)
        {
            if (eleje == -1)
            {
                eleje = i;
            }
        }
        else
        {
            if (eleje != -1) // szakasz vége
            {
                cout << eleje + 1 << " " << i << endl; // feldolgozás
                eleje = -1;
            }
        }
    }

    cout << "#" << endl; // 5. feladat
    int eleje2 = -1;
    int maxeleje = -1;
    int maxvege = -1;
    for (int i = ind + 1; i <= erk; ++i)
    {
        // ha olyan, ahol áthaladt
        if (allomasok[i].ind != allomasok[i].erk && allomasok[i].erk != 0)
        {
            if (eleje2 == -1)
            {
                eleje2 = i;
            }
        }
        else
        {
            if (eleje2 != -1) // szakasz vége
            {
                if ((i - eleje2) > (maxvege - maxeleje))
                {
                    maxvege = i;
                    maxeleje = eleje2;
                }
                eleje2 = -1;
            }
        }
    }
    if (maxeleje == -1)
    {
        cout << -1 << endl;
    }
    else
    {
        cout << maxeleje + 1 << " " << maxvege << endl;
    }

    return 0;
}





