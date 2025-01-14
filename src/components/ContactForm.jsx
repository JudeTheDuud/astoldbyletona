import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../styles/contactForm.module.css";
import { motion } from "framer-motion";

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
    companyName: Yup.string().required("Company Name is required"),
    companySize: Yup.string().required("Company Size is required"),
    industry: Yup.string().required("Industry is required"),
    budget: Yup.string().required("Budget is required"),
    targetAudience: Yup.string().required("Target Audience is required"),
    specificServices: Yup.string().required("Specific Services are required"),
    projectTimeline: Yup.string().required("Project Timeline is required"),
    projectDescription: Yup.string()
      .required("Project Description is required")
      .min(10, "Project Description must be at least 10 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      companySize: "",
      industry: "",
      budget: "",
      targetAudience: "",
      specificServices: "",
      projectTimeline: "",
      projectDescription: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      alert("Form submitted successfully!");
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sectionA}>
          <h3>Request a Quote</h3>
          <p>Entrust with high professionalism</p>
        </div>
        <motion.div
        variants={fadeInAnimatonVariants} 
        initial = 'initial'
        whileInView= 'animate'
        className={styles.formWrap}>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
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
                  formik.touched.name && formik.errors.name ? `${styles.visible}` : ``
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
                  formik.touched.email && formik.errors.email ? `${styles.visible}` : ``
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
                  formik.touched.phone && formik.errors.phone ? `${styles.visible}` : ``
                }`}
              >
                {formik.touched.phone && formik.errors.phone}
              </div>
            </div>

            {/** Other fields **/}
            {[
              { id: "companyName", label: "Company Name" },
              { id: "companySize", label: "Company Size" },
              { id: "industry", label: "Industry" },
              { id: "budget", label: "Budget" },
              { id: "targetAudience", label: "Target Audience" },
              { id: "specificServices", label: "Specific Services Required" },
              { id: "projectTimeline", label: "Project Timeline" },
            ].map(({ id, label }) => (
              <div className={styles.formGroup} key={id}>
                <label htmlFor={id}>{label}</label>
                <input
                  type="text"
                  id={id}
                  name={id}
                  placeholder=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[id]}
                />
                <div
                className={`${styles.error} ${
                  formik.touched[id] && formik.errors[id] ? `${styles.visible}` : ``
                }`}
              >
                {formik.touched[id] && formik.errors[id]}
              </div>
              </div>
            ))}

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label htmlFor="projectDescription">Project Description</label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.projectDescription}
              />
              <div
                className={`${styles.error} ${
                  formik.touched.projectDescription && formik.errors.projectDescription ? `${styles.visible}` : ``
                }`}
              >
                {formik.touched.projectDescription && formik.errors.projectDescription}
              </div>
            </div>

            <button disabled={formik.isSubmitting} type="submit">
              Request a Quote
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
