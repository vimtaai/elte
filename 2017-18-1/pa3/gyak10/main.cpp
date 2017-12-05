/// Név:
/// Neptun-kód:
/// e-mail:
///
/// Feladat:
///   A keret program segítségével a tanult 6 egyszerû belsõ rendezés hatékonyságát
///   vizsgáljuk. Végrehajtási idõ, tömbelemre vonatkozó hasonlítás- és mozgatás-szám
///   elemszámtól függésére vagyunk kiváncsiak.
///   A program rendezõ eljárásainak lényegi része hiányzanak, ezt kell pótolni.
///   Ügyeljen arra, hogy a hSzam és az mSzam változókat megfelelõen növelje, amikor
///   a rendezés során egy hasonlítást, ill. egy mozgatást hajt végre.

#include <iostream>
#include <windows.h>  //a srand függvényhez, a HANDLE típushoz, a system-hez (pause és a cls DOS-parancsokhoz)
#include <time.h>     //a time és clock függvényekhez
#include <iomanip>    ///a setw-hez
using namespace std;

const int maxN=8001;//a sorozat maximális hossza
const int kiN=120;//a megjelenítendõ (rész)sorozat hossza
int s[maxN],r[maxN];//segéd és rendezendõ elemek tömbje
int elemSzam;//tényleges elemszám
int kezdet,veg,elteltIdo;//futási idõ kezdete, vége, hossza
int hSzam, mSzam;//hasonlítások száma, mozgatások szám

//beolvassa a min..max közötti egész számot (max<min => max=végtelen)
void be_int(string kerdes, int &n, int min, int max, string uzenet);
//feltöltésmód beolvasása:
int feltoltesMod();
//feltöltõ eljárások:
void feltoltVeletlennel();
void feltoltNovekedve();
void feltoltCsokkenve();
void feltoltMajdnemRendezve();
//hatékonyságméréshez:
void oraIndul();
void oraAll();
//r-et rendezõ eljárások:
void egyszeruCseres();
void minimumKivalsztasos();
void buborek();
void javitottBuborek();
void beilleszteses();
void javitottBeilleszteses();
//cout<=r[1..min(kiN,elemSzam)]
void tombKiiras(string cim);
void kiertekeles(string cim);
//r<=s:
void masol();
//billentyû-lenyomásra várakozik:
void billreVar();
//kurzor-pozícionálás a konzol-ablakban:
void curPos(int s, int o);
//képernyõtörlés:
void ujLap();

int main()
{
    srand(time(NULL));//véletlenszám-generátor inicializálása

    //a rendezendõ tömb feltöltése:
    be_int("Elemszam:",elemSzam,11,maxN,"Nem jo elemszam!");
    switch (feltoltesMod())
    {
      case 0:
        feltoltNovekedve(); break;
      case 1:
        feltoltCsokkenve(); break;
      case 2:
        feltoltMajdnemRendezve(); break;
      case 3:
        feltoltVeletlennel(); break;
    }
    //a rendezések:
    //egyszeruCseres();
    //minimumKivalsztasos();
    //buborek();
    //javitottBuborek();
    //beilleszteses();
    javitottBeilleszteses();

    return 0;
}

//beolvassa a min..max közötti egész számot (max<min => max=végtelen)
void be_int(string kerdes, int &n, int min, int max, string uzenet)
{
    bool hiba;
    string tmp;

    do
    {
      if (max>=min)
      {
        curPos(0,0); cout<<setfill(' ')<<setw(80)<<' '; curPos(0,0);
        cout << kerdes << " (" << min << ".." << max << "):"; cin >> n;
        hiba=cin.fail() || cin.peek()!='\n' || n<min || n>max;
      }
        else
      {
        curPos(0,0); cout<<setfill(' ')<<setw(80)<<' '; curPos(0,0);
        cout << kerdes << " (" << min << "..):"; cin >> n;
        hiba=cin.fail() || cin.peek()!='\n' || n<min;
      }
      if (hiba)
      {

        cout<<uzenet+" Mehetunk?\n";
        cin.clear(); getline(cin,tmp,'\n'); //pufferürítés
        getline(cin,tmp,'\n'); //az utzenetre válasz beolvasása
        curPos(1,0); cout<<setfill(' ')<<setw(80)<<' ';
        curPos(2,0); cout<<setfill(' ')<<setw(80)<<' ';
      }
    }
    while(hiba);
}

//feltöltésmód beolvasása:
int feltoltesMod()
{
    int melyik;
    bool hiba; char c;
    string tmp;

    ujLap();
    cout << "Valasszon az alabbi feltoltesmodok kozul:" << endl;
    cout << "0: novekedoen" << endl;
    cout << "1: csokkenve" << endl;
    cout << "2: majdnem (novekedoen) rendezve" << endl;
    cout << "3: veletlenszeruen" << endl;
    cout << "Melyik (0..3): ";
    do
    {
        curPos(5,15); cout << "                             "; curPos(5,15);
        cin >> melyik;
        hiba = cin.fail() || (0>melyik || melyik>3);
        if(hiba)
        {
            cout<<" Hibas adat! Mehetunk?\n";
            cin.clear(); getline(cin,tmp,'\n'); //pufferürítés
            getline(cin,tmp,'\n'); //a "Mehetünkre?" válasz beolvasása
            curPos(6,0); cout<<setfill(' ')<<setw(80)<<' ';
            curPos(7,0); cout<<setfill(' ')<<setw(80)<<' ';
        }
    }
    while (hiba);
    return melyik;
}

void feltoltNovekedve()
{
    s[1]=rand()%elemSzam+1;
    r[1]=s[1];
    for(int i=2;i<=elemSzam;++i)
    {
        s[i]=s[i-1]+rand()%3;
        r[i]=s[i];
    }
    tombKiiras("Feltolt novekedve");
}

void feltoltCsokkenve()
{
    s[1]=rand()%elemSzam+1;
    r[1]=s[1];
    for(int i=2;i<=elemSzam;++i)
    {
        s[i]=s[i-1]-rand()%3;
        r[i]=s[i];
    }
    tombKiiras("Feltolt csokkenve");
}

void feltoltMajdnemRendezve()
{
    int j,k,sv;

    s[1]=rand()%elemSzam+1;
    r[1]=s[1];
    for(int i=2;i<=elemSzam;++i)
    {
        s[i]=s[i-1]+rand()%3;
        r[i]=s[i];
    }
    for(int i=1;i<=elemSzam/10;++i)
    {
        j=rand()%elemSzam+1;
        do
        {
            k=rand()%elemSzam+1;
        }
        while (j==k);
        sv=s[j]; s[j]=s[k]; s[k]=sv;
        r[j]=r[k]; r[k]=sv;
    }
    tombKiiras("Feltolt majdnem rendezve");
}

void feltoltVeletlennel()
{
    for(int i=1;i<=elemSzam;++i)
    {
        s[i]=rand()%elemSzam+1;
        r[i]=s[i];
    }
    tombKiiras("Feltolt veletlennel");
}

void oraIndul()
{
    kezdet=clock();
    hSzam=0; mSzam=0;
}

void oraAll()
{
    veg=clock();
    elteltIdo=veg-kezdet;
}

void tombKiiras(string cim)
{
    ujLap();
    cout << cim << endl << endl;
    int meddig; //ameddig listázza az elemeket... az ellenõrzés kedvéért
    if (elemSzam<kiN)
    {
        meddig=elemSzam;
    }
    else
    {
        meddig=kiN;
    }
    for(int i=1;i<=meddig;++i)
    {
        cout << /*setw(4) << i << ':' << */setw(5) << r[i];
    }
    cout << endl;
    billreVar();
}

void kiertekeles(string cim)
{
    tombKiiras(cim);
    cout << "\nEltelt ido:" << elteltIdo;
    cout << " | Hasonlitasok szama:" << hSzam << " | Mozgatasok szama:" << mSzam << endl;
    billreVar();
}

void csere(int a, int b)
{
    ++mSzam;
    int t = r[a];
    r[a] = r[b];
    r[b] = t;
}

void egyszeruCseres()
{
    oraIndul();

/*Ide jön az r rendezése */
    for (int i = 1; i <= elemSzam - 1; ++i)
    {
        for (int j = i + 1; j <= elemSzam; ++j)
        {
            ++hSzam;
            if (r[i] > r[j])
            {
                csere(i, j);
            }
        }
    }

    oraAll();
    kiertekeles("Egyszeru cseres");
    masol(); /* Az eredeti érték visszaállítása */
}

void minimumKivalsztasos()
{
    oraIndul();

/*Ide jön az r rendezése */
    for (int i = 1; i < elemSzam; ++i) {
        int m = i;
        for (int j = m + 1; j <= elemSzam; ++j)
        {
            ++hSzam;
            if (r[j] < r[m])
            {
                m = j;
            }
        }
        csere(i, m);
    }

     oraAll();
     kiertekeles("Minimum-kivalasztasos");
     masol(); /* Az eredeti érték visszaállítása */
}

void buborek()
{
    oraIndul();

/*Ide jön az r rendezése */
    for (int i = elemSzam; i > 1; --i)
    {
        for (int j = 1; j <= i - 1; ++j) // j: buborék elsõ elemének az indexe
        {
            ++hSzam;
            if (r[j] > r[j+1])
            {
                csere(j, j+1);
            }
        }
    }

    oraAll();
    kiertekeles("Buborekos");
    masol(); /* Az eredeti érték visszaállítása */
}

void javitottBuborek()
{
    oraIndul();

/*Ide jön az r rendezése */
    int i = elemSzam;
    while (i > 1)
    {
        int cs = 0;
        for (int j = 1; j <= i - 1; ++j) // j: buborék elsõ elemének az indexe
        {
            ++hSzam;
            if (r[j] > r[j+1])
            {
                csere(j, j+1);
                cs = j;
            }
        }
        i = cs;
    }

    oraAll();
    kiertekeles("Javitott buborekos");
    masol(); /* Az eredeti érték visszaállítása */
}

void beilleszteses()
{
    oraIndul();

/*Ide jön az r rendezése */
    for (int i = 2; i <= elemSzam; ++i)
    {
        int j = i-1;
        while (j >= 1 && r[j] > r[j+1])
        {
            ++hSzam;
            csere(j, j+1);
            --j;
        }
        ++hSzam;
    }

    oraAll();
    kiertekeles("Beilleszteses");
    masol(); /* Az eredeti érték visszaállítása */
}



int szetvalogat(int a, int f)
{
    int nagyobb = f -1;
    int kisebb = a;
    int i = kisebb;
    while (nagyobb > kisebb)
    {
        if (r[i] > f) {
            csere(i, nagyobb);
            //tombKiiras("");
            --nagyobb;
        } else {
            ++kisebb;
            ++i;
        }
    }
    csere(f, nagyobb);
    return nagyobb;
}

void gyorsRendezes(int a, int f)
{
    if (a < f)
    {
        int p = szetvalogat(a, f);
        gyorsRendezes(a, p - 1);
        gyorsRendezes(p + 1, f);
    }
}

void javitottBeilleszteses()
{
    oraIndul();

    gyorsRendezes(1, elemSzam);

    oraAll();
    kiertekeles("Javitott beilleszteses");
    masol(); /* Az eredeti érték visszaállítása */
}

//r<=s:
void masol()
{
    for (int i=1;i<=elemSzam;++i)
    {
        r[i]=s[i];
    }
}

//billentyû-lenyomásra várakozik
void billreVar()
{
    system("pause");//windows esetében!
}

//kurzor-pozícionálás a konzol-ablakban:
void curPos(int s, int o)
{
    COORD hova;
    hova.X=o; hova.Y=s;
    SetConsoleCursorPosition (GetStdHandle(STD_OUTPUT_HANDLE),hova);
}

//képernyõtörlés:
void ujLap()
{
    system("cls"); //képernyõtörlés
}
