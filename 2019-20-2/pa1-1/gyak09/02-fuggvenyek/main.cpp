#include <iostream>

using namespace std;

void tomb_ki(const int tomb[], const int db)
{
    for (int i = 0; i < db; i += 1)
    {
        cout << tomb[i] + 1 << ((i < db - 1) ? " " : "");
    }
}

bool halmaz_e(const int tomb[], const int db)
{
    int i = 0;
    bool halmaz = true;
    while (i < db && halmaz)
    {
        int j = i + 1;
        while (j < db && tomb[i] != tomb[j])
        {
            j += 1;
        }
        halmaz = j == db;

        i += 1;
    }

    return i == db;
}

int main()
{
    int N;
    cin >> N;

    int X[N];
    for (int i = 0; i < N; i += 1)
    {
        cin >> X[i];
    }

    if (halmaz_e(X, N))
    {
        cout << "Halmaz" << endl;
    }
    else
    {
        cout << "Nem halmaz" << endl;
    }

    return 0;
}
