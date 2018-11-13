#include <iostream>

using namespace std;

struct Idopont
{
    int ora;
    int perc;
};

int percekben(Idopont i)
{
    return i.ora * 60 + i.perc;
}

int main()
{
    int N;
    cin >> N;
    Idopont idopontok[N];

    for (int i = 0; i < N; ++i)
    {
        cin >> idopontok[i].ora >> idopontok[i].perc;
    }

    int percek[N];
    for (int i = 0; i < N; ++i)
    {
        percek[i] = percekben(idopontok[i]);
    }

    for (int i = 0; i < N; ++i)
    {
        cout << percek[i] << endl;
    }

    return 0;
}
