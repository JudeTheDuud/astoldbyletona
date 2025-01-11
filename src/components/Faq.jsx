import React, { useState } from "react";
import styles from "../styles/faq.module.css";
import Navbar from "./Navbar";

const Faq = () => {
  const question = [
    {
      question: "What is the brand consulting process like?",
      answer:
        "On the website, you’ll fill a “get a quote” form from us then we can move forward from there. We’ll walk you through the process step-by-step.",
    },
    {
      question: "How long does a brand consulting project take?",
      answer:
        "It largely depends on your response time and the volume of work to be done. We insist on quality over quantity.",
    },
    {
      question: "What is the cost of the brand consulting?",
      answer: "Fill out the “get a quote” from the page.",
    },
    {
      question: "What industries do you specialise in?",
      answer:
        "While the fundamentals of branding remain consistent, successful brand consultation, like ours, requires a highly customised approach to address the specific needs and challenges of each client. We custom tailor each consultation to suit each client.",
    },
  ];
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if(selected === i){
        return setSelected(null)
    }

    setSelected(i)
};

  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.sectionA}>
            <h1>
              YOU HAVE QUESTIONS. <br />
              WE HAVE ANSWERS.
            </h1>
          </div>
          <div className={styles.accordion}>
            {question.map((item, i) => (
              <div className={styles.item}>
                <div className={styles.question} onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>
                  <span className={styles.clicky}>{selected === i ? '-' : "+"}</span>
                </div>
                <div className={selected === i ? `${styles.answer} ${styles.show}` : `${styles.answer}`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
