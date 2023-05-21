"use Client";

const QuestionOfDay = ({backgroundColor, textColor, mainText, headingText, imageURL, secondaryText}) => {
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
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Delicious+Handrawn&family=Gajraj+One&family=Indie+Flower&family=Josefin+Sans:wght@500&family=Labrada:ital,wght@0,300;1,300&family=Orbitron:wght@500;900&family=Permanent+Marker&family=Quicksand:wght@600&family=Roboto+Slab:wght@500&family=Roboto:wght@300&family=Shadows+Into+Light&family=Tilt+Prism&family=VT323&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Asap+Condensed:wght@500&family=Caveat:wght@600&family=Delicious+Handrawn&family=Gajraj+One&family=Indie+Flower&family=Josefin+Sans:wght@500&family=Labrada:ital,wght@0,300;1,300&family=Orbitron:wght@500;900&family=Permanent+Marker&family=Quicksand:wght@600&family=Roboto+Slab:wght@500&family=Roboto:wght@300&family=Shadows+Into+Light&family=Tilt+Prism&family=VT323&display=swap"
        rel="stylesheet">
    <style>
        body {
            background-image: ${imageURL};
            background-size: cover;
            background-repeat: no-repeat;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            overflow: hidden;
        }
        
        .date {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            left: -200px;
        }
        
        .date_line {
            height: 900px;
            width: 10px;
            background-color: ${backgroundColor};
            z-index: -1;
            margin-left: 200px;
        }
        
        .date_circle {
            height: 300px;
            width: 300px;
            border-radius: 50%;
            background-color: ${backgroundColor};
            position: relative;
            left: 350px;
            top: -100px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        
        .date_history {
            font-size: 60px;
            font-weight: bold;
            position: relative;
            top: 10px;
            font-family: Arial;
        }
        
        .month_history {
            font-size: 40px;
            font-weight: 300;
            position: relative;
            top: -30px;
            font-family: Arial;
        }
        
        .title {
            display: flex;
            justify-content: center;
            align-items: baseline;
            position: absolute;
            top: 50px;
        }
        
        .first_title {
            margin: 10px;
            font-size: 60px;
            color: ${textColor};
            font-family: Arial;
        }
        
        .sec_title {
            margin: 10px;
            font-size: 80px;
            color: ${textColor};
            font-family: Arial;
        }
        
        .main_content {
            display: flex;
            justify-content: center;
            align-items: left;
            flex-direction: column;
            position: relative;
            top: 100px;
        }
        
        .year {
            font-size: 60px;
            font-family:Arial;
            color: ${textColor};
            font-weight: bold;
            position: relative;
            top: 100px;
        }
        
        .fact {
            font-size: 30px;
            font-weight: 300px;
            color: ${textColor};
            width: 900px;
            position: relative;
            top: 20px;
        }
    </style>
</head>

<body>
    <div class="date">
        <div class="date_circle">
            <p class="date_history">${secondaryText}</p>
        </div>
        <div class="date_line"></div>
    </div>
    <div class="content">
        <div class="title">
            <h1 class="first_title">This Day</h1>
            <h1 class="sec_title">In History</h1>
        </div>
        <div class="main_content">
            <p class="year">${headingText}</p>
            <p class="fact">${mainText}</p>
        </div>
    </div>

</body>

</html>
          `}
          className="w-full h-full"
        ></iframe>
      </>
    );}

export default QuestionOfDay;