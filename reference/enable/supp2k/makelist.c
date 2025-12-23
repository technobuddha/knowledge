# 🚨
# 🚨 Source: https://web.archive.org/web/20071018165557if_/http://personal.riverusers.com/~thegrendel/supp2k.zip::makelist.c
# 🚨
               /* ENABLE word list merge program, ver 2.0 */

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

static void flushline(void);
static void strlwr(char *);
static int lexcmp(char *, char *, int);
static int validate(char *);

static int maxlen = 80;   /* maximum acceptable input word size */
static int Scrabble;      /* a trademark of the Milton-Bradley Co. */

struct fileinfo {       /* this structure defines an input */
    char *name;
    char *prompt;
    char action;        /* + to add the file, - to remove it, ! to censor */
    signed char caps;   /* 0 = lower-case, -1 = translate to lower case,
                          +1 = mixed case */
    char eof;
    signed char sameas;
    FILE *file;
    char buf[80];
};

static int divot(struct fileinfo *);

main(void) {
    /*---*
     * MAKELIST is a simple n-way merge program, whose purpose is to make
     * the building of custom word lists based on ENABLE2K as easy as
     * possible.
     *
     * This code is ISO C 89, with ASCII dependencies.
     * If you compile with Microsoft C on Windows, I recommend the /Za
     * option to disable Microsoft extensions.
     *---*/
    enum files { BASE=0, SIG, MW10, OSPD, TWODICTS, PLURALS, STALE,
                 ABLE, UNABLE, ABLESIG,
                 LCACR, NOPOS, LETTERS, UPPER, UCACR, DIVOT1, DIVOT2,
                 DIVOT3, NFILES };
                   /* enumerate the possible input files */
                   /* OSPD is a trademark of the Milton-Bradley Co. */
    struct fileinfo source[NFILES] = {
        { "word.lst", 0, '+', 0, 0, -1 },
        { "sigword.lst", "signature words", '-', 0, 0, -1 },
        { "mw10add.lst", "new MW10 words", '-', 0, 0, -1 },
        { "stale.lst", "stale OSPD words", '-', 0, 0, -1 },
        { "ospdadd.lst", "additional OSPD(r) words", '+', 0, 0, -1 },
        { "2dicts.lst", "words confirmed by 2 dictionaries", '+', 0, 0, -1 },
        { "plurals.lst", "additional plurals", '+', 0, 0, -1 },
        { "able.lst", "OSW and Chambers words", '+', 0, 0, -1 },
        { "unable.lst", "dubious ABLE words", '+', 1, 0, -1 },
        { "ablesig.lst", "ABLE signature words", '^', 0, 0, -1 },
        { "lcacr.lst", "lower-case acronyms", '+', 0, 0, -1 },
        { "nopos.lst", "words with no part of speech", '+', 0, 0, -1 },
        { "letters.lst", "inflections of one-letter words", '+', 0, 0, -1 },
        { "upper.lst", "upper-case words (not proper names)", '+', 0, 0, -1 },
        { "ucacr.lst", "upper-case acronyms", '+', 0, 0, -1 },
        { "divot1.xpg", "", '!', 0, 0, -1 },
        { "divot2.xpg", "", '!', 0, 0, -1 },
        { "divot3.xpg", "", '!', 0, 0, -1 }};

    char obuf[80];          /* output buffer */
    char outname[80];       /* output file name */
    FILE *out;
    int failed = 0;
    long count = 0;
    int i;
    int comp;               /* comparison result */
    int least;              /* number of file containing next word */
    char ans;               /* prompt response */
    int usedup = 0;         /* number of files closed or used up */
    int accept;
    int duplicate;
    int censor = 0;
    int skip;
    char asig_action;

    puts("ENABLE Word List Generation program v1.0\n");
out_prompt:
    puts("Enter the output file name.");
out_read:
    fgets(outname, 80, stdin);
    if (outname[i = strlen(outname)-1] != '\n') {
        puts("Please enter a shorter file name.");
        flushline();
        goto out_read;
    }
    outname[i] = 0;
    out = fopen(outname, "w");
    if (!out) {
        perror("Unable to open output file");
        goto out_prompt;
    }

    /*---*
     * For each potential input source, other than the base list, prompt
     * for whether or not to include it.  WORD.LST already includes the
     * signature words and the new MW10 words, so a decision to include
     * them entails no processing, and they need only be processed if they
     * are to be excluded.
     *---*/
    for (i = BASE; i < NFILES; ++i) {
        if (i == BASE) ans = 'y';
        else if (i == DIVOT1) {
cens_prompt:
    /*---*
     * See if expurgation is wanted.  If so, one to three additional
     * input files are used to control the expurgation.
     *---*/
            puts("Do you wish to remove offensive words? (y or n)");
            ans = tolower(getchar());
            flushline();
            if (ans != 'n' && ans != 'y' && ans != '\n') goto cens_prompt;
            if (ans == 'y') {
                censor = 1;
lev_prompt:
                puts("Specify the expurgation level:\n"
                     "1.  Cautious\n2.  Aggressive\n3.  Politically Correct\n");
                ans = getchar();
                if (ans != '\n') flushline();
                if (ans < '1' || ans > '3') goto lev_prompt;
                censor = ans - '0';
                ans = 'y';
            }
        } else if (i > DIVOT1)
            ans = censor > i - DIVOT1? 'y': 'n';
        else {
    /*---*
     * If the ABLE Supplement was not downloaded, the ABLESIG and UNABLE files will
     * not be present.  Don't ask about them in this case.
     *---*/
            if (i == ABLESIG || i == UNABLE) {
                FILE *access;
                if (!source[ABLE].action || !(access = fopen(source[i].name, "r"))) {
                    source[i].action = 0;
                    ++usedup;
                    continue;
                }
                else fclose(access);
            }
in_prompt:
            printf("Do you want to include %s? (y or n)\n", source[i].prompt);
            ans = tolower(getchar());
            flushline();
            if (ans != 'n' && ans != 'y' && ans != '\n') goto in_prompt;
        }
        if ((ans != 'y') == (source[i].action != '-' && source[i].action != '^')) {
			source[i].action = 0;
			++usedup;
        } else {
            source[i].file = fopen(source[i].name, "r");
            if (!source[i].file) {
                sprintf(obuf, "Unable to open %s", source[i].name);
                perror(obuf);
                failed = 1;
                goto quit;
            }
    /*---*
     * If either of the mixed-case files is to be included, the user can
     * choose whether to ignore case distinctions (translating all words
     * to lower case) or to preserve them.  The choice applies to both
     * such lists.
     *---*/
            if (i == UPPER || (i == UCACR && source[UPPER].caps == 0)) {
case_prompt:
                puts("Do you want to keep case distinctions? (y or n)");
                ans = tolower(getchar());
                flushline();
                if (ans != 'n' && ans != 'y' && ans != '\n') goto case_prompt;
                if (ans == 'y') source[i].caps = 1;
                else source[i].caps = -1;
                if (i == UPPER) source[UCACR].caps = source[UPPER].caps;
                source[UNABLE].caps =
                source[DIVOT1].caps = source[DIVOT2].caps =
                source[DIVOT3].caps = source[UCACR].caps;
            }
        }
    }

scrab_prompt:
    puts("Remove words not valid in Scrabble(r)? (y or n)");
    ans = tolower(getchar());
    flushline();
    if (ans != 'n' && ans != 'y' && ans != '\n') goto scrab_prompt;
    if (ans == 'y') {
        maxlen = 15;
        Scrabble = 1;
    } else {
        puts("Enter the maximum word length allowed, or 0 for no limit.");
        ans = getchar();
        if (ans != '\n') {
            ungetc(ans, stdin);
            scanf("%d", &maxlen);
            flushline();
        }
        if (maxlen == 0) maxlen = 80;
    }

    /*---*
     * Read a word from each input file.  If we're validating the input,
     * skip any invalid words.  Note that all words in 2DICTS.LST are
     * longer than 8, so if the maximum length is 8 or less, the entire
     * file can be ignored.
     *---*/
    for (i = BASE; i < NFILES; ++i)
        if (source[i].action) {
            if (i == TWODICTS && maxlen < 9) {
                fclose(source[i].file);
                source[i].eof = 1;
                ++usedup;
            } else
            do {
                fgets(source[i].buf, 80, source[i].file);
                if (feof(source[i].file)) {
                    fclose(source[i].file);
                    source[i].eof = 1;
                    ++usedup;
                    break;
                }
                source[i].buf[strlen(source[i].buf)-1] = 0;
                            /* Remove trailing new line */
                skip = 0;
                if (i >= DIVOT1)
                    skip = !divot(&source[i]);
                else if (source[i].caps == -1)
                    strlwr(source[i].buf);
    /*---*
     * The ABLE signature word file entries are marked with a code indicating
     * whether the word is to be added (+) or deleted (-), and whether the word
     * is Scrabble-ineligible (&, ~).  The action code is saved for later
     * processing, and we skip the dubious signatures if we're not processing
     * the UNABLE file.
     *---*/
                if (i == ABLESIG) {
                    char *c;
                    asig_action = source[i].buf[0];
                    if (!source[UNABLE].action && (asig_action == '&' ||
                                                   asig_action == '~'))
                        skip = 1;
                    else
                        for (c = source[i].buf; c[0]; ++c)
                            c[0] = c[1];
                }
            } while(skip || !validate(source[i].buf));
        }

    /*---*
     * Compare the current word from each of the active (not used up) input
     * files, and identify the first (in alphabetical order).  If there is
     * any mixed-case input, the comparison is in lexicographical rather
     * than ASCII order.  A word can appear in more than one file.  We
     * note all files containing the chosen word, since each such file will
     * need to be read again after this word is processed.
     *---*/
    while (usedup < NFILES) {
        for (least = BASE; !source[least].action || source[least].eof; ++least);
        for (i = least + 1; i < NFILES; ++i) {
            if (source[i].action && !source[i].eof) {
                comp = source[i].caps <= 0?
                          strcmp(source[i].buf, source[least].buf) :
                          lexcmp(source[i].buf, source[least].buf,
                                 source[i].action);
                            /* compare this word to the current choice */
                if (comp == 0) {        /* the same word */
                    source[i].sameas = least;
                } else if (comp < 0) {  /* less than, process it first */
                    least = i;
                    source[i].sameas = -1;
                } else {                /* greater than, lt can wait */
                    source[i].sameas = -1;
                }
            }
        }
        accept = 0;             /* assume we will NOT accept this word */
        strcpy(obuf, source[least].buf);    /* copy to output buffer */
        for (i = least; i < NFILES; ++i) {
            if (i == least || (source[i].action && !source[i].eof &&
                			   source[i].sameas == least)) {
    /*---*
     * If the last file containing the word is being added, the word is
     * accepted; otherwise it is removed.  This depends on the removal
     * files (SIGWORDS.LST and MW10ADD.LST) preceding the other files in
     * the list.
     *
     * We have to be careful processing the ABLESIG file.  Any removal
     * specified by this file applies only to the ABLE or UNABLE input;
     * that is, such words should not be removed if they are introduced
     * by some other source.
     *---*/
                if (source[i].action == '+') {
                    if ((i != ABLE && i != UNABLE) || !source[ABLESIG].action ||
                        source[ABLESIG].sameas != least)
                        accept = 1;
                }
                else if (source[i].action == '-' ||
                         source[i].action == '!') accept = 0;
                else if (source[i].action == '^') {
                    if (asig_action == '-' || asig_action == '~')
                        accept = 1;
                }
    /*---
     * Read from each file containing the chosen word.  The mixed case
     * files may contain several consecutive words differing only in
     * capitalization, which need to be skipped if we are lower-casing
     * the input.
     *
     * If we are expurgating and operating in mixed-case mode, we can
     * only read a divot file again when the last word potentially
     * matching the input word (the form in all lower case) has been
     * read.
     *---*/
                do {
                    if (i >= DIVOT1 && source[i].caps == 1 &&
                        source[i].action == '!' &&
                        strcmp(obuf, source[i].buf) != 0)
                        break;
                    fgets(source[i].buf, 80, source[i].file);
                    if (feof(source[i].file)) {
                        source[i].eof = 1;
                        fclose(source[i].file);
                        ++usedup;
                        break;
                    }
                    else {
                        source[i].buf[strlen(source[i].buf)-1] = 0;
                        if (i == ABLESIG) {
                            char *c;
                            asig_action = source[i].buf[0];
                            if (!source[UNABLE].action && (asig_action == '&' ||
                                                           asig_action == '~')) {
                                duplicate = 1;
                                continue;
                            }
                            else
                                for (c = source[i].buf; c[0]; ++c)
                                    c[0] = c[1];
                        }
                        if (i >= DIVOT1) {
                            duplicate = !divot(&source[i]);
                        }
                        else if (source[i].caps == -1) {
                            strlwr(source[i].buf);
                            duplicate = !strcmp(source[i].buf, obuf);
                        } else duplicate = 0;
                    }
                } while(duplicate || !validate(source[i].buf));
                source[i].sameas = -1;
            }
        }
        if (accept) {
            ++count;
            fputs(obuf, out);
            putc('\n', out);
        }
    }

    fclose(out);
    printf("%ld words written to %s.\n", count, outname);
    /*---*
     * MAKELIST may be used from the Windows(r) RUN menu, which immediately
     * closes its output window on termination of the program.  So we have
     * to wait for user input to be sure the user sees our wonderfully
     * informative messages.
     *
     * Windows is a trademark of the Microsoft Corp.
     *---*/
quit:
    puts("Hit enter to end program.");
    getchar();
    puts("Scrabble and OSPD are trademarks of the Milton Bradley Co.\n");
    exit(failed);
}

    /*---*
     * This subroutine does special processing for input of the divot
     * (derogatory/insensitive/vulgar/offensive/taboo) files.
     *---*/
int divot(struct fileinfo *src) {
    char *p;

    /*---*
     * If we are losing case distinctions, then all divot words with exact
     * case requirements are ignored.  (This form is used only if there is
     * at least one inoffensive word with the same spelling.)
     *---*/
    if (src->caps == -1 && !(src->buf[0] & 0x80))
        return 0;
    /*---*
     * If there is no upper case input, we can drop any words which offend
     * only in upper-case.
     *---*/
    else if (src->caps == 0 && !(src->buf[0] & 0x80) &&
             isupper(src->buf[0] & 0x7f))
        return 0;
    /*---*
     * To distinguish between a word which offends in lower-case and one
     * which always offends, we set the action field to '!' for generally
     * offensive words.  The main loop will do a case insensitive compare
     * for such words.
     *---*/
    if (src->caps == 1 && (src->buf[0] & 0x80))
        src->action = '!';
    else src->action = '-';
    for (p = src->buf; *p; ++p)
        *p &= 0x7f;
    return 1;
}

    /*---*
     * Validate a word for use in Scrabble.
     *---*/
static int validate(char *inp) {    /* ASCII dependent! */
    static char letlim[26] = {      /* number of tiles per letter */
        9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2,
        6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1
    };
    char actual[26];
    int excess = 0;
    char c;

    if (maxlen < 80 && strlen(inp) > maxlen) return 0;
    if (!Scrabble) return 1;
    memset(actual, 0, 26);
    /*---*
     * If more than two blanks are needed to spell a word, it is
     * impossible to play in Scrabble.
     *---*/
    for (; *inp; ++inp) {
        c = tolower(*inp) - 'a';
        if ((unsigned int) c > 26) return 0;
        if (++actual[c] > letlim[c] && ++excess > 2)
            return 0;
    }
    return 1;
}

    /*---*
     * The flushline function discards input characters up to the next
     * new line.  It is called to avoid reading part of a previous invalid
     * response when repeating a prompt.
     *---*/
static void flushline(void) {
    char ignore;
    do {
        ignore = getchar();
    } while(ignore != '\n');
}

    /*---
     * A simple portable function to translate to lower-case.
     *---*/
static void strlwr(char *s) {
    for (;*s; ++s)
        *s = tolower(*s);
}

    /*---*
     * Compare two strings lexicographically, with upper case comparing
     * less than the lower case form of the same character.  If the action
     * is set to '!', we do a case-insensitive compare rather than a full
     * lexicographical compare.
     *---*/
static int lexcmp(char *a, char *b, int action) {
	char *aa = a, *bb = b;
	while(tolower(*aa) == tolower(*bb) && *aa) ++aa, ++bb;
    if (tolower(*aa) != tolower(*bb))
        return tolower(*aa) - tolower(*bb);
    if (action == '!') return 0;
	return strcmp(a, b);
}
