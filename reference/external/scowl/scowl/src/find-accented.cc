// 🚨
// 🚨 Source: https://netactuate.dl.sourceforge.net/project/wordlist/SCOWL/2020.12.07/scowl-2020.12.07.zip?viasf=1::src/find-accented.cc
// 🚨

#include <iostream>
#include <string>
#include "deaccent.hh"

using namespace std;

int main() {
  int c;
  string line;
  while ( getline(cin, line) ) 
    {
      for (unsigned int i = 0; i != line.size(); ++i) {
	if (line[i] != deaccent(line[i])) {
	  cout << line << '\n';
	  break;
	}
      }
    }
}
