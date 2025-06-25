const typingform = document.querySelector(".typing-form");
const chatList = document.querySelector(".chat-list");
const suggestions = document.querySelectorAll(".suggestion-list .suggestion");
const toggleThemeButton = document.querySelector("#toggle-theme-button");
const deleteChatButton= document.querySelector("#delete-chat-button");
let userMessage = null;

const AIT_KNOWLEDGE_BASE = `
AIT Pune (Army Institute of Technology) is an engineering college affiliated with Savitribai Phule Pune University. It offers UG courses like Information Technology, Computer Engineering, E&TC, Mechanical and Automotive and Robotics Engineering.
Only wards of army personnel can apply through JEE Mains.
Notable fests: Cultural aakriti, Technical aakriti, Sports aakriti, Amethyst, and many more.
Clubs include: I&E cell, Competitive programming club, DDQ club, Sports Club, Technical Board, Cultural Board, Nature's club
Located at Dighi Hills, Pune, Maharashtra.
Accreditations:NAAC Accredited
NBA Accreditation for all UG programs (valid till June 2025)
Awards & Rankings:
Best Professional College Award 2016-17 by SPPU
AICTE-CII Survey of Industry-Linked Institutes 2020: Rank - Gold
NIRF Engineering Rank Band: 201–300
Placements are rated as one of the best in West Maharashtra incl Pune region.
Consistent 90% campus placements.
Average salary of Rs 11.00 LPA
Highest Salary of Rs 51.00 LPA
Total No of industries visiting every year 80+.
Total No of new industries visiting every year 25+.
Pre-placement Offers through internship in World Class industries.
Industries from all major sector are recruiting in a big number.
Dr. Ganesh Mundhe is the head of the department of applied science and general engineering(ASGE).
Dr. G R Patil is the head of the department of Electronics and telecommunication engineering (E&TC).
Dr.(Mrs)Sangeeta Jadhav is the head of the department of Information Technology (IT).
Prof.(Dr.) S R Dhore is the head of the department of Computer Engineering (CSE).
Prof (Dr) UV Awasarmol is the head of the department of Mechanical Engineering and Autoomotive and Robotics Engineering .
 Faculty and technical staff at asge departement-
 #	Name of Staff	Designation	Email ID	Qualification & Specialization
1	Dr Ganesh Mundhe	HOD & Asso Professor	gmundhe@aitpune.edu.in	PhD (Mathematics)
2	Dr (Mrs )Swati Kulkarni	Associate Professor	skulkarni@aitpune.edu.in	PhD (Civil)
3	Dr (Mrs) Seema Tiwari	Associate Professor	stiwari@aitpune.edu.in	PhD (Chemistry)
4	Ms Mridula Chandola	Assistant Professor	mchandola@aitpune.edu.in	M Phil (Physics)
5	Ms Anita Suryawanshi	Assistant Professor	anitasuryawanshi@aitpune.edu.in	MTech (Civil), Pursuing PhD
6	Mr V. Hivrale	Assistant Professor	vhivrale@aitpune.edu.in	MSc (Maths)
7	Mr Rushikesh Patil	Assistant Professor	rushikeshpatil@aitpune.edu.in	ME (Civil)
8	Mr Sachin Tanwade	Assistant Professor	sachintanawade@aitpune.edu.in	MSc (Physics)
9	Ms Nithya Baskar	Assistant Professor	nityabhaskar@aitpune.edu.in	MA (English)(Communication Skills)
10	Mrs Surekha Gite	Assistant Professor	surekhagite@aitpune.edu.in	MSc (Mathematics)
11	Dr Sonali Bhosle	Assistant Professor	sonalibhosle@aitpune.edu.in	PhD Chemistry
12	Dr Amruta Shinde	Assistant Professor	amrutashinde@aitpune.edu.in	PhD Mathematics
13	Ms Snehal More	Assistant Professor	snehalmore@aitpune.edu.in	MBA (HR), BA, B.Ed (English and social skill)
14	Dr. Ketankumar Ganure	Assistant Professor	ketankumarganure@aitpune.edu.in	MSc, MPhil, PhD (Chemistry)
15	Ms Reena Gedam	Assistant Professor (Soft Skill)	reenagedam@aitpune.edu.in	MA, BEd
16	Mr Sachin Gaikwad	Assistant Professor	sachingaikwad@aitpune.edu.in	Msc in Mathematics
17	Mr Hemant Khandale	Assistant Professor	hemantkhandale@aitpune.edu.in	MA (English), MBA (HR) ,BEd (English)
18	Mr Vishal Pardeshi	Physical Director	physicaldirector@aitpune.edu.in	BCom Mped
Technical Staff
#	Name of Staff	Designation	Email ID	Qualification & Specialization
1	Ms Swati Salunkhe	Tech. Asst.(Chemistry)	ssalunkhe@aitpune.edu.in	MSc (Chemistry)
2	Ms Varsha Kulkarni	Tech. Asst.(Civil)	vkulkarni@aitpune.edu.in	Diploma (Civil Engg.)
3	Mr Raghu Babar	Lab. Asst ( Physics)	rbabar@aitpune.edu.in	BSc (Chemistry)
4	Ms Pratiksha Wayal	Lab. Asst	pratikshawayal@aitpune.edu.in	Diploma in Computer Engg.

Faculty and technical staff at E&TC departement-
Dr B P Patil	Professor & Principal	principal@aitpune.edu.in	Ph.D, Wireless Communication
2	Dr G R Patil	Professor & HOD	hodetc@aitpune.edu.in,
grpatil@aitpune.edu.in	ME (Electronics), PhD Electronics
3	Dr P B Karandikar	Associate Professor	pkarandikar@aitpune.edu.in	ME(Control System),PhD (Electrical)
4	Dr Shraddha Oza	Associate Professor	sdoza@ aitpune.edu.in	ME (Electronics), PhD
5	Dr Renuka Bhandari	Associate Professor	rbhandari@aitpune.edu.in	ME (Digital Comm), PhD
6	Dr Sushma Patil	Associate Professor	swadar@aitpune.edu.in	ME (Electronics), PhD
7	Dr Rajashree Suryawanshi	Associate Professor	rsuryavanshi@aitpune.edu.in	ME, PhD
8	Mr J B Jawale	Assistant Professor	jjawale@aitpune.edu.in	ME (Electronics)
9	Mr Vijay Kumar Karra	Assistant Professor	vkarra@aitpune.edu.in	ME (Electronics)
10	Dr Avinash Patil	Assistant Professor	apatil@aitpune.edu.in	ME (Electroncis-VLSI), PhD
11	Dr Preeti Warrier	Assistant Professor	pwarrier@aitpune.edu.in	M.Tech (Power Electronics), PhD
12	Mr Girish Kapse	Assistant Professor	gkapse@aitpune.edu.in	M.Tech (Electronics)
13	Dr Shilpa Pawar	Assistant Professor	spawar@aitpune.edu.in	ME (E&TC)
14	Dr Snehal Marathe	Assistant Professor	smarathe@aitpune.edu.in	ME (Electroncis-VLSI)
15	Ms Dhanashree Patil	Assistant Professor	dhanashreepatil@aitpune.edu.in	ME (Digital Electronics)
16	Ms Pragati Rana	Assistant Professor	pragatirana@aitpune.edu.in	M.Tech (Signal Processing)
17	Dr Sandeep Sakhahari Bidwai	Assistant Professor	sandeepbidwai@aitpune.edu.in	ME (Wireless Communication), PhD
18	Ms Mahima Jain	Assistant Professor	mahimajain@aitpune.edu.in	ME (Digital Tech & Instrumentation)
19	Mr Ashish Dudhale	Assistant Professor	ashishdudhale@aitpune.edu.in	M.Tech (Embedded Systems)
20	Mr Sukumar Chougule	Assistant Professor	sukumarchougule@aitpune.edu.in	M.E Electronics (Digital Systems)
21	Ms Supriya Kalamkar	Assistant Professor	supriyakalamkar@aitpune.edu.in	M.Tech(Electronics & Communication)
22	Ms Komal Gill	Assistant Professor	komalgill@aitpune.edu.in	M.Tech(Nanoscience & Technology)
23	Ms Pranita Tambe	Assistant Professor	pranitatambe@aitpune.edu.in	M.Tech(VLSI & Embedded System)
24	Ms Monica Gunjal	Assistant Professor	monicagunjal@aitpune.edu.in	ME (E&TC), PhD Pursuing

Technical Staff
#	Name of Staff	Designation	Email ID	Qualification
1	Mrs Rajashree Challamarad	Computer Programmer	rajashreesc@aitpune.edu.in	B.E(E&TC)
2	Mrs Sujata Kadam	Technical Assistant	skadam@aitpune.edu.in	Diploma in E&TC
3	Mr Ashok Katole	Technical Assistant	akatole@aitpune.edu.in	Diploma in E&TC
4	Mr Nitesh Sukhadeve	Lab. Assistant	nsukhadeve@aitpune.edu.in	Diploma in E&TC
5	Ms Mohini Shendge	Lab. Assistant	mohinis@aitpune.edu.in	Diploma in E&TC
6	Ms Vidya Jadhav	Lab. Assistant	vidyajadhav@aitpune.edu.in	DETE, ADCSSA
7	Mr Pravin Sangle	Lab. Assistant	pravinsangle@aitpune.edu.in	BE(E&TC)
8	Mrs Deepali Apraj	Lab. Assistant	deepaliapraj@aitpune.edu.in	Diploma in Electronics
9	Ms Paurnima Patil	Lab. Assistant	paurnimapatil@aitpune.edu.in	Diploma in E&TC
10	Ms Bhagyashri Pawar	Lab. Assistant	bhagyashripawar@aitpune.edu.in	BE (E&TC)
11	Ms Namrata Pawshe	Lab. Assistant	namratapawshe@aitpune.edu.in	BE (Computer)
12	Mr Bhikaji Gadekar	Tech. Assistant	bhikajigadekar@aitpune.edu.in	Diploma in E&TC
 
Faculty and technical staff at IT departement-
1	Dr Sangeeta Jadhav	HOD & Professor	hodit@aitpune.edu.in	ME (E&TC- Instrumentation), PhD (Electronics)
2	Mr Dhananjay Auradkar	Associate Professor	dgauradkar@aitpune.edu.in	ME (Electronics)
3	Dr Rahul Desai	Associate Professor	rahuldesai@aitpune.edu.in	MTech (E&TC) ,PhD (Electronics- Wireless Communication, Ad Hoc Network)
4	Dr Ashwini Sapkal	Associate Professor	asapkal@aitpune.edu.in	ME (Computer), PhD (Computer- Neural Network)
5	Dr Gajanan Walunjkar	Associate Professor	gwalunjkar@aitpune.edu.in	ME (Computer) , PhD (Computer Science and Engineering)
6	Ms Vaishali Ingale	Assistant Professor	vingale@aitpune.edu.in	ME (Computer)
7	Mrs Geeta Patil	Assistant Professor	gpatil@aitpune.edu.in	ME (E&TC)
8	Mr Yuvraj Gholap	Assistant Professor	ygholap@aitpune.edu.in	ME (Computer)
9	Mr Sandeep Samleti	Assistant Professor	ssamleti@aitpune.edu.in	ME (Computer)
10	Dr Rupali Bagate	Assistant Professor	rbagate@aitpune.edu.in	ME (Computer), PhD (Computer Science and Engineering)
11	Dr Dipika Birari	Assistant Professor	dipikabirari@aitpune.edu.in	ME (Computer), PhD (Computer Engg)
12	Ms Anjali Hudedamani	Assistant Professor	anjalihudedamani@aitpune.edu.in	MTech (Embedded & VLSI)
13	Ms Kavita Arkeri	Assistant Professor	kavitaarkeri@aitpune.edu.in	MTech (Computer)
14	Ms Priya Jadhav	Assistant Professor	priyajadhav@aitpune.edu.in	MTech (CSE)
15	Ms Jayshree Lavhare	Assistant Professor	jayshreelavhare@aitpune.edu.in	MTech (CE)
16	Ms Trupti Najan	Assistant Professor	truptinajan@aitpune.edu.in	ME (CE)
Technical Staff List
#	Name of Staff	Designation	Email ID	Qualification & Specialization
1	Ms Jyoti Taralkar	Computer Programmer	jyoti@aitpune.edu.in	DETE, ADCSSAA
2	Mr Vitthal Pathrikar	Computer Programmer	vitthalpathrikar@aitpune.edu.in	BE IT
3	Ms Shital Omkar Suvarnakar	Lab. Assistant	shitalsuvarnakar@aitpune.edu.in	Diploma in Computer Engineering
4	Mr Suryakant Kenjale	Lab. Assistant	suryakantkenjale@aitpune.edu.in	BA, Diploma in IT
5	Ms Pushpa Kalane	Lab. Assistant	pushpakalane@aitpune.edu.in	BE E&TC
6	Mr Makarand Saste	Lab. Assistant	makarandsaste@aitpune.edu.in	BE Computer
7	Mr Shashikant Mane	Lab. Assistant	shashikantmane@aitpune.edu.in	Diploma in Cryptology
8	Mr Ashirwad Gajale	Lab. Assistant	ashirwadgajale@aitpune.edu.in	BE IT
9	Mr Tejas Parbate	Lab. Assistant	tejasparbate@aitpune.edu.in	MCA
10	Ms Shrushti Babar	Data Entry Operator	shrushtibabar@aitpune.edu.in	BSc(Phy), Master in DSA with AI

Faculty and technical staff at CSE departement-
1	Dr S R Dhore	HOD & Professor	hodcomp@aitpune.edu.in	ME (Computer), PhD(Computer Engg)
2	Dr N K Bansode	Professor	nkbansode@aitpune.edu.in	ME (Computer), PhD(Computer Engg)
3	Dr Jayadevan R	Associate Professor	rjayadevan@aitpune.edu.in	ME (Computer), PhD(Computer Engg)
4	Dr Sagar Rane	Associate Professor	sagarrane@aitpune.edu.in	M.Tech (C&IT), PhD (C&IT)
5	Mr M B Lonare	Assistant Professor	mblonare@aitpune.edu.in	ME (Computer), PhD Pursuing
6	Mr P R Sonawane	Assistant Professor	prsonawane@aitpune.edu.in	ME (Computer), PhD Pursuing
7	Mrs Asha Sathe	Assistant Professor	asathe@aitpune.edu.in	ME (CSE), PhD Pursuing
8	Dr Vaishali Ganganwar	Assistant Professor	vganganwar@aitpune.edu.in	M.Tech (Computer), PhD
9	Ms Sushama A Shirke	Assistant Professor	sshirke@aitpune.edu.in	M.Tech (Computer), PhD Pursuing
10	Mrs Rushali S Patil	Assistant Professor	rpatil@aitpune.edu.in	ME (Computer), PhD Pursuing
11	Dr Sharayu Lokhande	Assistant Professor	slokhande@aitpune.edu.in	ME (Computer), PhD
12	Ms Y T Hambir	Assistant Professor	ythambir@aitpune.edu.in	ME (Computer), PhD Pursuing
13	Mr Anup P Kadam	Assistant Professor	akadam@aitpune.edu.in	M.Tech (Computer Network)
14	Dr Nikita Singhal	Assistant Professor	ngupta@aitpune.edu.in	M.Tech (CSE), PhD
15	Dr Sita Yadav	Assistant Professor	syadav@aitpune.edu.in	ME (Computer), PhD in Computer Engg
16	Mr Kuldeep Hule	Assistant Professor	kuldeephule@aitpune.edu.in	ME (CS&E), PhD Pursuing
17	Mr Mangesh Hajare	Assistant Professor	mangeshhajare@aitpune.edu.in	M.Tech (CS&T), PhD Pursuing
18	Ms Aarati Gangshetty	Assistant Professor	aaratigangshetty@aitpune.edu.in	M.Tech (CS)
19	Mr Umakant Dhatrak	Assistant Professor	umakantdhatrak@aitpune.edu.in	M.Tech(OE&CS)
20	Ms Trupti Katte	Assistant Professor	truptikatte@aitpune.edu.in	ME (CSE)
21	Ms Pradnya Tapkir	Assistant Professor	pradnyatapkir@aitpune.edu.in	ME (CSE)
22	Ms Poonam Nagale	Assistant Professor	poonamnagale@aitpune.edu.in	ME (CSE)
23	Ms Pallavi Edke	Assistant Professor	pallaviedke@aitpune.edu.in	ME (CE)
24	Ms Shreya Jare	Assistant Professor	shreyajare@aitpune.edu.in	M. Tech (Network Security, Machine Learning)
Technical Staff
#	Name of Staff	Designation	Email ID	Qualification & Specialization
1	Mr K K Dass	Programmer	kkdass@aitpune.edu.in	BCS
2	Mr U P Deolankar	Tech Assistant	updeolankar@aitpune.edu.in	DLTS-LRS
3	Mr K Prakash	Lab Assistant	kprakash@aitpune.edu.in	DE&TCE
4	Mr Rahul Kadam	Programmer	rkadam@aitpune.edu.in	BCA
5	Mr Ravindindra Desai	Programmer	rdesai@aitpune.edu.in	AMIE CSE, DCE
6	Ms Priyanka Holkar	Lab Assistant	priyankaholkar@aitpune.edu.in	MCA
7	Mrs Varsha Sadawarte	Lab Assistant	varshasadawarte@aitpune.edu.in	DERE,ADCCSSAA
8	Mr Pramod Patil	Lab Assistant	pramodpatil@aitpune.edu.in	Diploma in CSE
9	Ms Shraddha Suvarnkar	Lab Assistant	shraddhasuvarnakar@aitpune.edu.in	BCA
9	Mr Sandip Sonwalkar	Lab Assistant	sandipsonwalkar@aitpune.edu.in	BE(CSE)
10	Mr Mohan Mane	Lab Assistant	mohanmane@aitpune.edu.in	MCA
11	Ms Rupali Pawar	Lab Assistant	rupalipawar@aitpune.edu.in	MSc (CS)

Faculty and Technical staff at mechanical and automotive and robotics engineering departement -
1	Dr U V Awasarmol	Professor and Head	uvawasarmol@aitpune.edu.in , hodmech@aitpune.edu.in
2	Mr R S Verma	Associate Professor	rsverma@aitpune.edu.in
3	Mr V R Kulkarni	Associate Professor and Wksp Suptdt	vrkulkarni@aitpune.edu.in
4	Dr J D Patil	Associate Professor	jdpatil@aitpune.edu.in
5	Dr Pritee Purohit	Associate Professor	pmpurohit@aitpune.edu.in
6	Mr P V Dorlikar	Assistant Professor	pvdorlikar@aitpune.edu.in
7	Dr R B Gurav	Assistant Professor	rbgurav@aitpune.edu.in
8	Mr Y V Patel	Assistant Professor	yvpatel@aitpune.edu.in
9	Dr S M Gaikwad	Assistant Professor	smgaikwad@aitpune.edu.in
10	Mr A A Ramgude	Assistant Professor	aaramgude@aitpune.edu.in
11	Mr M B Phatangare	Assistant Professor	mphatangare@aitpune.edu.in
12	Mr R S Godse	Assistant Professor	rgodse@aitpune.edu.in
13	Dr Laxmikant D Jathar	Assistant Professor	laxmikantjathar@aitpune.edu.in
14	Ms Gouri Bhasale	Assistant Professor	gouribhasale@aitpune.edu.in
List of Staff
#	Name of Staff	Designation	Email ID
1.	Mr A G Jirgale	Chargeman	agjirgale@aitpune.edu.in
2.	Mr E R Gargote	Technical Assistant	ergargote@aitpune.edu.in
3.	Mr B D Sonawane	Instructor	bdsonawane@aitpune.edu.in
4.	Mr M T Sankpal	Mechanic	mtsankpal@aitpune.edu.in
5.	Mr S B Shikare	Programmer	sbshikare@aitpune.edu.in
6.	Mr S H Karande	Lab Assistant	shkarande@aitpune.edu.in
7.	Mr N V Barathe	Lab Assistant	nishadbarathe@aitpune.edu.in
Col MK Prasad (Retd ) is the current director of AIT Pune. 


`;


// API conifiguration
const API_KEY = "YOUR_API_KEY";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

const loadLocalStorageData = () => {
    const savedChats = localStorage.getItem("savedChats");
   const isLightMode = (localStorage.getItem("themecolor")==="light_mode");
    document.body.classList.toggle("light_mode",isLightMode);
    toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";

    chatList.innerHTML = savedChats || "";
    document.body.classList.toggle("hide-header", savedChats);
    chatList.scrollTo(0, chatList.scrollHeight);


}
loadLocalStorageData();

const createMessageElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
}
const showTypingEffect = (text, textElement, incomingMessageDiv) => {
    const words = text.split(' ');
    let currentWordIndex = 0;

const typingInterval = setInterval(() => {
        textElement.textContent += words[currentWordIndex++] + ' ';
        incomingMessageDiv.querySelector(".icon").classList.add("hide");
        if(currentWordIndex === words.length) {
            clearInterval(typingInterval);
            incomingMessageDiv.querySelector(".icon").classList.remove("hide");
            localStorage.setItem("savedChats",chatList.innerHTML);
            chatList.scrollTo(0, chatList.scrollHeight);
        }

    }, 75);
}
const generateAPIResponse = async (incomingMessageDiv) =>{
    const textElement = incomingMessageDiv.querySelector(".text");
    try{
        const response = await fetch(API_URL,{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({ 
                contents: [{
                  role: "user",
                  parts: [{
                    text: `You are a helpful assistant that only answers questions about AIT Pune.
              Use only the following information to respond:
              
              ${AIT_KNOWLEDGE_BASE}
              
              User question: ${userMessage}
              
              If the question is not about AIT Pune, say: "Sorry, I can only answer questions related to AIT Pune."`
                  }]
                }]
              })
         });
        const data = await response.json();
        if(!response.ok) throw new Error(data.error.message);
const apiResponse = data?.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');

showTypingEffect(apiResponse, textElement, incomingMessageDiv);
} catch(error){
    isResponseGenerating = false;
      textElement.innerText = error.message;
      textElement.classList.add("error");
    } finally {
        incomingMessageDiv.classList.remove("loading");
    }

}

const showLoadingAnimation = () => {
    const html = `<div class="message-content">
                    <img src="gemini.svg" alt="AI Image" class="avatar">
                    <p class="text"></p>
                </div>
                <div class="loading-indicator">
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                    <div class="loading-bar"></div>
                </div>
                <span onclick="copyMessage(this)" class="icon material-symbols-rounded">
                    content_copy
                    </span>`; 
const incomingMessageDiv = createMessageElement(html,"incoming","loading");
chatList.appendChild(incomingMessageDiv);
chatList.scrollTo(0, chatList.scrollHeight);

generateAPIResponse(incomingMessageDiv);


}
const copyMessage = (copyIcon) => {
    const messageText = copyIcon.parentElement.querySelector(".text").innerText;
    navigator.clipboard.writeText(messageText);
    copyIcon.innerText = "done";
    setTimeout(() => {
        copyIcon.innerText = "content_copy"},1000);
    
}
const handleOutgoingChat = () => {
    userMessage = typingform.querySelector(".typing-input").value.trim() || userMessage;
    if (!userMessage) return;

    const html = `<div class="message-content">
        <img src="user.jpg" alt="User Image" class="avatar">
        <p class="text"></p>
    </div>`;
    const outgoingMessageDiv = createMessageElement(html, "outgoing");
    outgoingMessageDiv.querySelector(".text").innerText = userMessage;
    chatList.appendChild(outgoingMessageDiv);
    typingform.reset();
    chatList.scrollTo(0, chatList.scrollHeight);
    document.body.classList.add("hide-header");

    // Check for greeting or identity/name questions
    const greetingRegex = /^(hi|hello|hey)\b/i;
    const identityRegex = /\bwho\s+are\s+you\b/i;
    const nameRegex = /\bwhat\s+is\s+your\s+name\b/i;

    if (greetingRegex.test(userMessage) || identityRegex.test(userMessage) || nameRegex.test(userMessage)) {
        const greetingReply = "Namaste! I am AITeract, an AI chatbot for Army Institute of Technology. Tell me, how can I help you?";
        
        const responseHtml = `<div class="message-content">
            <img src="gemini.svg" alt="AI Image" class="avatar">
            <p class="text"></p>
        </div>
        <span onclick="copyMessage(this)" class="icon material-symbols-rounded">content_copy</span>`;
        
        const greetingMessageDiv = createMessageElement(responseHtml, "incoming");
        chatList.appendChild(greetingMessageDiv);
        chatList.scrollTo(0, chatList.scrollHeight);

        // Optional: add typing effect
        const textElement = greetingMessageDiv.querySelector(".text");
        showTypingEffect(greetingReply, textElement, greetingMessageDiv);

        return;
    }

    setTimeout(showLoadingAnimation, 500);
};


suggestions.forEach((suggestion) => {
    suggestion.addEventListener("click", () => {
        userMessage = suggestion.querySelector(".text").innerText;
        handleOutgoingChat();
    });
});
toggleThemeButton.addEventListener("click",() => {
   const isLightMode = document.body.classList.toggle("light_mode");
   localStorage.setItem("themecolor", isLightMode ? "light_mode" : "dark_mode");
    toggleThemeButton.innerText = isLightMode ? "dark_mode" : "light_mode";
});
deleteChatButton.addEventListener("click",() => {
    if(confirm("Are you sure you want to delete all chats?")) {
        localStorage.removeItem("savedChats");
       loadLocalStorageData();
    }
});

typingform.addEventListener("submit",(e)=> {
    e.preventDefault();

    handleOutgoingChat();

});
