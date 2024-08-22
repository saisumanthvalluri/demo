import { CiWallet, CiSettings, CiHeart } from "react-icons/ci";
import { LiaUserEditSolid } from "react-icons/lia";
import { PiFiles } from "react-icons/pi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoShareSocialOutline, IoTicketSharp } from "react-icons/io5";
import { GiWallet, GiReceiveMoney, GiPayMoney, GiTrophyCup, GiMoneyStack } from "react-icons/gi";
import { MdOutlineQrCodeScanner, MdQuiz, MdSchool } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaMobileAlt, FaChartLine } from "react-icons/fa";
import { AiFillInsurance } from "react-icons/ai";
import { RiNetflixFill } from "react-icons/ri";

// ========================== Jobs page Data =============================
export const jobTabs = [
    { id: 1, title: "All India Govt. Jobs" },
    { id: 2, title: "State Govt. Jobs" },
    { id: 3, title: "Bank Jobs" },
    { id: 4, title: "Finance" },
    { id: 5, title: "Teaching Jobs" },
    { id: 6, title: "Engineering Jobs" },
    { id: 7, title: "Railway Jobs" },
    { id: 8, title: "IT & Software" },
    { id: 9, title: "Education & Training" },
    { id: 10, title: "Management & Leadership" },
    { id: 11, title: "Agriculture & Farming" },
    { id: 12, title: "Construction & Engineering" },
    { id: 13, title: "Tourism & Hospitality" },
];

export const jobsData = [
    {
        id: 1,
        title: "Senior Software Engineer",
        otrFilled: true,
        company: "Arogya Mitras & Team Leaders - 19 Posts",
        jobDescription:
            "Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor, Associate Professor Vacancy. Eligible Candidates who are interested in the Vacancy details & completed all eligibility criteria can read the notification & Apply Online.",
        qualification: "B.Sc (Nursing)/M.Sc (Nursing)/B.Pharmacy/Ph armacy-D/B.Sc",
        post_date: "12 Feb, 2023",
        last_date: "12 Mar, 2023",
        applicationFee: [
            { id: 1, item: "For UR/EWS/OBC : Rs. 1,180/-" },
            { id: 2, item: "For SC/ ST/PwBD/Women :NiL" },
            { id: 3, item: "Payment Mode: Demand Draft or in the form of NEFT" },
        ],
        imp_dates: [{ id: 1, item: "Date for Interview: 21-05-2024" }],
        ageLimit: [
            {
                id: 1,
                item: "Upper Age Limit: 45 Years",
            },
            {
                id: 2,
                item: "Age Relaxation is Applicable As Per Rules",
            },
        ],

        qualification_more: "Candidates Should Possess PG (MD/MS/DNB/MDS or DM,MCH)/M.Sc/Ph.D (Concerned Specialty)",
        vacancyDetails: [
            {
                postName: "Sn. Doctor",
                total: 2,
                age: 52,
                category: "SC/ST/OC",
                qulaification: "B.E/ B.Tech/ PG/ Ph.D (Relevant Engg)",
            },
            {
                postName: "Jr. Doctor",
                total: 4,
                age: 52,
                category: "SC/ST/OC",
                qulaification: "B.E/ B.Tech/ PG/ Ph.D ",
            },
            {
                postName: "Sub. Doctor",
                total: 6,
                age: 52,
                category: "SC/ST/OC",
                qulaification: "B.E/ B.Tech/ PG/ Ph.D ",
            },
        ],
    },
    {
        id: 2,
        title: "Senior Software Engineer",
        company: "Arogya Mitras & Team Leaders - 19 Posts",
        otrFilled: false,
        jobDescription:
            "Tezpur University has given an employment notification for the recruitment of Professor, Asst Professor, Associate Professor Vacancy. Eligible Candidates who are interested in the Vacancy details & completed all eligibility criteria can read the notification & Apply Online.",
        qualification: "B.Sc (Nursing)/M.Sc (Nursing)/B.Pharmacy/Ph armacy-D/B.Sc",
        post_date: "12 Feb, 2023",
        last_date: "12 Mar, 2023",
        applicationFee: [
            { id: 1, item: "For UR/EWS/OBC : Rs. 1,180/-" },
            { id: 2, item: "For SC/ST/PwBD/Women :NiL" },
            { id: 3, item: "Payment Mode: Demand Draft or in the form of NEFT" },
        ],
        imp_dates: [
            { id: 1, item: "Date for Interview: 21-05-2024" },
            { id: 2, item: "Announcement: 11 Feb, 2023" },
            { id: 3, item: "Application Opening: 15 Feb, 2023" },
        ],
        ageLimit: [{ id: 1, item: "Upper Age Limit: 45 Years" }],
        qualification_more: "Candidates Should Possess PG (MD/MS/DNB/MDS or DM,MCH)/M.Sc/Ph.D (Concerned Specialty)",
        vacancyDetails: [
            {
                postName: "Sn. Doctor",
                total: 2,
                age: 52,
                category: "SC/ST/OC",
                qulaification: "B.E/ B.Tech/ PG/ Ph.D (Relevant Engg)",
            },
            {
                postName: "Jr. Doctor",
                total: 4,
                age: 52,
                category: "SC/ST/OC",
                qulaification: "B.E/ B.Tech/ PG/ Ph.D ",
            },
        ],
    },
];

// ================================= Notifications Page Data =================================

export const notificationsData = [
    {
        id: 1,
        title: "Applied UPSC Application Successfully",
        time: "2024-06-11, 16:05:35",
        logo: "/landingPage/collaborators/upsc.svg",
        bgColor: "transparent",
    },
    {
        id: 2,
        title: "Applied UPSC Application Successfully",
        time: "2024-06-11, 16:05:35",
        logo: "/landingPage/collaborators/upsc.svg",
        bgColor: "transparent",
    },
    {
        id: 3,
        title: "Applied SSC GD Application Successfully",
        time: "2024-06-11, 16:05:35",
        logo: "/landingPage/collaborators/ssc.svg",
        bgColor: "#E0E0E0",
    },
];

// ======================= Landing Page Data ============================

export const jobNotifications = [
    {
        category: "SSC NOTIFICATIONS",
        items: [
            {
                id: 1,
                new: true,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
            {
                id: 2,
                new: true,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
            {
                id: 3,
                new: false,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
        ],
    },
    {
        category: "UPSC NOTIFICATIONS",
        items: [
            {
                id: 1,
                new: true,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
            {
                id: 2,
                new: true,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
            {
                id: 3,
                new: false,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
        ],
    },
    {
        category: "BANK NOTIFICATIONS",
        items: [
            {
                id: 1,
                new: true,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
            {
                id: 2,
                new: true,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
            {
                id: 3,
                new: false,
                date: "May 20th, 2024",
                desc: `SSA/ UDC Grade Limited Departmental Competitive
        Examination, 2023 & 2024: Uploading of Tentative 
        Answer Key(s) along with Candidates' Response Sheet(s).`,
            },
        ],
    },
];

export const faqs = [
    {
        question: "1.What government positions are most frequently sought after in India?",
        answer: "The most common government jobs in India are that of an army officer, navy officer, air force officer, clerk and probationary officer.",
    },
    {
        question: "2.What is UPSC?",
        answer: "UPSC is an Indian national examination conducted by the Union Public Service Commission (UPSC) in India. It covers 35 subjects, including English, Mathematics, Physics, Chemistry, Biology, Computer Science, History, Geography, Physical Education, Civics, Social Studies, Languages, Art, Science, and Humanities.",
    },
    {
        question: "3.What is BANK POWER?",
        answer: "Bank Power is a combination of Banking, In",
    },
    {
        question: "4. What is the role of a bank in India?",
        answer: "Banks play a crucial role in India by providing financial services, including banking, insurance, and loans. They facilitate transactions, handle deposits, and manage assets and liabilities.",
    },
    {
        question: "5. What is the role of a clerk in India?",
        answer: "Clerks are employees of a government department or agency that perform tasks such as collecting and processing official documents, filling in forms, and maintaining records.",
    },
];

export const collaborators = [
    {
        id: 1,
        img: "/landingPage/collaborators/insu_exam.svg",
        alt: "insu_exam",
        name: "INSURRANCE EXAM PODCAST",
        url: "https://www.insuexam.gov.in/",
    },
    {
        id: 2,
        img: "/landingPage/collaborators/digilocaker.svg",
        alt: "Digilocaker",
        name: "DIGILOCKER",
        url: "https://www.digilocaker.com/",
    },
    {
        id: 3,
        img: "/landingPage/collaborators/ncs.svg",
        alt: "NCS",
        name: "Natiocal Career Service",
        url: "https://www.ncs.com/",
    },
    {
        id: 4,
        img: "/landingPage/collaborators/sbi.svg",
        alt: "SBI",
        name: "SBI",
        url: "https://www.sbi.com/",
    },
    {
        id: 5,
        img: "/landingPage/collaborators/ssc.svg",
        alt: "SSC",
        name: "SSC",
        url: "https://www.ssc.com/",
    },
    {
        id: 6,
        img: "/landingPage/collaborators/indian_railway.svg",
        alt: "indian_railway",
        name: "Indian Railway",
        url: "https://www.indianrailways.com/",
    },
    {
        id: 7,
        img: "/landingPage/collaborators/upsc.svg",
        alt: "UPSC",
        name: "UPSC",
        url: "https://www.upsc.com/",
    },
    {
        id: 8,
        img: "/landingPage/collaborators/ibps.svg",
        alt: "IBPS",
        name: "IBPS",
        url: "https://www.ibps.com/",
    },
    {
        id: 9,
        img: "/landingPage/collaborators/gap.svg",
        alt: "Gov. of AP",
        name: "Govt. Of AP",
        url: "https://www.govofap.com/",
    },
    {
        id: 10,
        img: "/landingPage/collaborators/dp.svg",
        alt: "Delhi Police",
        name: "Delhi Police",
        url: "https://www.delhipolice.com/",
    },
];

export const statesWithAddress = [
    {
        name: "Andhra Pradesh",
        address: {
            branchName: "Guntur",
            phone: ["+91 676 542 1800", "+91 676 542 1820"],
            email: "support@mbitsol.com",
            address: " 11-41,Radham Bazar, Kanagala,Cherukupalli,Guntur,AP, India -  522259.",
        },
    },
    {
        name: "Arunachal Pradesh",
        address: {
            branchName: "Itanagar",
            phone: ["+91 385 232 1555", "+91 385 232 1575"],
            email: "support@mbitsol.com",
            address: "101, Town Hall Road, Itanagar, Arunachal Pradesh, India - 799001.",
        },
    },
    {
        name: "Assam",
        address: {
            branchName: "Guwahati",
            phone: ["+91 361 236 2444", "+91 361 236 2464"],
            email: "support@mbitsol.com",
            address: "101, Sardar Vallabhanagar Road, Guwahati, Assam, India - 781001.",
        },
    },
    {
        name: "Bihar",
        address: {
            branchName: "Patna",
            phone: ["+91 612 258 3333", "+91 612 258 3355"],
            email: "support@mbitsol.com",
            address: "112, Railway Road, Patna, Bihar, India - 800001.",
        },
    },
    {
        name: "Chhattisgarh",
        address: {
            branchName: "Raipur",
            phone: ["+91 808 271 0111", "+91 808 271 0133"],
            email: "support@mbitsol.com",
            address: "100, Shri Bhagwati Road, Raipur, Chhattisgarh, India - 492001.",
        },
    },
    {
        name: "Goa",
        address: {
            branchName: "Panaji",
            phone: ["+91 785 222 1000", "+91 785 222 1010"],
            email: "support@mbitsol.com",
            address: "100, Maitri Nagar, Panaji, Goa, India - 470001.",
        },
    },
    {
        name: "Gujarat",
        address: {
            branchName: "Gandhinagar",
            phone: ["+91 799 228 1000", "+91 799 228 1010"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Gandhinagar, Gujarat, India - 382001.",
        },
    },
    {
        name: "Haryana",
        address: {
            branchName: "Chandigarh",
            phone: ["+91 171 234 1234", "+91 171 234 1254"],
            email: "support@mbitsol.com",
            address: "100, Sector 19, Chandigarh, Haryana, India - 160001.",
        },
    },
    {
        name: "Himachal Pradesh",
        address: {
            branchName: "Shimla",
            phone: ["+91 941 422 1000", "+91 941 422 1010"],
            email: "support@mbitsol.com",
            address: "100, Kakatiya Road, Shimla, Himachal Pradesh, India - 171001.",
        },
    },
    {
        name: "Jharkhand",
        address: {
            branchName: "Ranchi",
            phone: ["+91 700 228 1000", "+91 700 228 1010"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Ranchi, Jharkhand, India - 832001.",
        },
    },
    {
        name: "Karnataka",
        address: {
            branchName: "Bangalore",
            phone: ["+91 80 412 3456", "+91 80 412 3476"],
            email: "support@mbitsol.com",
            address: "100, Karnataka Road, Bangalore, Karnataka, India - 560001.",
        },
    },
    {
        name: "Madhya Pradesh",
        address: {
            branchName: "Bhopal",
            phone: ["+91 755 228 1000", "+91 755 228 1010"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Bhopal, Madhya Pradesh, India - 462001.",
        },
    },
    {
        name: "Maharashtra",
        address: {
            branchName: "Mumbai",
            phone: ["+91 22 234 5678", "+91 22 234 5698"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Mumbai, Maharashtra, India - 400001.",
        },
    },
    {
        name: "Manipur",
        address: {
            branchName: "Imphal",
            phone: ["+91 977 228 1000", "+91 977 228 1010"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Imphal, Manipur, India - 795001.",
        },
    },
    {
        name: "Meghalaya",
        address: {
            branchName: "Nagaland",
            phone: ["+91 977 228 1000", "+91 977 228 1010"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Nagaland, Meghalaya, India - 796001.",
        },
    },
    {
        name: "Mizoram",
        address: {
            branchName: "West Nagaon",
            phone: ["+91 977 228 1000", "+91 977 228 1010"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, West Nagaon, Mizoram, India - 795001.",
        },
    },
    {
        name: "Nagaland",
        address: {
            branchName: "Kohima",
            phone: ["+91 977 228 1000", "+91 977 228 1010"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Kohima, Nagaland, India - 796001.",
        },
    },
    {
        name: "Orissa",
        address: {
            branchName: "Bhubaneswar",
            phone: ["+91 636 228 1000", "+91 636 228 1010"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Bhubaneswar, Orissa, India - 756001.",
        },
    },
    {
        name: "Pondicherry",
        address: {
            branchName: "Puducherry",
            phone: ["+91 687 228 1000", "+91 687 228 1010"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Puducherry, Pondicherry, India - 762001.",
        },
    },
    {
        name: "Punjab",
        address: {
            branchName: "Chandigarh",
            phone: ["+91 171 234 1234", "+91 171 234 1254"],
            email: "support@mbitsol.com",
            address: "100, Sector 19, Chandigarh, Haryana, India - 160001.",
        },
    },
    {
        name: "Rajasthan",
        address: {
            branchName: "Jaipur",
            phone: ["+91 755 228 1000", "+91 755 228 1010"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Jaipur, Rajasthan, India - 302001.",
        },
    },
    {
        name: "Sikkim",
        address: {
            branchName: "Gangtok",
            phone: ["+91 977 228 1000", "+91 977 228 1010"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Gangtok, Sikkim, India - 737001.",
        },
    },
    {
        name: "Tamil Nadu",
        address: {
            branchName: "Chennai",
            phone: ["+91 44 234 5678", "+91 44 234 5698"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Chennai, Tamil Nadu, India - 600001.",
        },
    },
    {
        name: "Telangana",
        address: {
            branchName: "Hyderabad",
            phone: ["+91 944 228 1000", "+91 944 228 1010"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Hyderabad, Telangana, India - 500001.",
        },
    },
    {
        name: "Tripura",
        address: {
            branchName: "Silchar",
            phone: ["+91 385 228 1000", "+91 385 228 1010"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Silchar, Tripura, India - 788001.",
        },
    },
    {
        name: "Uttar Pradesh",
        address: {
            branchName: "Lucknow",
            phone: ["+91 22 234 5678", "+91 22 234 5698"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Lucknow, Uttar Pradesh, India - 226001.",
        },
    },
    {
        name: "Uttarakhand",
        address: {
            branchName: "Kolkata",
            phone: ["+91 33 234 5678", "+91 33 234 5698"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Kolkata, West Bengal, India - 700001.",
        },
    },
    {
        name: "West Bengal",
        address: {
            branchName: "Kharagpur",
            phone: ["+91 82 234 5678", "+91 82 234 5698"],
            email: "support@mbitsol.com",
            address: "100, Sardar Vallabhanagar Road, Kharagpur, West Bengal, India - 822001.",
        },
    },
];

// ============================= OTR form page =============================
export const OTRSteps = [
    "Personal Details",
    "Professional Details",
    "Additional Deatails",
    "Upload Documents",
    "Declaration",
];

export const otrFormFields = [
    // =============== STEP 1 =================
    {
        step: 1,
        fields: [
            {
                name: "Aadhar_number",
                label: "Aadhar Number",
                type: "text",
                placeholder: "Enter Aadhar Number",
                required: true,
                minLength: 12,
            },
            {
                name: "confirm_aadhar_number",
                label: "Confirm Aadhar Number",
                type: "text",
                placeholder: "Confirm Aadhar Number",
                required: true,
                minLength: 12,
            },
            {
                name: "id_card_type",
                label: "Type of Identification card",
                type: "select",
                options: [
                    // { value: "Aadhar", label: "Aadhar" },
                    { value: "Passport", label: "Passport" },
                    { value: "Driving License", label: "Driving License" },
                    { value: "Voter ID", label: "Voter ID" },
                ],
                required: true,
            },
            {
                name: "id_card_number",
                label: "Identification card Number",
                type: "text",
                placeholder: "Enter Identification card Number",
                required: true,
                minLength: 12,
            },
            {
                name: "candidate_name",
                label: "Candidate’s Name(As per Matriculation Certificate)",
                type: "text",
                placeholder: "Enter Candidate's Name",
                required: true,
            },
            {
                name: "name_change",
                label: "Have you ever changed Name?",
                type: "radio",
                options: [
                    { value: "Yes", label: "Yes", id: "NCYES" },
                    { value: "No", label: "No", id: "NCNO" },
                ],
                required: true,
                reqVal: "Yes",
                notReqVal: "No",
                subFields: [
                    {
                        name: "new_name",
                        label: "New Name/Changed Name",
                        type: "text",
                        placeholder: "New Name/Changed Name",
                        required: true,
                        refField: "name_change",
                    },
                    {
                        name: "confirm_new_name",
                        label: "Confirm New Name/Changed Name",
                        type: "text",
                        placeholder: "New Name/Changed Name",
                        required: true,
                        refField: "name_change",
                    },
                ],
            },
            {
                name: "gender",
                label: "Gender",
                type: "radio",
                options: [
                    { value: "Male", label: "Male", id: "GENM" },
                    { value: "Female", label: "Female", id: "GENF" },
                    { value: "Other", label: "Other", id: "GENO" },
                ],
                required: true,
            },
            {
                name: "dob",
                label: "Date of Birth",
                type: "date",
                required: true,
            },
            {
                name: "father_name",
                label: "Father’s Name",
                type: "text",
                placeholder: "Enter Father’s Name",
                required: true,
            },
            {
                name: "mother_name",
                label: "Mother’s Name",
                type: "text",
                placeholder: "Enter Mother’s Name",
                required: true,
            },
            {
                name: "phone",
                label: "Phone Number",
                type: "text",
                placeholder: "Enter Phone Number",
                required: true,
                maxLength: 10,
                btn: {
                    text: "Send OTP",
                },
            },
            {
                name: "OTP_phone",
                label: "OTP via Phone",
                type: "otp",
                placeholder: "Enter OTP",
                regex: /^\d{10}$/,
                required: true,
                reqVal: "phone",
            },
            {
                name: "email",
                label: "Email Address",
                type: "text",
                placeholder: "Enter Email Address",
                required: true,
                btn: {
                    text: "Send OTP",
                },
            },
            {
                name: "otp_email",
                label: "OTP via Email",
                type: "otp",
                placeholder: "Enter OTP",
                regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                required: true,
                reqVal: "email",
            },
        ],
    },

    // STEP 2:

    {
        step: 2,
        fields: [
            //  ========================= 10th Fields =========================
            {
                name: "divider",
                type: "line",
                required: false,
                sectionName: "Matriculation(10th class)Details",
            },
            {
                name: "10th_board",
                label: "Matriculation (10th class) Education Board",
                type: "select",
                options: [
                    { value: "CBSE", label: "CBSE" },
                    { value: "ICSE", label: "ICSE" },
                    { value: "State Board", label: "State Board" },
                    { value: "Other", label: "Other" },
                ],
                required: true,
            },
            {
                name: "10th_roll_number",
                label: "Roll Number",
                type: "text",
                placeholder: "Enter Roll Number",
                required: true,
            },
            {
                name: "confirm_roll_number",
                label: "Confirm Roll Number ",
                type: "text",
                placeholder: "Re-enter Roll Number ",
                required: true,
            },
            {
                name: "visible_identification_marks",
                label: "Visible Identification marks",
                type: "text",
                placeholder: "Enter Visible Identification marks",
                required: true,
            },
            {
                name: "10th_yop",
                label: "Year of Passing",
                type: "date",
                required: true,
            },
            {
                name: "10th_school_name",
                label: "School Name",
                type: "text",
                placeholder: "Enter School Name",
                required: true,
            },
            {
                name: "10th_marks_type",
                label: "10th Marks Type",
                type: "radio",
                options: [
                    { value: "percentage", label: "%", id: "10P" },
                    { value: "CGPA", label: "CGPA", id: "10C" },
                ],
                required: true,
            },
            {
                name: "10th_marks",
                label: "10th Marks",
                type: "text",
                placeholder: "Enter 10th Marks",
                required: true,
            },

            // ====================== Intermediate/ Diploma Fileds ======================
            {
                name: "comp_int_or_dip",
                label: "Completed Inter/Diploma",
                type: "radio",
                required: true,
                options: [
                    { value: "Yes", label: "Yes", id: "CIDY" },
                    { value: "No", label: "No", id: "CIDN" },
                ],
                reqVal: "Yes",
                notReqVal: "No",
                subFields: [
                    {
                        name: "divider",
                        type: "line",
                        required: true,
                        sectionName: "Intermediate/Diploma Details",
                    },
                    {
                        name: "inter_or_diploma",
                        label: "Inter/Diploma",
                        type: "radio",
                        required: true,
                        options: [
                            { value: "inter", label: "Inter", id: "IODI" },
                            { value: "diploma", label: "Diploma", id: "IODD" },
                        ],

                        // inter: [
                        //     {
                        //         name: "divider",
                        //         type: "line",
                        //         required: true,
                        //         sectionName: "Inter(12th class)Details",
                        //     },
                        //     {
                        //         name: "inter_board",
                        //         label: "Inter Board",
                        //         type: "select",
                        //         options: [
                        //             { value: "CBSE", label: "CBSE" },
                        //             { value: "ICSE", label: "ICSE" },
                        //             { value: "State Board", label: "State Board" },
                        //             { value: "Other", label: "Other" },
                        //         ],
                        //         required: true,
                        //     },
                        //     {
                        //         name: "inter_roll_number",
                        //         label: "Roll Number",
                        //         type: "text",
                        //         placeholder: "Enter Roll Number",
                        //         required: true,
                        //     },
                        //     {
                        //         name: "confirm_inter_roll_number",
                        //         label: "Confirm Roll Number ",
                        //         type: "text",
                        //         placeholder: "Re-enter Roll Number ",
                        //         required: true,
                        //     },
                        //     {
                        //         name: "inter_yop",
                        //         label: "Year of Passing",
                        //         type: "date",
                        //         required: true,
                        //     },
                        //     {
                        //         name: "inter_marks_type",
                        //         label: "Inter Marks Type",
                        //         type: "radio",
                        //         options: [
                        //             { value: "percentage", label: "%" },
                        //             { value: "CGPA", label: "CGPA" },
                        //         ],
                        //         required: true,
                        //     },
                        //     {
                        //         name: "inter_marks",
                        //         label: "Inter Marks",
                        //         type: "text",
                        //         placeholder: "Enter Inter Marks",
                        //         required: true,
                        //     },
                        // ],

                        // diploma: [
                        //     {
                        //         name: "divider",
                        //         type: "line",
                        //         required: true,
                        //         sectionName: "Diploma or Polytechnic Details",
                        //     },
                        //     {
                        //         name: "diploma_board",
                        //         label: "Diploma Board",
                        //         type: "select",
                        //         options: [
                        //             { value: "CBSE", label: "CBSE" },
                        //             { value: "ICSE", label: "ICSE" },
                        //             { value: "State Board", label: "State Board" },
                        //             { value: "Other", label: "Other" },
                        //         ],
                        //         required: true,
                        //     },
                        //     {
                        //         name: "diploma_roll_number",
                        //         label: "Roll Number",
                        //         type: "text",
                        //         placeholder: "Enter Roll Number",
                        //         required: true,
                        //     },
                        //     {
                        //         name: "confirm_diploma_roll_number",
                        //         label: "Confirm Roll Number ",
                        //         type: "text",
                        //         placeholder: "Re-enter Roll Number ",
                        //         required: true,
                        //     },
                        //     {
                        //         name: "diploma_yop",
                        //         label: "Year of Passing",
                        //         type: "date",
                        //         required: true,
                        //     },
                        //     {
                        //         name: "diploma_marks_type",
                        //         label: "Diploma Marks Type",
                        //         type: "radio",
                        //         options: [
                        //             { value: "percentage", label: "%" },
                        //             { value: "CGPA", label: "CGPA" },
                        //         ],
                        //         required: true,
                        //     },
                        //     {
                        //         name: "diploma_marks",
                        //         label: "Diploma Marks",
                        //         type: "text",
                        //         placeholder: "Enter Diploma Marks",
                        //         required: true,
                        //     },
                        // ],
                    },
                    {
                        name: "inter_board",
                        label: "Inter/Diploma Board",
                        type: "select",
                        options: [
                            { value: "CBSE", label: "CBSE" },
                            { value: "ICSE", label: "ICSE" },
                            { value: "State Board", label: "State Board" },
                            { value: "Other", label: "Other" },
                        ],
                        required: true,
                    },
                    {
                        name: "roll_number",
                        label: "Roll Number",
                        type: "text",
                        placeholder: "Enter Roll Number",
                        required: true,
                    },
                    {
                        name: "confirm_roll_number",
                        label: "Confirm Roll Number ",
                        type: "text",
                        placeholder: "Re-enter Roll Number ",
                        required: true,
                    },
                    {
                        name: "yop",
                        label: "Year of Passing",
                        type: "date",
                        required: true,
                    },
                    {
                        name: "marks_type",
                        label: "Marks Type",
                        type: "radio",
                        options: [
                            { value: "percentage", label: "%", id: "IDP" },
                            { value: "CGPA", label: "CGPA", id: "IDC" },
                        ],
                        required: true,
                    },
                    {
                        name: "marks",
                        label: "Marks",
                        type: "text",
                        placeholder: "Enter Marks",
                        required: true,
                    },
                    // ============== Graduation Fileds =============================
                    {
                        name: "comp_graduation",
                        label: "Have you completed Graduation?",
                        type: "radio",
                        required: true,
                        options: [
                            { value: "Yes", label: "Yes", id: "YGC" },
                            { value: "No", label: "No", id: "NGC" },
                        ],
                        reqVal: "Yes",
                        notReqVal: "No",
                        subFields: [
                            {
                                name: "divider",
                                type: "line",
                                required: true,
                                sectionName: "Graduation Details",
                            },
                            {
                                name: "graduation_board",
                                label: "Graduation Board",
                                type: "select",
                                options: [
                                    { value: "CBSE", label: "CBSE" },
                                    { value: "ICSE", label: "ICSE" },
                                    { value: "State Board", label: "State Board" },
                                    { value: "Other", label: "Other" },
                                ],
                                required: true,
                            },
                            {
                                name: "graduation_roll_number",
                                label: "Roll Number",
                                type: "text",
                                placeholder: "Enter Roll Number",
                                required: true,
                            },
                            {
                                name: "confirm_graduation_roll_number",
                                label: "Confirm Roll Number ",
                                type: "text",
                                placeholder: "Re-enter Roll Number ",
                                required: true,
                            },
                            {
                                name: "graduation_yop",
                                label: "Year of Passing",
                                type: "date",
                                required: true,
                            },
                            {
                                name: "graduation_marks_type",
                                label: "Graduation Marks Type",
                                type: "radio",
                                options: [
                                    { value: "percentage", label: "%", id: "GP" },
                                    { value: "CGPA", label: "CGPA", id: "GC" },
                                ],
                                required: true,
                            },
                            {
                                name: "graduation_marks",
                                label: "Graduation Marks",
                                type: "text",
                                placeholder: "Enter Graduation Marks",
                                required: true,
                            },

                            // =================== Post Graduation Fields  ===================
                            {
                                name: "comp_pg",
                                label: "Have you completed Post Graduation?",
                                type: "radio",
                                required: true,
                                options: [
                                    { value: "Yes", label: "Yes", id: "YPGC" },
                                    { value: "No", label: "No", id: "NPGC" },
                                ],
                                reqVal: "Yes",
                                notReqVal: "No",
                                subFields: [
                                    {
                                        name: "divider",
                                        type: "line",
                                        required: true,
                                        sectionName: "Post Graduation Details",
                                    },
                                    {
                                        name: "postgraduation_board",
                                        label: "Post Graduation Board",
                                        type: "select",
                                        options: [
                                            { value: "CBSE", label: "CBSE" },
                                            { value: "ICSE", label: "ICSE" },
                                            { value: "State Board", label: "State Board" },
                                            { value: "Other", label: "Other" },
                                        ],
                                        required: true,
                                    },
                                    {
                                        name: "postgraduation_roll_number",
                                        label: "Roll Number",
                                        type: "text",
                                        placeholder: "Enter Roll Number",
                                        required: true,
                                    },
                                    {
                                        name: "confirm_postgraduation_roll_number",
                                        label: "Confirm Roll Number ",
                                        type: "text",
                                        placeholder: "Re-enter Roll Number ",
                                        required: true,
                                    },
                                    {
                                        name: "postgraduation_yop",
                                        label: "Year of Passing",
                                        type: "date",
                                        required: true,
                                    },
                                    {
                                        name: "postgraduation_marks_type",
                                        label: "Post Graduation Marks Type",
                                        type: "radio",
                                        options: [
                                            { value: "percentage", label: "%", id: "PGP" },
                                            { value: "CGPA", label: "CGPA", id: "PGC" },
                                        ],
                                        required: true,
                                    },
                                    {
                                        name: "postgraduation_marks",
                                        label: "Post Graduation Marks",
                                        type: "text",
                                        placeholder: "Enter Post Graduation Marks",
                                        required: true,
                                    },

                                    // ========================== PhD Fileds ==========================
                                    {
                                        name: "comp_phd",
                                        label: "Have you completed PHD?",
                                        type: "radio",
                                        required: true,
                                        options: [
                                            { value: "Yes", label: "Yes", id: "YPHD" },
                                            { value: "No", label: "No", id: "NPHD" },
                                        ],
                                        reqVal: "Yes",
                                        notReqVal: "No",
                                        subFields: [
                                            {
                                                name: "divider",
                                                type: "line",
                                                required: true,
                                                sectionName: "PhD Details",
                                            },
                                            {
                                                name: "phd_university",
                                                label: "PhD University",
                                                type: "text",
                                                placeholder: "Enter PhD University",
                                                required: true,
                                            },
                                            {
                                                name: "phd_department",
                                                label: "PhD Department",
                                                type: "text",
                                                placeholder: "Enter PhD Department",
                                                required: true,
                                            },
                                            {
                                                name: "phd_yop",
                                                label: "Year of PhD",
                                                type: "date",
                                                required: true,
                                            },
                                            {
                                                name: "phd_marks_type",
                                                label: "PhD Marks Type",
                                                type: "radio",
                                                options: [
                                                    { value: "percentage", label: "%", id: "PHDP" },
                                                    { value: "CGPA", label: "CGPA", id: "PHDC" },
                                                ],
                                                required: true,
                                            },
                                            {
                                                name: "phd_marks",
                                                label: "PhD Marks",
                                                type: "text",
                                                placeholder: "Enter PhD Marks",
                                                required: true,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },

    // STEP 3:
    {
        step: 2,
        fields: [
            {
                name: "cast_number",
                label: "CAST Certificate Number",
                type: "text",
                placeholder: "Enter CAST Certificate Number",
                required: true,
                minLength: 12,
            },
            {
                name: "confirm_cast_number",
                label: "Confirm Certificate Number",
                type: "text",
                placeholder: "Confirm CAST Certificate Number",
                required: true,
                minLength: 12,
            },
            {
                name: "nationality",
                label: "Nationality",
                type: "select",
                options: [
                    { value: "Indian", label: "Indian" },
                    { value: "Other", label: "Other" },
                ],
            },
            {
                name: "visible_identification_marks",
                label: "Visible Identification marks",
                type: "text",
                placeholder: "Enter Visible Identification marks",
                required: true,
            },
            {
                name: "PwBD",
                label: "Are you person with benchmark Disability(PwBD)?",
                type: "radio",
                required: true,
                options: [
                    { value: "Yes", label: "Yes", id: "PwBDYES" },
                    { value: "No", label: "No", id: "PwBDNO" },
                ],
                reqVal: "Yes",
                notReqVal: "No",

                subFields: [
                    {
                        name: "type_of_disability",
                        label: "Type of disability",
                        type: "select",
                        options: [
                            { value: "Blindness", label: "Blindness" },
                            { value: "Deafness", label: "Deafness" },
                            {
                                value: "Multiple Disabilities",
                                label: "Multiple Disabilities",
                            },
                            {
                                value: "Physical Disabilities",
                                label: "Physical Disabilities",
                            },
                            { value: "Speech Disabilities", label: "Speech Disabilities" },
                            { value: "Others", label: "Others" },
                        ],
                        required: true,
                        refField: "PwBD",
                    },
                    {
                        name: "disability_certificate_number",
                        label: "Disability certificate Number",
                        type: "text",
                        placeholder: "Enter Certificate Number",
                        required: true,
                        refField: "PwBD",
                    },
                ],
            },
            {
                name: "divider",
                type: "line",
                required: true,
                sectionName: "Current Address",
            },
            {
                name: "current_address",
                label: "Current Address",
                type: "textarea",
                placeholder: "Enter Current Address",
                required: true,
            },
            {
                name: "current_state",
                label: "State",
                type: "select",
                options: [
                    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
                    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
                    { value: "Assam", label: "Assam" },
                    { value: "Bihar", label: "Bihar" },
                    { value: "Chhattisgarh", label: "Chhattisgarh" },
                    { value: "Goa", label: "Goa" },
                    { value: "Gujarat", label: "Gujarat" },
                    { value: "Haryana", label: "Haryana" },
                    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
                    { value: "Jharkhand", label: "Jharkhand" },
                    { value: "Karnataka", label: "Karnataka" },
                    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
                    { value: "Maharashtra", label: "Maharashtra" },
                    { value: "Manipur", label: "Manipur" },
                    { value: "Meghalaya", label: "Meghalaya" },
                    { value: "Mizoram", label: "Mizoram" },
                    { value: "Nagaland", label: "Nagaland" },
                    { value: "Odisha", label: "Odisha" },
                    { value: "Puducherry", label: "Puducherry" },
                    { value: "Rajasthan", label: "Rajasthan" },
                    { value: "Sikkim", label: "Sikkim" },
                    { value: "Tamil Nadu", label: "Tamil Nadu" },
                    { value: "Telangana", label: "Telangana" },
                    { value: "Tripura", label: "Tripura" },
                    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
                    { value: "Uttarakhand", label: "Uttarakhand" },
                    { value: "West Bengal", label: "West Bengal" },
                    { value: "Others", label: "Others" },
                ],
                required: true,
            },
            {
                name: "current_district",
                label: "District",
                type: "select",
                options: [
                    { value: "Anakapalli", label: "Anakapalli" },
                    { value: "Anantapur", label: "Anantapur" },
                    { value: "Annamaiah", label: "Annamaiah" },
                    { value: "Bapatla", label: "Bapatla" },
                    { value: "Chittoor", label: "Chittoor" },
                    { value: "East Godavari", label: "East Godavari" },
                    { value: "Eluru", label: "Eluru" },
                    { value: "Guntur", label: "Guntur" },
                    { value: "Kadapa", label: "Kadapa" },
                    { value: "Kakinada", label: "Kakinada" },
                    { value: "Konaseema", label: "Konaseema" },
                    { value: "Krishna", label: "Krishna" },
                    { value: "Kurnool", label: "Kurnool" },
                    { value: "Nandyal", label: "Nandyal" },
                    { value: "NTR", label: "NTR" },
                    { value: "Palnadu", label: "Palnadu" },
                    { value: "Parvathipuram Manyam", label: "Parvathipuram Manyam" },
                    { value: "Prakasam", label: "Prakasam" },
                    { value: "Srikakulam", label: "Srikakulam" },
                    { value: "Sri Sathya Sai", label: "Sri Sathya Sai" },
                    {
                        value: "Sri Potti Sriramulu Nellore",
                        label: "Sri Potti Sriramulu Nellore",
                    },
                    { value: "Tirupati", label: "Tirupati" },
                    { value: "Visakhapatnam", label: "Visakhapatnam" },
                    { value: "Vizianagaram", label: "Vizianagaram" },
                    { value: "West Godavari", label: "West Godavari" },
                ],
                required: true,
            },
            {
                name: "current_pincode",
                label: "Pincode",
                type: "text",
                placeholder: "Enter Pincode",
                required: true,
            },

            {
                name: "current_address_same_as_permanent_address?",
                label: "Is permanent address same as current address?",
                type: "radio",
                required: true,
                options: [
                    { value: "Yes", label: "Yes", id: "CASAPAYES" },
                    { value: "No", label: "No", id: "CASAPANO" },
                ],
                reqVal: "No",
                notReqVal: "Yes",

                subFields: [
                    {
                        name: "divider",
                        type: "line",
                        required: true,
                        sectionName: "Permanent Address",
                    },
                    {
                        name: "permanent_address",
                        label: "Permanent Address",
                        type: "textarea",
                        placeholder: "Enter Permanent Address",
                        required: true,
                    },
                    {
                        name: "permanent_state",
                        label: "State",
                        type: "select",
                        options: [
                            { value: "Andhra Pradesh", label: "Andhra Pradesh" },
                            { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
                            { value: "Assam", label: "Assam" },
                            { value: "Bihar", label: "Bihar" },
                            { value: "Chhattisgarh", label: "Chhattisgarh" },
                            { value: "Goa", label: "Goa" },
                            { value: "Gujarat", label: "Gujarat" },
                            { value: "Haryana", label: "Haryana" },
                            { value: "Himachal Pradesh", label: "Himachal Pradesh" },
                            { value: "Jharkhand", label: "Jharkhand" },
                            { value: "Karnataka", label: "Karnataka" },
                            { value: "Madhya Pradesh", label: "Madhya Pradesh" },
                            { value: "Maharashtra", label: "Maharashtra" },
                            { value: "Manipur", label: "Manipur" },
                            { value: "Meghalaya", label: "Meghalaya" },
                            { value: "Mizoram", label: "Mizoram" },
                            { value: "Nagaland", label: "Nagaland" },
                            { value: "Odisha", label: "Odisha" },
                            { value: "Puducherry", label: "Puducherry" },
                            { value: "Rajasthan", label: "Rajasthan" },
                            { value: "Sikkim", label: "Sikkim" },
                            { value: "Tamil Nadu", label: "Tamil Nadu" },
                            { value: "Telangana", label: "Telangana" },
                            { value: "Tripura", label: "Tripura" },
                            { value: "Uttar Pradesh", label: "Uttar Pradesh" },
                            { value: "Uttarakhand", label: "Uttarakhand" },
                            { value: "West Bengal", label: "West Bengal" },
                            { value: "Others", label: "Others" },
                        ],
                        required: true,
                    },
                    {
                        name: "permanent_district",
                        label: "District",
                        type: "select",
                        options: [
                            { value: "Anakapalli", label: "Anakapalli" },
                            { value: "Anantapur", label: "Anantapur" },
                            { value: "Annamaiah", label: "Annamaiah" },
                            { value: "Bapatla", label: "Bapatla" },
                            { value: "Chittoor", label: "Chittoor" },
                            { value: "East Godavari", label: "East Godavari" },
                            { value: "Eluru", label: "Eluru" },
                            { value: "Guntur", label: "Guntur" },
                            { value: "Kadapa", label: "Kadapa" },
                            { value: "Kakinada", label: "Kakinada" },
                            { value: "Konaseema", label: "Konaseema" },
                            { value: "Krishna", label: "Krishna" },
                            { value: "Kurnool", label: "Kurnool" },
                            { value: "Nandyal", label: "Nandyal" },
                            { value: "NTR", label: "NTR" },
                            { value: "Palnadu", label: "Palnadu" },
                            { value: "Parvathipuram Manyam", label: "Parvathipuram Manyam" },
                            { value: "Prakasam", label: "Prakasam" },
                            { value: "Srikakulam", label: "Srikakulam" },
                            { value: "Sri Sathya Sai", label: "Sri Sathya Sai" },
                            {
                                value: "Sri Potti Sriramulu Nellore",
                                label: "Sri Potti Sriramulu Nellore",
                            },
                            { value: "Tirupati", label: "Tirupati" },
                            { value: "Visakhapatnam", label: "Visakhapatnam" },
                            { value: "Vizianagaram", label: "Vizianagaram" },
                            { value: "West Godavari", label: "West Godavari" },
                        ],
                        required: true,
                    },
                    {
                        name: "permanent_pincode",
                        label: "Pincode",
                        type: "text",
                        placeholder: "Enter Pincode",
                        required: true,
                    },
                ],
            },
        ],
    },

    // STEP 4:
    {
        step: 4,
        fields: [
            {
                name: "photo",
                label: "Scanned Photograph Of The Candidate",
                type: "file",
                required: true,
                helperText: [
                    // "Please upload a scanned photograph of the candidate.",
                    // "Ensure the photograph is clear, legible, and not obscured by any document.",
                    "Photo Should be clearly visible in the Adjacent box",
                    // "The file size should not exceed 5MB.",
                    // "Only JPEG, PNG, and TIFF formats are allowed.",
                ],
            },

            {
                name: "signature",
                label: "Scanned Signature Of The Candidate",
                type: "file",
                required: true,
                helperText: [
                    // "Please upload a signature of the candidate.",
                    "Signature Should not be in CAPITAL / BLOCK letters",
                ],
            },
            {
                name: "aadhar",
                label: "Scanned Aadhar Card Of The Candidate",
                type: "file",
                required: true,
            },
            {
                name: "pan_card",
                label: "Scanned Pan Card Of The Candidate",
                type: "file",
                required: true,
            },
            {
                name: "cast_certificate",
                label: "Scanned Cast Certificate Of The Candidate",
                type: "file",
                required: true,
            },
            {
                name: "10th_certificate",
                label: "Scanned 10th Certificate Of The Candidate",
                type: "file",
                required: true,
            },
            {
                name: "12th_certificate",
                label: "Scanned 12th or Diploma Certificate Of The Candidate",
                type: "file",
                required: true,
                reqField: "comp_int_or_dip",
            },
            {
                name: "graduation_certificate",
                label: "Scanned Graduation Certificate Of The Candidate",
                type: "file",
                required: true,
                reqField: "comp_graduation",
            },
            {
                name: "pg_certificate",
                label: "Scanned Post Graduation Certificate Of The Candidate",
                type: "file",
                required: true,
                reqField: "comp_pg",
            },
        ],
    },

    // STEP 5:
    {
        step: 5,
        fields: [
            {
                name: "diclaration",
                type: "diclaration",
                label: "Diclaration",
                content: [
                    "1.I hearby Declare that the Information given by me in this form is true..,complete and correct to the best of my knowledge and believe.",
                    "2.I understand that the event of any information being found false or incorrect at any stage ,my Candidature /appointment is liable to be cancelled or terminated.",
                ],
            },
            {
                name: "agree_tc",
                label: "I agree with the above Terms and Conditions",
                type: "checkbox",
                required: true,
            },
        ],
    },
];

// ======================================= Profile Page =======================================
export const profileMenu = [
    {
        secName: "My ToolKit",
        type: "normal",
        items: [
            {
                id: "WALLET",
                icon: CiWallet,
                name: "Wallet",
            },
            {
                id: "OTRFORM",
                icon: LiaUserEditSolid,
                name: "OTR Form",
            },
            {
                id: "SAVEDJOBS",
                icon: CiHeart,
                name: "Saved Jobs",
            },
            {
                id: "SAVEDPYQPS",
                icon: PiFiles,
                name: "Saved PYQPs",
            },
        ],
    },
    {
        secName: "Account Settings",
        type: "normal",
        items: [
            {
                id: "SETTINGS",
                icon: CiSettings,
                name: "Settings",
            },
            {
                id: "HELP&SUPPORT",
                icon: IoIosHelpCircleOutline,
                name: "Help & Support",
            },
            {
                id: "R&E",
                icon: IoShareSocialOutline,
                name: "Refer & Earn",
            },
        ],
    },
    {
        secName: "Payment Center",
        type: "Payment",
        items: [
            {
                id: "TD",
                name: "Tatal Balance",
                amount: ": Rs 0.00",
            },
            {
                id: "WB",
                name: "Wallet",
                amount: ": Rs 0.00",
            },
            {
                id: "DEPOSITE",
                name: "Deposite",
                amount: ": Rs 0.00",
            },
            {
                id: "WITHDRAWAL",
                name: "Withdrawal",
                amount: ": Rs 0.00",
            },
            {
                id: "TRANSFER",
                name: "Transations",
            },
        ],
    },
];

export const profileMenuLg = [
    {
        id: "WALLET",
        icon: CiWallet,
        name: "Wallet",
    },
    {
        id: "OTRFORM",
        icon: LiaUserEditSolid,
        name: "OTR Form",
    },
    {
        id: "SAVEDJOBS",
        icon: CiHeart,
        name: "Saved Jobs",
    },
    {
        id: "SAVEDPYQPS",
        icon: PiFiles,
        name: "Saved PYQPs",
    },
    {
        id: "R&E",
        icon: IoShareSocialOutline,
        name: "Refer & Earn",
    },
    {
        id: "HELP&SUPPORT",
        icon: IoIosHelpCircleOutline,
        name: "Help & Support",
    },
    {
        id: "SETTINGS",
        icon: CiSettings,
        name: "Settings",
    },
];

export const walletAPT = [
    {
        id: "WALLET",
        name: "Add Money",
        icon: GiWallet,
    },
    {
        id: "QR",
        name: "Pay",
        icon: MdOutlineQrCodeScanner,
    },
    {
        id: "BANK",
        name: "Transfer",
        icon: BsBank2,
    },
];

export const walletServices = [
    {
        id: "SM",
        name: "Send Money",
        icon: FcMoneyTransfer,
    },
    {
        id: "RM",
        name: "Request Money",
        icon: GiReceiveMoney,
    },
    {
        id: "MR",
        name: "Mobile Recharge",
        icon: FaMobileAlt,
    },
    {
        id: "PR",
        name: "Pay Bills",
        icon: GiPayMoney,
    },
    {
        id: "BT",
        name: "Book Tickets",
        icon: IoTicketSharp,
    },
    {
        id: "RC",
        name: "Rewards & Cashbacks",
        icon: GiTrophyCup,
    },
    {
        id: "INS",
        name: "Insurance",
        icon: AiFillInsurance,
    },
    {
        id: "NS",
        name: "Netflix Subscription",
        icon: RiNetflixFill,
    },
    {
        id: "WE",
        name: "Watch & Earn",
        icon: GiMoneyStack,
    },
    {
        id: "QUIZZES",
        name: "Quizzes",
        icon: MdQuiz,
    },
    {
        id: "COURSES",
        name: "Courses",
        icon: MdSchool,
    },
    {
        id: "SAMPLE",
        name: "Chart",
        icon: FaChartLine,
    },
];

export const deliveryAddressFields = [
    {
        name: "divider",
        type: "line",
        required: true,
    },
    {
        name: "address_line",
        label: "Address Line",
        type: "textarea",
        placeholder: "Flat, House no.,Building, Company, Apartment",
        required: true,
    },
    {
        name: "street",
        label: "Street/Village",
        placeholder: "Street/Village",
        type: "text",
        required: true,
    },
    {
        name: "landmark",
        label: "Landmark",
        placeholder: "Landmark",
        type: "text",
        required: true,
    },
    {
        name: "state",
        label: "State",
        type: "select",
        options: [
            { value: "Andhra Pradesh", label: "Andhra Pradesh" },
            { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
            { value: "Assam", label: "Assam" },
            { value: "Bihar", label: "Bihar" },
            { value: "Chhattisgarh", label: "Chhattisgarh" },
            { value: "Goa", label: "Goa" },
            { value: "Gujarat", label: "Gujarat" },
            { value: "Haryana", label: "Haryana" },
            { value: "Himachal Pradesh", label: "Himachal Pradesh" },
            { value: "Jharkhand", label: "Jharkhand" },
            { value: "Karnataka", label: "Karnataka" },
            { value: "Madhya Pradesh", label: "Madhya Pradesh" },
            { value: "Maharashtra", label: "Maharashtra" },
            { value: "Manipur", label: "Manipur" },
            { value: "Meghalaya", label: "Meghalaya" },
            { value: "Mizoram", label: "Mizoram" },
            { value: "Nagaland", label: "Nagaland" },
            { value: "Odisha", label: "Odisha" },
            { value: "Puducherry", label: "Puducherry" },
            { value: "Rajasthan", label: "Rajasthan" },
            { value: "Sikkim", label: "Sikkim" },
            { value: "Tamil Nadu", label: "Tamil Nadu" },
            { value: "Telangana", label: "Telangana" },
            { value: "Tripura", label: "Tripura" },
            { value: "Uttar Pradesh", label: "Uttar Pradesh" },
            { value: "Uttarakhand", label: "Uttarakhand" },
            { value: "West Bengal", label: "West Bengal" },
            { value: "Others", label: "Others" },
        ],
        required: true,
    },
    {
        name: "city",
        label: "City",
        placeholder: "City",
        type: "text",
        required: true,
    },
    {
        name: "pincode",
        label: "Pincode",
        placeholder: "Pincode",
        pattern: /^[1-9][0-9]{5}$/,
        errorMessage: "Invalid Pincode",
        required: true,
        type: "text",
    },
];

export const profileDetailsFields = [
    {
        name: "divider",
        type: "line",
        required: true,
    },
    {
        name: "name",
        label: "Name",
        placeholder: "Name",
        type: "text",
        required: true,
    },
    {
        name: "email",
        label: "Email",
        placeholder: "Email",
        type: "text",
        required: true,
    },
    {
        name: "otp",
        label: "OTP",
        placeholder: "Enter OTP Via Email",
        pattern: /^\d{6}$/,
        errorMessage: "Invalid OTP",
        required: true,
        type: "text",
    },
    {
        name: "phone",
        label: "Phone",
        placeholder: "+91-9876543210",
        errorMessage: "Invalid Phone Number",
        required: true,
        type: "text",
        maxLength: 10,
        btn: {
            text: "Send OTP",
            disabled: true,
            class: "btn-primary",
            onClick: () => {
                // Send OTP to phone number
            },
        },
    },
    {
        name: "phone_otp",
        label: "OTP",
        placeholder: "Enter OTP Via Phone Number",
        errorMessage: "Invalid Phone OTP",
        required: true,
        type: "otp",
        regex: /^\d{10}$/,
        reqVal: "phone",
    },
    {
        name: "qulalification",
        label: "Qualification",
        type: "select",
        options: [
            { value: "Bachelor's Degree", label: "Bachelor's Degree" },
            { value: "Master's Degree", label: "Master's Degree" },
            { value: "PhD", label: "PhD" },
            { value: "Others", label: "Others" },
        ],
        required: true,
    },
    {
        name: "intrest",
        label: "Intrests",
        type: "select",
        options: [
            { value: "Reading", label: "Reading" },
            { value: "Cooking", label: "Cooking" },
            { value: "Dancing", label: "Dancing" },
            { value: "Traveling", label: "Traveling" },
            { value: "Painting", label: "Painting" },
            { value: "Photography", label: "Photography" },
            { value: "Singing", label: "Singing" },
        ],
        required: true,
    },
];

export const changePasswordFields = [
    {
        name: "divider",
        type: "line",
        required: true,
    },
    {
        name: "current_password",
        label: "Current Password",
        type: "password",
        placeholder: "Current Password",
        required: true,
    },
    {
        name: "new_password",
        label: "New Password",
        type: "password",
        placeholder: "New Password",
        required: true,
    },
    {
        name: "confirm_password",
        label: "Confirm Password",
        placeholder: "Confirm New Password",
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        type: "password",
        required: true,
    },
    {
        name: "phone_number",
        label: "Phone Number",
        placeholder: "+91-9876543210",
        errorMessage: "Invalid Phone Number",
        required: true,
        type: "text",
        maxLength: 10,
        btn: {
            text: "Send OTP",
            disabled: true,
            class: "btn-primary",
            onClick: () => {
                // Send OTP to phone number
            },
        },
    },
    {
        name: "otp",
        label: "OTP",
        placeholder: "Enter OTP Via Phone Number",
        regex: /^\d{10}$/,
        errorMessage: "Invalid OTP",
        required: true,
        type: "otp",
        reqVal: "phone_number",
    },
];
