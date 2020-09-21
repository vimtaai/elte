#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

enum Valasz { NAGYOBB, KISEBB, TALALT };

int main()
{
    int tipp;
    Valasz valasz;

    srand(time(nullptr));
    int szam = (rand() % 101);

    do
    {
      // Beolvasás
      cout << "Mi a tipped? ";
      cin >> tipp;

      // Feldolgozás
      if (tipp < szam)
      {
        valasz = KISEBB;
      }
      else if (tipp > szam)
      {
        valasz = NAGYOBB;
      }
      else
      {
        valasz = TALALT;
      }

      // Kiírás
      string kiszoveg;
      if (valasz == KISEBB)
      {
          kiszoveg = "Kisebb";
      }
      else if (valasz == NAGYOBB)
      {
          kiszoveg = "Nagyobb";
      }
      else
      {
          kiszoveg = "Talalt";
      }
      cout << kiszoveg << endl;
    } while (valasz != TALALT);

    return 0;
}
