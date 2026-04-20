// 🚨
// 🚨 Source: https://netactuate.dl.sourceforge.net/project/wordlist/SCOWL/2020.12.07/scowl-2020.12.07.zip?viasf=1::src/deaccent.cc
// 🚨

#include <cstdio>

#include "deaccent.hh"

using namespace std;

int main() {
  int c;
  while ( c = getchar(), c != -1 ) 
  {
    putchar(deaccent(c));
  }
}
