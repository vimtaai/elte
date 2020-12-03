#include "szoveg.hpp"

vector<string> split(string szoveg, char elvalaszto)
{
  vector<string> kimenet;
  string temp = "";

  for (int i = 0; i < szoveg.size(); ++i)
  {
    if (szoveg[i] != elvalaszto)
    {
      temp += szoveg[i];
    }
    else
    {
      kimenet.push_back(temp);
      temp = "";
    }
  }

  kimenet.push_back(temp);
  return kimenet;
}
