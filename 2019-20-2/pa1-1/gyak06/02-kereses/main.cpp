#include <iostream>

using namespace std;

bool van_e_parja(int i, int A[], int N, int B)
{
    // Csak akkor nézzük meg, ha A[i] osztója B-nek
    if (B % A[i] != 0)
    {
        return false;
    }

    int j = i + 1;
    while (j < N && !(A[i] * A[j] == B))
    {
        j += 1;
    }
    return j < N;
}

int main()
{
    // Bemenet
    int N, B;

    do
    {
        cout << "Add meg N-t: ";
        cin >> N;
    } while(N <= 1);

    int A[N];

    // Beolvasás
    cout << "Add meg B-t: ";
    cin >> B;

    for (int i = 0; i < N; i += 1)
    {
        cout << "Add meg a(z) " << i << ". szamot: ";
        cin >> A[i];
    }

    int i = 0;
    while (i < N && !van_e_parja(i, A, N, B))
    {
        i += 1;
    }

    if (i < N)
    {
        cout << "Van par: " << A[i] << " es " << B / A[i] << endl;
    }
    else
    {
        cout << "Nincs par" << endl;
    }


    return 0;
}
