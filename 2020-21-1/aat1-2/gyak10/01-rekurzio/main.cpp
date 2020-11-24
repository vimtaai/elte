#include <iostream>

using namespace std;

//long int faktorialis(int n)
//{
//  int eredmeny = 1;
//  for (int i = 2; i <= n; ++i)
//  {
//    eredmeny *= i;
//  }
//  return eredmeny;
//}

// Rekurzió = esetszétválasztás (báziseset) + önhivatkozás
long int faktorialis(int n)
{
  // Báziseset
  if (n == 0)
  {
    return 1;
  }

  // Általános eset (rekurzív kiszámítás)
  return n * faktorialis(n - 1);
}

//long int fibonacci(int n)
//{
//  if (n == 1) {
//    return 0;
//  }
//
//  if (n == 2) {
//    return 1;
//  }
//
//  int elozo_elotti;
//  int elozo = 0;
//
//  int aktualis = 1;
//
//  for (int i = 2; i <= n; ++i)
//  {
//    elozo_elotti = elozo;
//    elozo = aktualis;
//    aktualis = elozo + elozo_elotti;
//  }
//
//  return aktualis;
//}

long int fibonacci(int n)
{
  // Báziseset
  if (n == 1) {
    return 0;
  }
  if (n == 2) {
    return 1;
  }

  // Általános eset (rekurzív kiszámítás)
  return fibonacci(n - 1) + fibonacci(n - 2);
}

int main()
{
    cout << faktorialis(0) << endl;
    cout << faktorialis(3) << endl;
    cout << faktorialis(6) << endl;

    for (int i = 1; i <= 10; ++i)
    {
      cout << fibonacci(i) << " ";
    }
    cout << endl;

    cout << fibonacci(20) << endl;
    return 0;
}
