#include <iostream>
#include <cstdlib>

using namespace std;

//int stoi(string s)
//{
//    return atoi(s.c_str());
//}
const int MAXN = 256;

void split(const string str,
           const char delim,
           string result[])
{
    int index = 0;
    result[0] = "";
    for (int i = 0; i < str.length(); ++i)
    {
        if (str[i] == delim)
        {
            result[++index] = "";
        }
        else
        {
            result[index] += str[i];
        }
    }
}


//int elteltido(string idopont)
//{
//    string ora = "", perc = "";
//    bool kettospont = false;
//    for (int i = 0; i < idopont.length(); ++i)
//    {
//        if (idopont[i] == ':')
//        {
//            kettospont = true;
//        }
//        else
//        {
//            if (kettospont)
//            {
//                perc += idopont[i];
//            }
//            else
//            {
//                ora += idopont[i];
//            }
//        }
//    }
//    int ora_int = atoi(ora.c_str());
//    int perc_int = atoi(perc.c_str());
//
//    return ora_int * 60 + perc_int;
//}

int elteltido(string idopont)
{
    string ido[2];
    split(idopont, ':', ido);
    return (atoi(ido[0].c_str())) * 60 +
           (atoi(ido[1].c_str()));
}

int main()
{
    // Be:
    string idopontok[MAXN];
    // Ki:
    int elteltidok[MAXN];

    // Beolvasás
    int N;
    cin >> N;
    for (int i = 0; i < N; ++i)
    {
        cin >> idopontok[i];
    }
    // Feldolgozás
    for (int i = 0; i < N; ++i)
    {
        elteltidok[i] = elteltido(idopontok[i]);
    }
    // Kiírás
    for (int i = 0; i < N; ++i)
    {
        cout << elteltidok[i] << endl;
    }

    return 0;
}
