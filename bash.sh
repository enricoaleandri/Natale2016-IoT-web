#!/bin/bash
wget http://sourceforge.net/projects/opencore-amr && opencore-amr/configure CFLAGS='-arch i386 -m32' LDFALGS='-arch i386' && make && make install