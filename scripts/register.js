const form = document.getElementById("register-form");
const submitButton = document.getElementById("submit")
async function submitData(data) {
    try {
    const response = await axios.post("user/register",data)
    }
    catch (err) {
        console.log(err)
    }
}

form.addEventListener("submit",(e)=>{
    
    submitButton.disabled = "true";
    submitButton.textContent = "Submitting"
    submitButton.style.opacity = "0.4";
    const sendFormData = {}
    e.preventDefault();
    const formElements = Array.from(form.children).map((element)=>{
        return Array.from(element.children).filter((element)=>{
            if (element.tagName=="INPUT") {
                return element
            }
        })[0]
    })
    formElements.forEach((field)=>{        
        sendFormData[field.id] = field.value
    })
    submitData(sendFormData);
})