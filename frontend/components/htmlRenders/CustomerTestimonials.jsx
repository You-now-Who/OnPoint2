"use Client";

const CustomerTestimonials = ({backgroundColor, textColor, mainText, headingText, imageURL, secondaryText, primaryColor, secondaryColor}) => {
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
              <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Delicious+Handrawn&family=Gajraj+One&family=Indie+Flower&family=Josefin+Sans:wght@500&family=Labrada:ital,wght@0,300;1,300&family=Orbitron:wght@500;900&family=Permanent+Marker&family=Quicksand:wght@600&family=Roboto+Slab:wght@500&family=Roboto:wght@300&family=Shadows+Into+Light&family=Tilt+Prism&family=VT323&display=swap"
                  rel="stylesheet">
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link href="https://fonts.googleapis.com/css2?family=Asap+Condensed:wght@500&family=Caveat:wght@600&family=Delicious+Handrawn&family=Gajraj+One&family=Indie+Flower&family=Josefin+Sans:wght@500&family=Labrada:ital,wght@0,300;1,300&family=Orbitron:wght@500;900&family=Permanent+Marker&family=Quicksand:wght@600&family=Roboto+Slab:wght@500&family=Roboto:wght@300&family=Shadows+Into+Light&family=Tilt+Prism&family=VT323&display=swap"
                  rel="stylesheet">
              <style>
                  body {
                      display: flex;
                      justify-content: center;
                      align-items: center;
                  }
                  
                  .pink {
                      height: 900px;
                      width: 50%;
                      background-color: ${backgroundColor};
                  }
                  
                  .orange {
                      height: 900px;
                      width: 50%;
                      background-color: ${backgroundColor};
                  }
                  
                  .main {
                      background-color: ${backgroundColor};
                      height: 600px;
                      width: 1200px;
                      border: 5px solid white;
                      border-radius: 25px;
                      position: absolute;
                      top: 150px;
                      left: 300px;
                      display: flex;
                      justify-content: space-evenly;
                      align-items: center;
                  }
                  
                  .image {
                      height: 300px;
                      width: 300px;
                      border-radius: 50%;
                      background-image: ${imageURL};
                      background-repeat: no-repeat;
                      background-size: cover;
                  }
                  
                  .content {
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      flex-direction: column;
                      color: ${textColor};
                  }
                  
                  .name {
                      display: flex;
                      justify-content: left;
                      align-items: baseline;
                      width: 600px;
                      position: relative;
                      top: 50px;
                  }
                  
                  .occupation {
                      font-size: 20px;
                      font-weight: 300;
                      margin-left: 50px;
                  }
                  
                  .name_text {
                      font-size: 30px;
                      font-weight: 300;
                  }
                  
                  .main_content {
                      display: flex;
                      justify-content: space-evenly;
                      align-items: left;
                      flex-direction: column;
                  }
                  
                  .title {
                      font-size: 40px;
                      font-weight: bold;
                      position: relative;
                      top: 30px;
                  }
                  
                  .real_content {
                      width: 600px;
                      font-size: 25px;
                      font-weight: 300;
                  }
                  
                  .rating {
                      font-size: 30px;
                      position: relative;
                      left: 50px;
                  }
              </style>
          </head>
          
          <body>
          
              <div class="pink"></div>
              <div class="orange"></div>
              <div class="main">
                  <div class="image"></div>
                  <div class="content">
                      <div class="name">
                          <h1 class="name_text">${headingText}</h1>
                          <p class="occupation">${secondaryText} </p>
                          <p class="rating">⭐️⭐️⭐️⭐️⭐️</p>
                      </div>
                      <div class="main_content">
                          <h1 class="title">${headingText}</h1>
                          <p class="real_content">${mainText}</p>
                      </div>
                  </div>
              </div>
          
          </body>
          
          </html>
          `}
          className="w-full h-full"
        ></iframe>
      </>
    );}

export default CustomerTestimonials;