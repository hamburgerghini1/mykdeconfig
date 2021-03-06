# virt-clone
# Autogenerated from man page /usr/lib/jvm/default/man/man1/virt-clone.1.gz
complete -c virt-clone -l original-xml -l name -d 'storage options via -file'
complete -c virt-clone -l connect -d 'Connect to a non-default hypervisor.  See virt-install(1) for details'
complete -c virt-clone -s o -l original -d 'Name of the original guest to be cloned.  This guest must be shut off'
complete -c virt-clone -l auto-clone -d 'Generate a new guest name, and paths for new storage'
complete -c virt-clone -s n -d 'Name of the new guest virtual machine instance'
complete -c virt-clone -s u -l uuid -d 'UUID for the guest; if none is given a random UUID will be generated'
complete -c virt-clone -s f -l file -d 'Path to the file, disk partition, or logical volume to use as the backing sto…'
complete -c virt-clone -l nvram -d 'Optional path to the new nvram VARS file, if no path is specified and the gue…'
complete -c virt-clone -l force-copy -d 'Force cloning the passed disk target (\'hdc\', \'sda\', etc. )'
complete -c virt-clone -l skip-copy -d 'Skip cloning the passed disk target (\'hdc\', \'sda\', etc. )'
complete -c virt-clone -l nonsparse -d 'Fully allocate the new storage if the path being cloned is a sparse file'
complete -c virt-clone -l preserve-data -d 'No storage is cloned: disk images specific by --file are preserved as is, and…'
complete -c virt-clone -l reflink -d 'When --reflink is specified, perform a lightweight copy'
complete -c virt-clone -s m -l mac -d 'Fixed MAC address for the guest; If this parameter is omitted, or the value R…'
complete -c virt-clone -l print-xml -d 'Print the generated clone XML and exit without cloning'
complete -c virt-clone -l replace -d 'Shutdown and remove any existing guest with the passed --name before cloning …'
complete -c virt-clone -s h -l help -d 'Show the help message and exit'
complete -c virt-clone -l version -d 'Show program\'s version number and exit'
complete -c virt-clone -l check -d 'Enable or disable some validation checks'
complete -c virt-clone -s q -l quiet -d 'Suppress non-error output'
complete -c virt-clone -s d -l debug -d 'Print debugging information to the terminal when running the install process'

