if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const mongoose = require('mongoose');
const Employee = require('./models/employee');

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/yelp-camp"
mongoose.connect(`${dbUrl}`);

let employees = [
    {
        Name: "Freda Wilbud",
        Email: "fwilbud0@huffingtonpost.com",
        Profession: "Engineer II",
        Address: "6 Muir Point",
        Education: "University of Perpetual Help, System Dalta",
        Gender: "Female"
    },
    {
        Name: "Rosa Phettis",
        Email: "rphettis1@uol.com.br",
        Profession: "Dental Hygienist",
        Address: "23 Continental Park",
        Education: "Kirchliche Hochschule Bethel",
        Gender: "Female"
    },
    {
        Name: "Cassandry McEvon",
        Email: "cmcevon2@google.fr",
        Profession: "Dental Hygienist",
        Address: "51 Troy Junction",
        Education: "Universidad del Cono Sur de las Américas",
        Gender: "Female"
    },
    {
        Name: "Reg Gourley",
        Email: "rgourley3@usda.gov",
        Profession: "Office Assistant IV",
        Address: "0 Laurel Terrace",
        Education: "Keiwa College",
        Gender: "Male"
    },
    {
        Name: "Hamlen Boorer",
        Email: "hboorer4@redcross.org",
        Profession: "Help Desk Operator",
        Address: "03981 Corscot Court",
        Education: "University of Trinity College",
        Gender: "Male"
    },
    {
        Name: "Dukey Cuddehy",
        Email: "dcuddehy5@feedburner.com",
        Profession: "Sales Associate",
        Address: "33 Bayside Road",
        Education: "Indiana Wesleyan University",
        Gender: "Male"
    },
    {
        Name: "Anastassia Buddington",
        Email: "abuddington6@elegantthemes.com",
        Profession: "Programmer Analyst I",
        Address: "91356 Victoria Point",
        Education: "National Metallurgical Academy of Ukraine",
        Gender: "Female"
    },
    {
        Name: "Kippie Andreia",
        Email: "kandreia7@virginia.edu",
        Profession: "Clinical Specialist",
        Address: "7 Merry Alley",
        Education: "Europäische Betriebswirtschafts-Akademie",
        Gender: "Female"
    },
    {
        Name: "Artemus Steeples",
        Email: "asteeples8@howstuffworks.com",
        Profession: "Quality Control Specialist",
        Address: "50902 Stone Corner Parkway",
        Education: "Modern University For Technology and Information",
        Gender: "Male"
    },
    {
        Name: "Latia Pes",
        Email: "lpes9@amazon.de",
        Profession: "Project Manager",
        Address: "27589 Del Mar Road",
        Education: "University of Messina",
        Gender: "Female"
    },
    {
        Name: "Phillie Parnaby",
        Email: "pparnabya@geocities.com",
        Profession: "Web Designer IV",
        Address: "7337 Eggendart Court",
        Education: "Hiroshima International University",
        Gender: "Female"
    },
    {
        Name: "Perice Fencott",
        Email: "pfencottb@shareasale.com",
        Profession: "Health Coach II",
        Address: "2829 Lotheville Plaza",
        Education: "Shahid Bahonar University of Kerman",
        Gender: "Male"
    },
    {
        Name: "Eduardo Gleder",
        Email: "eglederc@mapy.cz",
        Profession: "Systems Administrator II",
        Address: "125 Old Gate Court",
        Education: "Omdurman Ahlia University",
        Gender: "Male"
    },
    {
        Name: "Ingra Bradnam",
        Email: "ibradnamd@de.vu",
        Profession: "Payment Adjustment Coordinator",
        Address: "1 Oak Valley Plaza",
        Education: "Dallas Baptist University",
        Gender: "Male"
    },
    {
        Name: "Alessandro Spellissy",
        Email: "aspellissye@hp.com",
        Profession: "Environmental Specialist",
        Address: "05113 Hoard Street",
        Education: "Universidad Bolivariana",
        Gender: "Male"
    },
    {
        Name: "Giacinta Legonidec",
        Email: "glegonidecf@mysql.com",
        Profession: "GIS Technical Architect",
        Address: "17 Summit Avenue",
        Education: "Hong Kong University of Science and Technology",
        Gender: "Female"
    },
    {
        Name: "Adriena Hellis",
        Email: "ahellisg@google.cn",
        Profession: "Senior Sales Associate",
        Address: "95 Commercial Hill",
        Education: "Arizona State University, Tempe Campus",
        Gender: "Female"
    },
    {
        Name: "Humfrid Tickle",
        Email: "htickleh@latimes.com",
        Profession: "Senior Sales Associate",
        Address: "285 Corben Lane",
        Education: "St. Petersburg College",
        Gender: "Male"
    },
    {
        Name: "Maurise Wickins",
        Email: "mwickinsi@berkeley.edu",
        Profession: "Paralegal",
        Address: "57310 Milwaukee Circle",
        Education: "Universidade Federal de Alagoas",
        Gender: "Female"
    },
    {
        Name: "Bary Willbond",
        Email: "bwillbondj@stumbleupon.com",
        Profession: "Dental Hygienist",
        Address: "39 Anhalt Crossing",
        Education: "Sung Kyun Kwan University",
        Gender: "Male"
    },
    {
        Name: "Adiana Pennock",
        Email: "apennockk@e-recht24.de",
        Profession: "Nurse",
        Address: "10755 Shoshone Road",
        Education: "Al-baha University",
        Gender: "Male"
    },
    {
        Name: "Emelita Annand",
        Email: "eannandl@taobao.com",
        Profession: "Financial Analyst",
        Address: "98949 Ronald Regan Junction",
        Education: "NED University of Engineering and Technology Karachi",
        Gender: "Female"
    },
    {
        Name: "Peter Isselee",
        Email: "pisseleem@sun.com",
        Profession: "Senior Sales Associate",
        Address: "0 Old Shore Parkway",
        Education: "Huafan University",
        Gender: "Male"
    },
    {
        Name: "Ross Kanwell",
        Email: "rkanwelln@google.pl",
        Profession: "Community Outreach Specialist",
        Address: "33166 John Wall Plaza",
        Education: "Fachhochschule Pur",
        Gender: "Male"
    },
    {
        Name: "Hagen Poultney",
        Email: "hpoultneyo@google.ca",
        Profession: "Administrative Assistant I",
        Address: "394 Troy Road",
        Education: "Ecole Nationale Supérieure d'Agronomie et des Industries Alimentaires",
        Gender: "Male"
    },
    {
        Name: "Anderson Fewings",
        Email: "afewingsp@europa.eu",
        Profession: "Web Designer IV",
        Address: "7526 Scott Junction",
        Education: "Sakushin Gakuin University",
        Gender: "Male"
    },
    {
        Name: "Salvidor Dunnaway",
        Email: "sdunnawayq@i2i.jp",
        Profession: "Design Engineer",
        Address: "7617 Fuller Drive",
        Education: "Fachhochschule Kufstein (Tirol)",
        Gender: "Male"
    },
    {
        Name: "Leena Perillio",
        Email: "lperillior@icio.us",
        Profession: "Web Designer I",
        Address: "73 Reindahl Terrace",
        Education: "Universidade São Judas Tadeu",
        Gender: "Female"
    },
    {
        Name: "Oren McKerley",
        Email: "omckerleys@patch.com",
        Profession: "Developer II",
        Address: "5 Crownhardt Point",
        Education: "Vignan University",
        Gender: "Male"
    },
    {
        Name: "Liesa Kasper",
        Email: "lkaspert@google.ca",
        Profession: "Executive Secretary",
        Address: "6803 Bunting Park",
        Education: "Universitas Yarsi",
        Gender: "Female"
    },
    {
        Name: "Byran Beaby",
        Email: "bbeabyu@mysql.com",
        Profession: "Developer II",
        Address: "0 Eastwood Avenue",
        Education: "Patna University",
        Gender: "Male"
    },
    {
        Name: "Florie Ilyenko",
        Email: "filyenkov@amazon.com",
        Profession: "Professor",
        Address: "23140 Laurel Pass",
        Education: "Universidad de Especialidades Turísticas ",
        Gender: "Female"
    },
    {
        Name: "Morey Creffield",
        Email: "mcreffieldw@godaddy.com",
        Profession: "Software Consultant",
        Address: "1742 Holy Cross Park",
        Education: "The Defiance College",
        Gender: "Male"
    },
    {
        Name: "Ruthanne MacLaig",
        Email: "rmaclaigx@altervista.org",
        Profession: "Mechanical Systems Engineer",
        Address: "4780 Hayes Crossing",
        Education: "Alhamd Islamic University",
        Gender: "Female"
    },
    {
        Name: "Hortensia Heersema",
        Email: "hheersemay@oakley.com",
        Profession: "Statistician II",
        Address: "4 Trailsway Place",
        Education: "Universidad Champagnat",
        Gender: "Female"
    },
    {
        Name: "Carmita Blount",
        Email: "cblountz@1und1.de",
        Profession: "Database Administrator II",
        Address: "42155 Surrey Drive",
        Education: "Lancaster University Ghana",
        Gender: "Female"
    },
    {
        Name: "Sydelle Fish",
        Email: "sfish10@ucsd.edu",
        Profession: "Automation Specialist III",
        Address: "8 Green Road",
        Education: "Université d'Auvergne (Clermont-Ferrand I)",
        Gender: "Female"
    },
    {
        Name: "Sigismund Major",
        Email: "smajor11@harvard.edu",
        Profession: "Structural Engineer",
        Address: "98 Springview Street",
        Education: "Shiraz University of Medical Sciences",
        Gender: "Male"
    },
    {
        Name: "Torey Jacobson",
        Email: "tjacobson12@marketwatch.com",
        Profession: "Systems Administrator III",
        Address: "59322 Bellgrove Crossing",
        Education: "Institut Teknologi Adhi Tama Surabaya",
        Gender: "Male"
    },
    {
        Name: "Hoyt Casoni",
        Email: "hcasoni13@springer.com",
        Profession: "Staff Accountant IV",
        Address: "315 Bunker Hill Court",
        Education: "Illinois Wesleyan University",
        Gender: "Male"
    },
    {
        Name: "Kristyn Pybworth",
        Email: "kpybworth14@macromedia.com",
        Profession: "Programmer Analyst IV",
        Address: "2 Shopko Alley",
        Education: "Universidad de Belgrano",
        Gender: "Female"
    },
    {
        Name: "Kala Brothers",
        Email: "kbrothers15@weibo.com",
        Profession: "Account Executive",
        Address: "8 Sachtjen Pass",
        Education: "Université de La Rochelle",
        Gender: "Female"
    },
    {
        Name: "Humphrey Potzold",
        Email: "hpotzold16@google.pl",
        Profession: "Occupational Therapist",
        Address: "6350 Lawn Trail",
        Education: "Instituto Universitario Nacional del Arte",
        Gender: "Male"
    },
    {
        Name: "Feodora Ends",
        Email: "fends17@ibm.com",
        Profession: "Sales Representative",
        Address: "56642 Lotheville Lane",
        Education: "Institut Catholique de Toulouse",
        Gender: "Female"
    },
    {
        Name: "Christian Haggard",
        Email: "chaggard18@washingtonpost.com",
        Profession: "GIS Technical Architect",
        Address: "6 Pennsylvania Place",
        Education: "Hong Bang University International",
        Gender: "Male"
    },
    {
        Name: "Munmro De Carolis",
        Email: "mde19@nydailynews.com",
        Profession: "Structural Engineer",
        Address: "48830 Parkside Terrace",
        Education: "Private College of Dentistry and Pharmacy",
        Gender: "Male"
    },
    {
        Name: "Vonni Sabater",
        Email: "vsabater1a@deliciousdays.com",
        Profession: "Mechanical Systems Engineer",
        Address: "65 Hermina Crossing",
        Education: "Epoka University",
        Gender: "Female"
    },
    {
        Name: "Sacha Kasting",
        Email: "skasting1b@paypal.com",
        Profession: "Occupational Therapist",
        Address: "6354 Summerview Center",
        Education: "Torbat Heydarieh University of Medical Sciences",
        Gender: "Female"
    },
    {
        Name: "Elinore Yeaman",
        Email: "eyeaman1c@constantcontact.com",
        Profession: "Accounting Assistant IV",
        Address: "9 Lawn Court",
        Education: "China Agricultural University",
        Gender: "Female"
    },
    {
        Name: "Lidia Ligerton",
        Email: "lligerton1d@angelfire.com",
        Profession: "Professor",
        Address: "62 Golf Parkway",
        Education: "Ibaraki Prefectural University of Health Sciences",
        Gender: "Female"
    },
    {
        Name: "Ivie Ricciardi",
        Email: "iricciardi1e@360.cn",
        Profession: "Research Nurse",
        Address: "0372 Green Ridge Crossing",
        Education: "Universidad Autónoma de Guerrero",
        Gender: "Female"
    },
    {
        Name: "Urban Nelane",
        Email: "unelane1f@ed.gov",
        Profession: "Clinical Specialist",
        Address: "3330 Arapahoe Pass",
        Education: "National University of Music",
        Gender: "Female"
    },
    {
        Name: "Cos Edeler",
        Email: "cedeler1g@hubpages.com",
        Profession: "Legal Assistant",
        Address: "60009 Lighthouse Bay Trail",
        Education: "University of Science & Technology Chittagong",
        Gender: "Male"
    },
    {
        Name: "Mable Batistelli",
        Email: "mbatistelli1h@google.pl",
        Profession: "Human Resources Assistant IV",
        Address: "948 Butternut Lane",
        Education: "University of Nebraska Medical Center",
        Gender: "Female"
    },
    {
        Name: "Almeta Billett",
        Email: "abillett1i@moonfruit.com",
        Profession: "Operator",
        Address: "3 Moland Drive",
        Education: "Universitat Internacional de Catalunya",
        Gender: "Female"
    },
    {
        Name: "Emlen Cuschieri",
        Email: "ecuschieri1j@qq.com",
        Profession: "Information Systems Manager",
        Address: "53937 School Plaza",
        Education: "Universitat de les Illes Balears",
        Gender: "Male"
    },
    {
        Name: "Ruy Boskell",
        Email: "rboskell1k@instagram.com",
        Profession: "Health Coach I",
        Address: "25488 Bellgrove Plaza",
        Education: "Ahwaz Jondishapour University of Medical Sciences",
        Gender: "Male"
    },
    {
        Name: "Wilek Dodle",
        Email: "wdodle1l@nsw.gov.au",
        Profession: "Analyst Programmer",
        Address: "6836 Moose Pass",
        Education: "Asa University Bangladesh",
        Gender: "Male"
    },
    {
        Name: "Reeta Galliver",
        Email: "rgalliver1m@discuz.net",
        Profession: "Community Outreach Specialist",
        Address: "4866 Granby Way",
        Education: "Université Rennes I",
        Gender: "Female"
    },
    {
        Name: "Jory Oswell",
        Email: "joswell1n@fastcompany.com",
        Profession: "Marketing Assistant",
        Address: "89 Rusk Trail",
        Education: "University of Maine, Augusta",
        Gender: "Male"
    },
    {
        Name: "Weber Rieme",
        Email: "wrieme1o@mail.ru",
        Profession: "Office Assistant III",
        Address: "32188 Hollow Ridge Junction",
        Education: "Misr University for Sience and Technology",
        Gender: "Male"
    },
    {
        Name: "Ralina Iacapucci",
        Email: "riacapucci1p@state.tx.us",
        Profession: "Quality Control Specialist",
        Address: "676 South Circle",
        Education: "Universidad Metropolitana de Monterrey",
        Gender: "Female"
    },
    {
        Name: "Shawna Fortune",
        Email: "sfortune1q@cdbaby.com",
        Profession: "Assistant Professor",
        Address: "6783 7th Way",
        Education: "Universidade Estadual Paulista",
        Gender: "Female"
    },
    {
        Name: "Salmon Dilks",
        Email: "sdilks1r@nih.gov",
        Profession: "Pharmacist",
        Address: "6 Arkansas Junction",
        Education: "Thainguyen University of Agriculture and Forestry",
        Gender: "Male"
    },
    {
        Name: "Brooks Dunkinson",
        Email: "bdunkinson1s@artisteer.com",
        Profession: "Data Coordiator",
        Address: "0614 Hallows Crossing",
        Education: "University of the Assumption",
        Gender: "Female"
    },
    {
        Name: "Merle Forde",
        Email: "mforde1t@irs.gov",
        Profession: "Editor",
        Address: "5610 Golf Course Place",
        Education: "University of Southern Europe (Monaco Business School)",
        Gender: "Male"
    },
    {
        Name: "Lenci Avramow",
        Email: "lavramow1u@wp.com",
        Profession: "Community Outreach Specialist",
        Address: "820 Morrow Trail",
        Education: "Ecole Supérieure de Commerce de Rouen",
        Gender: "Male"
    },
    {
        Name: "Hagen Crispin",
        Email: "hcrispin1v@apache.org",
        Profession: "Administrative Officer",
        Address: "63712 Lakewood Center",
        Education: "Mars Hill College",
        Gender: "Male"
    },
    {
        Name: "Nixie Leggis",
        Email: "nleggis1w@drupal.org",
        Profession: "Compensation Analyst",
        Address: "910 Milwaukee Parkway",
        Education: "International University in Germany",
        Gender: "Female"
    },
    {
        Name: "Rollin Fairfoot",
        Email: "rfairfoot1x@dmoz.org",
        Profession: "Web Designer I",
        Address: "9313 Algoma Junction",
        Education: "Tomsk State Pedagogical University",
        Gender: "Male"
    },
    {
        Name: "Clemmie Habron",
        Email: "chabron1y@google.com",
        Profession: "Systems Administrator IV",
        Address: "94216 Iowa Way",
        Education: "Gorgan University of Agricultural Sciences and Natural Resources",
        Gender: "Female"
    },
    {
        Name: "Bud Causby",
        Email: "bcausby1z@phpbb.com",
        Profession: "Analog Circuit Design manager",
        Address: "08562 Washington Parkway",
        Education: "Keiai University",
        Gender: "Male"
    },
    {
        Name: "Mikel Clemmow",
        Email: "mclemmow20@icio.us",
        Profession: "VP Product Management",
        Address: "1 Heath Plaza",
        Education: "Université Mohammed V - Agdal",
        Gender: "Male"
    },
    {
        Name: "Cornelius Butterfill",
        Email: "cbutterfill21@sun.com",
        Profession: "Nurse",
        Address: "1646 Anderson Park",
        Education: "University of Pisa",
        Gender: "Male"
    },
    {
        Name: "Wyatan Schleicher",
        Email: "wschleicher22@4shared.com",
        Profession: "Accounting Assistant IV",
        Address: "6 Fuller Drive",
        Education: "Centenary College",
        Gender: "Male"
    },
    {
        Name: "Saudra Episcopi",
        Email: "sepiscopi23@java.com",
        Profession: "Assistant Media Planner",
        Address: "7 Delaware Point",
        Education: "Technical University in Zvolen",
        Gender: "Female"
    },
    {
        Name: "Adams Charle",
        Email: "acharle24@ask.com",
        Profession: "Payment Adjustment Coordinator",
        Address: "095 Coolidge Junction",
        Education: "Police Academy of Latvia",
        Gender: "Male"
    },
    {
        Name: "Brade Eddowis",
        Email: "beddowis25@cpanel.net",
        Profession: "Software Engineer IV",
        Address: "33 Merry Trail",
        Education: "Ohio State University - Lima",
        Gender: "Male"
    },
    {
        Name: "Griz Geany",
        Email: "ggeany26@phpbb.com",
        Profession: "Recruiter",
        Address: "704 Melody Way",
        Education: "Fine Arts Academy in Wroclaw",
        Gender: "Male"
    },
    {
        Name: "Gottfried Lampe",
        Email: "glampe27@youku.com",
        Profession: "Environmental Specialist",
        Address: "3 Golf View Terrace",
        Education: "Universidad Tecnologica Israel",
        Gender: "Male"
    }
];

const seedDB = async () => {
    await Employee.deleteMany({});
    await Employee.insertMany(employees)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })
};

seedDB().then(() => {
    mongoose.connection.close()
})

