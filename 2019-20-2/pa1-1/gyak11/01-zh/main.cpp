#include <iostream>

using namespace std;

struct Ido {
    int ora;
    int perc;
};

Ido percbol_ido(int perc) {
    Ido ido;
    ido.ora = perc / 60;
    ido.perc = perc % 60;
    return ido;
}

struct Jarat {
    int indul;
    int menetido;
};

int main()
{
    int N;
    cin >> N;
    Jarat J[N];
    for (int i = 0; i < N; i += 1) {
        cin >> J[i].indul;
        cin >> J[i].menetido;
    }

    int mini = 0;
    for (int i = 1; i < N; i += 1) {
        if (J[i].menetido < J[mini].menetido) {
            mini = i;
        }
    }

    Ido leggyorsabb = percbol_ido(J[mini].indul);
    cout << "Az leggyorsabb busz " << leggyorsabb.ora << " óra " << leggyorsabb.perc << " perckor indul." << endl;

    bool van = false;
    int maxi;
    for (int i = 0; i < N; i += 1) {
        int erkezes = J[i].indul + J[i].menetido;
        Ido erkezes_ido = percbol_ido(erkezes);
        if (erkezes_ido.ora < 15) {
            if (!van) {
                van = true;
                maxi = i;
            } else if(J[i].indul > J[maxi].indul) {
                maxi = i;
            }
        }
    }

    Ido utolso = percbol_ido(J[maxi].indul);
    cout << "Legkésõbb a " << utolso.ora << " óra " << utolso.perc << " perckor induló busszal kell menni, ha 15:00-ra Piripócson szeretnénk lenni." << endl;

    Jarat delutani[N];
    int db = 0;
    for (int i = 0; i < N; i += 1) {
        Ido indul = percbol_ido(J[i].indul);

        if (indul.ora >= 12) {
            delutani[db] = J[i];
            db += 1;
        }
    }

    cout << "Az alábbi buszjáratok indulnak délután: " << endl;
    for (int i = 0; i < db; i += 1) {
        Ido ido = percbol_ido(delutani[i].indul);
        cout << ido.ora << " óra " << ido.perc << "perc" << endl;
    }

    return 0;
}
