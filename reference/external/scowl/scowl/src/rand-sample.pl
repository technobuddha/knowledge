#!/usr/bin/perl
# 🚨
# 🚨 Source: https://netactuate.dl.sourceforge.net/project/wordlist/SCOWL/2020.12.07/scowl-2020.12.07.zip?viasf=1::src/rand-sample.pl
# 🚨

while (<STDIN>) {
  chop;
  push @words, $_;
}
@words = grep {length $_ > 2} @words;
@words = sort @words;
@num = (0 .. $#words);

@use = ();

for ($i = 0; $i < $ARGV[0]; ++$i) {
  $r=int rand @num;
  push @use, splice @num, $r, 1;
}

@use = sort {$a <=> $b} @use;

foreach $i (@use) {
  print "$words[$i] ";
}
print "\n";
