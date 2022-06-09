# Objective:

Get rid of repitition. These things happen on every component right now: 

1. The user's input is passed through the promt via open AI's API.
2. We wait for the response
3. we display it on the screen. 

## Things to consider:

- The function will be used globally, so I'm not sure if state will need to be handled in each individual compnent before/after using the function or if we can use states inside the global function? ** needs research, but maybe: https://reactjs.org/docs/hooks-state.html

## Reusbale Function: 

Based on the above, assuming the gloabl function handles state, the new function would work as follows:

1. in each component: store the form input in a variable for the prompt in the OpenAI call (in each component)  
2. pass that prompt variable into reusable function
3. Function makes call to API
4. Function shows loading screen while we await the API response
4. Function displays the new heading API response on component card


## Handeling the variable Before passing it through the reusable fucniton 

The fucntion can only take one prompt as the paramater, but some forms have two variables passed into the prompt. In each component we need to: 

1. get the input from each form
2. pass it into a function that will combind it into one prompt
3. pass that new promt variable init to the reusable function above

Example: 

In BlogInto.js we have the following promt with two form objects `${formDataObj.blogTitle}` and `${formDataObj.context}` that will be passed through to the function:
    ```
    prompt: `Write an uplifting and positive Blog intro paragraph for the blog title ${formDataObj.blogTitle} and include the keywords: ${formDataObj.context}`
    ```