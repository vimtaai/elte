#include <iostream>
#include <cstdlib>

using namespace std;

struct Lakcim {
    int irszam;
    string telepules;
    string utca;
    int hazszam;
};

struct Ember {
    string nev;
    string szemelyiszam;
    Lakcim lakcim;
};

string be_string() {
    string adat;
    getline(cin, adat);
    return adat;
}

int be_int() {
    string adat;
    getline(cin, adat);
    return atoi(adat.c_str());
}

void ki_ember(const Ember e) {
    cout << e.nev << " (" << e.szemelyiszam << "): "
         << e.lakcim.irszam << " " << e.lakcim.telepules << " "
         << e.lakcim.utca << " " << e.lakcim.hazszam;
}

int main()
{
    int N;
    setlocale(LC_ALL, "hungarian");
    cout << "Add meg az emberek számát: ";
    N = be_int();
    Ember emberek[N];
    for (int i = 0; i < N; ++i)
    {
        cout << "Add meg az " << i+1 << ". ember nevét: ";
        emberek[i].nev = be_string();
        cout << "Add meg az " << i+1 << ". ember személyi számát: ";
        emberek[i].szemelyiszam = be_string();
        cout << "Add meg az " << i+1 << ". ember lakcímének az irányítószámát: ";
        emberek[i].lakcim.irszam = be_int();
        cout << "Add meg az " << i+1 << ". ember lakcímének az települését: ";
        emberek[i].lakcim.telepules = be_string();
        cout << "Add meg az " << i+1 << ". ember lakcímének az utcanevét: ";
        emberek[i].lakcim.utca = be_string();
        cout << "Add meg az " << i+1 << ". ember lakcímének az házszámát: ";
        emberek[i].lakcim.hazszam = be_int();
    }

    int kimenet[N];
    int db = 0;
    for (int i = 0; i < N; ++i)
    {
        if (emberek[i].szemelyiszam[0] == '1' &&
            emberek[i].lakcim.telepules != "Budapest") {
            kimenet[db] = i;
            ++db;
        }
    }

    for (int i = 0; i < db; ++i)
    {
        ki_ember(emberek[kimenet[i]]);
        cout << endl;
    }

    return 0;
}
