export type Doctor = {
  slug: string;
  name: string;
  title: string;
  department: string;
  hospital: string;
  location: string;
  experience: string;
  image: string;
  profileUrl: string;
  summary: string;
  profile: DoctorProfile;
};

export type DoctorProfile = {
  about: string[];
  qualifications: string[];
  professionalExperience: string[];
  specialInterests: string[];
  careerHighlights: string[];
  researchFellowships: string[];
  awards: string[];
  treatments: string[];
};

const createDoctorProfile = (doctor: {
  name: string;
  title: string;
  department: string;
  hospital: string;
  location: string;
  experience: string;
  summary: string;
  interests: string[];
  treatments: string[];
}): DoctorProfile => ({
  about: [
    `${doctor.name} is a senior ${doctor.title.toLowerCase()} associated with ${doctor.hospital} in ${doctor.location}.`,
    doctor.summary,
    `With ${doctor.experience.toLowerCase()} of clinical experience, ${doctor.name.split(" ")[1] || "the doctor"} supports patients through careful evaluation, multidisciplinary planning, and treatment coordination suited to complex medical journeys.`,
  ],
  qualifications: [
    "MBBS from a recognized medical college in India.",
    `Postgraduate training in ${doctor.department} and allied clinical care.`,
    "Advanced clinical exposure through high-volume tertiary care programs.",
  ],
  professionalExperience: [
    `Consultant experience at ${doctor.hospital}.`,
    `Regularly manages domestic and international patients requiring ${doctor.department.toLowerCase()} care.`,
    "Works with multidisciplinary hospital teams for diagnostics, treatment planning, procedures, and follow-up.",
  ],
  specialInterests: doctor.interests,
  careerHighlights: [
    `More than ${doctor.experience.toLowerCase()} of work in patient care and specialty practice.`,
    "Experienced in building practical treatment plans for patients travelling to India.",
    "Known for clear communication with patients and families during diagnosis, treatment, and recovery planning.",
  ],
  researchFellowships: [
    "Active participation in specialty-focused clinical learning and case discussions.",
    "Keeps practice aligned with current hospital protocols and evidence-led treatment planning.",
  ],
  awards: [
    "Recognized by patients for approachable consultations and continuity of care.",
    "Contributes to specialty care pathways within leading Indian hospital teams.",
  ],
  treatments: doctor.treatments,
});

export const doctors: Doctor[] = [
  {
    slug: "rohit-lamba",
    name: "Dr. Rohit Lamba",
    title: "Orthopaedics and Joint Replacement Specialist",
    department: "Orthopaedics",
    hospital: "Fortis Hospital, Manesar",
    location: "Manesar, Gurugram",
    experience: "22+ Years",
    image: "/images/doctors/rohit-lamba.jpeg",
    profileUrl: "https://drrohitlamba.com/",
    summary:
      "Senior orthopaedic surgeon focused on joint replacement, sports injury care, arthroscopy, and complex bone and joint conditions.",
    profile: createDoctorProfile({
      name: "Dr. Rohit Lamba",
      title: "Orthopaedics and Joint Replacement Specialist",
      department: "Orthopaedics",
      hospital: "Fortis Hospital, Manesar",
      location: "Manesar, Gurugram",
      experience: "22+ Years",
      summary:
        "Senior orthopaedic surgeon focused on joint replacement, sports injury care, arthroscopy, and complex bone and joint conditions.",
      interests: [
        "Knee replacement",
        "Hip replacement",
        "Sports injury care",
        "Arthroscopy",
        "Complex fracture management",
        "Revision joint replacement",
      ],
      treatments: [
        "Total Knee Replacement",
        "Total Hip Replacement",
        "ACL Reconstruction",
        "Arthroscopic Shoulder Surgery",
        "Fracture Fixation",
        "Joint Preservation Procedures",
      ],
    }),
  },
  {
    slug: "jitesh-manghwani",
    name: "Dr. Jitesh Manghwani",
    title: "Spine Surgery Specialist",
    department: "Spine Surgery",
    hospital: "Max Hospital, Shalimar Bagh",
    location: "Delhi",
    experience: "11+ Years",
    image: "/images/doctors/jitesh-manghwani.png",
    profileUrl: "https://www.maxhealthcare.in/doctor/dr-jitesh-manghwani",
    summary:
      "Spine surgeon with experience in minimally invasive spine procedures, deformity correction, trauma, and degenerative spine disorders.",
    profile: createDoctorProfile({
      name: "Dr. Jitesh Manghwani",
      title: "Spine Surgery Specialist",
      department: "Spine Surgery",
      hospital: "Max Hospital, Shalimar Bagh",
      location: "Delhi",
      experience: "11+ Years",
      summary:
        "Spine surgeon with experience in minimally invasive spine procedures, deformity correction, trauma, and degenerative spine disorders.",
      interests: [
        "Minimally invasive spine surgery",
        "Disc prolapse treatment",
        "Spinal deformity correction",
        "Spine trauma",
        "Degenerative spine disease",
        "Back and neck pain management",
      ],
      treatments: [
        "Endoscopic Spine Surgery",
        "Lumbar Discectomy",
        "Spinal Fusion",
        "Scoliosis Correction",
        "Cervical Spine Surgery",
        "Spine Trauma Surgery",
      ],
    }),
  },
  {
    slug: "rajender-kumar",
    name: "Dr. Rajender Kumar",
    title: "Radiation Oncology Specialist",
    department: "Oncology",
    hospital: "Max Hospital, Shalimar Bagh",
    location: "Delhi",
    experience: "20+ Years",
    image: "/images/doctors/rajender-kumar.jpg",
    profileUrl: "https://www.maxhealthcare.in/doctor/dr-rajender-kumar",
    summary:
      "Radiation oncologist supporting cancer treatment plans with modern radiation techniques and multidisciplinary oncology coordination.",
    profile: createDoctorProfile({
      name: "Dr. Rajender Kumar",
      title: "Radiation Oncology Specialist",
      department: "Oncology",
      hospital: "Max Hospital, Shalimar Bagh",
      location: "Delhi",
      experience: "20+ Years",
      summary:
        "Radiation oncologist supporting cancer treatment plans with modern radiation techniques and multidisciplinary oncology coordination.",
      interests: [
        "Precision radiation therapy",
        "Head and neck oncology",
        "Breast cancer radiation",
        "Image-guided radiotherapy",
        "Palliative radiation",
        "Multidisciplinary tumor board planning",
      ],
      treatments: [
        "IMRT",
        "IGRT",
        "VMAT",
        "Stereotactic Radiotherapy",
        "Brachytherapy Planning",
        "Palliative Radiotherapy",
      ],
    }),
  },
  {
    slug: "waheed-zaman",
    name: "Dr. Waheed Zaman",
    title: "Urology and Kidney Transplant Specialist",
    department: "Urology",
    hospital: "Max Hospital, Shalimar Bagh",
    location: "Delhi",
    experience: "30+ Years",
    image: "/images/doctors/waheed-zaman.jpg",
    profileUrl: "https://www.maxhealthcare.in/doctor/dr-waheedu-zzaman",
    summary:
      "Urologist with a focus on kidney transplant care, endourology, reconstructive urology, and advanced urological surgery.",
    profile: createDoctorProfile({
      name: "Dr. Waheed Zaman",
      title: "Urology and Kidney Transplant Specialist",
      department: "Urology",
      hospital: "Max Hospital, Shalimar Bagh",
      location: "Delhi",
      experience: "30+ Years",
      summary:
        "Urologist with a focus on kidney transplant care, endourology, reconstructive urology, and advanced urological surgery.",
      interests: [
        "Kidney transplant coordination",
        "Endourology",
        "Stone disease",
        "Prostate care",
        "Reconstructive urology",
        "Laparoscopic urological surgery",
      ],
      treatments: [
        "Kidney Transplant Evaluation",
        "Laser Stone Surgery",
        "TURP",
        "Ureteroscopy",
        "Laparoscopic Nephrectomy",
        "Reconstructive Urology Procedures",
      ],
    }),
  },
  {
    slug: "ajitabh-srivastava",
    name: "Dr. Ajitabh Srivastava",
    title: "Liver Transplant and Biliary Sciences Specialist",
    department: "Liver Transplant",
    hospital: "Max Hospital, Patparganj",
    location: "Delhi",
    experience: "20+ Years",
    image: "/images/doctors/ajitabh-srivastava.jpg",
    profileUrl: "https://www.maxhealthcare.in/doctor/dr-ajitabh-srivastava",
    summary:
      "Liver transplant surgeon experienced in hepatobiliary surgery, complex liver conditions, and coordinated transplant programs.",
    profile: createDoctorProfile({
      name: "Dr. Ajitabh Srivastava",
      title: "Liver Transplant and Biliary Sciences Specialist",
      department: "Liver Transplant",
      hospital: "Max Hospital, Patparganj",
      location: "Delhi",
      experience: "20+ Years",
      summary:
        "Liver transplant surgeon experienced in hepatobiliary surgery, complex liver conditions, and coordinated transplant programs.",
      interests: [
        "Liver transplant surgery",
        "Hepatobiliary surgery",
        "Pancreatic surgery",
        "Living donor transplant planning",
        "Cirrhosis care pathways",
        "Complex abdominal surgery",
      ],
      treatments: [
        "Liver Transplant",
        "Living Donor Liver Transplant",
        "Hepatobiliary Surgery",
        "Pancreatic Surgery",
        "Gallbladder and Bile Duct Surgery",
        "Transplant Follow-up Planning",
      ],
    }),
  },
  {
    slug: "vp-singh",
    name: "Dr. V. P. Singh",
    title: "Neurosurgery Specialist",
    department: "Neurosciences",
    hospital: "Medanta, Gurugram",
    location: "Gurugram",
    experience: "40+ Years",
    image: "/images/doctors/vp-singh.png",
    profileUrl:
      "https://www.medanta.org/hospitals-near-me/gurugram-hospital/speciality/neurology/doctor/dr-varindera-paul-singh",
    summary:
      "Neurosurgeon known for brain tumor, epilepsy, skull base, and complex neurosurgical care at a leading tertiary hospital.",
    profile: createDoctorProfile({
      name: "Dr. V. P. Singh",
      title: "Neurosurgery Specialist",
      department: "Neurosciences",
      hospital: "Medanta, Gurugram",
      location: "Gurugram",
      experience: "40+ Years",
      summary:
        "Neurosurgeon known for brain tumor, epilepsy, skull base, and complex neurosurgical care at a leading tertiary hospital.",
      interests: [
        "Brain tumor surgery",
        "Epilepsy surgery",
        "Skull base surgery",
        "Functional neurosurgery",
        "Cerebrovascular neurosurgery",
        "Complex neurosurgical second opinions",
      ],
      treatments: [
        "Brain Tumor Surgery",
        "Epilepsy Surgery",
        "Skull Base Surgery",
        "Deep Brain Stimulation Evaluation",
        "Aneurysm Surgery",
        "Spine and Nerve Surgery",
      ],
    }),
  },
  {
    slug: "swapnil-dhampalwar",
    name: "Dr. Swapnil Dhampalwar",
    title: "Gastroenterology and Hepatology Specialist",
    department: "Gastroenterology",
    hospital: "Medanta, Gurugram",
    location: "Gurugram",
    experience: "10+ Years",
    image: "/images/doctors/swapnil-dhampalwar.png",
    profileUrl:
      "https://www.medanta.org/hospitals-near-me/gurugram-hospital/speciality/gastroenterology/doctor/dr-swapnil-dhampalwar",
    summary:
      "Gastroenterology specialist supporting digestive disease, liver disease, endoscopy-led evaluation, and patient-centered treatment planning.",
    profile: createDoctorProfile({
      name: "Dr. Swapnil Dhampalwar",
      title: "Gastroenterology and Hepatology Specialist",
      department: "Gastroenterology",
      hospital: "Medanta, Gurugram",
      location: "Gurugram",
      experience: "10+ Years",
      summary:
        "Gastroenterology specialist supporting digestive disease, liver disease, endoscopy-led evaluation, and patient-centered treatment planning.",
      interests: [
        "Advanced endoscopy",
        "Liver disease",
        "Pancreaticobiliary disorders",
        "Inflammatory bowel disease",
        "Digestive disease diagnostics",
        "Therapeutic gastroenterology",
      ],
      treatments: [
        "Upper GI Endoscopy",
        "Colonoscopy",
        "ERCP Evaluation",
        "EUS Evaluation",
        "Liver Disease Management",
        "IBD Treatment Planning",
      ],
    }),
  },
  {
    slug: "anil-bhan",
    name: "Dr. Anil Bhan",
    title: "Cardiac Surgery Specialist",
    department: "Cardiac Care",
    hospital: "Medanta, Gurugram",
    location: "Gurugram",
    experience: "40+ Years",
    image: "/images/doctors/anil-bhan.png",
    profileUrl:
      "https://www.medanta.org/hospitals-near-me/gurugram-hospital/speciality/cardiology/doctor/dr-anil-bhan",
    summary:
      "Cardiac surgeon with deep experience in complex heart surgery, valve procedures, aortic surgery, and advanced cardiac programs.",
    profile: createDoctorProfile({
      name: "Dr. Anil Bhan",
      title: "Cardiac Surgery Specialist",
      department: "Cardiac Care",
      hospital: "Medanta, Gurugram",
      location: "Gurugram",
      experience: "40+ Years",
      summary:
        "Cardiac surgeon with deep experience in complex heart surgery, valve procedures, aortic surgery, and advanced cardiac programs.",
      interests: [
        "Complex cardiac surgery",
        "Valve repair and replacement",
        "Aortic surgery",
        "Bypass surgery",
        "Congenital cardiac surgery",
        "High-risk cardiac procedures",
      ],
      treatments: [
        "CABG",
        "Heart Valve Replacement",
        "Heart Valve Repair",
        "Aortic Aneurysm Surgery",
        "Congenital Heart Surgery",
        "Redo Cardiac Surgery",
      ],
    }),
  },
  {
    slug: "neeraj-saraf",
    name: "Dr. Neeraj Saraf",
    title: "Hepatology and Liver Disease Specialist",
    department: "Gastroenterology",
    hospital: "Medanta, Gurugram",
    location: "Gurugram",
    experience: "25+ Years",
    image: "/images/doctors/neeraj-saraf.png",
    profileUrl:
      "https://www.medanta.org/hospitals-near-me/gurugram-hospital/speciality/gastroenterology/doctor/dr-neeraj-saraf",
    summary:
      "Hepatology specialist focused on liver disease, transplant evaluation, viral hepatitis, cirrhosis, and long-term liver care.",
    profile: createDoctorProfile({
      name: "Dr. Neeraj Saraf",
      title: "Hepatology and Liver Disease Specialist",
      department: "Gastroenterology",
      hospital: "Medanta, Gurugram",
      location: "Gurugram",
      experience: "25+ Years",
      summary:
        "Hepatology specialist focused on liver disease, transplant evaluation, viral hepatitis, cirrhosis, and long-term liver care.",
      interests: [
        "Chronic liver disease",
        "Liver transplant evaluation",
        "Viral hepatitis",
        "Cirrhosis care",
        "Fatty liver disease",
        "Post-transplant liver care",
      ],
      treatments: [
        "Liver Disease Consultation",
        "Cirrhosis Management",
        "Hepatitis B and C Care",
        "Liver Transplant Workup",
        "Fatty Liver Treatment",
        "Ascites and Portal Hypertension Care",
      ],
    }),
  },
  {
    slug: "rishabh-kedia",
    name: "Dr. Rishabh Kedia",
    title: "Neurosciences Specialist",
    department: "Neurosciences",
    hospital: "Medanta, Gurugram",
    location: "Gurugram",
    experience: "10+ Years",
    image: "/images/doctors/rishabh-kedia.png",
    profileUrl:
      "https://www.medanta.org/hospitals-near-me/gurugram-hospital/speciality/neurology/doctor/dr-rishabh-kedia",
    summary:
      "Neurosciences specialist supporting patients with neurological conditions through careful diagnosis and coordinated treatment plans.",
    profile: createDoctorProfile({
      name: "Dr. Rishabh Kedia",
      title: "Neurosciences Specialist",
      department: "Neurosciences",
      hospital: "Medanta, Gurugram",
      location: "Gurugram",
      experience: "10+ Years",
      summary:
        "Neurosciences specialist supporting patients with neurological conditions through careful diagnosis and coordinated treatment plans.",
      interests: [
        "Neurological diagnosis",
        "Stroke care coordination",
        "Headache and movement disorders",
        "Epilepsy evaluation",
        "Neuro-rehabilitation planning",
        "Second opinion neurology consultations",
      ],
      treatments: [
        "Neurology Consultation",
        "Stroke Evaluation",
        "Epilepsy Workup",
        "Movement Disorder Care",
        "Headache Management",
        "Neuro-rehabilitation Planning",
      ],
    }),
  },
  {
    slug: "waseem-abbas",
    name: "Dr. Waseem Abbas",
    title: "Medical Oncology Specialist",
    department: "Oncology",
    hospital: "Max Hospital, Shalimar Bagh",
    location: "Delhi",
    experience: "20+ Years",
    image: "/images/doctors/waseem-abbas.jpg",
    profileUrl: "https://www.maxhealthcare.in/doctor/dr-waseem-abbas-1",
    summary:
      "Medical oncologist involved in chemotherapy, immunotherapy, targeted therapy, and multidisciplinary cancer care planning.",
    profile: createDoctorProfile({
      name: "Dr. Waseem Abbas",
      title: "Medical Oncology Specialist",
      department: "Oncology",
      hospital: "Max Hospital, Shalimar Bagh",
      location: "Delhi",
      experience: "20+ Years",
      summary:
        "Medical oncologist involved in chemotherapy, immunotherapy, targeted therapy, and multidisciplinary cancer care planning.",
      interests: [
        "Chemotherapy planning",
        "Immunotherapy",
        "Targeted therapy",
        "Solid tumor oncology",
        "Cancer second opinions",
        "Supportive oncology care",
      ],
      treatments: [
        "Chemotherapy",
        "Immunotherapy",
        "Targeted Therapy",
        "Cancer Treatment Planning",
        "Palliative Oncology Care",
        "Second Opinion Oncology Review",
      ],
    }),
  },
];
