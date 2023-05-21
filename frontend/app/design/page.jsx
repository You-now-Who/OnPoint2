"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import DidYouKnow from '@components/htmlRenders/DidYouKnow';
import QuestionOfDay from '@components/htmlRenders/QuestionOfDay';

const Templates = {
    "Did You Know": DidYouKnow,
    "Question of the Day": QuestionOfDay
}

const Sidebar = ({ sidebarContent }) => {
  return (
    <div className="bg-gray-800 text-white w-1/5 rounded-lg">
      <div className="p-4">
        {/* <h2 className="text-lg font-bold mb-4">Sidebar</h2> */}
        <h3 className="text-lg font-semibold p-4">Design Settings</h3>
        {sidebarContent}
      </div>
    </div>
  );
};

const DesignPage = () => {
  const router = useRouter();

  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [primaryColor, setPrimaryColor] = useState('#ffffff');
  const [secondaryColor, setSecondaryColor] = useState('#ffffff');
  const [mainText, setMainText] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum expedita quis nobis consequatur praesentium placeat quod soluta dignissimos optio nesciunt?');
  const [secondaryText, setSecondaryText] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum expedita quis nobis consequatur praesentium placeat quod soluta dignissimos optio nesciunt?'); 
  const [imageURL, setImageURL] = useState('https://webstockreview.net/images/speaker-icon-png.png');
  const [headingText, setHeadingText] = useState('Title');
  const [textColor, setTextColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(16);
  const [iframeHeight, setIframeHeight] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState('Did You Know');
  
  // const { username, age } = router.query;
  // console.log(username, age);

  console.log(router.query);

  const templates = Object.keys(Templates);
  const iframeRef = useRef(null);

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value));
  };

  const handleHeadingChange = (e) => {
    setHeadingText(e.target.value);
    };

  const handleMainTextChange = (e) => {
    setMainText(e.target.value);
    };

    const sidebarContent = (   
        <div className="flex flex-col">
            <div className="flex flex-col mb-4">
                <label htmlFor="template" className="text-sm mb-2">
                    Template
                </label>
                <select
                    id="template"
                    className="text-black px-1"
                    onChange={(e) => {
                        setSelectedTemplate(e.target.value);
                    }}
                >
                    {templates.map((template) => (
                        <option key={template} value={template}>
                            {template}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col mb-4">
                <label htmlFor="background-color" className="text-sm mb-2">
                    Background Color
                </label>
                <input
                    type="color"
                    id="background-color"
                    value={backgroundColor}
                    onChange={handleBackgroundColorChange}
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="text-color" className="text-sm mb-2">
                    Text Color
                </label>
                <input
                    type="color"    
                    id="text-color"
                    value={textColor}
                    onChange={handleTextColorChange}
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="font-size" className="text-sm mb-2">
                    Font Size
                </label>
                <input
                    type="number"
                    id="font-size"
                    className='text-black px-1'
                    value={fontSize}
                    onChange={handleFontSizeChange}
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="font-size" className="text-sm mb-2">
                    Heading Text
                </label>
                <input
                    type="text"
                    id="font-size"
                    value={headingText}
                    onChange={handleHeadingChange}
                    className='text-black px-1'
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="font-size" className="text-sm mb-2">
                    Paragraph Text
                </label>
                <input
                    type="text"
                    id="font-size"
                    value={mainText}
                    onChange={handleMainTextChange}
                    className='text-black px-1'
                />
            </div>
            
            <div className="flex flex-col mb-4">
                <label htmlFor="font-size" className="text-sm mb-2">
                    Image URL
                </label>
                <input
                    type="text"
                    id="font-size"
                    value={imageURL}
                    onChange={
                        (e) => {
                            setImageURL(e.target.value);
                        }
                    }
                    className='text-black px-1'
                />
            </div>
        </div>
    );

    const ComponentToRender = Templates[selectedTemplate];
    
  return (
    <div className="flex w-screen">
      <Sidebar
        backgroundColor={backgroundColor}
        textColor={textColor}
        fontSize={fontSize}
        onBackgroundColorChange={handleBackgroundColorChange}
        onTextColorChange={handleTextColorChange}
        onFontSizeChange={handleFontSizeChange}
        headingText = {headingText}
        sidebarContent={sidebarContent}
      />

      <div className="flex-1 bg-gray-100">
        <div className="flex items-center justify-center h-screen w-full max-w-[calc(100vw-16rem)]  " style={{ transform: `scale(1)` }}>
          <ComponentToRender backgroundColor={backgroundColor} textColor={textColor} fontSize={fontSize} headingText={headingText} mainText={mainText} imageURL={imageURL}/>
        </div>
      </div>
    </div>
  );
};

export default DesignPage;
