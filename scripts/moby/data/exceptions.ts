// cspell:disable
type Exception = { line: number } & ({ word: string } | { from: string; to: string });

// prettier-ignore
export const exceptions: Record<string, Exception> = {
'airwave':                  { from: "'/&/(@)r ,w/eI/v",                                 to: "'/(@)/r ,w/eI/v",                                  line: 3210    } ,   // syntax error
'air space':                { from: "/(@)/r_sp/eI/c",                                   to: "/(@)/r_sp/eI/s",                                   line: 3362    } ,   // "c"
'alloy':                    { from: "'/&/lO/i/",                                        to: "'/&/l//Oi//",                                      line: 4517    } ,   // "O"
'anchor space':             { from: "'/&//N/k/@/r_sp/eI/c",                             to: "'/&//N/k/@/r_sp/eI/s",                             line: 6030    } ,   // "c"
"antivivisectionist":       { from: ",/&/nt/I/,v/I/v/@/'s/E/ksh(/@/)n/@/st",            to: ",/&/nt/I/,v/I/v/I/'s/E/k/S//@/n/@/st",             line: 7533    } ,   // syntax error
'Anzhero-Sudzhensk':        { from: "/A/n'/Z//E/ROs/U/d'/Z//E/nsk",                     to: "/A/n'/Z//E/R/@/s/U/d'/Z//E/nsk",                   line: 7666    } ,   // "O"
'bee space':                { from: "b/i/_sp/eI/c",                                     to: "b/i/_sp/eI/s",                                     line: 15413   } ,   // "c"
'blackboy':                 { from: "'bl/&/kbO/i/",                                     to: "'bl/&/kb//Oi//",                                   line: 17977   } ,   // "O"
'breathing space':          { from: "'br/i//D//I//N/_sp/eI/c",                          to: "'br/i//D//I//N/_sp/eI/s",                          line: 21672   } ,   // "c"
'brogh':                    { from: 'bRO/x/',                                           to: 'bR/AU//x/',                                        line: 22314   } ,   // "O"
'brough':                   { from: 'bRO/x/',                                           to: 'bR/AU//x/',                                        line: 22554   } ,   // "O"
'brugh':                    { from: 'bRU/x/',                                           to: 'bR/AU/',                                           line: 22657   } ,   // "U"
'clearance space':          { from: "'kl/i/r/@/ns_sp/eI/c",                             to: "'kl/i/r/@/ns_sp/eI/s",                             line: 32570   } ,   // "c"
'clear space':              { from: "kl/i/r_sp/eI/c",                                   to: "kl/i/r_sp/eI/s",                                   line: 32609   } ,   // "c"
"coco-de-mer":              { from: ",k/oU/k/oU/-d/E/-'m/(@)/r",                        to: ",k/oU/ k/oU/ d/E/'m/(@)/r",                        line: 33783   } ,   // "-"
'convoy':                   { from: "'k/A/nvO/i/",                                      to: "'k/A/nv//Oi//",                                    line: 37104   } ,   // "O"
'cosmic space':             { from: "'k/A/zm/I/k_sp/eI/c",                              to: "'k/A/zm/I/k_sp/eI/s",                              line: 38074   } ,   // "c"
'deep-space':               { from: "d/i/p_sp/eI/c",                                    to: "d/i/p_sp/eI/s",                                    line: 43603   } ,   // "c"
'deep space':               { from: "d/i/p_sp/eI/c",                                    to: "d/i/p_sp/eI/s",                                    line: 43645   } ,   // "c"
'delimitation':             { from: '-t/eI//S//@/n',                                    to: "'d/eI//S//@/n",                                    line: 44034   } ,   // "-"
'didicoi':                  { from: "'d/I/d/I/,kO/i/",                                  to: "'d/I/d/I/,k//Oi//",                                line: 45926   } ,   // "O"
'Dimitrovo':                { from: "d/I/'m/i/tROVO",                                   to: "d/I/'m/i/tR/@/V/@/",                               line: 46315   } ,   // "O"
'dock space':               { from: "d/A/k_sp/eI/c",                                    to: "d/A/k_sp/eI/s",                                    line: 47909   } ,   // "c"
'double-space':             { from: "'d/@/b/@/l_sp/eI/c",                               to: "'d/@/b/@/l_sp/eI/s",                               line: 48797   } ,   // "c"
'double space':             { from: "'d/@/b/@/l_sp/eI/c",                               to: "'d/@/b/@/l_sp/eI/s",                               line: 48929   } ,   // "c"
'Drau':                     { from: 'dRO/@/',                                           to: 'dR/AU/',                                           line: 49456   } ,   // "O"
'dual space':               { from: "'d/u//@/l_sp/eI/c",                                to: "'d/u//@/l_sp/eI/s",                                line: 50379   } ,   // "c"
'eery':                     { from: "/I/(/@/)ri",                                       to: '/I//@/r/E/',                                       line: 51994   } ,   // syntax error
'Eifel':                    { from: "/j/f/U/l(/A/r_/aI/f/U/l)",                         to: '/aI/f/@/l',                                        line: 52207   } ,   // syntax error, prounciation error
'empty space':              { from: "'/E/mpt/i/_sp/eI/c",                               to: "'/E/mpt/i/_sp/eI/s",                               line: 53500   } ,   // "c"
'engine space':             { from: "'/E/n/dZ//@/n_sp/eI/c",                            to: "'/E/n/dZ//@/n_sp/eI/s",                            line: 53957   } ,   // "c"
'ether space':              { from: "'/i//T//@/r_sp/eI/c",                              to: "'/i//T//@/r_sp/eI/s",                              line: 55497   } ,   // "c"
'Euclidean space':          { from: "/j//u/'kl/I/d/i//@/n_sp/eI/c",                     to: "/j//u/'kl/I/d/i//@/n_sp/eI/s",                     line: 55672   } ,   // "c"
'fill-space':               { from: "f/I/l_sp/eI/c",                                    to: "f/I/l_sp/eI/s",                                    line: 60313   } ,   // "c"
'frame space':              { from: "fr/eI/m_sp/eI/c",                                  to: "fr/eI/m_sp/eI/s",                                  line: 64411   } ,   // "c"
'free-space':               { from: "fr/i/_sp/eI/c",                                    to: "fr/i/_sp/eI/s",                                    line: 64628   } ,   // "c"
'function space':           { from: "'f/@//N/k/S//@/n_sp/eI/c",                         to: "'f/@//N/k/S//@/n_sp/eI/s",                         line: 65877   } ,   // "c"
'galactic space':           { from: "g/@/'l/&/kt/I/k_sp/eI/c",                          to: "g/@/'l/&/kt/I/k_sp/eI/s",                          line: 66413   } ,   // "c"
'Gebrauchsmusik':           { from: "g/@/'bRO/@//x/sm/u/,z/i/k",                        to: "g/@/'bR/AU//x/sm/u/,z/i/k",                        line: 67550   } ,   // "O"
'Gorlovka':                 { from: "gOR'l/O/fk/A/",                                    to: "g/O/R'l/O/fk/A/",                                  line: 70510   } ,   // "O"
'Gough':                    { from: "g/Ou/",                                            to: "g/AU/",                                            line: 70599   } ,   // "Ou"
'Gyula Alapi':              { from: "'/dZ/00l/A/_'/A/l/A/p/i/",                         to: "'/dZ//i//u/l/A/_'/A/l/A/p/i/",                     line: 73197   } ,   // "00"
'hair space':               { from: "h/(@)/r_sp/eI/c",                                  to: "h/(@)/r_sp/eI/s",                                  line: 73583   } ,   // "c"
'half space':               { from: "h/&/f_sp/eI/c",                                    to: "h/&/f_sp/eI/s",                                    line: 74130   } ,   // "c"
'head space':               { from: "h/E/d_sp/eI/c",                                    to: "h/E/d_sp/eI/s",                                    line: 75865   } ,   // "c"
'Hilbert space':            { from: "'h/I/lb/@/rt_sp/eI/c",                             to: "'h/I/lb/@/rt_sp/eI/s",                             line: 77972   } ,   // "c"
'identification space':     { from: "/aI/,d/E/nt/@/f/@/'k/eI//S//@/n_sp/eI/c",          to: "/aI/,d/E/nt/@/f/@/'k/eI//S//@/n_sp/eI/s",          line: 81775   } ,   // "c"
'Idria':                    { from: "'/I/dr/i//@/_(c/&/l/I/f/A/rn/I//&/)",              to: "'/I/dr/i//@/",                                     line: 81890   } ,   // extra
'image space':              { from: "'/I/m/I//dZ/_sp/eI/c",                             to: "'/I/m/I//dZ/_sp/eI/s",                             line: 82286   } ,   // "c"
'indefinite space':         { from: "/I/n'd/E/f/@/n/I/t_sp/eI/c",                       to: "/I/n'd/E/f/@/n/I/t_sp/eI/s",                       line: 83476   } ,   // "c"
'infinite space':           { from: "'/I/nf/@/n/I/t_sp/eI/c",                           to: "'/I/nf/@/n/I/t_sp/eI/s",                           line: 84125   } ,   // "c"
'inner space':              { from: "'/I/n/@/r_sp/eI/c",                                to: "'/I/n/@/r_sp/eI/s",                                line: 84563   } ,   // "c"
'intergalactic space':      { from: ",/I/nt/@/rg/@/'l/&/kt/I/k_sp/eI/c",                to: ",/I/nt/@/rg/@/'l/&/kt/I/k_sp/eI/s",                line: 85282   } ,   // "c"
'intermediate space':       { from: ",/I/nt/@/r'm/i/d/i//I/t_sp/eI/c",                  to: ",/I/nt/@/r'm/i/d/i//I/t_sp/eI/s",                  line: 85387   } ,   // "c"
'interplanetary space':     { from: ",/I/nt/@/r'pl/&/n/I/,t/E/r/i/_sp/eI/c",            to: ",/I/nt/@/r'pl/&/n/I/,t/E/r/i/_sp/eI/s",            line: 85480   } ,   // "c"
'interstellar space':       { from: ",/I/nt/@/r'st/E/l/@/r_sp/eI/c",                    to: ",/I/nt/@/r'st/E/l/@/r_sp/eI/s",                    line: 85548   } ,   // "c"
'justification space':      { from: ",/dZ//@/st/@/f/@/'k/eI//S//@/n_sp/eI/c",           to: ",/dZ//@/st/@/f/@/'k/eI//S//@/n_sp/eI/s",           line: 88884   } ,   // "c"
'killjoy':                  { from: "'k/I/l/dZ/O/i/",                                   to: "'k/I/l/dZ///Oi//",                                 line: 90156   } ,   // "O"
'kitchen space':            { from: "'k/I//tS//@/n_sp/eI/c",                            to: "'k/I//tS//@/n_sp/eI/s",                            line: 90516   } ,   // "c"
'Kostroma':                 { from: "k/A/stRO'm/A/",                                    to: "k/A/stR/@/'m/A/",                                  line: 91069   } ,   // "O"
'lifebuoy':                 { from: "'l/aI/fbO/i/",                                     to: "'l/aI/fb/u//i/",                                   line: 94888   } ,   // "O"
'linear space':             { from: "'l/I/n/i//@/r_sp/eI/c",                            to: "'l/I/n/i//@/r_sp/eI/s",                            line: 95524   } ,   // "c"
'line space':               { from: "l/aI/n_sp/eI/c",                                   to: "l/aI/n_sp/eI/s",                                   line: 95566   } ,   // "c"
'Lisieux':                  { from: 'l/i/z/j/O',                                        to: 'l/i/z/j//y/',                                      line: 95872   } ,   // "O"
'living space':             { from: "'l/I/v/I//N/_sp/eI/c",                             to: "'l/I/v/I//N/_sp/eI/s",                             line: 96220   } ,   // "c"
'make space':               { from: "m/eI/k_sp/eI/c",                                   to: "m/eI/k_sp/eI/s",                                   line: 99143   } ,   // "c"
'mastoparietal':            { from: ",m/&/st/oU/p/@/'rì/I/t/-/l",                       to: ",m/&/st/oU/p/@/'r/aI//I/t/-/l",                    line: 100698  } ,  // "ì"
'microcephalism':           { from: ",m/aI/kr/oU/'s/E/f/@/úe/[@]//oU//@/m",             to: ",m/aI/kr/oU/'s/E/f/@/,l/I/z/@/m",                  line: 102732  } ,  // "ú", pronunciation error
'metric space':             { from: "'m/E/tr/I/k_sp/eI/c",                              to: "'m/E/tr/I/k_sp/eI/s",                              line: 102571  } ,  // "c"
'misemploy':                { from: ",m/I/s/I/m'plO/i/",                                to: ",m/I/s/I/m'pl//Oi//",                              line: 103774  } ,  // "O"
'nun-buoy':                 { from: "'n/@/nbO/i/",                                      to: "'n/@/nb/u//i/",                                    line: 109921  } ,  // "O"
'och':                      { from: 'O/x/',                                             to: '/A//x/',                                           line: 110486  } ,  // "O"
'Oland':                    { from: "'OE,l/A/nd",                                       to: "'/&/,l/A/nd",                                      line: 111026  } ,  // "O"
'onetime':                  { from: "'w@n ,t/aI/m",                                     to: "'w/@/n ,t/aI/m",                                   line: 111466  } ,  // "@"
'open space':               { from: "'/oU/p/@/n_sp/eI/c",                               to: "'/oU/p/@/n_sp/eI/s",                               line: 111717  } ,  // "c"
'outer space':              { from: "'/AU/t/@/r_sp/eI/c",                               to: "'/AU/t/@/r_sp/eI/s",                               line: 112787  } ,  // "c"
'patent space':             { from: "'p/&/t/-/nt_sp/eI/c",                              to: "'p/&/t/-/nt_sp/eI/s",                              line: 115692  } ,  // "c"
'Petrozavodsk':             { from: ",p/E/tROz/A/'v/O/tsk",                             to: ",p/E/tR/@/z/A/'v/O/tsk",                           line: 117626  } ,  // "O"
'pibroch':                  { from: "'p/i/bRO/x/",                                      to: "'p/i/bR/@//x/",                                    line: 118538  } ,  // "O"
'point space':              { from: "p//Oi//nt_sp/eI/c",                                to: "p//Oi//nt_sp/eI/s",                                line: 120835  } ,  // "c"
'popliteal space':          { from: "p/A/p'l/I/t/i//@/l_sp/eI/c",                       to: "p/A/p'l/I/t/i//@/l_sp/eI/s",                       line: 121611  } ,  // "c"
'precancerous':             { from: "'pr/i/'k/&/ns(/@/)r/@/s",                          to: "'pr/i/'k/&/ns/@/r/@/s",                            line: 122983  } ,  // syntax error
'preoperative':             { from: "'pr/i/'/A/p(/@/)r/@/t/I/v",                        to: "'pr/i/'/A/p/@/r/@/t/I/v",                          line: 123305  } ,  // syntax error
'pseudometric space':       { from: ",s/u/d/oU/'m/E/tr/I/k_sp/eI/c",                    to: ",s/u/d/oU/'m/E/tr/I/k_sp/eI/s",                    line: 125301  } ,  // "c"
'quotient space':           { from: "'kw/oU//S//@/nt_sp/eI/c",                          to: "'kw/oU//S//@/nt_sp/eI/s",                          line: 128047  } ,  // "c"
'Rauschenbusch':            { from: "'r/AU//S//@/n,bòo/S/",                             to: "'r/AU//S//@/n,b/U//S/",                            line: 129219  } ,  // "ò"
'requirement':              { from: "r/I/'kw/aI///rm/@/nt",                             to: "r/I/'kw/aI/rm/@/nt",                               line: 131151  } ,  // syntax error
'respire':                  { from: "r/I/'sp/aI/ær",                                    to: "r/I/'sp/aI/r",                                     line: 131386  } ,  // "æ"
'Ribeirão Preto':           { from: ",R/i/b/eI/'ROUN_'pR/E/t/U/",                       to: ",R/i/b/eI/'R/oU/_'pR/E/t/U/",                      line: 132025  } ,  // "O"
'sample space':             { from: "'s/&/mp/@/l_sp/eI/c",                              to: "'s/&/mp/@/l_sp/eI/s",                              line: 135625  } ,  // "c"
'sandboy':                  { from: "'s/&/ndbO/i/",                                     to: "'s/&/ndb//Oi//",                                   line: 135691  } ,  // "O"
'sew':                      { from: 's/Ou/',                                            to: 's/oU/',                                            line: 140766  } ,  // "O"
'shari"ah':                 { word: "shari'ah",                                                                                                 line: 141173  } ,  // quotes
'single space':             { from: "'s/I//N/g/@/l_sp/eI/c",                            to: "'s/I//N/g/@/l_sp/eI/s",                            line: 143450  } ,  // "c"
'small space':              { from: "sm/O/l_sp/eI/c",                                   to: "sm/O/l_sp/eI/s",                                   line: 144982  } ,  // "c"
'space':                    { from: "sp/eI/c",                                          to: "sp/eI/s",                                          line: 147061  } ,  // "c"
'space-charge':             { from: "sp/eI/c_/tS//A/r/dZ/",                             to: "sp/eI/s_/tS//A/r/dZ/",                             line: 147062  } ,  // "c"
'space-filling':            { from: "sp/eI/c_'f/I/l/I//N/",                             to: "sp/eI/s_'f/I/l/I//N/",                             line: 147063  } ,  // "c"
'space-lattice':            { from: "sp/eI/c_'l/&/t/I/s",                               to: "sp/eI/s_'l/&/t/I/s",                               line: 147064  } ,  // "c"
'space-penetrating':        { from: "sp/eI/c_'p/E/n/I/,tr/eI/t/I//N/",                  to: "sp/eI/s_'p/E/n/I/,tr/eI/t/I//N/",                  line: 147065  } ,  // "c"
'space-piercing':           { from: "sp/eI/c_'p/i/rs/I//N/",                            to: "sp/eI/s_'p/i/rs/I//N/",                            line: 147066  } ,  // "c"
'space-polar':              { from: "sp/eI/c_'p/oU/l/@/r",                              to: "sp/eI/s_'p/oU/l/@/r",                              line: 147067  } ,  // "c"
'space-time':               { from: "sp/eI/c_t/aI/m",                                   to: "sp/eI/s_t/aI/m",                                   line: 147069  } ,  // "c"
'space-world':              { from: "sp/eI/c_w/[@]/rld",                                to: "sp/eI/s_w/[@]/rld",                                line: 147070  } ,  // "c"
'space airport':            { from: "sp/eI/c_'/(@)/r,p/oU/rt",                          to: "sp/eI/s_'/(@)/r,p/oU/rt",                          line: 147077  } ,  // "c"
'space bar':                { from: "sp/eI/c_b/A/r",                                    to: "sp/eI/s_b/A/r",                                    line: 147078  } ,  // "c"
'space between':            { from: "sp/eI/c_b/I/'tw/i/n",                              to: "sp/eI/s_b/I/'tw/i/n",                              line: 147079  } ,  // "c"
'space capsule':            { from: "sp/eI/c_'k/&/ps/@/l",                              to: "sp/eI/s_'k/&/ps/@/l",                              line: 147080  } ,  // "c"
'space charge':             { from: "sp/eI/c_/tS//A/r/dZ/",                             to: "sp/eI/s_/tS//A/r/dZ/",                             line: 147081  } ,  // "c"
'space crew':               { from: "sp/eI/c_kr/u/",                                    to: "sp/eI/s_kr/u/",                                    line: 147082  } ,  // "c"
'space curvature':          { from: "sp/eI/c_'k/[@]/rv/@//tS//@/r",                     to: "sp/eI/s_'k/[@]/rv/@//tS//@/r",                     line: 147083  } ,  // "c"
'space curve':              { from: "sp/eI/c_k/[@]/rv",                                 to: "sp/eI/s_k/[@]/rv",                                 line: 147084  } ,  // "c"
'space dock':               { from: "sp/eI/c_d/A/k",                                    to: "sp/eI/s_d/A/k",                                    line: 147085  } ,  // "c"
'space doctor':             { from: "sp/eI/c_'d/A/kt/@/r",                              to: "sp/eI/s_'d/A/kt/@/r",                              line: 147086  } ,  // "c"
'space error':              { from: "sp/eI/c_'/E/r/@/r",                                to: "sp/eI/s_'/E/r/@/r",                                line: 147087  } ,  // "c"
'space exploration':        { from: "sp/eI/c_,/E/kspl/@/'r/eI//S//@/n",                 to: "sp/eI/s_,/E/kspl/@/'r/eI//S//@/n",                 line: 147088  } ,  // "c"
'space factor':             { from: "sp/eI/c_'f/&/kt/@/r",                              to: "sp/eI/s_'f/&/kt/@/r",                              line: 147089  } ,  // "c"
'space fiction':            { from: "sp/eI/c_'f/I/k/S//@/n",                            to: "sp/eI/s_'f/I/k/S//@/n",                            line: 147090  } ,  // "c"
'space flight':             { from: "sp/eI/c_fl/aI/t",                                  to: "sp/eI/s_fl/aI/t",                                  line: 147091  } ,  // "c"
'space formula':            { from: "sp/eI/c_'f/O/rm/j//@/l/@/",                        to: "sp/eI/s_'f/O/rm/j//@/l/@/",                        line: 147092  } ,  // "c"
'space frame':              { from: "sp/eI/c_fr/eI/m",                                  to: "sp/eI/s_fr/eI/m",                                  line: 147093  } ,  // "c"
'space group':              { from: "sp/eI/c_gr/u/p",                                   to: "sp/eI/s_gr/u/p",                                   line: 147094  } ,  // "c"
'space hazard':             { from: "sp/eI/c_'h/&/z/@/rd",                              to: "sp/eI/s_'h/&/z/@/rd",                              line: 147095  } ,  // "c"
'space heater':             { from: "sp/eI/c_'h/i/t/@/r",                               to: "sp/eI/s_'h/i/t/@/r",                               line: 147096  } ,  // "c"
'space helmet':             { from: "sp/eI/c_'h/E/lm/I/t",                              to: "sp/eI/s_'h/E/lm/I/t",                              line: 147097  } ,  // "c"
'space island':             { from: "sp/eI/c_'/aI/l/@/nd",                              to: "sp/eI/s_'/aI/l/@/nd",                              line: 147098  } ,  // "c"
'space isomerism':          { from: "sp/eI/c_/aI/'s/A/m/@/,r/I/z/@/m",                  to: "sp/eI/s_/aI/'s/A/m/@/,r/I/z/@/m",                  line: 147099  } ,  // "c"
'space key':                { from: "sp/eI/c_k/i/",                                     to: "sp/eI/s_k/i/",                                     line: 147100  } ,  // "c"
'space laboratory':         { from: "sp/eI/c_'l/&/br/@/,t/oU/r/i/",                     to: "sp/eI/s_'l/&/br/@/,t/oU/r/i/",                     line: 147101  } ,  // "c"
'space lat':                { from: "sp/eI/c_l/A/t",                                    to: "sp/eI/s_l/A/t",                                    line: 147102  } ,  // "c"
'space lattice':            { from: "sp/eI/c_'l/&/t/I/s",                               to: "sp/eI/s_'l/&/t/I/s",                               line: 147103  } ,  // "c"
'space line':               { from: "sp/eI/c_l/aI/n",                                   to: "sp/eI/s_l/aI/n",                                   line: 147104  } ,  // "c"
'space linkage':            { from: "sp/eI/c_'l/I//N/k/I//dZ/",                         to: "sp/eI/s_'l/I//N/k/I//dZ/",                         line: 147105  } ,  // "c"
'space man':                { from: "sp/eI/c_m/A/n",                                    to: "sp/eI/s_m/A/n",                                    line: 147106  } ,  // "c"
'space mirror':             { from: "sp/eI/c_'m/I/r/@/r",                               to: "sp/eI/s_'m/I/r/@/r",                               line: 147107  } ,  // "c"
'space motion':             { from: "sp/eI/c_'m/oU//S//@/n",                            to: "sp/eI/s_'m/oU//S//@/n",                            line: 147108  } ,  // "c"
'space navigation':         { from: "sp/eI/c_,n/&/v/@/'g/eI//S//@/n",                   to: "sp/eI/s_,n/&/v/@/'g/eI//S//@/n",                   line: 147109  } ,  // "c"
'space observatory':        { from: "sp/eI/c_/@/b'z/[@]/rv/@/,t/oU/r/i/",               to: "sp/eI/s_/@/b'z/[@]/rv/@/,t/oU/r/i/",               line: 147110  } ,  // "c"
'space out':                { from: "sp/eI/c_/AU/t",                                    to: "sp/eI/s_/AU/t",                                    line: 147111  } ,  // "c"
'space probe':              { from: "sp/eI/c_pr/oU/b",                                  to: "sp/eI/s_pr/oU/b",                                  line: 147112  } ,  // "c"
'space quadrature':         { from: "sp/eI/c_'kw/A/dr/@//tS//@/r",                      to: "sp/eI/s_'kw/A/dr/@//tS//@/r",                      line: 147113  } ,  // "c"
'space rate':               { from: "sp/eI/c_r/eI/t",                                   to: "sp/eI/s_r/eI/t",                                   line: 147114  } ,  // "c"
'space ratio':              { from: "sp/eI/c_'r/eI//S//oU/",                            to: "sp/eI/s_'r/eI//S//oU/",                            line: 147115  } ,  // "c"
'space research':           { from: "sp/eI/c_r/I/'s/[@]/r/tS/",                         to: "sp/eI/s_r/I/'s/[@]/r/tS/",                         line: 147116  } ,  // "c"
'space rocket':             { from: "sp/eI/c_'r/A/k/I/t",                               to: "sp/eI/s_'r/A/k/I/t",                               line: 147117  } ,  // "c"
'space rule':               { from: "sp/eI/c_r/u/l",                                    to: "sp/eI/s_r/u/l",                                    line: 147118  } ,  // "c"
'space science':            { from: "sp/eI/c_'s/aI//@/ns",                              to: "sp/eI/s_'s/aI//@/ns",                              line: 147119  } ,  // "c"
'space stage':              { from: "sp/eI/c_st/eI//dZ/",                               to: "sp/eI/s_st/eI//dZ/",                               line: 147120  } ,  // "c"
'space station':            { from: "sp/eI/c_'st/eI//S//@/n",                           to: "sp/eI/s_'st/eI//S//@/n",                           line: 147121  } ,  // "c"
'space suit':               { from: "sp/eI/c_s/u/t",                                    to: "sp/eI/s_s/u/t",                                    line: 147122  } ,  // "c"
'space technology':         { from: "sp/eI/c_t/E/k'n/A/l/@//dZ//i/",                    to: "sp/eI/s_t/E/k'n/A/l/@//dZ//i/",                    line: 147123  } ,  // "c"
'space telephony':          { from: "sp/eI/c_t/@/'l/E/f/@/n/i/",                        to: "sp/eI/s_t/@/'l/E/f/@/n/i/",                        line: 147124  } ,  // "c"
'space terminal':           { from: "sp/eI/c_'t/[@]/rm/@/n/-/l",                        to: "sp/eI/s_'t/[@]/rm/@/n/-/l",                        line: 147125  } ,  // "c"
'space travel':             { from: "sp/eI/c_'tr/&/v/@/l",                              to: "sp/eI/s_'tr/&/v/@/l",                              line: 147126  } ,  // "c"
'space traveler':           { from: "sp/eI/c_'tr/&/v/@/l/@/r",                          to: "sp/eI/s_'tr/&/v/@/l/@/r",                          line: 147127  } ,  // "c"
'space variation':          { from: "sp/eI/c_,v/(@)/r/i/'/eI//S//@/n",                  to: "sp/eI/s_,v/(@)/r/i/'/eI//S//@/n",                  line: 147128  } ,  // "c"
'space walk':               { from: "sp/eI/c_w/O/k",                                    to: "sp/eI/s_w/O/k",                                    line: 147129  } ,  // "c"
'space washer':             { from: "sp/eI/c_'w/A//S//@/r",                             to: "sp/eI/s_'w/A//S//@/r",                             line: 147130  } ,  // "c"
'space writer':             { from: "sp/eI/c_'r/aI/t/@/r",                              to: "sp/eI/s_'r/aI/t/@/r",                              line: 147131  } ,  // "c"
'storage space':            { from: "'st/oU/r/I//dZ/_sp/eI/c",                          to: "'st/oU/r/I//dZ/_sp/eI/s",                          line: 151182  } ,  // "c"
'suffering':                { from: 's/(@)f/r/I//N/',                                   to: 's/(@)/fr/I//N/',                                   line: 152810  } ,  // syntax error
'tallboy':                  { from: "'t/A/lbO/i/",                                      to: "'t/A/lb//Oi//",                                    line: 155571  },  // "O"
'Tannoy':                   { from: "'t/&/nO/i/",                                       to: "'t/&/n//Oi//",                                     line: 155821  },  // "O"
'teapoy':                   { from: "'t/i/pO/i/",                                       to: "'t/i/p//Oi//",                                     line: 156410  },  // "O"
'three-space':              { from: "/T/r/i/_sp/eI/c",                                  to: "/T/r/i/_sp/eI/s",                                  line: 159149  },  // "c"
'time-space':               { from: "t/aI/m_sp/eI/c",                                   to: "t/aI/m_sp/eI/s",                                   line: 159909  },  // "c"
'time space':               { from: "t/aI/m_sp/eI/c",                                   to: "t/aI/m_sp/eI/s",                                   line: 159986  },  // "c"
'topoi':                    { from: "'t/A/pO/i/",                                       to: "'t/A/p//Oi//",                                     line: 161106  },  // "O"
'treble':                   { from: "'tr/E/bæl",                                        to: "'tr/E/b/@/l",                                      line: 162555  },  // "æ"
'turtle-dove':              { from: "'t3t/@/l,d/@/v",                                   to: "'t/[@]/t/@/l,d/@/v",                               line: 164529  },  // "3"
'verdant':                  { from: "'v/[@]/rdænt",                                     to: "'v/[@]/rd/@/nt",                                   line: 169078  },  // "æ"
'Volker':                   { from: "'f/y/lkER",                                        to: "'v/oU/lk/@/R",                                     line: 170328  },  // "E"
'Whiteboy':                 { from: "'w/aI/tbO/i/",                                     to: "'w/aI/tb//Oi//",                                   line: 173404  },  // "O"
'white space':              { from: "/hw//aI/t_sp/eI/c",                                to: "/hw//aI/t_sp/eI/s",                                line: 173533  },  // "c"
'window space':             { from: "'w/I/nd/oU/_sp/eI/c",                              to: "'w/I/nd/oU/_sp/eI/s",                              line: 174272  },  // "c"
'wirehaired':               { from: "'w/aI///rh/&//@/rd",                               to: "'w/aI/rh/&//@/rd",                                 line: 174568  },  // syntax error
'working space':            { from: "'w/[@]/rk/I//N/_sp/eI/c",                          to: "'w/[@]/rk/I//N/_sp/eI/s",                          line: 175488  },  // "c"
'work space':               { from: "w/[@]/rk_sp/eI/c",                                 to: "w/[@]/rk_sp/eI/s",                                 line: 175535  },  // "c"
'Xinhua':                   { from: '/S//I/nw/A/_<',                                    to: '/S//I/nw/A/',                                      line: 176069  },  // syntax error
'zinnwaldite':              { from: "'/z/I/nv/A/l,t/aI/t",                              to: "'/tS//I/nv/A/l,t/aI/t",                            line: 177071  },  // syntax error, /z/
'Zug':                      { from: '/z/u//x/',                                         to: '/tS//u/k',                                         line: 177214  },  // syntax error, /z/ /x/ u

'blood cast':               { from: "bl/@/d_c/A/st",                                    to: "bl/@/d_k/A/st",                                    line: 18718   },  // "c"
'cast':                     { from: "c/A/st",                                           to: "k/A/st",                                           line: 27404   },  // "c"
'cast-back':                { from: "c/A/st_b/&/k",                                     to: "k/A/st_b/&/k",                                     line: 27405   },  // "c"
'cast-by':                  { from: "c/A/st_b/aI/",                                     to: "k/A/st_b/aI/",                                     line: 27406   },  // "c"
'cast-off':                 { from: "c/A/st_/O/f",                                      to: "k/A/st_/O/f",                                      line: 27409   },  // "c"
'cast-weld':                { from: "c/A/st_w/E/ld",                                    to: "k/A/st_w/E/ld",                                    line: 27410   },  // "c"
'cast about':               { from: "c/A/st_/@/'b/AU/t",                                to: "k/A/st_/@/'b/AU/t",                                line: 27501   },  // "c"
'cast anchor':              { from: "c/A/st_'/&//N/k/@/r",                              to: "k/A/st_'/&//N/k/@/r",                              line: 27502   },  // "c"
'cast aside':               { from: "c/A/st_/@/'s/aI/d",                                to: "k/A/st_/@/'s/aI/d",                                line: 27503   },  // "c"
'cast away':                { from: "c/A/st_/@/'w/eI/",                                 to: "k/A/st_/@/'w/eI/",                                 line: 27504   },  // "c"
'cast back':                { from: "c/A/st_b/&/k",                                     to: "k/A/st_b/&/k",                                     line: 27505   },  // "c"
'cast down':                { from: "c/A/st_d/AU/n",                                    to: "k/A/st_d/AU/n",                                    line: 27506   },  // "c"
'cast forth':               { from: "c/A/st_f/oU/r/T/",                                 to: "k/A/st_f/oU/r/T/",                                 line: 27507   },  // "c"
'cast gear':                { from: "c/A/st_g/i/r",                                     to: "k/A/st_g/i/r",                                     line: 27508   },  // "c"
'cast iron':                { from: "c/A/st_'/aI//@/rn",                                to: "k/A/st_'/aI//@/rn",                                line: 27509   },  // "c"
'cast loose':               { from: "c/A/st_l/u/s",                                     to: "k/A/st_l/u/s",                                     line: 27510   },  // "c"
'cast off':                 { from: "c/A/st_/O/f",                                      to: "k/A/st_/O/f",                                      line: 27511   },  // "c"
'cast out':                 { from: "c/A/st_/AU/t",                                     to: "k/A/st_/AU/t",                                     line: 27512   },  // "c"
'cast plastic':             { from: "c/A/st_'pl/&/st/I/k",                              to: "k/A/st_'pl/&/st/I/k",                              line: 27513   },  // "c"
'cast plow':                { from: "c/A/st_pl/AU/",                                    to: "k/A/st_pl/AU/",                                    line: 27514   },  // "c"
'cast scrap':               { from: "c/A/st_skr/&/p",                                   to: "k/A/st_skr/&/p",                                   line: 27515   },  // "c"
'chill-cast':               { from: "/tS//I/l_c/A/st",                                  to: "/tS//I/l_k/A/st",                                  line: 30462   },  // "c"
'descent cast':             { from: "d/I/'s/E/nt_c/A/st",                               to: "d/I/'s/E/nt_k/A/st",                               line: 44823   },  // "c"
'die-cast':                 { from: "d/aI/_c/A/st",                                     to: "d/aI/_k/A/st",                                     line: 45943   },  // "c"
'die cast':                 { from: "d/aI/_c/A/st",                                     to: "d/aI/_k/A/st",                                     line: 45999   },  // "c"
'false cast':               { from: "f/O/ls_c/A/st",                                    to: "f/O/ls_k/A/st",                                    line: 57996   },  // "c"
'hoof-cast':                { from: "h/U/f_c/A/st",                                     to: "h/U/f_k/A/st",                                     line: 79197   },  // "c"
'intracranial cast':        { from: ",/I/ntr/@/'kr/eI/n/i//@/l_c/A/st",                 to: ",/I/ntr/@/'kr/eI/n/i//@/l_k/A/st",                 line: 85658   },  // "c"
'land-cast':                { from: "l/&/nd_c/A/st",                                    to: "l/&/nd_k/A/st",                                    line: 92105   },  // "c"
'life cast':                { from: "l/aI/f_c/A/st",                                    to: "l/aI/f_k/A/st",                                    line: 94909   },  // "c"
'needle cast':              { from: "'n/i/d/-/l_c/A/st",                                to: "'n/i/d/-/l_k/A/st",                                line: 107289  },  // "c"
'plaster cast':             { from: "'pl/&/st/@/r_c/A/st",                              to: "'pl/&/st/@/r_k/A/st",                              line: 119977  },  // "c"
'rough-cast':               { from: "r/@/f_c/A/st",                                     to: "r/@/f_k/A/st",                                     line: 133731  },  // "c"
'rough cast':               { from: "r/@/f_c/A/st",                                     to: "r/@/f_k/A/st",                                     line: 133806  },  // "c"
'sand-cast':                { from: "s/&/nd_c/A/st",                                    to: "s/&/nd_k/A/st",                                    line: 135670  },  // "c"
'say cast':                 { from: "s/eI/_c/A/st",                                     to: "s/eI/_k/A/st",                                     line: 136390  },  // "c"
'shell cast':               { from: "/S//E/l_c/A/st",                                   to: "/S//E/l_k/A/st",                                   line: 141610  },  // "c"
'side-cast':                { from: "s/aI/d_c/A/st",                                    to: "s/aI/d_k/A/st",                                    line: 142664  },  // "c"
'sky-cast':                 { from: "sk/aI/_c/A/st",                                    to: "sk/aI/_k/A/st",                                    line: 144093  },  // "c"
'smooth-cast':              { from: "sm/u//D/_c/A/st",                                  to: "sm/u//D/_k/A/st",                                  line: 145172  },  // "c"
'switch cast':              { from: "sw/I//tS/_c/A/st",                                 to: "sw/I//tS/_k/A/st",                                 line: 154529  },  // "c"
'through-cast':             { from: "/T/r/u/_c/A/st",                                   to: "/T/r/u/_k/A/st",                                   line: 159274  },  // "c"
'type-cast':                { from: "t/aI/p_c/A/st",                                    to: "t/aI/p_k/A/st",                                    line: 165161  },  // "c"
'weather cast':             { from: "'w/E//D//@/r_c/A/st",                              to: "'w/E//D//@/r_k/A/st",                              line: 171982  },  // "c"
'well-cast':                { from: "w/E/l_c/A/st",                                     to: "w/E/l_k/A/st",                                     line: 172305  },  // "c"
'wide-cast':                { from: "w/aI/d_c/A/st",                                    to: "w/aI/d_k/A/st",                                    line: 173731  },  // "c"
'worst-cast':               { from: "w/[@]/rst_c/A/st",                                 to: "w/[@]/rst_k/A/st",                                 line: 175725  },  // "c"
'y-cast':                   { from: "w/aI/_c/A/st",                                     to: "w/aI/_k/A/st",                                     line: 176108  },  // "c"

'Annacone':                 { from: "'/&/n/@/c/oU/n",                                   to: "'/&/n/@/k/oU/n",                                   line: 6678    },  // "c"
'Bicouvaris':               { from: "b/I/c/oU/'v/eI/r/I/s",                             to: "b/I/k/oU/'v/eI/r/I/s",                             line: 16879   },  // "c"
'Cao Dai':                  { from: 'c/O/_d/aI/',                                       to: 'k/O/_d/aI/',                                       line: 25979   },  // "c"
'Carpenteria':              { from: "'c/A/rp/E/nt/E/'r/i//@/",                          to: "'k/A/rp/E/nt/E/'r/i//@/",                          line: 26809   },  // "c"
'Carreon':                  { from: "'c/&/'r/i//O/n",                                   to: "'k/&/'r/i//O/n",                                   line: 26901   },  // "c"
'Cattaraugus':              { from: "c/&/t/A/'r/A/g/@/s",                               to: "s/&/t/A/'r/A/g/@/s",                               line: 27844   },  // "c"
'Cipriano':                 { from: "'c/aI/pr/i/'/A/n/oU/",                             to: "'s/aI/pr/i/'/A/n/oU/",                             line: 31779   },  // "c"
'Ciriaco De Mita':          { from: "/tS//E/'r/i//&/c/oU/d/@/_'m/i/t/A/",               to: "/tS//E/'r/i//&/k/oU/d/@/_'m/i/t/A/",               line: 31921   },  // "c"
'Comiso':                   { from: "'c/A/m/i/z/oU/",                                   to: "'k/A/m/i/z/oU/",                                   line: 35011   },  // "c"
'commit sacrilege':         { from: "k/@/'m/I/t_'s/&/cr/@/l/I//dZ/",                    to: "k/@/'m/I/t_'s/&/kr/@/l/I//dZ/",                    line: 35156   },  // "c"
'consistence':              { from: "c/A/n's/I/st/@/ns",                                to: "k/A/n's/I/st/@/ns",                                line: 36458   },  // "c"
'Credit Suisse':            { from: "cr/eI/'d/i/_sw/i/s",                               to: "kr/eI/'d/i/_sw/i/s",                               line: 39381   },  // "c"
'Cuauhtemoc Cardenas':      { from: "'kw/A/t/E/m/oU/k_'c/&/rd/E/n/A/s",                 to: "'kw/A/t/E/m/oU/k_'k/&/rd/E/n/A/s",                 line: 40599   },  // "c"
'eurithermophilic':         { from: ",/j//U/r/@/'/T//[@]/rm/@/,f/aI/l/I/c",             to: ",/j//U/r/@/'/T//[@]/rm/@/,f/aI/l/I/k",             line: 55810   },  // "c"
'Fransie Geringer':         { from: "'fr/&/nc/i/_h/E/r'/I//N//E/r",                     to: "'fr/&/ns/i/_h/E/r'/I//N//E/r",                     line: 64516   },  // "c"
'Giacalone':                { from: "'/dZ//&/ck/&/l/oU/n/i/",                           to: "'/dZ//&/k/&/l/oU/n/i/",                            line: 68445   },  // "c"
'Humberto Cayoja':          { from: "/u/m'b/E/rt/oU/_c/A/'/j//oU/h/A/",                 to: "/u/m'b/E/rt/oU/_k/A/'/j//oU/h/A/",                 line: 80226   },  // "c"
'Jean Caujolle':            { from: "/Z//A/n_c/A/'/dZ//oU/l",                           to: "/Z//A/n_k/A/'/dZ//oU/l",                           line: 87628   },  // "c"
'kiloparsec':               { from: "'k/I/l/@/,p/A/r,s/E/c",                            to: "'k/I/l/@/,p/A/r,s/E/k",                            line: 90201   },  // "c"
'Manabozho':                { from: ',m/&/n/@/c/@/ff',                                  to: ',m/&/n/@/b/oU/z/oU/',                              line: 99492   },  // "c"
'Montclair':                { from: "m/A/nt'cl/(@)/r",                                  to: "m/A/nt'kl/(@)/r",                                  line: 104796  },  // "c"
'most recent':              { from: "m/oU/st_'r/i/c/@/nt",                              to: "m/oU/st_'r/i/s/@/nt",                              line: 105311  },  // "c"
'narcotic':                 { from: "n/A/r'k/@/t/I/c",                                  to: "n/A/r'k/@/t/I/k",                                  line: 106748  },  // "c"
'pericardium':              { from: ",p/E/r/@/'k/A/rd/i//@/mc/&/",                      to: ",p/E/r/@/'k/A/rd/i//@/m",                          line: 117025  },  // "c"
'piracy':                   { from: "'p/aI/r/&/c/i/",                                   to: "'p/aI/r/&/s/i/",                                   line: 119409  },  // "c"
'pseudo sacrilege':         { from: "'s/u/d/oU/_'s/&/cr/@/l/I//dZ/",                    to: "'s/u/d/oU/_'s/&/kr/@/l/I//dZ/",                    line: 125581  },  // "c"
'quasi-recent':             { from: "'kw/A/s/i/_'r/i/c/@/nt",                           to: "'kw/A/s/i/_'r/i/s/@/nt",                           line: 127579  },  // "c"
'quasi-recently':           { from: "'kw/A/s/i/_'r/i/c/@/ntl/i/",                       to: "'kw/A/s/i/_'r/i/s/@/ntl/i/",                       line: 127580  },  // "c"
'recent':                   { from: "'r/i/c/@/nt",                                      to: "'r/i/s/@/nt",                                      line: 129624  },  // "c"
'recently':                 { from: "'r/i/c/@/ntl/i/",                                  to: "'r/i/s/@/ntl/i/",                                  line: 129625  },  // "c"
'recentness':               { from: "'r/i/c/@/ntn/E/s",                                 to: "'r/i/s/@/ntn/E/s",                                 line: 129626  },  // "c"
'sacrifice':                { from: "'s/&/cr/@/,f/aI/s",                                to: "'s/&/kr/@/,f/aI/s",                                line: 134824  },  // "c"
'sacrilege':                { from: "'s/&/cr/@/l/I//dZ/",                               to: "'s/&/kr/@/l/I//dZ/",                               line: 134825  },  // "c"
'supersonic aerodynamics':  { from: ",s/u/p/@/r's/A/n/I/c_,/(@)/r/oU/d/aI/'n/&/m/I/ks", to: ",s/u/p/@/r's/A/n/I/k_,/(@)/r/oU/d/aI/'n/&/m/I/ks", line: 153543  },  // "c"
'supersonic flight':        { from: ",s/u/p/@/r's/A/n/I/c_fl/aI/t",                     to: ",s/u/p/@/r's/A/n/I/k_fl/aI/t",                     line: 153544  },  // "c"
'supersonic jet':           { from: ",s/u/p/@/r's/A/n/I/c_/dZ//E/t",                    to: ",s/u/p/@/r's/A/n/I/k_/dZ//E/t",                    line: 153545  },  // "c"
'supersonic rocket':        { from: ",s/u/p/@/r's/A/n/I/c_'r/A/k/I/t",                  to: ",s/u/p/@/r's/A/n/I/k_'r/A/k/I/t",                  line: 153546  },  // "c"
'supersonic speed':         { from: ",s/u/p/@/r's/A/n/I/c_sp/i/d",                      to: ",s/u/p/@/r's/A/n/I/k_sp/i/d",                      line: 153547  },  // "c"
'surcease':                 { from: "'s/[@]/rc/i/z",                                    to: "'s/[@]/rs/i/z",                                    line: 153689  },  // "c"
'Ton Ton Macoutes':         { from: "t/A/nt/A/n_m/A/'c/u/t",                            to: "t/A/nt/A/n_m/A/'k/u/t",                            line: 160868  },  // "c"
'tzaristic':                { from: "z/A/'r/I/st/I/c",                                  to: "z/A/'r/I/st/I/k",                                  line: 165290  },  // "c"
'vacancy':                  { from: "'v/eI/k/@/nc/i/",                                  to: "'v/eI/k/@/ns/i/",                                  line: 168084  },  // "c"

'Alexandrine':              { from: "/&/l/@/x'/&/ndr/i/n",                              to: "/&/l/@/g'z/&/ndr/i/n",                             line: 3865    },  // "x"
'chutzpah':                 { from: "'x/u/tzp/@/",                                      to: "'/x//u/tzp/@/",                                    line: 31529   },  // "x"
'Ding an sich':             { from: ",d/I//N/_/&/n_'z/I/x",                             to: ",d/I//N/_/&/n_'z/I//x/",                           line: 46365   },  // "x"
'Gaeltacht':                { from: "'g/eI/lt/@/xt",                                    to: "'g/eI/lt/@//x/t",                                  line: 66316   },  // "x"
'Liza Alexeyeva':           { from: "'l/i/z/@/_/&/l/@/x'/j//eI/v/@/",                   to: "'l/i/z/@/_/&/l/@//x/'/j//eI/v/@/",                 line: 96241   },  // "x"
'machtpolitik':             { from: "'m/A/xtp/A/l/I/,t/i/k",                            to: "'m/A//x/tp/A/l/I/,t/i/k",                          line: 98390   },  // "x"
'matrix':                   { from: "'m/&/tr/I/x",                                      to: "'m/&/tr/I//x/",                                    line: 100864  },  // "x"
'syntax':                   { from: "'s/I/nt/&/x",                                      to: "'s/I/nt/&//x/",                                    line: 154921  },  // "x"
'Taoiseach':                { from: "'t/i//S//@/x",                                     to: "'t/i//S//@//x/",                                   line: 155856  },  // "x"
'torgoch':                  { from: "'t/oU/rg/A/x",                                     to: "'t/oU/rg/A//x/",                                   line: 161215  },  // "x"

'zaddik':                   { from: "/z//A/'d/i/k",                                     to: "/tS//A/'d/i/k",                                    line: 176823  },  // /z/
'zaddikim':                 { from: "/z//A/d/i/'k/i/m",                                 to: "/tS//A/d/i/'k/i/m",                                line: 176824  },  // /z/
'zeitgeist':                { from: "'/z//aI/t,g/aI/st",                                to: "'z/aI/t,g/aI/st",                                  line: 176909  },  // /z/
'Zeitgeist':                { from: "'/z//aI/t,g/aI/st",                                to: "'z/aI/t,g/aI/st",                                  line: 176910  },  // /z/
'Zermatt':                  { from: "/z//E/R'm/A/t",                                    to: "/tS//E/R'm/A/t",                                   line: 176955  },  // /z/
'zingara':                  { from: "'/z//i//N/g/A/,R/A/",                              to: "'/tS//i//N/g/A/,R/A/",                             line: 177066  },  // /z/
'zingaro':                  { from: "'/z//i//N/g/A/,R/O/",                              to: "'/tS//i//N/g/A/,R/O/",                             line: 177067  },  // /z/
'zizith':                   { from: "'/z//I//z//I/s",                                   to: "'/tS//I//tS//I/s",                                 line: 177105  },  // /z/
'Znaniecki':                { from: "zn/A/'n/j//E//z/k/i/",                             to: "zn/A/'n/j//E//tS/k/i/",                            line: 177108  },  // /z/
'Zollverein':               { from: "'/z//O/lf/E/R,/aI/n",                              to: "'/tS//O/lf/E/R,/aI/n",                             line: 177124  },  // /z/
'Zuccari':                  { from: "'/z//u/kk/A/,R/i/",                                to: "'/tS//u/kk/A/,R/i/",                               line: 177210  },  // /z/
'Zucchero':                 { from: "'/z//u/kk/E/,R/O/",                                to: "'/tS//u/kk/E/,R/O/",                               line: 177211  },  // /z/
'zugzwang':                 { from: "'/z//u/k/z/f/A//N/",                               to: "'/tS//u/k/tS/f/A//N/",                             line: 177215  },  // /z/
'Zwickau':                  { from: "'/z/v/I/k/AU/",                                    to: "'/tS/v/I/k/AU/",                                   line: 177229  },  // /z/
'Zwicky':                   { from: "'/z/v/I/k/i/",                                     to: "'/tS/v/I/k/i/",                                    line: 177230  },  // /z/
'zwitterionic':             { from: ",/z/v/I/t/@/r/aI/'/A/n/I/k",                       to: ",/tS/v/I/t/@/r/aI/'/A/n/I/k",                      line: 177234  },  // /z/

'Agenais':                  { from: "AZh/-/'n/E/",                                      to: "Azh/-/'n/E/",                                      line: 2698    },  // Z
'Agenois':                  { from: "AZh/-/'nWA",                                       to: "Azh/-/'nwA",                                       line: 2706    },  // Z // W
'Alagoz':                   { from: ",/A/l/A/'g/y/Z",                                   to: ",/A/l/A/'g/y/z",                                   line: 3505    },  // Z
'Ambroise':                 { from: "/A/N'bRWAZ",                                       to: "/A/N'bRwAz",                                       line: 5157    },  // Z // W
'aux armes':                { from: "/oU/_'zZARm",                                      to: "/oU/_'zARm",                                       line: 11153   },  // Z
'Basses-Alpes':             { from: "b/A/s_'ZAlp",                                      to: "b/A/s_'zAlp",                                      line: 14067   },  // Z
'bons amis':                { from: "b/O/N_ZA'm/i/",                                    to: "b/O/N_zA'm/i/",                                    line: 19926   },  // Z
'Broz':                     { from: 'bR/O/Z',                                           to: 'bR/O/z',                                           line: 22641   },  // Z
'Buitenzorg':               { from: "'b//Oi//t/-/n,Z/O/R/x/",                           to: "'b//Oi//t/-/n,z/O/R/x/",                           line: 23152   },  // Z
'Casabianca':               { from: "kAZAb/j//A/N'kA",                                  to: "kAzAb/j//A/N'kA",                                  line: 27185   },  // Z
'casaque':                  { from: "kA'ZAk",                                           to: "kA'zAk",                                           line: 27191   },  // Z
'Choiseul':                 { from: "/S/WA'Z/y/l",                                      to: "/S/wA'z/y/l",                                      line: 30906   },  // Z // W
"Cote d'Azur":              { from: "k/O/t_dA'ZYR",                                     to: "k/O/t_dA'zYR",                                     line: 38182   },  // Z
"D'Amboise":                { from: "d/A/N'bWAZ",                                       to: "d/A/N'bwAz",                                       line: 41860   },  // Z // W
'danseuse':                 { from: "d/A/N's/y/Z",                                      to: "d/A/N's/y/z",                                      line: 42319   },  // Z
'diseuse':                  { from: "d/i/'Z/y/z",                                       to: "d/i/'z/y/z",                                       line: 46992   },  // Z
'dormeuse':                 { from: "d/O/R'm/y/Z",                                      to: "d/O/R'm/y/z",                                      line: 48579   },  // Z
'dos-a-dos':                { from: "d/oU/ZA'd/oU/",                                    to: "d/oU/zA'd/oU/",                                    line: 48636   },  // Z
'epaulieres':               { from: ",/eI/p/oU/l'/j//(@)/rZ",                           to: ",/eI/p/oU/l'/j//(@)/rz",                           line: 54447   },  // Z
'farceuse':                 { from: "fAR'S/y/Z",                                        to: "fAR's/y/z",                                        line: 58345   },  // Z // S
'framboise':                { from: "fR/A/N'bWAZ",                                      to: "fR/A/N'bwAz",                                      line: 64383   },  // Z // W
'fromage':                  { from: "fR/O/'mAZh",                                       to: "fR/O/'mAzh",                                       line: 65238   },  // Z
'fromage blanc':            { from: "fR/O/'mAZh_bl/A/N",                                to: "fR/O/'mAzh_bl/A/N",                                line: 65239   },  // Z
'gragers':                  { from: "'gR/A/g/@/RZ",                                     to: "'gR/A/g/@/Rz",                                     line: 70774   },  // Z
'harns':                    { from: 'h/A/RnZ',                                          to: 'h/A/Rnz',                                          line: 75159   },  // Z
'premiere danseuse':        { from: "pr/I/'m/i/r_d/A/N's/y/Z",                          to: "pr/I/'m/i/r_d/A/N's/y/z",                          line: 123262  },  // Z
"raison d'etat":            { from: "Re'Z/O/N_d/eI/'tA",                                to: "R/eI/'z/O/N_d/eI/'tA",                              line: 128697  },  // Z
'Suzanne':                  { from: "sY'ZAn",                                           to: "sY'zAn",                                           line: 153952  },  // Z
'Vaucluse':                 { from: "v/oU/'klYZ",                                       to: "v/oU/'klYz",                                       line: 168693  },  // Z

'Annecy':                   { from: "An/-/'S/i/",                                       to: "An/-/'s/i/",                                       line: 6697    },  // S
'Augustin':                 { from: "/oU/gYS't/&/N",                                    to: "/oU/gYs't/&/N",                                    line: 10713   },  // S
'Barbusse':                 { from: "bAR'bYS",                                          to: "bAR'bYs",                                          line: 13319   },  // S
'bolivares':                { from: ",b/O/l/i/'v/A/R/E/S",                              to: ",b/O/l/i/'v/A/R/E/s",                              line: 19630   },  // S
'bonsoir':                  { from: "b/O/N'SWAR",                                       to: "b/O/N'swAR",                                       line: 19924   },  // S // W
'Boulogne-sur-Mer':         { from: "b/u/'l/O/n/j//-/SYR'm/E/R",                        to: "b/u/'l/O/n/j//-/sYR'm/E/R",                        line: 20556   },  // S
'Boulogne-sur-Seine':       { from: "b/u/'l/O/n/j//-/SYR's/E/n",                        to: "b/u/'l/O/n/j//-/sYR's/E/n",                        line: 20557   },  // S
'Brussel':                  { from: "'bRYS/@/l",                                        to: "'bRYs/@/l",                                        line: 22760   },  // S
'carse':                    { from: 'k/A/RS',                                           to: 'k/A/Rs',                                           line: 27030   },  // S
'carse deposit':            { from: "k/A/RS_d/I/'p/A/z/I/t",                            to: "k/A/Rs_d/I/'p/A/z/I/t",                            line: 27031   },  // S
'chincherinchee':           { from: ",tS/I/nt/S//@/r/i/n't/S//i/",                      to: ",ts/I/nt/S//@/r/i/n't/S//i/",                      line: 30565   },  // S
'Corse':                    { from: 'k/O/RS',                                           to: 'k/O/Rs',                                           line: 37958   },  // S
'Dessalines':               { from: "d/eI/SA'l/i/n",                                    to: "d/eI/sA'l/i/n",                                    line: 44998   },  // S
'Ducasse':                  { from: "dY'kAS",                                           to: "dY'kAs",                                           line: 50415   },  // S
'eminence grise':           { from: "/eI/m/i/n/A/NS_'gR/i/z",                           to: "/eI/m/i/n/A/Ns_'gR/i/z",                           line: 53345   },  // S
'farceur':                  { from: "fAR'S/y/R",                                        to: "fAR's/y/R",                                        line: 58344   },  // S
'Fars':                     { from: 'f/A/RS',                                           to: 'f/A/Rs',                                           line: 58449   },  // S
'Frans':                    { from: 'fR/A/NS',                                          to: 'fR/A/Ns',                                          line: 64515   },  // S
'Gustave':                  { from: "gYS'tAV",                                          to: "gYs'tAV",                                          line: 72977   },  // S
'Konigsberg':               { from: "'k/y/n/I//x/S,b/E/R/x/",                           to: "'k/y/n/I//x/s,b/E/R/x/",                           line: 91004   },  // S
'Lurcat':                   { from: "lYR'SA",                                           to: "lYR'sA",                                           line: 97960   },  // S
'Mansard':                  { from: "m/A/N'SAR",                                        to: "m/A/N'sAR",                                        line: 99760   },  // S
'Neuilly-sur-Seine':        { from: "n/y//j//i/_SYR_'s/E/n",                            to: "n/y//j//i/_sYR_'s/E/n",                            line: 107727  },  // S
'par avance':               { from: "pA_RA'V/A/NS",                                     to: "pA_RA'V/A/Ns",                                     line: 115387  },  // S
'Pouillysur-Loire':         { from: "p/u//j//i/_SYR_'lw/A/R",                           to: "p/u//j//i/_sYR_'lw/A/R",                           line: 122332  },  // S
'premiers danseurs':        { from: "pR/@/m/j//eI/_d/A/N'S/y/R",                        to: "pR/@/m/j//eI/_d/A/N's/y/R",                        line: 123263  },  // S
'premier danseur':          { from: "pR/@/m/j//eI/_d/A/N'S/y/R",                        to: "pR/@/m/j//eI/_d/A/N's/y/R",                        line: 123264  },  // S
'rafraichissoir':           { from: "RAfR/E//S//i/'SWAR",                               to: "RAfR/E//S//i/'swAR",                               line: 128480  },  // S // W
'Randers':                  { from: "'R/A/n/@/RS",                                      to: "'R/A/n/@/Rs",                                      line: 128848  },  // S
'Reichsfuhrer':             { from: "'R/aI//x/S,fYR/@/R",                               to: "'R/aI//x/s,fYR/@/R",                               line: 130539  },  // S
'Roncevaux':                { from: "R/O/NS'v/oU/",                                     to: "R/O/Ns'v/oU/",                                     line: 133267  },  // S
'Ronsard':                  { from: "R/O/N'SAR",                                        to: "R/O/N'sAR",                                        line: 133281  },  // S
'Savoie':                   { from: "SA'VWA",                                           to: "sA'VwA",                                           line: 136278  },  // S // W
'Schaerbeek':               { from: "'S/x//A/Rb/eI/k",                                  to: "'s/x//A/Rb/eI/k",                                  line: 136730  },  // S
'Sully-Prudhomme':          { from: "SY'l/i/pRY'd/O/m",                                 to: "sY'l/i/pRY'd/O/m",                                 line: 153039  },  // S
'Tammerfors':               { from: ",t/A/mm/@/R'f/O/RS",                               to: ",t/A/mm/@/R'f/O/Rs",                               line: 155689  },  // S

'adversa':                  { from: "/A/d'W/E/Rs/A/",                                   to: "/A/d'w/E/Rs/A/",                                   line: 2042    }, // W
'adversaria':               { from: ",/A/dW/E/R's/A/R/I//A/",                           to: ",/A/dw/E/R's/A/R/I//A/",                           line: 2043    }, // W
'ad verbum':                { from: "/A/d_'W/E/Rb/U/m",                                 to: "/A/d_'w/E/Rb/U/m",                                 line: 2122    }, // W
'Antoine':                  { from: "/A/n'tWAn",                                        to: "/A/n'twAn",                                        line: 7542    }, // W
'Antoine Louis':            { from: "/A/N'tWAn_lw/i/",                                  to: "/A/N'twAn_lw/i/",                                  line: 7546    }, // W
'au revoir':                { from: "/oU/_R/@/'VWAR",                                   to: "/oU/_R/@/'VwAR",                                   line: 11164   }, // W
'a droite':                 { from: "A_'dRWAt",                                         to: "A_'dRwAt",                                         line: 11608   }, // W
'a trois':                  { from: "A_'tRW/A/",                                        to: "A_'tRw/A/",                                        line: 11630   }, // W
'bete noire':               { from: "b/E/t_'nWAR",                                      to: "b/E/t_'nwAR",                                      line: 16549   }, // W
'Blois':                    { from: 'blWA',                                             to: 'blwA',                                             line: 18645   }, // W
'Boieldieu':                { from: "bWA/E/l'd/j//y/",                                  to: "bwA/E/l'd/j//y/",                                  line: 19541   }, // W
'Boileau-Despreaux':        { from: "bWA'l/oU/d/eI/pR/eI/'/oU/",                        to: "bwA'l/oU/d/eI/pR/eI/'/oU/",                        line: 19544   }, // W
'bonne foi':                { from: "b/O/n_'fWA",                                       to: "b/O/n_'fwA",                                       line: 19910   }, // W
'Charleroi':                { from: "/S/AR'l/@/RWA",                                    to: "/S/AR'l/@/RwA",                                    line: 29543   }, // W
'chaudfroid':               { from: "/S//oU/'fRW/A/",                                   to: "/S//oU/'fRw/A/",                                   line: 29713   }, // W
'citoyen':                  { from: "s/i/tWA'/j//&/N",                                  to: "s/i/twA'/j//&/N",                                  line: 32011   }, // W
'cry quits':                { from: 'kr/aI/_kW/I/ts',                                   to: 'kr/aI/_kw/I/ts',                                   line: 40583   }, // W
'Delannoy':                 { from: "d/@/lA'nWA",                                       to: "d/@/lA'nwA",                                       line: 43954   }, // W
'Directoire':               { from: "d/i/R/E/k'tWAR",                                   to: "d/i/R/E/k'twAR",                                   line: 46590   }, // W
'douanes':                  { from: 'dWAn',                                             to: 'dwAn',                                             line: 48688   }, // W
'dressoir':                 { from: "dR/E/s'WAR",                                       to: "dR/E/s'wAR",                                       line: 49702   }, // W
'dressoirs':                { from: "dR/E/s'WAR",                                       to: "dR/E/s'wAR",                                       line: 49703   }, // W
'Dunois':                   { from: "dY'nWA",                                           to: "dY'nwA",                                           line: 50755   }, // W
'etoile':                   { from: "/eI/'tWAl",                                        to: "/eI/'twAl",                                        line: 55607   }, // W
'Eure-et-Loir':             { from: "/y/R/eI/'lWAR",                                    to: "/y/R/eI/'lwAR",                                    line: 55799   }, // W
'Francois Rene':            { from: "fR/A/N'sWA_R/@/'n/eI/",                            to: "fR/A/N'swA_R/@/'n/eI/",                            line: 64468   }, // W
'Indre-et-Loire':           { from: "/&/NdR/eI/_'lWAR",                                 to: "/&/NdR/eI/_'lwAR",                                 line: 83816   }, // W
'Lavoisier':                { from: "lAVWA'z/j//eI/",                                   to: "lAVwA'z/j//eI/",                                   line: 93083   }, // W
'Lenoir':                   { from: "l/@/'nWAR",                                        to: "l/@/'nwAR",                                        line: 94057   }, // W
'Loir-et-Cher':             { from: "lWAR/eI/_'/S//E/R",                                to: "lwAR/eI/_'/S//E/R",                                line: 96651   }, // W
'Loire-Inferieure':         { from: "lWAR_/&/Nf/eI/'R/j//y/R",                          to: "lwAR_/&/Nf/eI/'R/j//y/R",                          line: 96653   }, // W
'Loiret':                   { from: "lWA'R/E/",                                         to: "lwA'R/E/",                                         line: 96654   }, // W
'Maine-et-Loire':           { from: "'m/E/n/eI/'lWAR",                                  to: "'m/E/n/eI/'lwAR",                                  line: 98875   }, // W
'make quits':               { from: 'm/eI/k_kW/I/ts',                                   to: 'm/eI/k_kw/I/ts',                                   line: 99127   }, // W
'Manawyddan':               { from: ",m/&/n/@/'W/y//T//@/n",                            to: ",m/&/n/@/'w/y//T//@/n",                            line: 99529   }, // W
'mango-squash':             { from: "'m/&//N/g/oU/,skW/A//S/",                          to: "'m/&//N/g/oU/,skw/A//S/",                          line: 99620   }, // W
'Marc Antoine':             { from: "mARk_/A/N'tWAn",                                   to: "mARk_/A/N'twAn",                                   line: 100030  }, // W
'Maurois':                  { from: "m/O/'RWA",                                         to: "m/O/'RwA",                                         line: 100961  }, // W
'Moissan':                  { from: "mWA's/A/N",                                        to: "mwA's/A/N",                                        line: 104247  }, // W
'noir':                     { from: 'nWAR',                                             to: 'nwAR',                                             line: 108748  }, // W
'petit-noir':               { from: "'p/E/t/i/_nWAR",                                   to: "'p/E/t/i/_nwAR",                                   line: 117547  }, // W
'Pinot noir':               { from: "p/i/'n/oU/_nWAR",                                  to: "p/i/'n/oU/_nwAR",                                  line: 119245  }, // W
'Poincare':                 { from: "pW/&/NkA'R/eI/",                                   to: "pw/&/NkA'R/eI/",                                   line: 120780  }, // W
'quitrent':                 { from: "'kW/I/t,r/E/nt",                                   to: "'kw/I/t,r/E/nt",                                   line: 127996  }, // W
'quits':                    { from: 'kW/I/ts',                                          to: 'kw/I/ts',                                          line: 127997  }, // W
'soi-disant':               { from: "sWAd/i/'z/A/N",                                    to: "swAd/i/'z/A/N",                                    line: 146142  }, // W
'tournois':                 { from: "t/U/r'nW/A/",                                      to: "t/U/r'nw/A/",                                      line: 161525  }, // W
'Trois-Rivieres':           { from: "tRWA_R/i/'v/j//E/R",                               to: "tRwA_R/i/'v/j//E/R",                               line: 163407  }, // W
'Troyon':                   { from: "tRWA'/j//O/N",                                     to: "tRwA'/j//O/N",                                     line: 163595  }, // W
'Ubu Roi':                  { from: "YbY_'RWA",                                         to: "YbY_'RwA",                                         line: 165314  }, // W
'Uruguaiana':               { from: ",/u/R/u/gW/A/'/j//A/n/@/",                         to: ",/u/R/u/gw/A/'/j//A/n/@/",                         line: 167958  }, // W
'Victoire':                 { from: "v/i/k'tWAR",                                       to: "v/i/k'twAR",                                       line: 169566  }, // W

"adder's-mouth":            { from: "'ad/@/rz,mou/T/",                                  to: "'/&/d/@/rz,m/AU//T/",                              line: 1597    }, // o
"bachelor's gown":          { from: "'ba/tS//@/l/@/rz_goun",                            to: "'b/&//tS//@/l/@/rz_g/AU/n",                        line: 11796   }, // o
"cat-o'-mountain":          { from: ",kat/@/'mount/-/n",                                to: ",k/&/t/@/'m/AU/nt/-/n",                            line: 27554   }, // o
"cottonpickin'":            { from: "'kot/-/n,pik/@/n",                                 to: "'k/A/t/-/n,p/I/k/@/n",                             line: 38238   }, // o // i
"d'Escoto":                 { from: "d/eI/'skot/oU/",                                   to: "d/eI/'sk/oU/t/oU/",                                line: 41865   }, // o
"D'Oyly Carte":             { from: "'doil/i/_'k/A/rt",                                 to: "'d//Oi//l/i/_'k/A/rt",                             line: 41869   }, // o
"five-o'clock":             { from: "f/aI/v_/@/'klok",                                  to: "f/aI/v_/@/'kl/A/k",                                line: 61396   }, // o
"four-o'clock":             { from: "'f/oU/r/@/,klok",                                  to: "'f/oU/r/@/,kl/A/k",                                line: 64168   }, // o
"frog's-bit":               { from: "'frogz,bit",                                       to: "'fr/A/gz,b/I/t",                                   line: 65202   }, // o
"here's how":               { from: 'h/i/rz_hou',                                       to: 'h/i/rz_h/AU/',                                     line: 77112   }, // o
"hop-o'-my-thumb":          { from: "'hop/@/m/aI/'/T/um",                               to: "'h/A/p/@/m/aI/'/T//@/m",                           line: 79289   }, // o // u
"hound's-tongue":           { from: "'houndz,tu/N/",                                    to: "'h/AU/ndz,t/@//N/",                                line: 79866   }, // o // u
"hound's-tooth":            { from: "'houndz,t/u//T/",                                  to: "'h/AU/ndz,t/u//T/",                                line: 79867   }, // o
"howe'er":                  { from: "hou'/(@)/r",                                       to: "h/AU/'/(@)/r",                                     line: 79991   }, // o
"lady's-smock":             { from: "'l/eI/d/i/z_,smok",                                to: "'l/eI/d/i/z_,sm/A/k",                              line: 91704   }, // o
"Lloyd's":                  { from: 'loidz',                                            to: 'l/eI/dz',                                          line: 96257   }, // o
"Lloyd's List":             { from: 'loidz_list',                                       to: 'l/eI/dz_l/I/st',                                   line: 96258   }, // o // i
"Nero's-crown":             { from: "'n/i/r/oU/z_'kroun",                               to: "'n/i/r/oU/z_'kr/AU/n",                             line: 107595  }, // o
"O'Boyle":                  { from: "/oU/'boil",                                        to: "/oU/'b//Oi//l",                                    line: 110078  }, // o
"o'clock":                  { from: "/@/'klok",                                         to: "/@/'kl/A/k",                                       line: 110080  }, // o
"O'Connor":                 { from: "/oU/'kon/@/r",                                     to: "/oU/'k/A/n/@/r",                                   line: 110081  }, // o
"oughtn't":                 { from: "'ot/@/nt",                                         to: "'/O/t/@/nt",                                       line: 112679  }, // o
"owl's-crown":              { from: "'oulz,kroun",                                      to: "'/AU/lz,kr/AU/n",                                  line: 113463  }, // o
"Pont l'Eveque":            { from: "pont_l/@/'vek",                                    to: "p/A/nt_l/@/'v/E/k",                                line: 121501  }, // o // e
"Queen's-flower":           { from: "'kw/i/nz,flou/@/r",                                to: "'kw/i/nz,fl/AU//@/r",                              line: 127717  }, // o
"robin's-egg blue":         { from: "'robinz_,eg",                                      to: "'r/A/b/-/nz_,/E/g_bl/u/",                          line: 132816  }, // o // i // e
"sailor's-choice":          { from: "'s/eI/l/@/rz'/tS/ois",                             to: "'s/eI/l/@/rz'/tS///Oi//s",                         line: 135133  }, // o
'scorcher':                 { from: "'skor/tS//@/r",                                    to: "'sk/O/r/tS//@/r",                                  line: 137221  }, // o
"St-James's-flower":        { from: ",s/eI/nt'/dZ//eI/mz,flou/@/r",                     to: ",s/eI/nt'/dZ//eI/mz,fl/AU//@/r",                   line: 149149  }, // o
"St-John's-wort":           { from: ",s/eI/nt'/dZ/onz,w/[@]/rt",                        to: ",s/eI/nt'/dZ//A/nz,w/[@]/rt",                      line: 149152  }, // o
"swan's-down":              { from: "'swonz,doun",                                      to: "'sw/A/nz,d/AU/n",                                  line: 154094  }, // o
"t'ao t'ieh":               { from: "'tou_'t/j/e",                                      to: "'t/AU/_'t/j//E/",                                  line: 155006  }, // o // e
'thoroughgoing':            { from: ",/T//@/r/@/'go_/I//N/",                            to: ",/T//@/r/@/'g/oU/_/I//N/",                         line: 158883  }, // o
"toad's-mouth":             { from: "'t/oU/dz_,mou/T/",                                 to: "'t/oU/dz_,m/AU//T/",                               line: 160391  }, // o
"Tom o'Bedlam":             { from: "'tom_/@/'bedl/@/m",                                to: "'t/A/m_/@/'b/E/dl/@/m",                            line: 160711  }, // o // e
"traveler's-joy":           { from: "'trav/@/l/@/rz_,/dZ/oi",                           to: "'tr/&/v/@/l/@/rz_,/dZ///Oi//",                     line: 162432  }, // o
"twelve-o'clock":           { from: "twelv_/@/'klok",                                   to: "tw/E/lv_/@/'kl/A/k",                               line: 164658  }, // o // e
"van't Hoff":               { from: "v/A/nt_'hof",                                      to: "v/A/nt_'h/O/f",                                    line: 168392  }, // o
"virgin's-bower":           { from: "'v/[@]/r/dZ/inz_'bou/@/r",                         to: "'v/[@]/r/dZ//I/nz_'b/AU//@/r",                     line: 169941  }, // o // i
"whate'er":                 { from: "wot'/(@)/r",                                       to: "w/@/t'/(@)/r",                                     line: 172972  }, // o
"whatsoe'er":               { from: ",wots/oU/'/(@)/r",                                 to: ",w/@/ts/oU/'/(@)/r",                               line: 172978  }, // o
"wrong'un":                 { from: "'ro/N//@/n",                                       to: "'r/O//N//@/n",                                     line: 175928  }, // o

"adder's-tongue":           { from: "'ad/@/rz,tu/N/",                                   to: "'/&/d/@/rz,t/@//N/",                               line: 1598    }, // u
"angel's-trumpet":          { from: "'/eI/n/dZ//@/lz_,trumpit",                         to: "'/eI/n/dZ//@/lz_,tr/@/mp/-/t",                     line: 6277    }, // u
"B'nai B'rith":             { from: "bu'n/eI/_bri/T/",                                  to: "b/-/'n/eI/_br/I//T/",                              line: 11634   }, // u
"bachelor's-button":        { from: "'ba/tS//@/l/@/rz_'but/-/n",                        to: "'b/&//tS//@/l/@/rz_'b/A/t/-/n",                    line: 11794   }, // u
"Bent J'beil":              { from: "bent_/dZ/u'b/A/l",                                 to: "b/I/nt_/dZ//-/'b/A/l",                             line: 16082   }, // u
"blindman's buff":          { from: "'bl/aI/nd,manz_'buf",                              to: "'bl/aI/nd,m/&/nz_'b/@/f",                          line: 18483   }, // u
"Ch'en Tu-hsiu":            { from: "'/tS/un_'d/u/'/S//j//u/",                          to: "'/tS//U/n_'d/u/'/S//j//u/",                        line: 28843   }, // u
"chuck-will's-widow":       { from: "'/tS/ukwilz'wid/oU/",                              to: "'/tS//@/kw/I/lz'w/I/d/oU/",                        line: 31404   }, // u // i
'dad-burned':               { from: "'d/&/d'burnd",                                     to: "'d/&/d'b/[@]/rnd",                                 line: 41911   }, // u
"deer's-tongue":            { from: "'d/i/rz,tu/N/",                                    to: "'d/i/rz,t/@//N/",                                  line: 43649   }, // u
"devil's-tongue":           { from: "'devilz_,tu/N/",                                   to: "'d/E/v/-/lz_,t/@//N/",                             line: 45243   }, // u // i // e
"doesn't":                  { from: "'duz/@/nt",                                        to: "'d/@/z/-/nt",                                      line: 47981   }, // u
"dog's-tongue":             { from: "'d/O/gz,tu/N/",                                    to: "'d/O/gz,t/@//N/",                                  line: 47989   }, // u
"dragon's-tongue":          { from: "'drag/@/nz,tu/N/",                                 to: "'dr/&/g/@/nz,t/@//N/",                             line: 49288   }, // u
"Dutchman's-breeches":      { from: "'du/tS/m/@/nz'bri/tS/iz",                          to: "'d/@//tS/m/@/nz'br/I//tS//I/z",                    line: 50947   }, // u
"Dutchman's-pipe":          { from: "'du/tS/m/@/nz'p/aI/p",                             to: "'d/@//tS/m/@/nz'p/aI/p",                           line: 50948   }, // u
"elephant's trunk":         { from: "'el/@/f/@/nts_tru/N/k",                            to: "'/E/l/@/f/@/nts_tr/@//N/k",                        line: 52836   }, // u // e
'extraversion':             { from: "'/E/kstr/@/'vur/Z//@/n",                           to: "'/E/kstr/@/'v/[@]/r/Z//@/n",                       line: 57204   }, // u
"Harrah's":                 { from: "'haruz",                                           to: "'h/&/r/-/z",                                       line: 75189   }, // u
"hart's-tongue":            { from: "'h/A/rts,tu/N/",                                   to: "'h/A/rts,t/@//N/",                                 line: 75227   }, // u
"hunt's-up":                { from: "'hunts'up",                                        to: "'h/@/nts/@/p",                                     line: 80368   }, // u
"huntsman's-cup":           { from: "'huntsm/@/nz'kup",                                 to: "'h/@/ntsm/@/nz'k/@/p",                             line: 80383   }, // u
"K'ung Fu-tzu":             { from: "'k/U//N/_'f/u/'dzu",                               to: "'k/U//N/_'f/u/'dz/@/",                             line: 88954   }, // u
"lady's-thumb":             { from: "'l/eI/d/i/z_,/T/um",                               to: "'l/eI/d/i/z_,/T//@/m",                             line: 91706   }, // u
"light-o'-love":            { from: "'l/aI/t/@/_'luv",                                  to: "'l/aI/t/@/_'l/@/v",                                line: 95011   }, // u
"mustn't":                  { from: "'mus/@/nt",                                        to: "'m/@/s/@/nt",                                      line: 106252  }, // u
"shove-ha'penny":           { from: "/S/uv_'h/eI/p/@/n/i/",                             to: "/S//@/v_'h/eI/p/@/n/i/",                           line: 142360  }, // u
"wasn't":                   { from: "'wuz/@/nt",                                        to: "'w/A/z/@/nt",                                      line: 171315  }, // u
"what'd":                   { from: "'/hw/utid",                                        to: "'/hw//@/t/I/d",                                    line: 172965  }, // u // i
"what'll":                  { from: "'/hw/ut/-/l",                                      to: "'/hw//@/t/-/l",                                    line: 172966  }, // u
"what's":                   { from: '/hw/uts',                                          to: '/hw//@/ts',                                        line: 172967  }, // u
"what's happening":         { from: "/hw/uts_'hap/@/ni/N/",                             to: "/hw//@/ts_'h/&/p/@/n/I//N/",                       line: 172968  }, // u // i
"what's what":              { from: 'hwuts_/hw/ut',                                     to: '/hw//@/ts_/hw//@/t',                               line: 172969  }, // u
"what've":                  { from: "'/hw/ut/@/v",                                      to: "'/hw//@/t/@/v",                                    line: 172970  }, // u

"Babinski's reflex":        { from: "b/@/_'binsk/i/z",                                  to: "b/@/_'b/-/nsk/i/z_r/I/'fl/E/ks",                   line: 11696   }, // i
"baby's-slippers":          { from: "'b/eI/b/i/z_,slip/@/rz",                           to: "'b/eI/b/i/z_,sl/I/p/@/rz",                         line: 11715   }, // i
"bachelor's degree":        { from: "'ba/tS//@/l/@/rz_di'gr/i/",                        to: "'b/&//tS//@/l/@/rz_d/I/'gr/i/",                    line: 11795   }, // i
"beggar's-tick":            { from: "'beg/@/rs,tik",                                    to: "'b/-/g/@/rs,t/I/k",                                line: 15454   }, // i // e
"bishop's-cap":             { from: "'bi/S//@/ps,kap",                                  to: "'b/I//S//@/ps,k/&/p",                              line: 17706   }, // i
"bishop's-weed":            { from: "'bi/S//@/ps,w/i/d",                                to: "'b/I//S//@/ps,w/i/d",                              line: 17707   }, // i
"Ch'an Buddhism":           { from: "/tS//A/n_'b/U/diz/@/m",                            to: "/tS//A/n_'b/U/d/I/z/@/m",                          line: 28841   }, // i
"Ch'in":                    { from: '/tS/in',                                           to: '/tS//I/n',                                         line: 28845   }, // i
"ch'in":                    { from: '/tS/in',                                           to: '/tS//I/n',                                         line: 28846   }, // i
"Ch'ing":                   { from: '/tS/i/N/',                                         to: '/tS//I//N/',                                       line: 28847   }, // i
"Charles's Wain":           { from: "'/tS//A/rlziz_'w/eI/n",                            to: "'/tS//A/rlz/I/z_'w/eI/n",                          line: 29545   }, // i
"Ching-t'u":                { from: "'/dZ/i/N/'t/u/",                                   to: "'/dZ//I//N/'t/u/",                                 line: 30616   }, // i
"Chris'tian Louis":         { from: "'kRist/j//A/n_'l/u//i/",                           to: "'kR/I/st/j//A/n_'l/u//i/",                         line: 31130   }, // i
"crane's-bill":             { from: "'kr/eI/nz,bil",                                    to: "'kr/eI/nz,b/I/l",                                  line: 39112   }, // i
"Cupid's-dart":             { from: "'k/j//u/pidz_'d/A/rt",                             to: "'k/j//u/p/I/dz_'d/A/rt",                           line: 40911   }, // i
"D'Iberville":              { from: "'d/aI/b/@/r,vil",                                  to: "'d/aI/b/@/r,v/I/l",                                line: 41867   }, // i
"devil's-bit":              { from: "'dev/@/lz_,bit",                                   to: "'d/E/v/@/lz_,b/I/t",                               line: 45241   }, // i // e
"devil's-pincushion":       { from: "'dev/@/lz_'pin,k/U//S//@/n",                       to: "'d/E/v/@/lz_'p/I/n,k/U//S//@/n",                   line: 45242   }, // i // e
"devil's-walking-stick":    { from: "'dev/@/lz_'w/O/ki/N/_,stik",                       to: "'d/E/v/@/lz_'w/O/k/I//N/_,st/I/k",                 line: 45244   }, // i // e
"didn't":                   { from: "'did/@/nt",                                        to: "'d/I/d/@/nt",                                      line: 45928   }, // i
"eczem'atous":              { from: "ig'zem/@/t/@/s",                                   to: "/E/g'z/E/m/@/t/@/s",                               line: 51821   }, // i // e
"heron's-bill":             { from: "'her/@/nz,bil",                                    to: "'h/E/r/@/nz,b/I/l",                                line: 77246   }, // i // e
"his'n":                    { from: "'hiz/@/n",                                         to: "'h/I/z/@/n",                                       line: 78193   }, // i
"isn't":                    { from: "'iz/@/nt",                                         to: "'/I/z/@/nt",                                       line: 86578   }, // i
"it'd":                     { from: "'it/@/d",                                          to: "'/I/t/@/d",                                        line: 86825   }, // i
"it'll":                    { from: "'it/@/l",                                          to: "'/I/t/@/l",                                        line: 86826   }, // i
"it's":                     { from: 'its',                                              to: '/I/ts',                                            line: 86827   }, // i
"Ithuriel's-spear":         { from: "i'/T//U/r/i//@/lz'sp/i/r",                         to: "/I/'/T//U/r/i//@/lz'sp/i/r",                       line: 86900   }, // i
"Josephine's-lily":         { from: "'/dZ//oU/z/@/,f/i/nz'lil/i/",                      to: "'/dZ//oU/z/@/,f/i/nz'l/I/l/i/",                    line: 88385   }, // i
"Jupiter's-beard":          { from: "'/dZ//u/pit/@/rz'b/i/rd",                          to: "'/dZ//u/p/-/t/@/rz'b/i/rd",                        line: 88810   }, // i
"lady's-slipper":           { from: "'l/eI/d/i/z_,slip/@/r",                            to: "'l/eI/d/i/z_,sl/I/p/@/r",                          line: 91703   }, // i
"lady's-thistle":           { from: "'l/eI/d/i/z_,/T/is/@/l",                           to: "'l/eI/d/i/z_,/T//I/s/@/l",                         line: 91705   }, // i
"lady's-tresses":           { from: "'l/eI/d/i/z_,tresiz",                              to: "'l/eI/d/i/z_,tr/E/s/I/z",                          line: 91707   }, // i // e
"lizard's-tail":            { from: "'liz/@/rdz_,t/eI/l",                               to: "'l/I/z/@/rdz_,t/eI/l",                             line: 96234   }, // i
"Lu'therism":               { from: "'l/u//T//@/,riz/@/m",                              to: "'l/u//T//@/,r/I/z/@/m",                            line: 97617   }, // i
"mah'dism":                 { from: "'m/A/diz/@/m",                                     to: "'m/A/d/I/z/@/m",                                   line: 98756   }, // i
"monoe'cism":               { from: "m/@/'n/i/siz/@/m",                                 to: "m/@/'n/i/s/I/z/@/m",                               line: 104613  }, // i
"Mu'min":                   { from: "'m/u/min",                                         to: "'m/u/m/I/n",                                       line: 105624  }, // i
"O'Higgins":                { from: "/oU/'higinz",                                      to: "/oU/'h/I/g/I/nz",                                  line: 110087  }, // i
"parrot's-bill":            { from: "'par/@/ts,bil",                                    to: "'p/&/r/@/ts,b/I/l",                                line: 115199  }, // i
"prince's-feather":         { from: "'prinsiz'fe/T//@/r",                               to: "'pr/I/ns/I/z'f/E//T//@/r",                         line: 123869  }, // i // e
"prince's-pine":            { from: "'prinsiz,p/aI/n",                                  to: "'pr/I/ns/I/z,p/aI/n",                              line: 123870  }, // i
"sheep's-bit":              { from: "'/S//i/ps,bit",                                    to: "'/S//i/ps,b/I/t",                                  line: 141430  }, // i
"stork's-bill":             { from: "'st/O/rks,bil",                                    to: "'st/O/rks,b/I/l",                                  line: 151214  }, // i
"Venus's-flytrap":          { from: "'v/i/n/@/siz_'fl/aI/,trap",                        to: "'v/i/n/@/s/I/z_'fl/aI/,tr/&/p",                    line: 169035  }, // i
"Venus's-hair":             { from: "'v/i/n/@/siz'h/(@)/r",                             to: "'v/i/n/@/s/I/z'h/(@)/r",                           line: 169036  }, // i
"widow's-cross":            { from: "'wid/oU/z_'kr/O/s",                                to: "'w/I/d/oU/z_'kr/O/s",                              line: 173785  }, // i
"will-o'-the-wisp":         { from: ",wil/@//D//@/'wisp",                               to: ",w/I/l/@//D//@/'w/I/sp",                           line: 173976  }, // i
"x'ing":                    { from: "'eksi/N/",                                         to: "'/E/ks/I//N/",                                     line: 175994  }, // i

"affaires d'honneur":       { from: "A'feR_d/O/'n/y/R",                                 to: "A'f/E//-/R_d/O/'n/y/R",                            line: 2376    }, // e
"affaire d'amour":          { from: "A'feR_dA'm/u/R",                                   to: "A'f/E//-/R_dA'm/u/R",                              line: 2377    }, // e
"affaire d'honneur":        { from: "A'feR_d/O/'n/y/R",                                 to: "A'f/E//-/R_d/O/'n/y/R",                            line: 2378    }, // e
"a l'ancienne":             { from: "A_l/A/N's/j/en",                                   to: "A_l/A/N's/j//E/n",                                 line: 11615   }, // e
"babies'-breath":           { from: "'b/eI/b/i/z_,bre/T/",                              to: "'b/eI/b/i/z_,br/E//T/",                            line: 11695   }, // e
"baby's-breath":            { from: "'b/eI/b/i/z,bre/T/",                               to: "'b/eI/b/i/z,br/E//T/",                             line: 11714   }, // e
"ballons d'essai":          { from: "bAl/O/Nde_'se",                                    to: "bAl/O/Nd/E/_'s/E/",                                line: 12671   }, // e
"beggar's-lice":            { from: "'beg/@/rz,l/aI/s",                                 to: "'b/-/g/@/rz,l/aI/s",                               line: 15453   }, // e
"c'est-a-dire":             { from: "setA'd/i/R",                                       to: "s/E/tA'd/i/R",                                     line: 24412   }, // e
"c'est la vie":             { from: "se_lA_'v/i/",                                      to: "s/E/lA_'v/i/",                                     line: 24413   }, // e
"c'est selon":              { from: "se_s/@/'l/O/N",                                    to: "s/E/s/@/'l/O/N",                                   line: 24414   }, // e
"can't help":               { from: 'kant_help',                                        to: 'k/&/nt_h/E/lp',                                    line: 25451   }, // e
"Ch'eng-Chu":               { from: "'/tS/e/N/'/dZ//u/",                                to: "'/tS//E//N/'/dZ//u/",                              line: 28842   }, // e
"Ch'ien Lung":              { from: "'/tS//j/en_'l/U//N/",                              to: "'/tS//j//E/n_'l/U//N/",                            line: 28844   }, // e
"chef-d'oeuvre":            { from: "/S/e'd/y/VR/-/",                                   to: "/S//E/'d/y/VR/-/",                                 line: 29921   }, // e
"commedia dell'arte":       { from: "k/@/'m/eI/d/i//@/_del'/A/rt/i/",                   to: "k/@/'m/eI/d/i//@/_d/E/l'/A/rt/i/",                 line: 35048   }, // e
"commedie dell'arte":       { from: "k/O/m'med/j/e_del'l/A/Rte",                        to: "k/O/m'm/eI/d/j//i/_d/E/l'l/A/Rt/i/",               line: 35049   }, // e
"Cortina D'ampezzo":        { from: "k/O/r't/i/n/A/_d/A/m'pets/oU/",                    to: "k/O/r't/i/n/A/_d/A/m'p/E/ts/oU/",                  line: 37988   }, // e
"coups d'essai":            { from: "k/u/_de'se",                                       to: "k/u/_d/E/'s/E/",                                   line: 38656   }, // e
"coup d'essai":             { from: "k/u/_de'se",                                       to: "k/u/_d/E/'s/E/",                                   line: 38658   }, // e
"creme d'ananas":           { from: ",krem_d/A/n/A/'n/A/",                              to: ",kr/E/m_d/A/n/A/'n/A/",                            line: 39437   }, // e
"crow's-nest":              { from: "'kr/oU/z,nest",                                    to: "'kr/oU/z,n/E/st",                                  line: 40221   }, // e
"D'Arrest":                 { from: "da'rest",                                          to: "d/&/'R/E/",                                        line: 41862   }, // e
"death's-head":             { from: "'de/T/s,hed",                                      to: "'d/E//T/s,h/E/d",                                  line: 42941   }, // e
"elephant's":               { from: "'el/@/f/@/nts",                                    to: "'/E/l/@/f/@/nts",                                  line: 52833   }, // e
"elephant's-ear":           { from: "'el/@/f/@/nts_/i/r",                               to: "'/E/l/@/f/@/nts_/i/r",                             line: 52834   }, // e
"elephant's-foot":          { from: "'el/@/f/@/nts_f/U/t",                              to: "'/E/l/@/f/@/nts_f/U/t",                            line: 52835   }, // e
"essence d'orient":         { from: "'es/@/ns_'d/oU/r/i//@/nt",                         to: "'/E/s/@/ns_'d/oU/r/i//@/nt",                       line: 55302   }, // e
"Favola d'Orfeo":           { from: "'f/A/v/O/l/A/_d/O/R'fe/O/",                        to: "'f/A/v/O/l/A/_d/O/R'f/E//O/",                      line: 58766   }, // e
"fleches d'amour":          { from: "fle/S/_dA'm/u/R",                                  to: "fl/E//S/_dA'm/u/R",                                line: 61931   }, // e
"Giornale D'italia":        { from: "d/i/'t/A/l/j//A/_/dZ//oU/r'n/A/le",                to: "d/i/'t/A/l/j//A/_/dZ//oU/r'n/A/l/E/",              line: 68796   }, // e
"Giscard d'Estaing":        { from: "/Z//i/s'k/A/r_de'sta/N/",                          to: "/Z//i/s'k/A/r_d/E/'st/E/",                         line: 68872   }, // e
"Guido d'Arezzo":           { from: "'gw/i/d/O/_d/A/'Retts/O/",                         to: "'gw/i/d/O/_d/A/'R/E/tts/O/",                       line: 72655   }, // e
"hair's-breadth":           { from: "'h/(@)/rz,bred/T/",                                to: "'h/(@)/rz,br/E/d/T/",                              line: 73499   }, // e
"hand's-breadth":           { from: "'handz,bred/T/",                                   to: "'h/&/ndz,br/E/d/T/",                               line: 74416   }, // e
"jeux d'esprit":            { from: "/Z//y/_des'pR/i/",                                 to: "/Z//y/_d/E/s'pR/i/",                               line: 87918   }, // e
"l'istesso tempo":          { from: "l/i/'stes/oU/_'temp/oU/",                          to: "l/i/'st/E/s/oU/_'t/E/mp/oU/",                      line: 91360   }, // e
"L'Ouverture":              { from: "l/u/veR'tYR",                                      to: "l/u/v/E/R'tYR",                                    line: 91362   }, // e
"lait d'amandes":           { from: "le_dA'm/A/Nd",                                     to: "l/E/_dA'm/A/Nd",                                   line: 91839   }, // e
"leopard's-bane":           { from: "'lep/@/rdz_,b/eI/n",                               to: "'l/E//@/rdz_,b/eI/n",                              line: 94133   }, // e
"let's":                    { from: 'lets',                                             to: 'l/E/ts',                                           line: 94249   }, // e
'maitre d hotel':           { from: ",m/eI/tr/@/d/oU/'tel",                             to: ",m/eI/tr/@/d/oU/'t/E/l",                           line: 98943   }, // e
"maitres d'hotel":          { from: ",m/eI/t/@/rz_d/oU/'tel",                           to: ",m/eI/t/@/rz_d/oU/'t/E/l",                         line: 98944   }, // e
"maitre d'hotel":           { from: ",m/eI/t/@/r_d/oU/'tel",                            to: ",m/eI/t/@/r_d/oU/'t/E/l",                          line: 98946   }, // e
"mare's-nest":              { from: "'m/(@)/rz,nest",                                   to: "'m/(@)/rz,n/E/st",                                 line: 100039  }, // e
"N'djamena":                { from: "/@/n/dZ//A/'men/A/",                               to: "/@/n/dZ//A/'m/-/n/A/",                             line: 106521  }, // e
"n'est-ce pas":             { from: "nes_'p/A/",                                        to: "n/E/s_'p/A/",                                      line: 106522  }, // e
"ne'er-do-well":            { from: "'n/(@)/rd/u/,wel",                                 to: "'n/(@)/rd/u/,w/E/l",                               line: 107084  }, // e
"nor'-wester":              { from: "n/oU/r'west/@/r",                                  to: "n/oU/r'w/E/st/@/r",                                line: 109217  }, // e
"nor'wester":               { from: "n/O/r'west/@/r",                                   to: "n/O/r'w/E/st/@/r",                                 line: 109219  }, // e
"O'Kelley":                 { from: "/oU/'kel/i/",                                      to: "/oU/'k/E/l/i/",                                    line: 110089  }, // e
"objets d'art":             { from: "/O/b/Z/e_'dAR",                                    to: "/O/b/Z//E/_'dAR",                                  line: 110238  }, // e
"objet d'art":              { from: "/O/b/Z/e_'dAR",                                    to: "/O/b/Z//E/_'dAR",                                  line: 110239  }, // e
"parrot's-feather":         { from: "'par/@/ts_,fe/D//@/r",                             to: "'p/&/r/@/ts_,f/E//D//@/r",                         line: 115200  }, // e
"penn'orth":                { from: "'pen/@//T/",                                       to: "'p/E/n/@//T/",                                     line: 116617  }, // e
"pheasant's-eye":           { from: "'fez/@/nts_,/aI/",                                 to: "'f/E/z/@/nts_,/aI/",                               line: 117804  }, // e
"piece d'occasion":         { from: "p/j/es_d/O/k/A/'z/j//O/N",                         to: "p/j//E/s_d/O/k/A/'z/j//O/N",                       line: 118707  }, // e
"point d'Angleterre":       { from: "pwaN_d/A/n,gl/@/'teR",                             to: "pw/E/_d/A/n,gl/@/'t/E/R",                          line: 120819  }, // e
"point d'esprit":           { from: "pwaN_de'spR/i/",                                   to: "pw/E/_d/E/'spR/i/",                                line: 120821  }, // e
"Quai d'Orsay":             { from: "ke_d/O/R'se",                                      to: "k/E/_d/O/R's/E/",                                  line: 126858  }, // e
"raison d'etre":            { from: ",r/eI/,z/oU/n'detr/@/",                            to: ",r/eI/,z/oU/n'd/E/tr/@/",                          line: 128695  }, // e
"rose d'Anvers":            { from: "r/O/z_d/A/N'veR",                                  to: "r/O/z_d/A/N'v/E/R",                                line: 133560  }, // e
"shepherd's-purse":         { from: "'/S/ep/@/rdz_'p/[@]/rs",                           to: "'/S//E/p/@/rdz_'p/[@]/rs",                         line: 141686  }, // e
"shepherd's-scabious":      { from: "'/S/ep/@/rdz_'sk/eI/b/i//@/s",                     to: "'/S//E/p/@/rdz_'sk/eI/b/i//@/s",                   line: 141687  }, // e
"siecle d'or":              { from: "'s/j/ekl/-/_'d/O/R",                               to: "'s/j//E/kl/-/_'d/O/R",                             line: 142821  }, // e
"sou'wester":               { from: "s/aU/'west/@/r",                                   to: "s/AU/'w/E/st/@/r",                                 line: 146751  }, // e
"succes d'estime":          { from: "sYkse_des't/i/m",                                  to: "sYks/E/_d/E/s't/i/m",                              line: 152715  }, // e
"they're":                  { from: '/D/er',                                            to: '/D//E/r',                                          line: 158170  }, // e
"Turk's-head":              { from: "'t/[@]/rks,hed",                                   to: "'t/[@]/rks,h/E/d",                                 line: 164307  }, // e
"Valery Giscard D'estaing": { from: "v/A/l/eI/'r/i/_'/Z//i/sk/A/r_desta/N/",            to: "v/A/l/eI/'r/i/_'/Z//i/sk/A/r_d/E/st/&//N/",        line: 168255  }, // e
"when'd":                   { from: "'/hw/en/@/d",                                      to: "'/hw//E/n/@/d",                                    line: 173065  }, // e
"when'll":                  { from: "'/hw/en/@/l",                                      to: "'/hw//E/n/@/l",                                    line: 173066  }, // e
"when're":                  { from: "'/hw/en/@/r",                                      to: "'/hw//E/n/@/r",                                    line: 173067  }, // e
"when's":                   { from: '/hw/enz',                                          to: '/hw//E/nz',                                        line: 173068  }, // e
"whene'er":                 { from: "/hw/en'/(@)/r",                                    to: "/hw//E/n'/(@)/r",                                  line: 173073  }, // e
"whensoe'er":               { from: ",wens/oU/'/(@)/r",                                 to: ",w/E/ns/oU/'/(@)/r",                               line: 173075  }, // e
"yes ma'am":                { from: '/j/es_mam',                                        to: '/j//E/s_m/&/m',                                    line: 176530  }, // e

"Adam's-needle":            { from: "'ad/@/mz'n/i/d/-/l",                               to: "'/&/d/@/mz'n/i/d/-/l",                             line: 1558    }, // a
"amn't":                    { from: 'ant',                                              to: '/&/nt',                                            line: 5424    }, // a
"an't":                     { from: 'ant',                                              to: '/&/nt',                                            line: 5734    }, // a
"a l'improviste":           { from: "A_laNpR/O/'v/i/st",                                to: "A_l/E/NpR/O/'v/i/st",                              line: 11617   }, // a
"bachelor's":               { from: "'ba/tS//@/l/@/rz",                                 to: "'b/&//tS//@/l/@/rz",                               line: 11793   }, // a
"camel's-hair":             { from: "'kam/@/lz,h/(@)/r",                                to: "'k/&/m/@/lz,h/(@)/r",                              line: 25246   }, // a
"can't":                    { from: 'kant',                                             to: 'k/&/nt',                                           line: 25449   }, // a
"can't complain":           { from: "kant_k/@/m'pl/eI/n",                               to: "k/&/nt_k/@/m'pl/eI/n",                             line: 25450   }, // a
"Cap'n":                    { from: "'kap/-/m",                                         to: "'k/&/p/-/m",                                       line: 25981   }, // a
"cat's-claw":               { from: "'kats,kl/O/",                                      to: "'k/&/ts,kl/O/",                                    line: 27540   }, // a
"cat's-ear":                { from: "'kats,/i/r",                                       to: "'k/&/ts,/i/r",                                     line: 27541   }, // a
"cat's-eye":                { from: "'kats,/aI/",                                       to: "'k/&/ts,/aI/",                                     line: 27542   }, // a
"cat's-foot":               { from: "'kats,f/U/t",                                      to: "'k/&/ts,f/U/t",                                    line: 27543   }, // a
"cat's-paw":                { from: "'kats,p/O/",                                       to: "'k/&/ts,p/O/",                                     line: 27544   }, // a
"cat-o'-nine-tails":        { from: ",kat/@/'n/aI/n,t/eI/lz",                           to: ",k/&/t/@/'n/aI/n,t/eI/lz",                         line: 27555   }, // a
"charge d'affaires":        { from: ",/S//A/r/Z//eI/_da'f/(@)/r",                       to: ",/S//A/r/Z//eI/_d/@/'f/(@)/r",                     line: 29486   }, // a
"d'Albert":                 { from: "'dalb/@/rt",                                       to: "'d/&/lb/@/rt",                                     line: 41858   }, // a
"D'Avenant":                { from: "'dav/@/n/@/nt",                                    to: "'d/&/v/@/n/@/nt",                                  line: 41864   }, // a
"d'Indy":                   { from: "daN'd/i/",                                         to: "d/&/N'd/i/",                                       line: 41868   }, // a
"dassn't":                  { from: "'das/@/nt",                                        to: "'d/&/s/@/nt",                                      line: 42516   }, // a
"entr'acte":                { from: "/A/n'trakt",                                       to: "/A/n'tr/&/kt",                                     line: 54283   }, // a
"hadn't":                   { from: "'had/-/nt",                                        to: "'h/&/d/-/nt",                                      line: 73336   }, // a
"Hallowe'en":               { from: ",hal/oU/'/i/n",                                    to: ",h/&/l/oU/'/i/n",                                  line: 74195   }, // a
"hasn't":                   { from: "'haz/@/nt",                                        to: "'h/&/z/@/nt",                                      line: 75322   }, // a
"haven't":                  { from: "'hav/@/nt",                                        to: "'h/&/v/@/nt",                                      line: 75500   }, // a
"herd's-grass":             { from: "'h/[@]/rdz,gras",                                  to: "'h/[@]/rdz,gr/A/s",                                line: 77100   }, // a
"jack-o'-lantern":          { from: "'/dZ/ak/@/_,lant/@/rn",                            to: "'/dZ//&/k/@/_,l/-/nt/@/rn",                        line: 87061   }, // a
"Jacob's-ladder":           { from: "'/dZ//eI/k/@/bz_'lad/@/r",                         to: "'/dZ//eI/k/@/bz_'l/@/d/@/r",                       line: 87172   }, // a
"lady's-mantle":            { from: "'l/eI/d/i/z_,mant/-/l",                            to: "'l/eI/d/i/z_,m/&/nt/-/l",                          line: 91702   }, // a
"lamb's-quarters":          { from: "'lamz,kw/O/rt/@/rz",                               to: "'l/&/mz,kw/O/rt/@/rz",                             line: 91925   }, // a
"ma'am":                    { from: 'mam',                                              to: 'm/&/m',                                            line: 98273   }, // a
"n'importe":                { from: "naN'p/O/Rt",                                       to: "n/E/N'p/O/Rt",                                     line: 106524  }, // a
"O'Fallon":                 { from: "/oU/'fal/@/n",                                     to: "/oU/'f/&/l/@/n",                                   line: 110083  }, // a
"old-man's-beard":          { from: "'/oU/ld,manz'b/i/rd",                              to: "'/oU/ld,m/&/nz'b/i/rd",                            line: 111048  }, // a
"points d'appui":           { from: "pwaN_dAz'pw/i/",                                   to: "pw/E/_dA'pw/i/",                                   line: 120810  }, // a
"point d'appui":            { from: "pwaN_dA'pw/i/",                                    to: "pw/E/_dA'pw/i/",                                   line: 120820  }, // a
"Qur'an":                   { from: 'k/@/ran',                                          to: 'k/@/r/&/n',                                        line: 128051  }, // a
"schoolma'am":              { from: "'sk/u/l,mam",                                      to: "'sk/u/l,m/&/m",                                    line: 136890  }, // a
"stag's-horn":              { from: "'stagz,h/O/rn",                                    to: "'st/&/gz,h/O/rn",                                  line: 149237  }, // a
"St Cyr-l'Ecole":           { from: "saN_s/i/Rl/eI/'k/O/l",                             to: "s/&/N_s/i/Rl/eI/'k/O/l",                           line: 152231  }, // a
"tam-o'-shanter":           { from: ",tam/@/'/S/ant/@/r",                               to: ",t/&/m/@/'/S//&/nt/@/r",                           line: 155635  }, // a
"Tam O'Shanter":            { from: "'tam_/@/'/S/ant/@/r",                              to: "'t/&/m_/@/'/S//&/nt/@/r",                          line: 155705  }, // a
"that's":                   { from: '/D/ats',                                           to: '/D//&/ts',                                         line: 157810  }, // a
"that's final":             { from: "/D/ats_'f/aI/n/-/l",                               to: "/D//&/ts_'f/aI/n/-/l",                             line: 157811  }, // a
"that's right":             { from: '/D/ats_r/aI/t',                                    to: '/D//&/ts_r/aI/t',                                  line: 157812  }, // a
"that's that":              { from: '/D/ats_/D/at',                                     to: '/D//&/ts_/D//&/t',                                 line: 157813  }, // a
"toper's-plant":            { from: "'t/oU/p/@/rz_,plant",                              to: "'t/oU/p/@/rz_,pl/&/nt",                            line: 161069  }, // a
"traveler's-tree":          { from: "'trav/@/l/@/rz_,tr/i/",                            to: "'tr/&/v/@/l/@/rz_,tr/i/",                          line: 162433  }, // a
};
