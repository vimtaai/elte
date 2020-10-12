#ifndef URHAJO_HPP
#define URHAJO_HPP

#include <iostream>

using namespace std;

class Urhajo
{
  public:
    Urhajo();
    virtual ~Urhajo();
    Urhajo(const Urhajo &other);

    string GetNev() { return Nev; }
    void SetNev(string val) { Nev = val; }
    string GetAzon() { return Azon; }
    void SetAzon(string val) { Azon = val; }
    float GetTomeg() { return Tomeg; }
    void SetTomeg(float val) { Tomeg = val; }
    float GetSebesseg() { return Sebesseg; }
    void SetSebesseg(float val) { Sebesseg = val; }
    float GetGyorsulas() { return Gyorsulas; }
    void SetGyorsulas(float val) { Gyorsulas = val; }
    void Gyorsul(float ido);
  private:
    string Nev;
    string Azon;
    float Tomeg;
    float Sebesseg;
    float Gyorsulas;
};

#endif // URHAJO_HPP
