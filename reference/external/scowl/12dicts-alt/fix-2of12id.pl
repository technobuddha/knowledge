# 🚨
# 🚨 Source: https://master.dl.sourceforge.net/project/wordlist/Alt12Dicts/2020.12.07/alt12dicts-2020.12.07.zip?viasf=1::alt12dicts-2020.12.07/fix-2of12id.pl
# 🚨

open F, "2of12id.txt";

while (<F>)
{
  chop; chop;
  ($d,$w,$p,$a) = /^(\-?)(\w+) (.*):( ?.*)/ or die;
  my $s = "$d$w $p:";
  local $_ = $a;
  while (length $_ > 0) {
    if (s/^ ([-~\w\']+)//) {
      $s .= " $1 ";
    } elsif (s/^ (\(.+?\)|{.+?}|[\/|] [-~\w\']+)//) {
      $s .= "$1 ";
    } else {
      die;
    }
  }
  $s =~ s/ $//;
  print "$s\r\n";
}
