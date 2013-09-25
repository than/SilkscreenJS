/* SilkscreenJS

Idea: Create a small javascript library that will render text in the format of the Silkscreen font — http://kottke.org/plus/type/silkscreen/ — with less weight than the webfont file.

Permutations with repetition (n=2, r=5)
Formula: n^r
Resulting list has 32 entries.
{0,0,0,0,0} {0,0,0,0,1} {0,0,0,1,0} {0,0,0,1,1} {0,0,1,0,0} {0,0,1,0,1} {0,0,1,1,0} {0,0,1,1,1} {0,1,0,0,0} {0,1,0,0,1} {0,1,0,1,0} {0,1,0,1,1} {0,1,1,0,0} {0,1,1,0,1} {0,1,1,1,0} {0,1,1,1,1} {1,0,0,0,0} {1,0,0,0,1} {1,0,0,1,0} {1,0,0,1,1} {1,0,1,0,0} {1,0,1,0,1} {1,0,1,1,0} {1,0,1,1,1} {1,1,0,0,0} {1,1,0,0,1} {1,1,0,1,0} {1,1,0,1,1} {1,1,1,0,0} {1,1,1,0,1} {1,1,1,1,0} {1,1,1,1,1}


Found using: http://www.mathsisfun.com/combinatorics/combinations-permutations-calculator.html

---------------------

The Regular weight of Silkscreen as delivered by Typekit is 10k. The Bold weight is 8k. 
Packaged as a TrueType file, Silkscreen weighs 22.7k.

--------------------- 
*/

var Silkscreen = {
	// Base32-ish all possible combinations of off and on states in a 5-pixel vertical line
	// 0 is off, 1 is on
	index: {
		'00000': 'A',
		'00001': 'B',
		'00010': 'C',
		'00011': 'D',
		'00100': 'E',
		'00101': 'F',
		'00110': 'G',
		'00111': 'H',
		'01000': 'I',
		'01001': 'J',
		'01010': 'K',
		'01011': 'L',
		'01100': 'M',
		'01101': 'N',
		'01110': 'O',
		'01111': 'P',
		'10000': 'Q',
		'10001': 'R',
		'10010': 'S',
		'10011': 'T',
		'10100': 'U',
		'10101': 'V',
		'10110': 'W',
		'10111': 'X',
		'11000': 'Y',
		'11001': 'Z',
		'11010': '2',
		'11011': '3',
		'11100': '4',
		'11101': '5',
		'11110': '6',
		'11111': '7'
	},
	// Silkscreen alphabet (minus the Euro symbol) 
	alpha: {
		'a': 'PUUP',
		'b': '7VVO',
		'c': 'ORRK',
		'd': '7RRO',
		'e': '7VV',
		'f': '7UU',
		'g': '0RVW',
		'h': '7EE7',
		'i': '7',
		'j': 'CBB6',
		'k': '7EKR',
		'l': '7BB',
		'm': '7IEI7',
		'n': '7IEC7',
		'o': 'ORRO',
		'p': '7UUI',
		'q': 'ORRO*',
		'r': '7UWJ',
		's': 'JVVS',
		't': 'Q7Q',
		'u': '6BB6',
		'v': 'YGBGY',
		'w': '6BOB6',
		'x': 'RKEKR',
		'y': 'QIHIQ',
		'z': 'TVZ',
		'1': 'R7B',
		'2': 'TVVJ',
		'3': 'RVVK',
		'4': '4E7E',
		'5': '5VVS',
		'6': 'OVVC',
		'7': 'QTUY',
		'8': 'KVVK',
		'9': 'IVVO',
		'0': 'ORRO',
		'!': '5',
		'@': 'OR5VI',
		'#': 'K7K7K',
		'$': 'JV*V^S',
		'%': 'Y3E3D',
		'^': 'QA^Q',
		'*': 'KE7EK',
		'(': 'OR',
		')': 'RO',
		'_': 'A*A*A*A*',
		'+': 'EE7EE',
		'`': 'QI',
		'~': 'IQIQ',
		'[': '7R',
		']': 'R7',
		'\\': 'YED',
		'{': 'E3R',
		'}': 'R3E',
		'|': '7^*',
		';': 'BK',
		':': 'K',
		'\'': 'Y',
		'"': 'YAY',
		',': 'A*B',
		'.': 'B',
		'/': 'DEY',
		'<': 'YKR',
		'>': 'RKY',
		'?': 'QVUI' 
	}
	// * represents a pixel below the baseline, ^ represents a pixel above the cap height
}

