import React, { useState } from "react";

const ContactSupport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false); // Help modal state
  const [email, setEmail] = useState(""); // State to hold the email input
  const [message, setMessage] = useState(""); // State to hold the message input
  const [receivedMessages, setReceivedMessages] = useState([ // Sample received messages
    { id: 1, content: "How do I reset my password?", reply: "" },
    { id: 2, content: "Can I update my email address?", reply: "" }
  ]); // Received messages state
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false); // Reply modal state
  const [currentMessageId, setCurrentMessageId] = useState(null); // Track which message is selected for reply
  const [replyMessage, setReplyMessage] = useState(""); // State to hold reply message input

  // Function to handle opening the main modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the main modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle opening the Help modal
  const openHelpModal = () => {
    setIsHelpModalOpen(true);
  };

  // Function to handle closing the Help modal
  const closeHelpModal = () => {
    setIsHelpModalOpen(false);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Example: Log email and message to console (this would be replaced with actual form submission logic)
    console.log("Email:", email);
    console.log("Message:", message);

    // Close modal after submission
    closeModal();

    // Reset the fields
    setEmail("");
    setMessage("");
  };

  // Function to open the reply modal for a specific message
  const openReplyModal = (messageId) => {
    setCurrentMessageId(messageId);
    setIsReplyModalOpen(true);
  };

  // Function to handle the reply submission
  const handleReplySubmit = () => {
    const updatedMessages = receivedMessages.map((msg) =>
      msg.id === currentMessageId ? { ...msg, reply: replyMessage } : msg
    );
    setReceivedMessages(updatedMessages);
    setIsReplyModalOpen(false);
    setReplyMessage("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Support</h2>

      {/* Messages Box with onClick */}
      <div style={styles.supportBox} onClick={() => openReplyModal(null)}>
        <p style={styles.supportText}>Messages ({receivedMessages.length})</p>
      </div>

      <div style={styles.supportBox} onClick={openHelpModal}>
        <span style={styles.replyTime}>Help</span>
      </div>

      <br />

      {/* Contact Support Box */}
      <div style={styles.supportBox} onClick={openModal}>
        <p style={styles.supportText}>Contact Support</p>
        <span style={styles.replyTime}>
          We typically reply in under a minute
        </span>
      </div>

      {/* Modal Popup for Contact Support */}
      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3 style={styles.modalTitle}>Get in Touch</h3>
            <p style={styles.modalText}>
              Our support team will assist you shortly. Please provide the
              details of your issue.
            </p>

            {/* Email Input Field */}
            <input
              type="email"
              style={styles.inputField}
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Message Textarea */}
            <textarea
              style={styles.textarea}
              placeholder="Describe your issue..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div style={styles.modalButtons}>
              <button style={styles.cancelButton} onClick={closeModal}>
                Cancel
              </button>
              <button style={styles.submitButton} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Help Modal */}
      {isHelpModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3 style={styles.modalTitle}>About BizView</h3>
            <p style={styles.modalText}>
              BizView is your go-to platform for discovering a wide variety of services
              across Nigeria. Whether you're looking for professionals, local businesses,
              or personal services, BizView connects you with real people offering
              reliable services right at your fingertips.
            </p>

            <div style={styles.modalButtons}>
              <button style={styles.cancelButton} onClick={closeHelpModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reply Modal for Messages */}
      {isReplyModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3 style={styles.modalTitle}>Reply to Message</h3>
            {currentMessageId === null ? (
              <div>
                <h4>All Messages</h4>
                {receivedMessages.map((msg) => (
                  <div key={msg.id} style={styles.messageItem}>
                    <p style={styles.modalText}>{msg.content}</p>
                    <button
                      style={styles.submitButton}
                      onClick={() => openReplyModal(msg.id)}
                    >
                      Reply
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p style={styles.modalText}>
                  {receivedMessages.find((msg) => msg.id === currentMessageId)?.content}
                </p>
                <textarea
                  style={styles.textarea}
                  placeholder="Your reply..."
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                />
                <div style={styles.modalButtons}>
                  <button
                    style={styles.cancelButton}
                    onClick={() => setIsReplyModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    style={styles.submitButton}
                    onClick={handleReplySubmit}
                  >
                    Submit Reply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    width: "80%",
    margin: "50px auto",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px 20px 400px",
    marginTop: "10rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  supportBox: {
    width: "60%",
    margin: "0 auto",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "white",
    textAlign: "left",
    cursor: "pointer", // Change cursor to indicate it's clickable
  },
  supportText: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  replyTime: {
    fontSize: "0.875rem",
    color: "#666",
  },
  // Modal styles
  modalOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    textAlign: "center",
  },
  modalTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  modalText: {
    fontSize: "1rem",
    marginBottom: "20px",
    color: "#555",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    fontSize: "1rem",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    fontSize: "1rem",
  },
  modalButtons: {
    display: "flex",
    justifyContent: "space-between",
  },
  cancelButton: {
    padding: "10px 20px",
    backgroundColor: "#ccc",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  messageItem: {
    marginBottom: "10px",
    textAlign: "left",
  },
};

export default ContactSupport;

