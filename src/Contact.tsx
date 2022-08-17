import { createUseStyles } from "react-jss";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact({ isOpen, setClose }: any) {
    const classes = styles({ isOpen });
    return (
        <div className={classes.main}>
            <div className={classes.heading}>
                <div className={classes.highHeading}>CONTACT US</div>
                <div>Name: Kem Westdyk</div>
                <div>Cel: 083 406 3961</div>
                <div>Email: kem@remey.co.za</div>
            </div>
            <form className={classes.form}>
                <div className={classes.inputContainer}>
                    Name: <input type="text" className={classes.input}></input>
                </div>
                <div className={classes.inputContainer}>
                    Email: <input type="text" className={classes.input}></input>
                </div>
                <div className={classes.inputContainer}>
                    Cell: <input type="text" className={classes.input}></input>
                </div>
                <div className={classes.inputContainer}>
                    Enquiry:{" "}
                    <textarea rows={3} className={classes.textarea}></textarea>
                </div>
            </form>
            <ReCAPTCHA
                sitekey="6LewBw8hAAAAAN1VXE8AXa7TfIhr6rdSJjbt_sQq"
                theme="dark"
                onChange={() => {}}
            />
            <div className={classes.buttons}>
                <div className={classes.close} onClick={() => setClose(false)}>
                    CLOSE
                </div>
                <div className={classes.submit}>SUBMIT</div>
            </div>
        </div>
    );
}

const styles = createUseStyles({
    main: ({ isOpen }: any) => ({
        opacity: isOpen ? 1 : 0,
        position: "fixed",
        zIndex: isOpen ? "10" : "-1",
        padding: "40px",
        backgroundColor: "white",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        border: "2px solid #B38E43",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "400px",
        maxHeight: "600px",
        overflow: "hidden",
    }),
    heading: {
        color: "black",
        textAlign: "center",
        fontSize: "16px",
    },
    highHeading: {
        fontSize: "35px",
        fontFamily: "eb garamond",
        color: "#B38E43",
        textAlign: "center",
        marginBottom: "10px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        color: "black",
        paddingTop: "20px",
        gap: "10px",
        marginBottom: "20px",
    },
    inputContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        gap: "5px",
    },
    input: {
        backgroundColor: "white",
        border: "1px solid #B38E43",
        color: "#B38E43",
        width: "300px",
        outline: "none",
        "&:focus": {
            color: "black",
            backgroundColor: "lightgray",
        },
    },
    textarea: {
        backgroundColor: "white",
        border: "1px solid #B38E43",
        color: "#B38E43",
        width: "300px",
        outline: "none",
        "&:focus": {
            color: "black",
            backgroundColor: "lightgray",
        },
        maxWidth: "300px",
        minWidth: "300px",
        maxHeight: "200px",
        minHeight: "50px",
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px",
        marginTop: "20px",
    },
    close: {
        color: "black",
        padding: "5px",
        border: "1px solid black",
        "&:hover": {
            border: "1px solid #B38E43",
            color: "#B38E43",
        },
        cursor: "pointer",
    },
    submit: {
        color: "black",
        padding: "5px",
        border: "1px solid black",
        "&:hover": {
            border: "1px solid #B38E43",
            color: "#B38E43",
        },
        cursor: "pointer",
    },
});
