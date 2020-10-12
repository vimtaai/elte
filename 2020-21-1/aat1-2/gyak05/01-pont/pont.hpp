#ifndef PONT_HPP_INCLUDED
#define PONT_HPP_INCLUDED

#include <iostream>

using namespace std;

// Osztály
class Pont
{
  public:
    Pont(); // Konstruktor
    Pont(float new_x, float new_y);
    Pont(const Pont &p); // Copy konstruktor
    float GetX();
    void SetX(float new_x);
    float GetY();
    void SetY(float new_y);
    void Nagyit(float arany); // Metódus
    float Tavolsag(const Pont &p);
    friend Pont operator+(const Pont &p1, const Pont &p2); // Friend függvény
    friend ostream& operator<<(ostream &os, const Pont &p);
  private:
    float x; // Mezõ, attribútum, field, property, attribute
    float y;
};

// Láthatóság: private, public, (protected)
// Getter-Setter
// Konstruktor - inicializálás (kezdõértékek beállítása)

#endif // PONT_HPP_INCLUDED
