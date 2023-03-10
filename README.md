# ai-content

## Status: Under Construction π§

This React app is a work in progress and is always being updated.  

## Purpose of this App π€

To generate website, product copy, and brianstorm ideas with OpenAI's Generative Pre-trained Transformer 3 (GPT-3) an autoregressive language model that uses deep learning to produce human-like text.


https://user-images.githubusercontent.com/29527450/187236104-233cbfe6-fe08-48fe-81f7-646d72d3cf0c.mp4


## Getting Started π οΈ: 

### Tools Used: 

- [Node.js](https://nodejs.org/)
- [npm](https://npmjs.com)
- [React](https://reactjs.org)
- [React Bootstrap](https://react-bootstrap.github.io)
- [OpenAI's GPT-3 autoregressive language model](https://openai.com/)

### Installation: 
1. Fork and clone this repo
3. In Terminal open the directory ai-content
4. Check that Node.js is installed via Terminal by typing `node -v` if you donβt see a version [Install Node.js](https://nodejs.org/en/ )
6. Type `npm install` to install any missing dependences. 
7. Type `npm start` to open the app via http://localhost:3000/
8. Obtain your [OpenAI API key](https://openai.com/api/) via Log In > Personal > API keys > Create and Copy your Secret Key. 
9. In root add a `.env` file with an API key variable REACT_APP_API_KEY. e.g `REACT_APP_API_KEY='your api key here'`

## Structure: 

```
ai-content
βββ node_modules
βββ public
β   βββfavicon.ico
β   βββ index.html
β   βββ manifest.json
β   βββ robots.txt
βββ src
β   βββ assets
β   β   βββimages
β   β      βββ logo.svg
β   βββ components
β   β   βββ BlogIdeas.js
β   β   βββ BlogIntro.js
β   β   βββ CompanyBio.js
β   β   βββ Generators.js
β   β   βββ Home.js
β   β   βββ LinkedInJobDescription.js
β   β   βββ Navigation.js
β   β   βββ OpenAIAPI.js
β   β   βββ ProductDescription.js
β   β   βββ Tldr.js
β   βββ App.css
β   βββ App.js
β   βββ App.test.js
β   βββ Index.css
β   βββ Index.js
β   βββ reportWebVitals.js
β   βββ setupTests.js
βββ .gitignore
βββ package.json
βββ README.md
```

## Current app features β¨

- Navigation
- Generators List Page 
- Product Description Generator
- Company Bio Generator
- Blog Intro Paragraph Generator
- LinkedIn Job Description Generator
- TL;DR text summarizer
- One async function to call OpenAPI

## Examples: 

### Product Description Generator π

1. Asks end-user to enter a product name and Purpose in a form and user clicks submit.
2. App sends a prompt OpenAI's Completion Model using a predefined string with the user's variable input from the form.
3. OpenAI's API sends a response, and the app displays response from the API on page for the user.

https://user-images.githubusercontent.com/29527450/163480646-4aaf9b7a-d867-42a3-9a63-1a09a7fad760.mov

### Company Bio Generator π

1. Asks end-user to enter a Company name and Purpose in a form and user clicks submit.
2. App sends a prompt OpenAI's Completion Model using a predefined string with the user's variable input from the form.
3. OpenAI's API sends a response, and the app displays response from the API on page for the user.

https://user-images.githubusercontent.com/29527450/163480671-97f0698c-4b28-4d27-9d52-4bdc9b350d96.mov

### SEO Optimized Blog Intro Paragraph Generator π»π

1. Asks end-user to input a blog post title and keywords separated by commas, and user click submit.
2. App sends a prompt OpenAI's Completion Model using a predefined string with the user's variable input from the form.
3. OpenAI's API sends a response, and the app displays a response from the API for the user.

https://user-images.githubusercontent.com/29527450/163480705-baf4bc60-1817-4a38-b06d-7232cfffbe8e.mov
