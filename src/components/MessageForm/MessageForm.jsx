import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from "@mui/material";

const MessageForm = ({ open, onClose }) => {
    const [senderName, setSenderName] = useState("");
    const [senderEmail, setSenderEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSend = async () => {
        if (!senderName || !senderEmail || !subject || !message) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        setLoading(true);

        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: senderName,
                    from_email: senderEmail,
                    subject: subject,
                    message: message
                },
                process.env.REACT_APP_EMAILJS_USER_ID
            );
            setSuccess(true);
            setSenderName("");
            setSenderEmail("");
            setSubject("");
            setMessage("");
            setTimeout(() => setSuccess(false), 3000);
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error);
            alert("Erreur lors de l'envoi du message.");
        }

        setLoading(false);
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle className="font-bold text-gray-800">Envoyer un message</DialogTitle>
            <DialogContent>
                {success ? (
                    <p className="text-green-500 font-semibold">Message envoyé avec succès !</p>
                ) : (
                    <>
                        <TextField
                            label="Nom"
                            fullWidth
                            margin="dense"
                            value={senderName}
                            onChange={(e) => setSenderName(e.target.value)}
                        />
                        <TextField
                            label="Votre Email"
                            fullWidth
                            margin="dense"
                            value={senderEmail}
                            onChange={(e) => setSenderEmail(e.target.value)}
                        />
                        <TextField
                            label="Objet"
                            fullWidth
                            margin="dense"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <TextField
                            label="Message"
                            fullWidth
                            multiline
                            rows={4}
                            margin="dense"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </>
                )}
            </DialogContent>
            <DialogActions>
                {!success && (
                    <Button onClick={onClose} color="secondary" disabled={success}>
                        Annuler
                    </Button>
                )}
                {!success && (
                    <Button onClick={handleSend} color="primary" variant="contained" disabled={loading}>
                        {loading ? "Envoi..." : "Envoyer"}
                    </Button>
                )}
                {success && (
                    <Button onClick={onClose} color="primary" variant="contained">
                        OK
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};

export default MessageForm;

