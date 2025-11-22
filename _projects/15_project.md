---
layout: page
title: Diabetes Detection Web Application
description: This web application is designed to predict the likelihood of an individual having diabetes based on various input features. The prediction model is built using machine learning algorithms and is accessible through a user-friendly web interface.
img: assets/img/diabetes.jpg
importance: 2
category: fun
---
## Data Source

The dataset used for training and testing the model was sourced from Kaggle. It comprises various health-related features such as glucose level, blood pressure, BMI, etc., along with a target variable indicating the presence or absence of diabetes.

## Model Development

### Features Used
- Pregnancies
- Glucose
- Blood Pressure
- Skin Thickness
- Insulin
- BMI
- Diabetes Pedigree Function (DPF)
- Age

### Model Selection
After evaluating various classification algorithms, the Random Forest Classifier and Logistic Regression models were selected based on their performance metrics, including accuracy, precision, and recall.

## Model Accuracy

- Random Forest Classifier: 0.818
- Logistic Regression: 0.824

The Random Forest Classifier was ultimately chosen as the best-performing model due to its superior accuracy.

## How to Run the Web Application

1. Install Streamlit by running the following command:
```bash
  pip install streamlit
```

2. Clone the repository and navigate to the project directory.

3. Run the Streamlit app using the following command:
```bash
  streamlit run diabetesai_webproject.py
```


4. Once the application is running, open the provided URL in a web browser to access the Diabetes Detection App.

## How to Use the Web Portal

1. Upon launching the web application, you will be presented with a user interface displaying a header and an image related to diabetes detection.

2. The main section of the web page contains sliders for various input features. Adjust the sliders to enter the desired values for each feature.

3. After entering the input values, the web application will display the entered data and the predicted outcome (0 for non-diabetes, 1 for diabetes)
   
4. Use the provided information to understand the prediction and consult a healthcare professional for further guidance and diagnosis.

## Conclusion

The Diabetes Detection Web Application leverages machine learning algorithms to provide predictions on the likelihood of diabetes based on user input. By offering a user-friendly interface and accurate predictions, this application aims to raise awareness about diabetes and promote early detection for better healthcare outcomes.

## Contact Information

**Project Repository:** [Project Repository](https://github.com/PrabathBK/DiabetesAI-Webproject)
For any questions or suggestions, please feel free to reach out to [prabathwijethilaka50@gmail.com](mailto:prabathwijethilaka50@gmail.com).

