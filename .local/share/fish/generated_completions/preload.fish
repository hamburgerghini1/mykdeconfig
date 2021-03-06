# preload
# Autogenerated from man page /usr/lib/jvm/default/man/man8/preload.8.gz
complete -c preload -s h -l help -d 'Display command line parameters and their default values, and exit'
complete -c preload -s v -l version -d 'Display version information and exit'
complete -c preload -s c -l conffile -d 'Set configuration file.  Empty string means no conf file'
complete -c preload -s s -l statefile -d 'Set state file to load/save.  Empty string means no state'
complete -c preload -s l -l logfile -d 'Set log file.  Empty string means to log to stderr'
complete -c preload -s f -l foreground -d 'Run in foreground, do not daemonize'
complete -c preload -s n -l nice -d 'Nice level.  (default is 15)'
complete -c preload -s V -l verbose -d 'Set the verbosity level.   Levels 0 to 10 are recognized.  (default is 4)'
complete -c preload -s d -l debug -d 'Debug mode: --logfile \'\' --foreground --verbose 9 SIGNALS'

