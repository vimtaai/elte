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
  string kimenet;

  if (nap == HETFO) { kimenet = "hetfo"; }
  if (nap == KEDD) { kimenet = "kedd"; }
  if (nap == SZERDA) { kimenet = "szerda"; }
  if (nap == CSUTORTOK) { kimenet = "csutortok"; }
  if (nap == PENTEK) { kimenet = "pentek"; }
  if (nap == SZOMBAT) { kimenet = "szombat"; }
  if (nap == VASARNAP) { kimenet = "vasarnap"; }

  os << kimenet; // cout << kimenet;

  return os;
}
