#include <iostream>

using namespace std;

int main()
{
    for (int i = 1; i <= 100; ++i)
    {
        if (i % 3 == 0)
        {
            cout << "Fizz";
        }

        if (i % 5 == 0)
        {
            cout << "Buzz";
        }
        else if (i % 3 != 0)
        {
            cout << i;
        }
        cout << endl;
    }
    return 0;
}
