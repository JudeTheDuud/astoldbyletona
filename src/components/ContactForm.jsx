import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../styles/contactForm.module.css";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
  const fadeInAnimatonVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
      },
    },
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{11}$/, "Phone number must be 11 digits"),
    
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "Bizinez4eva!", // Replace with your EmailJS service ID
          "template_fqt7ubg", // Replace with your EmailJS template ID
          {
            user_name: values.name,
            user_email: values.email,
            user_phone: values.phone,
           
          },
          "2nEkYXBGOWT32Qznq" // Replace with your EmailJS user/public key
        )
        .then(
          () => {
            toast.success("Email sent successfully!");
            resetForm();
          },
          (err) => {
            console.error("FAILED...", err);
            toast.error("Failed to send email. Please try again later.");
          }
        );
    },
  });

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        
      />
      <div id="contact" className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.sectionA}>
            <h3>Request a Quote</h3>
            <p>Entrust with high professionalism</p>
          </div>
          <motion.div
            variants={fadeInAnimatonVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} 
            className={styles.formWrap}
          >
            <form onSubmit={formik.handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                <div
                  className={`${styles.error} ${
                    formik.touched.name && formik.errors.name
                      ? `${styles.visible}`
                      : ``
                  }`}
                >
                  {formik.touched.name && formik.errors.name}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@company.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <div
                  className={`${styles.error} ${
                    formik.touched.email && formik.errors.email
                      ? `${styles.visible}`
                      : ``
                  }`}
                >
                  {formik.touched.email && formik.errors.email}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="09037586907"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                <div
                  className={`${styles.error} ${
                    formik.touched.phone && formik.errors.phone
                      ? `${styles.visible}`
                      : ``
                  }`}
                >
                  {formik.touched.phone && formik.errors.phone}
                </div>
              </div>

              {/** Other fields **/}
            

             

              <button disabled={formik.isSubmitting} type="submit">
                Request a Quote
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
