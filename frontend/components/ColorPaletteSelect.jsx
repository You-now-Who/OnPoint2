import { useState } from 'react';

const ColorPaletteSelect = ({onColorChange}) => {
  const [selectedColors, setSelectedColors] = useState([]);

  const colorGroups = [
    {
      groupName: 'Reds',
      colors: [
        { label: 'Crimson', value: '#dc143c', color: '#dc143c' },
        { label: 'Firebrick', value: '#b22222', color: '#b22222' },
        { label: 'Indian Red', value: '#cd5c5c', color: '#cd5c5c' },
        // Add more red colors here
      ],
    },
    {
      groupName: 'Greens',
      colors: [
        { label: 'Lime Green', value: '#32cd32', color: '#32cd32' },
        { label: 'Forest Green', value: '#228b22', color: '#228b22' },
        { label: 'Olive', value: '#808000', color: '#808000' },
        // Add more green colors here
      ],

    },

    {
      groupName: 'Blues',
      colors: [
      { label: 'Navy Blue', value: '#000080', color: '#000080' },
      { label: 'Royal Blue', value: '#4169e1', color: '#4169e1' },
      { label: 'Sky Blue', value: '#87ceeb', color: '#87ceeb' },
      // Add more blue colors here
      { label: 'Turquoise', value: '#40e0d0', color: '#40e0d0' },
      { label: 'Steel Blue', value: '#4682b4', color: '#4682b4' },
      { label: 'Cornflower Blue', value: '#6495ed', color: '#6495ed' },
      ],
      },
      {
      groupName: 'Yellows',
      colors: [
      { label: 'Gold', value: '#ffd700', color: '#ffd700' },
      { label: 'Yellow', value: '#ffff00', color: '#ffff00' },
      { label: 'Lemon Chiffon', value: '#fffacd', color: '#fffacd' },
      // Add more yellow colors here
      { label: 'Khaki', value: '#f0e68c', color: '#f0e68c' },
      { label: 'Mellow Yellow', value: '#f8de7e', color: '#f8de7e' },
      { label: 'Mustard', value: '#ffdb58', color: '#ffdb58' },
      ],
      },

      {
        groupName: 'Purples',
        colors: [
        { label: 'Violet', value: '#ee82ee', color: '#ee82ee' },
        { label: 'Lavender', value: '#e6e6fa', color: '#e6e6fa' },
        { label: 'Plum', value: '#dda0dd', color: '#dda0dd' },
        // Add more purple colors here
        { label: 'Amethyst', value: '#9966cc', color: '#9966cc' },
        { label: 'Mauve', value: '#e0b0ff', color: '#e0b0ff' },
        { label: 'Indigo', value: '#4b0082', color: '#4b0082' },
        ],
        },
        {
        groupName: 'Oranges',
        colors: [
        { label: 'Orange', value: '#ffa500', color: '#ffa500' },
        { label: 'Coral', value: '#ff7f50', color: '#ff7f50' },
        { label: 'Peach', value: '#ffdab9', color: '#ffdab9' },
        // Add more orange colors here
        { label: 'Tangerine', value: '#ff9f00', color: '#ff9f00' },
        { label: 'Burnt Orange', value: '#cc5500', color: '#cc5500' },
        { label: 'Apricot', value: '#fbceb1', color: '#fbceb1' },
        ],
        }
    // Add more color groups here
  ];

  const handleColorChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedColors(selectedOptions);
    // console.log(onColorChange)
    onColorChange(selectedOptions);
    
  };

  return (
    <div className="flex items-center">
      <label htmlFor="color-palette" className="mr-2">
        Color Palette:
      </label>
      <select
        id="color-palette"
        className="px-2 py-2 h-40 border rounded appearance-none"
        value={selectedColors}
        onChange={handleColorChange}
        multiple
      >
        {colorGroups.map((group) => (
          <optgroup key={group.groupName} label={group.groupName}>
            {group.colors.map((color) => (
              <option
                key={color.value}
                value={color.value}
                className="bg-gradient-to-r from-transparent to-transparent bg-repeat-x bg-clip-padding"
                style={{ backgroundImage: `linear-gradient(to right, ${color.color}, ${color.color})` }}
              >
                {color.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      <div className="flex">
        {selectedColors.map((color) => (
          <div
            key={color}
            className="w-6 h-20 ml-2 border border-gray-400 rounded-full"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPaletteSelect;
