"use Client";

import React, { useState, useEffect, useRef } from 'react';

const DidYouKnow = ({backgroundColor, textColor, mainText, headingText, ref}) => {
    return(
    <>
    <iframe ref = {ref}
        srcDoc={`<!DOCTYPE html> <html lang= "en "> <head> <meta charset= "UTF-8 "> <meta http-equiv= "X-UA-Compatible " content= "IE=edge "> <meta name= "viewport " content= "width=device-width, initial-scale=1.0 "> <title>Document</title> <style> body { display: flex; justify-content: center; align-items: center; } .main { height: 700px; width: 700px; background-color: ${backgroundColor}; border-radius: 50%; display: flex; justify-content: center; align-items: center; flex-direction: column; } .did_you { height: 100px; width: 500px; background-color: black; color: white; font-weight: bold; font-size: 60px; display: flex; justify-content: center; align-items: center; position: relative; left: -200px; margin-bottom: 10px; } .know { height: 80px; width: 400px; background-color: grey; color: white; font-weight: bold; font-size: 60px; display: flex; justify-content: center; align-items: center; } .did_you_know { margin-left: 300px; } .mega_phone { height: 200px; width: 200px; background-image: url( "https://webstockreview.net/images/speaker-icon-png.png "); background-size: contain; margin-right: -200px; position: relative; left: -150px; top: 200px; z-index: -1; } .fact { font-size: 30px; font-weight: 300px; color: ${textColor}; text-align: center; width: 500px; margin-top: 100px; } </style> </head> <body> <div class= "mega_phone "></div> <div class= "main "> <p class= "fact ">${mainText}</p> <div class= "did_you_know "><div class= "did_you ">${headingText}</div><div class= "know ">Know ? </div></div></div></body></html>`}
        className="w-full h-full"
        ></iframe>
    </>
    )}

export default DidYouKnow;