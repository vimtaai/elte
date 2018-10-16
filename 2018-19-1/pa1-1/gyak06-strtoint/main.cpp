#include <iostream>
#include <cmath>

using namespace std;

long long str_to_int(string szam) {
    long long eredmeny = 0;
    for (int i = 0; i < szam.length(); ++i)
    {
        int szamjegy = szam[szam.length() - i - 1] - '0';
        eredmeny += szamjegy * pow(10.0, i);
    }
    return eredmeny;
}

int main()
{
    string s;
    cin >> s;
    cout << str_to_int(s) << endl;
    return 0;
}
