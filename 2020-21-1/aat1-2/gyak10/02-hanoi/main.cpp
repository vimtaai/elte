#include <iostream>
#include <vector>
#include <windows.h> // Csak windowson működik, más oprendszeren kommenteld ki

using namespace std;

// Minden oszlop egy vektor, ahol alulról fölfelé a korongok mérete szerepel
// Az állapot oszlopok vektora (3 darab oszloppal)
typedef vector<vector<int>> Allapot;

void allapot_kiir(const Allapot &allapot)
{
  Sleep(1000);   // Csak windowson működik, más oprendszeren kommenteld ki
  system("cls"); // Csak windowson működik, más oprendszeren kommenteld ki
  for (int i = 0; i < allapot.size(); ++i)
  {
    cout << "-";
    for (int j = 0; j < allapot.at(i).size(); ++j)
    {
      cout << allapot.at(i).at(j) << "-";
    }
    cout << endl;
  }
  cout << endl << "++++++++" << endl << endl;
}

// Egy korong egyik helyrõl a másikra
void lepes(Allapot &allapot, int honnan, int hova)
{
  int honnan_db = allapot.at(honnan).size();
  // Megnézem mi a mozgatandó elem
  int elem = allapot.at(honnan).at(honnan_db - 1);
  // Kiveszem
  allapot.at(honnan).pop_back();
  // Áthelyezem
  allapot.at(hova).push_back(elem);

  allapot_kiir(allapot);
}

// Db korong mozagatása úgy, hogy a `seged` oszlopot használjuk az ideiglenes pakoláshoz
void mozgat(Allapot &allapot, int honnan, int hova, int seged, int db) {
  // Báziseset
  if (db == 1)
  {
    lepes(allapot, honnan, hova);
  }
  // Általános eset
  else
  {
    mozgat(allapot, honnan, seged, hova, db - 1);
    lepes(allapot, honnan, hova);
    mozgat(allapot, seged, hova, honnan, db - 1);
  }
}

int main()
{
  Sleep(3000);
  Allapot hanoi(3, vector<int>());
  const int KORONG_SZAM = 5;
  for (int i = 0; i < KORONG_SZAM; ++i) {
    hanoi.at(0).push_back(KORONG_SZAM - i);
  }

  allapot_kiir(hanoi);
  mozgat(hanoi, 0, 2, 1, KORONG_SZAM);

  return 0;
}
