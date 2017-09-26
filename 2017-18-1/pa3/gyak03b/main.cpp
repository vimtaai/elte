#include <iostream>

using namespace std;

int main()
{
    // Be
    int x;
    // Ki
    // ???

    // Beolvasás
    cout << "Adj meg egy pozitiv egesz szamot: ";
    cin >> x;
    if (x <= 1)
    {
        cout << "X legyen pozitiv" << endl;
        return(1);
    }

    // Feldolgozás/Kiírás
    int k = x;
    for (int i = 2; i <= x; ++i)
    {
        while (k % i == 0)
        {
            cout << i << " ";
            k /= i;
        }
    }
    cout << endl;

    // B lehetõség
    int m = x;
    int i = 2;
    while (m > 1)
    {
        if (m % i == 0)
        {
            cout << i << " ";
            m /= i;
        }
        else
        {
            ++i;
        }
    }


    return 0;
}
