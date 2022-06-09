/* 

---- > ReusableFunction ( prompt from components) {



// OpenAI davinci completion
const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);

openai.createCompletion("text-davinci-002", {
    prompt: `Write a persuasive and exciting company bio for: ${formDataObj.companyName}`,
    temperature: 0.85,
    max_tokens: 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
})
.then((response) => {
    this.setState({
        heading: `Company bio for: ${formDataObj.companyName}`,
        response: `${response.data.choices[0].text}`
    })
}); 





---- > }
*/