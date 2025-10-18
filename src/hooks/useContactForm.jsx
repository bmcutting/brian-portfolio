// hooks/useContactForm.js
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_g9hv03q",
        "template_sa8ple7",
        formRef.current,
        "F7M9IZfavEec8egYK"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true);
          setLoading(false);
          setFormData({
            user_name: "",
            user_email: "",
            user_subject: "",
            message: "",
          });

          setTimeout(() => {
            setDone(false);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          alert("Error al enviar el mensaje. Por favor, intenta nuevamente.");
        }
      );
  };

  return {
    formData,
    done,
    loading,
    formRef,
    handleChange,
    handleSubmit,
  };
};