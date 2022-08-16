import { createUseStyles } from "react-jss";
import "@fontsource/cantarell";
import "@fontsource/raleway";
import "@fontsource/lora";

export default function Header() {
    const classes = styles();
    return (
        <div className={classes.main}>
            <div className={classes.nav}>
                <a className={classes.navItem}>OLD WEBSITE</a>
                <a className={classes.navItem}>CONTACT</a>
                <a className={classes.navItem}>GALLERY</a>
                <a className={classes.navItemActive}>HOME</a>
            </div>
            <div className={classes.logo}>
                <img src="/logo_white.jpg" height={140} />
            </div>
            <div className={classes.socials}>
                <img src="/facebook.svg" height={30} />
                <img src="/instagram.svg" height={30} />
                <img src="/phone.svg" height={30} />
                <img src="/mail.svg" height={30} />
                <img src="/location.svg" height={30} />
            </div>
        </div>
    );
}

const styles = createUseStyles({
    main: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        gap: "40px",
        paddingLeft: "20px",
        height: "100px",
        paddingRight: "20px",
    },
    logo: {
        position: "absolute",
        left: "50%",
        top: "0%",
        transform: "translate(-50%, 0)",
        zIndex: "2",
        paddingLeft: "20px",
        paddingRight: "20px",
        backgroundColor: "white",
        borderRadius: "5px",
    },
    nav: {
        color: "black",
        display: "flex",
        gap: "12px",
        fontFamily: "Cantarell",
    },
    socials: {
        color: "black",
        display: "flex",
        gap: "6px",
    },
    navItem: {
        paddingBottom: "2px",
        "&:hover": {
            color: "#B38E43",
            borderBottom: "2px solid #B38E43",
            paddingBottom: "0px",
        },
    },
    navItemActive: {
        color: "#B38E43",
        borderBottom: "2px solid #B38E43",
    },
    socialsIcon: {
        "&:hover": {
            color: "#B38E43",
        },
    },
});
