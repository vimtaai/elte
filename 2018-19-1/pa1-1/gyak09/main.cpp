#include <iostream>
#include <vector>

using namespace std;

typedef vector< vector<int> > intmatrix;

void szamot_beolvas(int &szam, const int mini, const int maxi, const string kerdes) // eljárás
{
    do
    {
        cout << kerdes;
        cin >> szam;
        if (cin.fail() || szam < mini || szam > maxi) // ha hiba van a beolvasásban
        {
            cout << "Hibas bemenet!" << endl;
            cin.clear(); // kiszedjük a hibajelzést
            cin.ignore(1024, '\n'); // kiszedjük a hibás értéket
        }
    } while (szam < mini || szam > maxi);
}

void matrixot_kiir(const intmatrix &matrix)
{
    for (int i = 0; i < matrix.size(); ++i)
    {
        for (int j = 0; j < matrix[i].size(); ++j)
        {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
}

int main()
{
    int N, M;
    szamot_beolvas(M, 1, 50, "Add meg a telepulesek szamat! ");
    szamot_beolvas(N, 1, 200, "Add meg a fajok szamat! ");

    intmatrix E(M, vector<int>(N, 0)); // vektorok vektora (mátrix)

    for (int i = 0; i < E.size(); ++i)
    {
        for (int j = 0; j < E[i].size(); ++j)
        {
            szamot_beolvas(E[i][j], 0, 1000, "");
        }
    }

    //matrixot_kiir(E);

    for (int i = 0; i < N; ++i)
    {
        for (int j = 0; j < N; ++j)
        {
            // minden i-j számpárra 1 és N között
            int k = 0;
            while (k < M && E[k][i] >= E[k][j])
            {
                ++k;
            }
            cout << ((k < M) ? 0 : 1) << " ";
        }
        cout << endl;
    }

    return 0;
}
