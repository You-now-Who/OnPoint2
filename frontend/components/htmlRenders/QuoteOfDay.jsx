"use Client";

const QuoteOfDay = ({backgroundColor, textColor, mainText, headingText, imageURL, secondaryText}) => {
    return (
      <>
        <iframe
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
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${backgroundColor};
            margin-top: 7%;
        }
        
        .main_quote {
            height: 600px;
            width: 900px;
            background-color: peachpuff;
        }
        
        .border1 {
            border-top: 15px solid chocolate;
            border-right: 15px solid chocolate;
            height: 550px;
            width: 850px;
            border-top-right-radius: 150px;
            position: relative;
            left: 70px;
            top: -180px;
        }
        
        .border2 {
            border-bottom: 15px solid chocolate;
            border-left: 15px solid chocolate;
            height: 550px;
            width: 850px;
            border-bottom-left-radius: 150px;
            position: absolute;
            left: 450px;
            top: 200px;
        }
        
        .quote_open {
            height: 150px;
            width: 150px;
            position: relative;
            top: -50px;
            left: -50px;
            z-index: 10;
        }
        
        .quote_close {
            height: 150px;
            width: 150px;
            position: relative;
            bottom: 200px;
            right: -820px;
            z-index: 10;
            transform: rotateZ(180deg);
        }
        
        .main_content {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
            top: -850px;
        }
        
        .title {
            font-size: 60px;
            text-align: center;
            font-family: Arial;
        }
        
        .quote {
            font-size: 30px;
            font-weight: 300;
            width: 800px;
            font-family:Arial;
        }
        
        .name {
            font-size: 50px;
            font-weight: bold;
            text-align: right;
            position: relative;
            font-family:Arial;
            right: -250px;
            top: -50px;
        }
    </style>
</head>

<body>
    <div class="main_quote">
        <img src="https://media.discordapp.net/attachments/1109396210210570310/1109725164054257674/quote.png?width=576&height=576" alt="" class="quote_open">
        <div class="border1"></div>
        <div class="border2"></div>
        <img src="https://media.discordapp.net/attachments/1109396210210570310/1109725164054257674/quote.png?width=576&height=576" alt="" class="quote_close">
        <div class="main_content">
            <h1 class="title">${headingText}</h1>
            <p class="quote">${mainText}</p>
            <h1 class="name">${secondaryText}</h1>
        </div>

    </div>
</body>

</html>
          `}
          className="w-full h-full"
        ></iframe>
      </>
    );}

export default QuoteOfDay;