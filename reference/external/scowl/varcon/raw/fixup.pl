# 🚨
# 🚨 Source: https://master.dl.sourceforge.net/project/wordlist/VarCon/2020.12.07/varcon-2020.12.07.zip?viasf=1::varcon-2020.12.07/raw/fixup.pl
# 🚨

# Change entries with just A to +

while (<>) {
    my $orig_line = $_;
    chomp;
    @entries = split / \/ /;
    my $amer_only = 1;
    foreach (@entries) {
        s/^A(.?:)/\_$1/ or $amer_only = 0;
    }
    if ($amer_only) {
        print join(' / ', @entries), "\n";
    } else {
        print $orig_line;
    }
}
