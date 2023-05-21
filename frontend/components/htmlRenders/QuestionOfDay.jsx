"use Client";

const QuestionOfDay = ({backgroundColor, textColor, mainText, headingText, imageURL}) => {
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
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link
                  href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Delicious+Handrawn&family=Gajraj+One&family=Indie+Flower&family=Josefin+Sans:wght@500&family=Labrada:ital,wght@0,300;1,300&family=Orbitron:wght@500;900&family=Permanent+Marker&family=Quicksand:wght@600&family=Shadows+Into+Light&family=Tilt+Prism&family=VT323&display=swap"
                  rel="stylesheet">
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link
                  href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Delicious+Handrawn&family=Gajraj+One&family=Indie+Flower&family=Josefin+Sans:wght@500&family=Labrada:ital,wght@0,300;1,300&family=Orbitron:wght@500;900&family=Permanent+Marker&family=Quicksand:wght@600&family=Roboto:wght@300&family=Shadows+Into+Light&family=Tilt+Prism&family=VT323&display=swap"
                  rel="stylesheet">
              <style>
                  body {
                      background-color: ${backgroundColor};
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      flex-direction: column;
                  }
          
                  .main {
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      color: ${textColor};
                      margin-top: 7%;
                  }
          
                  .line {
                      height: 30px;
                      width: 100%;
                      background-color: black;
                  }
          
                  .question_mark {
                      height: 300px;
                      width: 300px;
                      position: relative;
                      top: 20px;
                  }
          
                  .question_title {
                      font-size: 80px;
                      font-weight: 700;
                      position: relative;
                      left: 20px;
                      top: 60px;
                      font-family: 'Quicksand', sans-serif;
                  }
          
                  .content {
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      flex-direction: column;
                      position: relative;
                      left: -50px;
                  }
          
                  .real_question {
                      font-weight: 300;
                      font-size: 30px;
                      width: 700px;
                      font-family: 'Roboto', sans-serif;
                      position: relative;
                      top: -30px
                  }
              </style>
          </head>
          
          <body>
              <div class="main">
                  <div class="content">
                      <p class="question_title">${headingText}</p>
                      <p class="real_question">${mainText}</p>
                  </div> 
                  <img src="${imageURL}" class="question_mark"></img>
              </div>
              <div class="line"></div>
          </body>
          
          </html>
          `}
          className="w-full h-full"
        ></iframe>
      </>
    );}

export default QuestionOfDay;