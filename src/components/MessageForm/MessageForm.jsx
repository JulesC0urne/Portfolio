// MessageForm.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Typography,
    Alert
} from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogTitle-root': {
        backgroundColor: theme.palette.background.default,
    },
    '& .MuiDialogContent-root': {
        padding: theme.spacing(3),
    },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

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
        <StyledDialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>
                <Typography variant="h6" component="div">
                    Envoyer un message
                </Typography>
            </DialogTitle>
            <DialogContent>
                {success ? (
                    <Alert severity="success" sx={{ mt: 2 }}>
                        Message envoyé avec succès !
                    </Alert>
                ) : (
                    <>
                        <StyledTextField
                            label="Nom"
                            fullWidth
                            value={senderName}
                            onChange={(e) => setSenderName(e.target.value)}
                        />
                        <StyledTextField
                            label="Votre Email"
                            fullWidth
                            value={senderEmail}
                            onChange={(e) => setSenderEmail(e.target.value)}
                        />
                        <StyledTextField
                            label="Objet"
                            fullWidth
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <StyledTextField
                            label="Message"
                            fullWidth
                            multiline
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </>
                )}
            </DialogContent>
            <DialogActions sx={{ padding: 2 }}>
                {!success && (
                    <Button onClick={onClose} color="secondary" disabled={success}>
                        Annuler
                    </Button>
                )}
                {!success && (
                    <Button
                        onClick={handleSend}
                        color="primary"
                        variant="contained"
                        disabled={loading}
                    >
                        {loading ? "Envoi..." : "Envoyer"}
                    </Button>
                )}
                {success && (
                    <Button onClick={onClose} color="primary" variant="contained">
                        OK
                    </Button>
                )}
            </DialogActions>
        </StyledDialog>
    );
};

export default MessageForm;