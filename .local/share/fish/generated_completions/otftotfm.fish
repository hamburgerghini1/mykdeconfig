# otftotfm
# Autogenerated from man page /usr/lib/jvm/default/man/man1/otftotfm.1.gz
complete -c otftotfm -s s -l script -d 'Apply features suitable to the script system  script and language system R la…'
complete -c otftotfm -s f -l feature -d 'Activate the feature named R feature '
complete -c otftotfm -l lf -l letter-feature -d 'Activate the feature named R feature , but only for letters'
complete -c otftotfm -l clear-subs -d 'Limit the characters that  otftotfm will substitute'
complete -c otftotfm -s E -l extend -d 'Widen, or extend, the font by a factor of R fac .  Like '
complete -c otftotfm -s S -l slant -d 'Oblique, or slant, the font by R amt .  Like . M afm2tfm 1 \'s  -s option.  \' '
complete -c otftotfm -s L -l letterspacing -d 'Letterspace each character by R amt units, where 1000 units equals one em'
complete -c otftotfm -l math-spacing -d 'Ignore the font\'s claimed character widths, deriving horizontal metrics from …'
complete -c otftotfm -s k -l min-kern -d 'Only output kerning pairs whose absolute value is R N or larger'
complete -c otftotfm -l space-factor -d 'Scale the width of the inter-word space by a factor of R fac .  \' . Sp'
complete -c otftotfm -l design-size -d 'Set the output font\'s design size to R size , a value in TeX points'
complete -c otftotfm -l fixed-width -d 'Set the font to fixed-width (its space character will have no stretch or shri…'
complete -c otftotfm -l italic-angle -d 'Set the output font\'s default italic angle to R angle , a number of degrees'
complete -c otftotfm -l x-height -d 'Set the output font\'s x-height to R val '
complete -c otftotfm -s e -l encoding -d 'Select the output metrics\'s base . M dvips 1 encoding'
complete -c otftotfm -l boundary-char -d 'Set the font\'s boundary character to R char , which should either be a single…'
complete -c otftotfm -l altselector-char -d 'Set the font\'s alternate selector character to R char , which should either b…'
complete -c otftotfm -l altselector-feature -d 'Activate the feature named  feature for the  --altselector-char mechanism'
complete -c otftotfm -l clear-alternates -d 'Limit the alternate characters that  otftotfm will select'
complete -c otftotfm -l ligkern -d 'Add a LIGKERN R command to the encoding'
complete -c otftotfm -l position -d 'Add a POSITION R command to the encoding'
complete -c otftotfm -l unicoding -d 'Add a UNICODING R command to the encoding'
complete -c otftotfm -l no-encoding-commands -d 'Ignore any LIGKERN and/or UNICODING commands in the encoding file.  \' . Sp'
complete -c otftotfm -l no-default-ligkern -d 'Don\'t include  otftotfm \'s default LIGKERN commands.  \' . Sp'
complete -c otftotfm -l coding-scheme -d 'Add a CODINGSCHEME to the encoding.   See ENCODINGS, below.  \' . Sp'
complete -c otftotfm -l warn-missing -d 'Warn about encoded characters not supported by the font'
complete -c otftotfm -l literal-encoding -d 'Select the . M dvips 1 encoding used for the font'
complete -c otftotfm -l base-encodings -d 'Experts only.  Allow the output font to refer to existing "base" fonts'
complete -c otftotfm -s a -l automatic -d 'Select automatic mode.  \' . Sp'
complete -c otftotfm -s v -l vendor -d 'Set the font vendor name, which is used to locate files within the TDS'
complete -c otftotfm -l typeface -d 'Set the font typeface name, which is used to locate files within the TDS'
complete -c otftotfm -l no-type1 -d 'Do not use '
complete -c otftotfm -l no-dotlessj -d 'Do not use '
complete -c otftotfm -l no-truetype -d 'Do not install TrueType-flavored fonts.  \' . Sp'
complete -c otftotfm -l type42 -d 'Install TrueType-flavored fonts in translated Type 42 format.  \' . Sp'
complete -c otftotfm -l no-updmap -d 'Do not run an . M updmap 1 program'
complete -c otftotfm -s n -l name -d 'Set the TeX name of the output font, which is used in font map files and, in …'
complete -c otftotfm -s p -l pl -d 'Output human-readable PL and VPL metrics, not binary TFM and VF metrics'
complete -c otftotfm -l no-virtual -d 'Do not generate virtual fonts (VFs and VPLs)'
complete -c otftotfm -l no-encoding -d 'Do not generate an encoding file.  \' . Sp'
complete -c otftotfm -l output-encoding -d 'Only generate an encoding file; do not generate any other output'
complete -c otftotfm -l no-map -d 'Do not generate a font map line for the font.  \' . \\" . Sp . \\"'
complete -c otftotfm -l base-name -d '\\" Experts only: Set the TeX name of the "base" output font.   When '
complete -c otftotfm -l directory -d 'Set the directory used for various output types'
complete -c otftotfm -l map-file -d 'Set file in which  otftotfm will write a font map line for the font'
complete -c otftotfm -l glyphlist -d 'Use  file as a Adobe glyph list, which helps translate glyph names to Unicode…'
complete -c otftotfm -s V -l verbose -d 'Write progress messages to standard error.  \' . Sp'
complete -c otftotfm -l no-create -d 'Do not create or modify any files'
complete -c otftotfm -l force -d 'Generate all files, even if it looks like versions are already installed.  \' '
complete -c otftotfm -s q -l quiet -d 'Do not generate any error messages.  \' . Sp'
complete -c otftotfm -l kpathsea-debug -d 'Set path searching debugging flags.   See the  Kpathsea manual for details'
complete -c otftotfm -s h -l help -d 'Print usage information and exit.  \' . Sp'
complete -c otftotfm -l subs-filter
complete -c otftotfm -l include-subs
complete -c otftotfm -l exclude-subs
complete -c otftotfm -l include -d 'patterns, and none of the'
complete -c otftotfm -l exclude -d 'patterns.   Each pattern applies to all following features, except that the'
complete -c otftotfm -l clear -d 'option clears any accumulated patterns.   The'
complete -c otftotfm -l proportional-width
complete -c otftotfm -s 1 -d 'between versions of a character'
complete -c otftotfm -l alternates-filter
complete -c otftotfm -l include-alternates
complete -c otftotfm -l exclude-alternates
complete -c otftotfm -l tfm-directory
complete -c otftotfm -l pl-directory
complete -c otftotfm -l vf-directory
complete -c otftotfm -l vpl-directory
complete -c otftotfm -l encoding-directory
complete -c otftotfm -l type1-directory
complete -c otftotfm -l truetype-directory
complete -c otftotfm -l type42-directory
complete -c otftotfm -l version -d 'Print the version number and some short non-warranty information and exit'
complete -c otftotfm -l '*-filter' -d 'variants, accept the following types of pattern'
complete -c otftotfm -s g -d 'option to see a font\'s glyph names, and "cfftot1 font'

