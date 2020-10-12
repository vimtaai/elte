#include <iostream>
#include "pont.hpp"

using namespace std;

int main()
{
  // Példány === Objektum(példány)
  Pont p1;

  cout << p1 << endl;

  float x, y;
  cin >> x >> y;

  p1.SetX(x);
  p1.SetY(y);

  Pont p2(5, 10);
  Pont p3(p2);
  p3.Nagyit(2);
  Pont p4 = p3 + p2;

  cout << "p1: " << p1 << endl;
  cout << "p2: " << p2 << endl;
  cout << "p3: " << p3 << endl;
  cout << "p4: " << p4 << endl;

  return 0;
}
