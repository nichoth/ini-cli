# ini cli

Command line tool that prints a single value from an ini file.

## install

Adds an `ini` command.
    
    $ npm install -g ini-cli


## Use

    $ ini <file> <field>

## example

```ini
; example.ini
TEST=12345
```

    $ ini example.ini TEST
    12345

