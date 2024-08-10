export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Israel Israeli",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Lea Goldberg",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "David Livshitz",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Ido Michael",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Hagit Levi",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Moshe Cohen",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Yasmin Menashe",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Orit Refael",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Yosef Shimon",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};