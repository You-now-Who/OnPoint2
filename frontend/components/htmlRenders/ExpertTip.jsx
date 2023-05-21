"use Client";

const ExpertTip = ({backgroundColor, textColor, mainText, headingText, imageURL, secondaryText, primaryColor, secondaryColor, componentRef}) => {
    console.log("ExpertTip.jsx: backgroundColor: ", backgroundColor, "reference", componentRef);
    return (
      <>
      {/* <canvas> */}
        <iframe ref={componentRef}
          srcDoc={`
          <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Delicious+Handrawn&family=Gajraj+One&family=Indie+Flower&family=Josefin+Sans:wght@500&family=Labrada:ital,wght@0,300;1,300&family=Orbitron:wght@500;900&family=Permanent+Marker&family=Quicksand:wght@600&family=Roboto+Slab:wght@500&family=Roboto:wght@300&family=Shadows+Into+Light&family=Tilt+Prism&family=VT323&display=swap"
        rel="stylesheet">
    <title>Document</title>
    <style>
        body {
            background-color: ${backgroundColor};
        }
        
        .main {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-top: 12%;
        }
        
        .content {
            display: flex;
            justify-content: space-evenly;
            align-items: left;
            flex-direction: column;
        }
        
        .title {
            font-size: 100px;
            color: rgb(255, 123, 0);
            font-family: Arial;
        }
        
        .image {
            height: 400px;
            width: 400px;
            background-image: ${imageURL};
            background-size: cover;
            transform: rotateZ(-30deg);
        }
        
        .tip {
            color: white;
            font-size: 30px;
            font-weight: 300;
            width: 800px;
            position: relative;
            top: -60px;
            font-family: Arial;
        }
    </style>
</head>

<body>
    <div class="main">
        <div class="content">
            <h1 class="title">${headingText}</h1>
            <p class="tip">${mainText}</p>
        </div>
        <div class="image"></div>
    </div>
</body>

</html>
          `}
          className="w-full h-full"
        ></iframe>
        {/* </canvas> */}
      </>
    );}

export default ExpertTip;