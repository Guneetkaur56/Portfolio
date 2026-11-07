// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  sih as SIH,
  iiitd as IIITD,
  huggingface,
  kaggle,
  matplotlib,
  xgboost,
  cropyield,
  svm,
  purchase,
  linkedin,
  github,
  kaggleMark,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code ★",
    link: "http://www.github.com/sanidhyy/3d-portfolio",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "Data Analysis",
    icon: mobile,
  },
  {
    title: "SQL & Databases",
    icon: backend,
  },
  {
    title: "Problem Solving",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "SQL", icon: "https://cdn.simpleicons.org/mysql" },
  { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas" },
  { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy" },
  { name: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn" },
  { name: "XGBoost", icon: xgboost },
  { name: "Matplotlib", icon: matplotlib },
  { name: "Jupyter", icon: "https://cdn.simpleicons.org/jupyter" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
  { name: "Kaggle", icon: kaggle },
  { name: "Hugging Face", icon: huggingface },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "NLP & Backend Developer (Currently Working)",
    company_name: "Smart India Hackathon 2026 – VAANI",
    icon: SIH,
    iconBg: "#ffffff",
    date: "2026 – Present",
    points: [
      "Working on VAANI, a voice-first AI kiosk that answers farmers' questions on cooperative laws and schemes.",
      "Handling NLP: retrieval-based question answering over official documents with source citations.",
      "Building the Python backend and APIs, and collecting data for the knowledge base.",
    ],
  },
  {
    title: "ML Developer",
    company_name: "Smart India Hackathon 2025 – AGRIWISE",
    icon: SIH,
    iconBg: "#ffffff",
    date: "2025",
    points: [
      "Qualified for the internal university finale with AGRIWISE, an AI platform for crop yield prediction.",
      "Built and compared regression models (Linear, Ridge, Random Forest, XGBoost) on 28,000+ records.",
      "Cut RMSE from 9.40 to 3.88 (58%) with a tuned Random Forest.",
    ],
  },
  {
    title: "ML Developer",
    company_name: "IIIT Delhi – 0 to 1 Hackathon",
    icon: IIITD,
    iconBg: "#ffffff",
    date: "2024",
    points: [
      "Reached the final round with a digital patient records platform for doctors and patients.",
      "Replaced paper health and prescription records with a working website.",
      "Contributed to the AI-integrated features and the user interface.",
    ],
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Crop Yield Prediction",
    description:
      "Regression models on 28,000+ agricultural records with engineered geographic and temporal features. A tuned Random Forest cut RMSE from 9.40 to 3.88, a 58% improvement over the baseline.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "xgboost",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: cropyield,
    source_code_link: "https://github.com/Guneetkaur56/AgriWise.AI",
  },
  {
    name: "Breast Cancer Classification",
    description:
      "SVM classifier comparing Linear, RBF, and Polynomial kernels. The GridSearchCV-tuned RBF kernel reached 96.5% accuracy and 0.98 ROC-AUC, with a reproducible preprocessing and evaluation pipeline.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "svm",
        color: "green-text-gradient",
      },
      {
        name: "gridsearchcv",
        color: "pink-text-gradient",
      },
    ],
    image: svm,
    source_code_link:
      "https://github.com/Guneetkaur56/Breast-Cancer-Classification-using-Support-Vector-Machine-SVM-",
  },
  {
    name: "Customer Purchase Prediction",
    description:
      "Logistic Regression predicting purchase behaviour from demographics, with 81% accuracy and 0.91 ROC-AUC. Decision boundaries show age and estimated salary as the key predictors.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "logistic-regression",
        color: "green-text-gradient",
      },
      {
        name: "eda",
        color: "pink-text-gradient",
      },
    ],
    image: purchase,
    source_code_link:
      "https://github.com/Guneetkaur56/Logistic_regression_project-",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/guneet-kaur-1a10ba279/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Guneetkaur56",
  },
  {
    name: "Kaggle",
    icon: kaggleMark,
    link: "https://www.kaggle.com/guneetkaurmarwah",
  },
] as const;
