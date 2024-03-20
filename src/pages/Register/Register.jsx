import React from 'react'
import Logo from "../../assets/Logo_finance_assistant_app.png"
import { useState } from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CakeIcon from '@mui/icons-material/Cake';
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from '@mui/icons-material/Work';
import LockIcon from "@mui/icons-material//Lock";
import { ExpandMore } from "@mui/icons-material/";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css"
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import ClipLoader from "react-spinners/ClipLoader";

function Register(){

    const [open, setOpen] = useState(false);
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [telefon, setTelefon] = useState("");
    const [facebook, setFacebook] = useState("");
    const [facultate, setFacultate] = useState("Selectează facultatea");
    const [an, setAn] = useState("Selectează anul");
    const [parola, setParola] = useState("");
    const [confirmareParola, setConfirmareParola] = useState("");
    const [gdpr, setGdpr] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    // const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();

        if (lastName === "") {
            toast.error("Vă rugăm să vă completați numele!");
            return;
        }

        if (firstName === "") {
            toast.error("Vă rugăm să vă completați prenumele!");
            return;
        }

        if (email === "") {
            toast.error("Vă rugăm să vă completați email-ul!");
            return;
        }

        if (
            !/([a-zA-Z0-9]+)([_.-{1}])?([a-zA-Z0-9]+)@([a-zA-Z0-9]+)([.])([a-zA-Z.]+)/g.test(
                email
            )
        ) {
            toast.error("Formatul email-ului nu este valid!");
            return;
        }

        if (!telefon.match("^[0-9+]{10}$")) {
            toast.error("Numărul de telefon nu este scris corect!");
            return;
        }

        if (
            !facebook.match(
                `^((((https|HTTPS)|(http|HTTP))://)|(www|WWW).)[\x21-\x7E]+$`
            )
        ) {
            toast.error("Link-ul de facebook nu este corect!");
            return;
        }

        if (facultate === "Selectează facultatea") {
            toast.error("Nu ai ales facultatea!");
            return;
        }

        if (an === "Selectează anul") {
            toast.error("Nu ai ales anul de studiu!");
            return;
        }

        if (parola === "") {
            toast.error("Alegeți o parolă!");
            return;
        }

        if (parola.length < 6) {
            toast.error("Alegeți o parolă mai lungă!");
            return;
        }

        if (confirmareParola !== parola) {
            toast.error("Parolele nu se potrivesc!");
            return;
        }

        if (!gdpr) {
            toast.error("Vă rugăm să bifați căsuța de GDPR!");
            return;
        }
        const formValues = {
            lastName,
            firstName,
            email,
            phone: telefon,
            facebookLink: facebook,
            faculty: facultate,
            year: an,
            password: parola
        };
        console.log(formValues);
        // try {
        //     setIsLoading(true);
        //     await axios.post(
        //         "http://localhost:5000/api/users/addUser",
        //         formValues
        //     );
        //     history.push("/congrats");
        // } catch (err) {
        //     setIsLoading(false);
        //     console.warn(err);
        //     toast.error(err.response.data.message);
        // }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseDisagree = () => {
        setGdpr(false);
        setOpen(false);
    };

    const handleCloseAgree = () => {
        setGdpr(true);
        setOpen(false);
    };

    return(
        <>
                    <div className="register">
            <form className="register__container" onSubmit={handleSubmit}>
                <img src={Logo} alt="SiSC" className="logo" />

                <div className="form-group">
                    <AccountCircleIcon className="register-icon" />
                    <input
                        type="text"
                        placeholder="Nume"
                        name="nume"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <AccountCircleIcon className="register-icon" />
                    <input
                        type="text"
                        placeholder="Prenume"
                        name="prenume"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <EmailIcon className="register-icon" />
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <WorkIcon className="register-icon" />
                    <input
                        type="text"
                        placeholder="Ocupatie"
                        name="ocupatie"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

            
                <div className="form-group">
                    <CakeIcon className="register-icon" />
                    <input
                        type="text"
                        placeholder="Varstă"
                        name="varstă"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
{/* 
                <div className="form-group">
                    <PhoneIcon className="register-icon" />
                    <input
                        type="number"
                        placeholder="Număr de telefon"
                        name="telefon"
                        value={telefon}
                        onChange={e => setTelefon(e.target.value)}
                    />
                </div> */}

                {/* <div className="form-group">
                    <FacebookIcon className="register-icon" />
                    <input
                        type="text"
                        placeholder="Link Facebook"
                        name="facebook"
                        value={facebook}
                        onChange={e => setFacebook(e.target.value)}
                    />
                </div> */}

                {/* <div className="form-group">
                    <AccountBalanceIcon className="register-icon" />
                    <select
                        name="facultate"
                        onChange={e => setFacultate(e.target.value)}
                    >
                        <option value="Selectează facultatea">
                            Selectează facultatea
                        </option>
                        <option value="Cibernetică, Statistică și Informatică Economică">
                            Cibernetică, Statistică și Informatică Economică
                        </option>
                        <option value="Alta">Alta</option>
                    </select>
                    <ExpandMore className="expand-more" />
                </div> */}

                {/* <div className="form-group">
                    <SchoolIcon className="register-icon" />
                    <select name="an" onChange={e => setAn(e.target.value)}>
                        <option value="Selectează anul">Selectează anul</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="Altul">Altul</option>
                    </select>
                    <ExpandMore className="expand-more" />
                </div> */}

                <div className="form-group">
                    <LockIcon className="register-icon" />
                    <input
                        type="password"
                        placeholder="Introduceți parola"
                        name="parola"
                        value={parola}
                        onChange={e => setParola(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <LockIcon className="register-icon" />
                    <input
                        type="password"
                        placeholder="Confirmă parola"
                        name="confirmare-parola"
                        value={confirmareParola}
                        onChange={e => setConfirmareParola(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="checkbox"
                        name="gdpr"
                        id="gdpr"
                        checked={gdpr}
                        onChange={() => setGdpr(!gdpr)}
                    />
                    <label onClick={handleClickOpen} className="gdpr-label">
                        Sunt de acord cu <strong>Termenii și condițiile</strong>{" "}
                        site-ului
                    </label>
                </div>

                {/* {!isLoading ? (*/}
                    <input
                        type="submit"
                        value="Înregistrează-te"
                        className="submit-btn"
                        disabled={isLoading}
                    />
                {/*}) : (
                    <ClipLoader color="#0574e5" loading={isLoading} size={30} />
                )} */}
                {/* <div style={{ marginTop: 10 }}>
                    Ești deja înregistrat?{" "}
                    <span
                        onClick={() => history.push("/login")}
                        style={{ fontWeight: "bold", cursor: "pointer" }}
                    >
                        Loghează-te aici
                    </span>
                </div> */}
            </form>

            <ToastContainer />

            <Dialog
                open={open}
                onClose={handleCloseDisagree}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Acord privind prelucrarea datelor cu caracter personal"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Deoarece asigurarea protecției dumneavoastră în ceea ce
                        privește prelucrare datelor cu caracter personal
                        reprezintă pentru noi un obiectiv extrem de important,
                        am depus toate diligențele necesare pentru a ne conforma
                        standardelor impuse prin Regulamentul UE 2016/679
                        (https://eur-lex.europa.eu/legal-content/ro/TXT/PDF/?uri=CELEX:32016R0679)
                        și prin orice alt act normativ în vigoare pe teritoriul
                        României. Un pas important pentru realizarea acestui
                        obiectiv este reprezentat de informarea în legătură cu
                        modul în care datele dumneavoastră vor fi prelucrate
                        (prelucrare înseamnă orice operațiune sau set de
                        operațiuni efectuate asupra datelor cu caracter personal
                        sau asupra seturilor de date cu caracter personal, cu
                        sau fără utilizarea de mijloace automatizate, cum ar fi
                        colectarea, înregistrarea, organizarea, structurarea,
                        stocarea, adaptarea sau modificarea, extragerea,
                        consultarea, utilizarea, divulgarea prin transmitere,
                        diseminarea sau punerea la dispoziție în orice alt mod,
                        alinierea sau combinarea, restricționarea, ștergerea sau
                        distrugerea). Ne rezervăm dreptul de a modifica și
                        actualiza Politica de Confidențialitate și Politica de
                        Cookie. 1. Cine suntem și modul în care putem fi
                        contactați: Sindicatul Studenților din Cibernetică
                        (numit în continuare SiSC) este o organizație
                        studențească, neguvernamentală, autonomă, independentă
                        și nepartinică înființată în baza Legii nr. 21/1924 și a
                        Legii 54/1991. SiSC se constituie ca principalul
                        partener studențesc și neguvernamental în raport cu
                        structurile Facultății de Cibernetică, Statistică și
                        Informatică Economică din cadrul Academiei de Studii
                        Economice din București. SiSC se constituie prin
                        asocierea liberă a membrilor săi ca persoană juridică de
                        drept privat fără scop patrimonial, în conformitate cu
                        prevederile Legii 62/2011 și cu OG nr. 26/2000,
                        completată prin OG nr. 37/2003. SiSC se evidențiază
                        printr-un reprezentant legal, Ruxandra Marinache. Date
                        de contact: Adresă: Str. Frumoasă, nr. 31, sala 11,
                        București Nr. de telefon: 0758010038 E-mail:
                        recrutari@sisc.ro Pagina Facebook:
                        https://www.facebook.com/sisc.ase/ 2. Colectare date/
                        tipuri de date: Colectate automat în urma accesării (de
                        tipul): Adresă IP; Data și ora accesului; Diferența de
                        fus orar față de Meridianul Greenwich (GMT); Conținutul
                        cererii (website specific); Starea accesului/codul de
                        stare HTTP; Volumul de date transferat; Acces solicitat
                        la website; Browser, setări de limbă, versiunea de
                        browser, sistem de operare și suprafață. Colectate în
                        urma completării formularului de contact: Nume și
                        Prenume; Adresă de e-mail; Facultatea urmată; Anul de
                        studiu; Specializarea; Seria; Grupa; Link-ul către
                        profilul de Facebook; Numărul de telefon. 3. Fișierele
                        cookie: Acest Website nu folosește așa-numitele „fișiere
                        cookie”. 4. Scopul prelucrării datelor în vederea
                        realizării proiectului SiSC Promo ediția 2021. În cele
                        ce urmează vom detalia temeiul prelucrării datelor
                        dumneavoastră în cadrul acestui proiect: 4.1. În vederea
                        realizării unei comunicări cu dumneavoastră În cazul în
                        care inițiați o comunicare cu noi, datele dumneavoastră
                        vor fi stocate pentru perioada necesară realizării
                        scopului în care ne-ați contactat sau până la momentul
                        în care ne solicitați ștergerea datelor, oricare dintre
                        aceste momente ar surveni primul; 4.2. Pentru a vă putea
                        oferi servicii special configurate nevoilor
                        dumneavoastră 4.3. Pentru a putea avea oportunitatea de
                        a utiliza platforma destinată procesului de recrutare
                        Astfel, experiența dumneavoastră se va îmbunătăți; 4.4.
                        Pentru o mai bună organizare a evenimentelor Dacă
                        decidem că este necesară afișarea unor liste care conțin
                        numele dumneavoastră, scopul acestora este de a facilita
                        organizarea evenimentelor; 4.5. În scopuri de marketing
                        Putem utiliza informaţiile respective pentru
                        îmbunătăţirea produselor şi serviciilor pe care vi le
                        oferim; 4.6. Pentru apărarea intereselor noastre
                        legitime În cazul unor situații excepționale precum
                        atacuri cibernetice care pot periclita siguranța
                        platformei noastre sau în cazul în care informațiile
                        sunt solicitate de către instituțiile publice competente
                        în vederea soluționării anchetelor în desfășurare, ne
                        rezervăm dreptul de a prelucra informațiile vizate. 5.
                        Cât timp păstrăm datele dumneavoastră cu caracter
                        personal: Durata de timp pentru care vor fi păstrate
                        datele dumneavoastră este limitată și va fi determinată
                        de perioada necesară îndeplinirii scopurilor în vederea
                        cărora sunt prelucrate datele, această perioadă neputând
                        să depășească 2 ani. 6. Terți: 6.1. În cazul în care ne
                        revine obligația legală sau dacă este necesar pentru a
                        ne apăra un interes legitim, putem de asemenea divulga
                        anumite date cu caracter personal unor autorități
                        publice. 6.2. Ne asigurăm că accesul la datele
                        dumneavoastră de către terții persoane juridice de drept
                        privat se realizează în conformitate cu prevederile
                        legale privind protecția datelor și confidențialitatea
                        informațiilor, în baza unor contracte încheiate cu
                        aceștia. 7. Teritorialitate: Prelucrarea datelor se face
                        doar pe teritoriul României. 8. Drepturile
                        Dumneavoastră: Dreptul de acces al persoanei vizate (1)
                        Persoana vizată are dreptul de a obține din partea
                        operatorului o confirmare că se prelucrează sau nu date
                        cu caracter personal care o privesc și, în caz
                        afirmativ, acces la datele respective și la următoarele
                        informații: scopurile prelucrării; categoriile de date
                        cu caracter personal vizate; destinatarii sau
                        categoriile de destinatari cărora datele cu caracter
                        personal le-au fost sau urmează să le fie divulgate, în
                        special destinatari din țări terțe sau organizații
                        internaționale; acolo unde este posibil, perioada pentru
                        care se preconizează că vor fi stocate datele cu
                        caracter personal sau, dacă acest lucru nu este posibil,
                        criteriile utilizate pentru a stabili această perioadă;
                        existența dreptului de a solicita operatorului
                        rectificarea sau ștergerea datelor cu caracter personal
                        ori restricționarea prelucrării datelor cu caracter
                        personal referitoare la persoana vizată sau a dreptului
                        de a se opune prelucrării; dreptul de a depune o
                        plângere în fața unei autorități de supraveghere.
                        Dreptul la rectificare (1) Persoana vizată are dreptul
                        de a obține de la operator, fără întârzieri
                        nejustificate, rectificarea datelor cu caracter personal
                        inexacte care o privesc. Ținându-se seama de scopurile
                        în care au fost prelucrate datele, persoana vizată are
                        dreptul de a obține completarea datelor cu caracter
                        personal care sunt incomplete, inclusiv prin furnizarea
                        unei declarații suplimentare. Dreptul la ștergerea
                        datelor („dreptul de a fi uitat”) (1) Persoana vizată
                        are dreptul de a obține din partea operatorului
                        ștergerea datelor cu caracter personal care o privesc,
                        fără întârzieri nejustificate, iar operatorul are
                        obligația de a șterge datele cu caracter personal fără
                        întârzieri nejustificate în cazul în care se aplică unul
                        dintre următoarele motive: (a) datele cu caracter
                        personal nu mai sunt necesare pentru îndeplinirea
                        scopurilor pentru care au fost colectate sau prelucrate;
                        (b) persoana vizată își retrage consimțământul pe baza
                        căruia are loc prelucrarea, în conformitate cu articolul
                        6 alineatul (1) litera (a) sau cu articolul 9 alineatul
                        (2) litera (a), și nu există niciun alt temei juridic
                        pentru prelucrare; (c) persoana vizată se opune
                        prelucrării în temeiul articolului 21 alineatul (1) și
                        nu există motive legitime care să prevaleze în ceea ce
                        privește prelucrarea sau persoana vizată se opune
                        prelucrării în temeiul articolului 21 alineatul (2); (d)
                        datele cu caracter personal au fost prelucrate ilegal;
                        (e) datele cu caracter personal trebuie șterse pentru
                        respectarea unei obligații legale care revine
                        operatorului în temeiul dreptului Uniunii sau al
                        dreptului intern sub incidența căruia se află
                        operatorul; (f) datele cu caracter personal au fost
                        colectate în legătură cu oferirea de servicii ale
                        societății informaționale menționate la articolul 8
                        alineatul (1). (2) În cazul în care operatorul a făcut
                        publice datele cu caracter personal și este obligat, în
                        temeiul alineatului (1), să le șteargă, operatorul,
                        ținând seama de tehnologia disponibilă și de costul
                        implementării, ia măsuri rezonabile, inclusiv măsuri
                        tehnice, pentru a informa operatorii care prelucrează
                        datele cu caracter personal că persoana vizată a
                        solicitat ștergerea de către acești operatori a oricăror
                        link-uri către datele respective sau a oricăror copii
                        sau reproduceri ale acestor date cu caracter personal.
                        (3) Alineatele (1) și (2) nu se aplică în măsura în care
                        prelucrarea este necesară: (a) pentru exercitarea
                        dreptului la liberă exprimare și la informare; (b)
                        pentru respectarea unei obligații legale care prevede
                        prelucrarea în temeiul dreptului Uniunii sau al
                        dreptului intern care se aplică operatorului sau pentru
                        îndeplinirea unei sarcini executate în interes public
                        sau în cadrul exercitării unei autorități oficiale cu
                        care este învestit operatorul; (c) din motive de interes
                        public în domeniul sănătății publice, în conformitate cu
                        articolul 9 alineatul (2) literele (h) și (i) și cu
                        articolul 9 alineatul (3); (d) în scopuri de arhivare în
                        interes public, în scopuri de cercetare științifică sau
                        istorică ori în scopuri statistice, în conformitate cu
                        articolul 89 alineatul (1), în măsura în care dreptul
                        menționat la alineatul (1) este susceptibil să facă
                        imposibilă sau să afecteze în mod grav realizarea
                        obiectivelor prelucrării respective; (e) pentru
                        constatarea, exercitarea sau apărarea unui drept în
                        instanță. Dreptul la restricționarea prelucrării (1)
                        Persoana vizată are dreptul de a obține din partea
                        operatorului restricționarea prelucrării în cazul în
                        care se aplică unul din următoarele cazuri: (a) persoana
                        vizată contestă exactitatea datelor, pentru o perioadă
                        care îi permite operatorului să verifice exactitatea
                        datelor; (b) prelucrarea este ilegală, iar persoana
                        vizată se opune ștergerii datelor cu caracter personal,
                        solicitând în schimb restricționarea utilizării lor; (c)
                        operatorul nu mai are nevoie de datele cu caracter
                        personal în scopul prelucrării, dar persoana vizată i le
                        solicită pentru constatarea, exercitarea sau apărarea
                        unui drept în instanță; (d) persoana vizată s-a opus
                        prelucrării în conformitate cu articolul 21 alineatul
                        (1), pentru intervalul de timp în care se verifică dacă
                        drepturile legitime ale operatorului prevalează asupra
                        celor ale persoanei vizate. (2) În cazul în care
                        prelucrarea a fost restricționată în temeiul alineatului
                        (1), astfel de date cu caracter personal pot, cu
                        excepția stocării, să fie prelucrate numai cu
                        consimțământul persoanei vizate sau pentru constatarea,
                        exercitarea sau apărarea unui drept în instanță sau
                        pentru protecția drepturilor unei alte persoane fizice
                        sau juridice sau din motive de interes public important
                        al Uniunii sau al unui stat membru. (3) O persoană
                        vizată care a obținut restricționarea prelucrării în
                        temeiul alineatului (1) este informată de către operator
                        înainte de ridicarea restricției de prelucrare. Dreptul
                        la portabilitatea datelor (1) Persoana vizată are
                        dreptul de a primi datele cu caracter personal care o
                        privesc și pe care le-a furnizat operatorului într-un
                        format structurat, utilizat în mod curent și care poate
                        fi citit automat și are dreptul de a transmite aceste
                        date altui operator, fără obstacole din partea
                        operatorului căruia i-au fost furnizate datele cu
                        caracter personal, în cazul în care: (a) prelucrarea se
                        bazează pe consimțământ în temeiul articolului 6
                        alineatul (1) litera (a) sau al articolului 9 alineatul
                        (2) litera (a) sau pe un contract în temeiul articolului
                        6 alineatul (1) litera (b); (b) prelucrarea este
                        efectuată prin mijloace automate. (2) În exercitarea
                        dreptului său la portabilitatea datelor în temeiul
                        alineatului (1), persoana vizată are dreptul ca datele
                        cu caracter personal să fie transmise direct de la un
                        operator la altul acolo unde acest lucru este fezabil
                        din punct de vedere tehnic. (3) Exercitarea dreptului
                        menționat la alineatul (1) din prezentul articol nu
                        aduce atingere articolului 17. Respectivul drept nu se
                        aplică prelucrării necesare pentru îndeplinirea unei
                        sarcini executate în interes public sau în cadrul
                        exercitării unei autorități oficiale cu care este
                        învestit operatorul. (4) Dreptul menționat la alineatul
                        (1) nu aduce atingere drepturilor și libertăților
                        altora. Dreptul de a fi notificat în legătură cu
                        rectificarea, ștergerea sau restricționarea prelucrării
                        datelor cu caracter personal (1) Operatorul comunică
                        fiecărui destinatar căruia i-au fost divulgate datele cu
                        caracter personal orice rectificare sau ștergere a
                        datelor cu caracter personal sau restricționare a
                        prelucrării efectuate în conformitate cu articolul 16,
                        articolul 17 alineatul (1) și articolul 18, cu excepția
                        cazului în care acest lucru se dovedește imposibil sau
                        presupune eforturi disproporționate. Operatorul
                        informează persoana vizată cu privire la destinatarii
                        respectivi dacă persoana vizată solicită acest lucru. 9.
                        Dispoziții finale: Fără a vă afecta dreptul
                        dumneavoastră de a contacta în orice moment autoritatea
                        de supraveghere, puteți să ne contactați în prealabil la
                        adresa de e-mail recrutari@sisc.ro și vom depune toate
                        eforturile necesare pentru a rezolva orice problemă.
                        Aveți dreptul să depuneți o plângere la autoritatea de
                        supraveghere cu privire la prelucrarea datelor
                        dumneavoatră cu caracter personal. În România, datele de
                        contact ale autorității de supraveghere pentru protecția
                        datelor sunt următoarele: Autoritatea Națională de
                        Supraveghere a Prelucrării Datelor cu Caracter Personal
                        B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, cod
                        poștal 010336, București, România Telefon:
                        +40.318.059.211 sau +40.318.059.212;
                        E-mail:anspdcp@dataprotection.ro
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDisagree} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleCloseAgree} color="primary">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
        </>
    )
}

export default Register;