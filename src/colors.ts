export type ColorType = {
  name: string
  hex: string
}

const colors: Array<ColorType> = [
  {
    name: 'aliceblue',
    hex: '#F0F8FF',
  },
  {
    name: 'antiquewhite',
    hex: '#FAEBD7',
  },
  {
    name: 'aqua',
    hex: '#00FFFF',
  },
  {
    name: 'aquamarine',
    hex: '#7FFFD4',
  },
  {
    name: 'azure',
    hex: '#F0FFFF',
  },
  {
    name: 'beige',
    hex: '#F5F5DC',
  },
  {
    name: 'bisque',
    hex: '#FFE4C4',
  },
  {
    name: 'black',
    hex: '#000000',
  },
  {
    name: 'blanchedalmond',
    hex: '#FFEBCD',
  },
  {
    name: 'blue',
    hex: '#0000FF',
  },
  {
    name: 'blueviolet',
    hex: '#8A2BE2',
  },
  {
    name: 'brown',
    hex: '#A52A2A',
  },
  {
    name: 'burlywood',
    hex: '#DEB887',
  },
  {
    name: 'cadetblue',
    hex: '#5F9EA0',
  },
  {
    name: 'chartreuse',
    hex: '#7FFF00',
  },
  {
    name: 'chocolate',
    hex: '#D2691E',
  },
  {
    name: 'coral',
    hex: '#FF7F50',
  },
  {
    name: 'cornflowerblue',
    hex: '#6495ED',
  },
  {
    name: 'cornsilk',
    hex: '#FFF8DC',
  },
  {
    name: 'crimson',
    hex: '#DC143C',
  },
  {
    name: 'cyan',
    hex: '#00FFFF',
  },
  {
    name: 'darkblue',
    hex: '#00008B',
  },
  {
    name: 'darkcyan',
    hex: '#008B8B',
  },
  {
    name: 'darkgoldenrod',
    hex: '#B8860B',
  },
  {
    name: 'darkgrey',
    hex: '#A9A9A9',
  },
  {
    name: 'darkgreen',
    hex: '#006400',
  },
  {
    name: 'darkkhaki',
    hex: '#BDB76B',
  },
  {
    name: 'darkmagenta',
    hex: '#8B008B',
  },
  {
    name: 'darkolivegreen',
    hex: '#556B2F',
  },
  {
    name: 'darkorange',
    hex: '#FF8C00',
  },
  {
    name: 'darkorchid',
    hex: '#9932CC',
  },
  {
    name: 'darkred',
    hex: '#8B0000',
  },
  {
    name: 'darksalmon',
    hex: '#E9967A',
  },
  {
    name: 'darkseagreen',
    hex: '#8FBC8F',
  },
  {
    name: 'darkslateblue',
    hex: '#483D8B',
  },
  {
    name: 'darkslategrey',
    hex: '#2F4F4F',
  },
  {
    name: 'darkturquoise',
    hex: '#00CED1',
  },
  {
    name: 'darkviolet',
    hex: '#9400D3',
  },
  {
    name: 'deeppink',
    hex: '#FF1493',
  },
  {
    name: 'deepskyblue',
    hex: '#00BFFF',
  },
  {
    name: 'dimgrey',
    hex: '#696969',
  },
  {
    name: 'dodgerblue',
    hex: '#1E90FF',
  },
  {
    name: 'firebrick',
    hex: '#B22222',
  },
  {
    name: 'floralwhite',
    hex: '#FFFAF0',
  },
  {
    name: 'forestgreen',
    hex: '#228B22',
  },
  {
    name: 'fuchsia',
    hex: '#FF00FF',
  },
  {
    name: 'gainsboro',
    hex: '#DCDCDC',
  },
  {
    name: 'ghostwhite',
    hex: '#F8F8FF',
  },
  {
    name: 'gold',
    hex: '#FFD700',
  },
  {
    name: 'goldenrod',
    hex: '#DAA520',
  },
  {
    name: 'grey',
    hex: '#808080',
  },
  {
    name: 'green',
    hex: '#008000',
  },
  {
    name: 'greenyellow',
    hex: '#ADFF2F',
  },
  {
    name: 'honeydew',
    hex: '#F0FFF0',
  },
  {
    name: 'hotpink',
    hex: '#FF69B4',
  },
  {
    name: 'indianred',
    hex: '#CD5C5C',
  },
  {
    name: 'indigo',
    hex: '#4B0082',
  },
  {
    name: 'ivory',
    hex: '#FFFFF0',
  },
  {
    name: 'khaki',
    hex: '#F0E68C',
  },
  {
    name: 'lavender',
    hex: '#E6E6FA',
  },
  {
    name: 'lavenderblush',
    hex: '#FFF0F5',
  },
  {
    name: 'lawngreen',
    hex: '#7CFC00',
  },
  {
    name: 'lemonchiffon',
    hex: '#FFFACD',
  },
  {
    name: 'lightblue',
    hex: '#ADD8E6',
  },
  {
    name: 'lightcoral',
    hex: '#F08080',
  },
  {
    name: 'lightcyan',
    hex: '#E0FFFF',
  },
  {
    name: 'lightgoldenrodyellow',
    hex: '#FAFAD2',
  },
  {
    name: 'lightgrey',
    hex: '#D3D3D3',
  },
  {
    name: 'lightgreen',
    hex: '#90EE90',
  },
  {
    name: 'lightpink',
    hex: '#FFB6C1',
  },
  {
    name: 'lightsalmon',
    hex: '#FFA07A',
  },
  {
    name: 'lightseagreen',
    hex: '#20B2AA',
  },
  {
    name: 'lightskyblue',
    hex: '#87CEFA',
  },
  {
    name: 'lightslategrey',
    hex: '#778899',
  },
  {
    name: 'lightsteelblue',
    hex: '#B0C4DE',
  },
  {
    name: 'lightyellow',
    hex: '#FFFFE0',
  },
  {
    name: 'lime',
    hex: '#00FF00',
  },
  {
    name: 'limegreen',
    hex: '#32CD32',
  },
  {
    name: 'linen',
    hex: '#FAF0E6',
  },
  {
    name: 'magenta',
    hex: '#FF00FF',
  },
  {
    name: 'maroon',
    hex: '#800000',
  },
  {
    name: 'mediumaquamarine',
    hex: '#66CDAA',
  },
  {
    name: 'mediumblue',
    hex: '#0000CD',
  },
  {
    name: 'mediumorchid',
    hex: '#BA55D3',
  },
  {
    name: 'mediumpurple',
    hex: '#9370D8',
  },
  {
    name: 'mediumseagreen',
    hex: '#3CB371',
  },
  {
    name: 'mediumslateblue',
    hex: '#7B68EE',
  },
  {
    name: 'mediumspringgreen',
    hex: '#00FA9A',
  },
  {
    name: 'mediumturquoise',
    hex: '#48D1CC',
  },
  {
    name: 'mediumvioletred',
    hex: '#C71585',
  },
  {
    name: 'midnightblue',
    hex: '#191970',
  },
  {
    name: 'mintcream',
    hex: '#F5FFFA',
  },
  {
    name: 'mistyrose',
    hex: '#FFE4E1',
  },
  {
    name: 'moccasin',
    hex: '#FFE4B5',
  },
  {
    name: 'navajowhite',
    hex: '#FFDEAD',
  },
  {
    name: 'navy',
    hex: '#000080',
  },
  {
    name: 'oldlace',
    hex: '#FDF5E6',
  },
  {
    name: 'olive',
    hex: '#808000',
  },
  {
    name: 'olivedrab',
    hex: '#6B8E23',
  },
  {
    name: 'orange',
    hex: '#FFA500',
  },
  {
    name: 'orangered',
    hex: '#FF4500',
  },
  {
    name: 'orchid',
    hex: '#DA70D6',
  },
  {
    name: 'palegoldenrod',
    hex: '#EEE8AA',
  },
  {
    name: 'palegreen',
    hex: '#98FB98',
  },
  {
    name: 'paleturquoise',
    hex: '#AFEEEE',
  },
  {
    name: 'palevioletred',
    hex: '#D87093',
  },
  {
    name: 'papayawhip',
    hex: '#FFEFD5',
  },
  {
    name: 'peachpuff',
    hex: '#FFDAB9',
  },
  {
    name: 'peru',
    hex: '#CD853F',
  },
  {
    name: 'pink',
    hex: '#FFC0CB',
  },
  {
    name: 'plum',
    hex: '#DDA0DD',
  },
  {
    name: 'powderblue',
    hex: '#B0E0E6',
  },
  {
    name: 'purple',
    hex: '#800080',
  },
  {
    name: 'rebeccapurple',
    hex: '#663399',
  },
  {
    name: 'red',
    hex: '#FF0000',
  },
  {
    name: 'rosybrown',
    hex: '#BC8F8F',
  },
  {
    name: 'royalblue',
    hex: '#4169E1',
  },
  {
    name: 'saddlebrown',
    hex: '#8B4513',
  },
  {
    name: 'salmon',
    hex: '#FA8072',
  },
  {
    name: 'sandybrown',
    hex: '#F4A460',
  },
  {
    name: 'seagreen',
    hex: '#2E8B57',
  },
  {
    name: 'seashell',
    hex: '#FFF5EE',
  },
  {
    name: 'sienna',
    hex: '#A0522D',
  },
  {
    name: 'silver',
    hex: '#C0C0C0',
  },
  {
    name: 'skyblue',
    hex: '#87CEEB',
  },
  {
    name: 'slateblue',
    hex: '#6A5ACD',
  },
  {
    name: 'slategrey',
    hex: '#708090',
  },
  {
    name: 'snow',
    hex: '#FFFAFA',
  },
  {
    name: 'springgreen',
    hex: '#00FF7F',
  },
  {
    name: 'steelblue',
    hex: '#4682B4',
  },
  {
    name: 'tan',
    hex: '#D2B48C',
  },
  {
    name: 'teal',
    hex: '#008080',
  },
  {
    name: 'thistle',
    hex: '#D8BFD8',
  },
  {
    name: 'tomato',
    hex: '#FF6347',
  },
  {
    name: 'turquoise',
    hex: '#40E0D0',
  },
  {
    name: 'violet',
    hex: '#EE82EE',
  },
  {
    name: 'wheat',
    hex: '#F5DEB3',
  },
  {
    name: 'white',
    hex: '#FFFFFF',
  },
  {
    name: 'whitesmoke',
    hex: '#F5F5F5',
  },
  {
    name: 'yellow',
    hex: '#FFFF00',
  },
  {
    name: 'yellowgreen',
    hex: '#9ACD32',
  },
]

export default colors
