#include <iostream>

using namespace std;

int main()
{
    const int maxN = 42;
    int szamok[maxN];
    int N;

    // Beolvasás
    cout << "Hany darab szamot szeretnel? ";
    cin >> N;

    for (int i = 0; i < N; ++i)
    {
        cout << "Kerem a(z) " << i + 1 << ". szamot: ";
        cin >> szamok[i];
    }

    for (int i = 0; i < N; ++i)
    {
        cout << szamok[i] << " ";
    }

    int s = 0;
    for (int i = 0; i < N; ++i)
    {
        s += szamok[i];
    }
    cout << "atlag: " << (s / N) << endl;

    cout << (int)"alma" << endl;
    cout << (int)"korte" << endl;
    cout << (int)"narancs" << endl;
    cout << (int)"naranss" << endl;


    return 0;
}
