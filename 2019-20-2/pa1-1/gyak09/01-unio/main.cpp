#include <iostream>

using namespace std;

void tomb_ki(const string tomb[], const int db)
{
    for (int i = 0; i < db; i += 1)
    {
        cout << tomb[i] << ((i < db - 1) ? " " : "");
    }
}

int main()
{
    // Be:
    int N, M;
    cerr << "Add meg N-t: ";
    cin >> N;
    cerr << "Add meg M-t: ";
    cin >> M;

    string X[N], Y[M];

    // Ki

    string Z[N + M];

    // Beolvasás

    for (int i = 0; i < N; i += 1)
    {
        cerr << "Add meg az X sorozat " << i + 1 << ". elemet: ";
        cin >> X[i];
    }

    for (int i = 0; i < M; i += 1)
    {
        cerr << "Add meg az Y sorozat " << i + 1 << ". elemet: ";
        cin >> Y[i];
    }

    // Feldologozás
    int K = 0;
    // 1. Vegyük az elsõ sorozat összes elemét
    // Másolás: f(x) = x
    // Sorozatszámítás: f(s, x) = tömbhöz hozzáfûzés
    for (int i = 0; i < N && i < 5; i += 1)
    {
        Z[i] = X[i];
        K += 1;
    }

    // 2. Rakjuk hozzá a második sorozat azon elemeit...
    for (int i = 0; i < M && i < 5; i += 1)
    {
        // ...melyek nem szerepelnek az elsõ sorozatban
        // Eldöntés (Z-ben szerepel-e már az Y[i])
        int j = 0;
        while (j < K && Z[j] != Y[i])
        {
            j += 1;
        }

        // Még nem szerepel benne
        if (j == K)
        {
            Z[K] = Y[i];
            K += 1;
        }
    }

    // Kiírás
    tomb_ki(Z, K);

    return 0;
}
