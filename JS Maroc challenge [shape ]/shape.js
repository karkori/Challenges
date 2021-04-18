const space = ' '
const sharp = '#'
const length = 17
const initSpacesLenght = 8
const initSharpsLenght = 1
let line = ''
let i=0

while (i < length) {
    if (i <= 8) {
        line = space.repeat(initSpacesLenght - i) + sharp.repeat(initSharpsLenght + 2 * i)
    } else {
        line = space.repeat(i - initSpacesLenght) + sharp.repeat(2 * (length - i) - 1)
    }

    console.log(line)
    ++i;
}

/*
Result:

        #
       ###
      #####
     #######
    #########
   ###########
  #############
 ###############
#################
 ###############
  #############
   ###########
    #########
     #######
      #####
       ###
        #

8 space + 1 sharp
7 space + 3 sharp
6 space + 5 sharp
5 space + 7 sharp
4 space + 9 sharp
3 space + 11 sharp
2 space + 13 sharp
1 space + 15 sharp
0 space + 17 sharp

n-1 with n0=8,
s+2 with s0=1


1 space 15 sharp
2 space 13 sharp
3 space 11 sharp
*/

