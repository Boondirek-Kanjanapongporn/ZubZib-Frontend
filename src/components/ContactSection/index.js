import React from 'react'
import { ContactContainer, ContactWrapper, ContactH1, FormContainer, Container1, Container2, LabelWrapper, Label, Input, TextArea, Error, SubmitButton } from './ContactElements'
// import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'


const ContactSection =({lightTheme})=>{
    const {register, handleSubmit, formState:{errors}} = useForm();

    // function sendEmail(e) {
    //     e.preventDefault();
    
    //     emailjs.sendForm('service_4p4tf62', 'Boonwebsite_q3h1bqx', e.target, 'user_9uv7upchxynuvKyfrtwTC')
    //       .then((result) => {
    //             console.log(result.text);
    //             alert("Thank you for sending us a message!!!\nWe will get to you as soon as possible!!!");
    //         }, 
    //         (error) => {
    //             console.log(error.text);
    //         });
    //         e.target.reset();
    // }

    const sendEmail=(data)=>{
        fetch("https://9e84-2001-fb1-4e-97f4-25-8bd2-87ca-1651.ngrok.io/email/contact",{
            method: "POST",
            headers:{"Content-Type":"application/json",'Accept': 'application/json'},
            body:JSON.stringify(data)
        }).then((res) => res.json()).then((result) => {
                alert("Thank you for sending us a message!!!\nWe will get to you as soon as possible!!!");
                return result;
          })
        
    }

    return (
        <ContactContainer id="contact" lightTheme={lightTheme}>
            <ContactWrapper className="container">
                <ContactH1>Contact ZubZib</ContactH1>
                <FormContainer onSubmit={handleSubmit(sendEmail)}>
                    <Container1 class="form-row">
                        <LabelWrapper class="form-group col-md-6">
                            <Label lightTheme={lightTheme} for="name">Name</Label>
                            <Input {...register('name',{required:"name is required", maxLength:{value:25,message:"name must be less than 30 letters"}})} lightTheme={lightTheme} type="text" class="form-control" id="name" placeholder="Name" name="name"/>
                            {errors.name && <Error>{errors.name?.message}</Error>}
                        </LabelWrapper>
                        <LabelWrapper class="form-group col-md-6">
                            <Label lightTheme={lightTheme} for="email">Email</Label>
                            <Input {...register("email", {required:"email is required"})} lightTheme={lightTheme} type="email" class="form-control" id="email" placeholder="Email Address" name="email"/>
                            {errors.email && <Error>{errors.email?.message}</Error>}
                        </LabelWrapper>
                    </Container1>
                    <Container2>
                        <LabelWrapper class="form-group">
                            <Label lightTheme={lightTheme} for="subject">Subject</Label>
                            <Input {...register("subject", {required:"subject is required"})} lightTheme={lightTheme} type="text" class="form-control" id="subject" placeholder="Subject" name="subject"/>
                            {errors.subject && <Error>{errors.subject?.message}</Error>}
                        </LabelWrapper>
                        <LabelWrapper class="form-group">
                            <Label lightTheme={lightTheme} for="message">Message</Label>
                            <TextArea {...register("message", {required:"message is required"})} lightTheme={lightTheme} class="form-control" id="message" placeholder="Your Message" name="message"/>
                            {errors.message && <Error>{errors.message?.message}</Error>}
                        </LabelWrapper>
                        <LabelWrapper className="col-8 pt-3 mx-auto">
                            <SubmitButton lightTheme={lightTheme} type="submit" value="Send Message"/>
                        </LabelWrapper>
                    </Container2>
                </FormContainer>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default ContactSection