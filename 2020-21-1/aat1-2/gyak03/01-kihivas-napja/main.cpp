#include <iostream>
#include <vector>
#include <iomanip>
#include <fstream>

using namespace std;

struct Nevezes {
  string varos;
  int lakossag;
  int indulok_szama;
};

int main()
{
    // vector<Nevezes> nevezesek;
    ifstream input("input.txt");
    ofstream output("output.txt");

    // int N;
    // file >> N;
    // nevezesek.resize(N);

    Nevezes max_nevezes;
    // Elõreolvasás
    input >> max_nevezes.varos >> max_nevezes.lakossag >> max_nevezes.indulok_szama;

    //for (int i = 0; i < N; ++i)
    while (!input.eof())
    {
      Nevezes bemenet;
      input >> bemenet.varos >> bemenet.lakossag >> bemenet.indulok_szama;

      if (bemenet.lakossag > max_nevezes.lakossag)
      {
        max_nevezes = bemenet;
      }
      // nevezesek.push_back(bemenet);
    }

    // for (int i = 1; i < nevezesek.size(); ++i)
    // {
    //   if (nevezesek.at(i).lakossag > nevezesek.at(max_i).lakossag)
    //   {
    //     max_i = i;
    //   }
    // }

    // double szazalek = (double)(nevezesek.at(max_i).indulok_szama * 10000 / nevezesek.at(max_i).lakossag) / 100;
    double szazalek = (double)max_nevezes.indulok_szama / max_nevezes.lakossag * 100;
    output.precision(3);
    output << max_nevezes.varos << " " << szazalek << "%";
    return 0;
}
