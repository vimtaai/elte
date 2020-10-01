#include "nap.hpp"

Nap operator++(Nap &nap) // ++nap (prefix)
{
  nap = Nap((nap + 1) % NAPOK_SZAMA);
  return nap;
}

Nap operator++(Nap &nap, int) // nap++ (postfix)
{
  Nap eredmeny = nap;
  ++nap;
  return eredmeny;
}

ostream& operator<<(ostream &os, const Nap &nap)
{
  os << nap_to_string(nap); // cout << kimenet;
  return os;
}

istream& operator>>(istream &is, Nap &nap)
{
  string bemenet;
  is >> bemenet;
  nap = string_to_nap(bemenet);
  return is;
}

Nap string_to_nap(const string &str)
{
  if (str == "hetfo") { return HETFO; }
  if (str == "kedd") { return KEDD; }
  if (str == "szerda") { return SZERDA; }
  if (str == "csutortok") { return CSUTORTOK; }
  if (str == "pentek") { return PENTEK; }
  if (str == "szombat") { return SZOMBAT; }
  if (str == "vasarnap") { return VASARNAP; }
}

string nap_to_string(const Nap &nap)
{
  if (nap == HETFO) { return "hetfo"; }
  if (nap == KEDD) { return "kedd"; }
  if (nap == SZERDA) { return "szerda"; }
  if (nap == CSUTORTOK) { return "csutortok"; }
  if (nap == PENTEK) { return "pentek"; }
  if (nap == SZOMBAT) { return "szombat"; }
  if (nap == VASARNAP) { return "vasarnap"; }
}
