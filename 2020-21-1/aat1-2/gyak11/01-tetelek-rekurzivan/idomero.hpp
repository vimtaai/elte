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
    void UjRekurzio();
    void RekurzioVege();
    int GetOsszehasonlitasokSzama();
    int GetMozgatasokSzama();
    int GetRekurzioMelysege();
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
    int RekurzioMelysege;
    int AktualisMelyseg;
    long int KezdesIdo;
    long int BefejezesIdo;
};

#endif // IDOMERO_HPP
