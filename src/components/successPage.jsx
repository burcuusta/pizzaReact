import React from "react";

const SuccessPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Teknolojik Yemekler</h1>
      <div style={styles.messageBox}>
        <h2 style={styles.message}>TEBRİKLER!</h2>
        <h2 style={styles.message}>SİPARİŞİNİZ ALINDI!</h2>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#D32F2F", 
    color: "#fff", 
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
  header: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  messageBox: {
    backgroundColor: "#fff",
    color: "#D32F2F",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    display: "inline-block",
  },
  message: {
    fontSize: "32px",
    fontWeight: "bold",
    margin: "10px 0",
  },
};

export default SuccessPage;
