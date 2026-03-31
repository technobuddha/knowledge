# 🚨
# 🚨 Source: https://master.dl.sourceforge.net/project/wordlist/VarCon/2020.12.07/varcon-2020.12.07.zip?viasf=1::varcon-2020.12.07/raw/old/filter-tab-old.pl
# 🚨
use strict;
use warnings;

use varcon;

open F, "varcon.txt" or die;

my %data;

while (<F>) {
    my $line = $_;
    my @words = varcon::get_words($line);
    foreach (@words) {
        push @{$data{$_}}, \@words;
    }
}

while (<>) {
    chomp;
    my @words = sort split /\t/, $_;
    my %tocheck;    
    foreach (@words) {
        foreach (@{$data{$_}}) {
            $tocheck{$_} = $_;
        }
    }
    print ">>@words\n";
    foreach (keys %tocheck) {
        print "@{$tocheck{$_}}\n";
    }
    print "---\n";
}

