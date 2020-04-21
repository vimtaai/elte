#include <iostream>

using namespace std;

struct Aru
{
    int gyarto;
    int fajta;
    int ar;
};

void feladat1(const int N, const int M, const int K, const Aru A[])
{
    int mini = 0;
    for (int i = 1; i < N; i += 1)
    {
        if (A[mini].ar > A[i].ar)
        {
            mini = i;
        }
    }
    cout << A[mini].gyarto << " " << A[mini].fajta << endl;
}

int fajta_db(const int x, const int N, const Aru A[])
{
    int db = 0;
    for (int i = 0; i < N; i += 1)
    {
        if (A[i].gyarto == x) {
            db += 1;
        }
    }
    return db;
}

void feladat2(const int N, const int M, const int K, const Aru A[])
{
    int maxi = 0;
    for (int i = 1; i < M; i += 1)
    {
        if (fajta_db(maxi, N, A) < fajta_db(i, N, A))
        {
            maxi = i;
        }
    }
    cout << maxi << endl;
}

void feladat3(const int N, const int M, const int K, const Aru A[])
{
    int db = 0;
    int gyartok[M];
    int dragak[M];

    // Feltételes maximum
    for (int i = 1; i <= M; i += 1)
    {
        int maxar = -1;
        for (int j = 0; j < N; j += 1)
        {
            if (A[j].gyarto == i && A[j].ar > maxar)
            {
                maxar = A[j].ar;
            }
        }

        if (maxar != -1)
        {
            gyartok[db] = i;
            dragak[db] = maxar;
            db += 1;
        }
    }

    cout << db;
    for (int i = 0; i < db; i += 1)
    {
        cout << " " << gyartok[i] << " " << dragak[i];
    }
    cout << endl;
}

void feladat4(const int N, const int M, const int K, const Aru A[])
{
    int db = 0;
    for (int i = 1; i <= K; i += 1)
    {
        int j = 0;
        while(j < N && A[j].fajta != i) {
            j += 1;
        }

        if (j < N)
        {
            db += 1;
        }
    }

    cout << db << endl;
}

void feladat5(const int N, const int M, const int K, const Aru A[])
{
    int db = 0;
    int cukrok[K];

    for (int i = 1; i <= K; i += 1)
    {
        int gyartodb = 0;
        for(int j = 0; j < N; j += 1) {
            if (A[j].fajta == i)
            {
                gyartodb += 1;
            }
        }

        if (gyartodb == 1)
        {
            cukrok[db] = i;
            db += 1;
        }
    }

    cout << db;
    for (int i = 0; i < db; i += 1)
    {
        cout << " " << cukrok[i];
    }
    cout << endl;
}

int main()
{
    // Be
    int N, M, K;
    cin >> N >> M >> K;
    Aru A[N];

    for (int i = 0; i < N; i += 1)
    {
        cin >> A[i].gyarto >> A[i].fajta >> A[i].ar;
    }

    feladat1(N, M, K, A);
    feladat2(N, M, K, A);
    feladat3(N, M, K, A);
    feladat4(N, M, K, A);
    feladat5(N, M, K, A);

    return 0;
}
