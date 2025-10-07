//color palette samples
const colors = [
  ["F8B195", "F67280", "C06C84", "6C5B7B", "355C7D"], // warm romantic
  ["99B898", "FECEAB", "FF847C", "E84A5F", "2A363B"], // soft earthy
  ["2E3192", "1BFFFF", "00FFA3", "FFD200", "FF0058"], // neon futuristic
  ["2193b0", "6dd5ed", "ffffff", "e3fdfd", "cbf1f5"], // ocean cool
  ["ee9ca7", "ffdde1", "fbc2eb", "a6c1ee", "d4fc79"], // pink pastel
  ["f12711", "f5af19", "f7797d", "FBD786", "C6FFDD"], // sunrise gradient
  ["12c2e9", "c471ed", "f64f59", "EC6F66", "F3A183"], // 3D glossy
  ["1f4037", "99f2c8", "56ab2f", "a8e063", "43cea2"], // nature green
  ["FF9A9E", "FAD0C4", "A18CD1", "FBC2EB", "84FAB0"], // dreamy blend
  ["00c3ff", "ffff1c", "8E2DE2", "4A00E0", "00F260"], // tech vibrant
  ["8360c3", "2ebf91", "373B44", "4286f4", "F3A183"], // royal glow
  ["FFDEE9", "B5FFFC", "C9FFBF", "FFAFBD", "FFD3A5"], // light airy
  ["141E30", "243B55", "485563", "2C3E50", "4CA1AF"], // dark professional
  ["FFC371", "FF5F6D", "6A9113", "141517", "203A43"], // bold contrast
];

const quote = document.querySelector(".quote");
const body = document.querySelector("body");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");
const cp = document.querySelector(".copyright");
const code = document.querySelector(".sourcecode");

//start function
const start = () => {
  // fetch data from REST API
  // fetch('https://dummyjson.com/quotes')
  fetch("https://api.quotable.io/quotes/random")
    // parse data
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      //generate random colors
      const color = colors[Math.floor(Math.random() * colors.length)];

      // use the data to the element content

      quote.textContent = `"${data[0].content}"`;
      console.log(quote.textContent);
      quote.style.color = `#${color[4]}`;
      body.style.backgroundImage = `linear-gradient(#${color[2]},#${color[0]},#${color[2]})`;
      author.textContent = `- ${data[0].author} -`;
      author.style.color = `#${color[1]}`;
      btn.style.color = `#${color[3]}`;

      cp.style.color = `#${color[3]}`;
      code.style.color = `#${color[3]}`;
      btn.textContent = "Next quote!";

      // add event listeners (mouseover)

      btn.addEventListener("mouseover", function () {
        btn.style.color = `#${color[0]}`;
        btn.style.cursor = "pointer";
      });

      // add event listeners (mouseout)

      btn.addEventListener("mouseout", function () {
        btn.style.color = `#${color[3]}`;
      });

      setTimeout(() => {
        quote.classList.remove("fadeOut");
        author.classList.remove("fadeOut");
        btn.classList.remove("fadeOut");
        cp.classList.remove("fadeOut");
        code.classList.remove("fadeOut");

        quote.classList.add("fadeIn");
        author.classList.add("fadeIn");
        btn.classList.add("fadeIn");
        cp.classList.add("fadeIn");
        code.classList.add("fadeIn");
      }, 1200);
    })
    //handle errors
    .catch(err=>{
        if(err){
            author.textContent = 'Sorry, our server is not available as of this time.'
            const color = colors[Math.floor(Math.random()*colors.length)]
            body.style.backgroundImage = `linear-gradient(#${color[0]},#${color[1]},#${color[2]})`
            author.style.color = `#${color[3]}`
        }
    })

    
};

// render the fucnion again to genrate new quote

btn.addEventListener('click', function(){
    quote.classList.remove("fadeOut");
        author.classList.remove("fadeOut");
        btn.classList.remove("fadeOut");
        cp.classList.remove("fadeOut");
        code.classList.remove("fadeOut");

        quote.classList.add("fadeIn");
        author.classList.add("fadeIn");
        btn.classList.add("fadeIn");
        cp.classList.add("fadeIn");
        code.classList.add("fadeIn");

        setTimeout(()=>{
start()
        },300)
})


start();
