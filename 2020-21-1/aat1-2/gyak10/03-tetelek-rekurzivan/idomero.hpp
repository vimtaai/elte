#ifndef IDOMERO_HPP
#define IDOMERO_HPP

#include <iostream>

using namespace std;

class Idomero
{
  public:
    Idomero(int elemek_szama, string nev = "");
    void Kezd();
    void Befejez();
    void UjOsszehasonlitas(int db);
    void UjMozgatas(int db);
    int GetOsszehasonlitasokSzama();
    int GetMozgatasokSzama();
    float GetElteltIdo();
    float GetMozgatasokAranya();
    float GetMozgatasokNegyzetesAranya();
    void SzovegesStatisztika();
    string CSVStatisztika();
  private:
    string Nev;
    int ElemekSzama;
    int OsszehasonlitasokSzama;
    int MozgatasokSzama;
    long int KezdesIdo;
    long int BefejezesIdo;
};

#endif // IDOMERO_HPP
