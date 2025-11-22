---
layout: page
title: SMS Spam Detection using Machine Learning
description: This repository contains a machine learning model for detecting spam SMS messages. Utilizing the SMS Spam Collection Dataset from Kaggle, the project employs various classification models to identify spam messages accurately.
img: assets/img/spam.png
importance: 2
category: fun
---
## Dataset Source

The SMS Spam Collection Dataset was retrieved from [Kaggle](https://www.kaggle.com/).

## Data Preprocessing

- Loaded the dataset using Pandas.
- Used the "v2" column for text data.
- Implemented Count Vectorization for text representation.
- Balanced the dataset using SMOTE.

## Machine Learning Models

The following classification models were employed:

1. **Random Forest Classifier**: Achieved an accuracy score of 96.11%.
2. **Logistic Regression**: Also achieved an accuracy score of 96.21%.

## Evaluation Metrics

Both models were evaluated using confusion matrices and classification reports, demonstrating high precision, recall, and F1-scores for spam detection.

## Sample Validation

For real-world application, the model was tested on the following sample SMS:
1. "Hey, you have won a car!!! congrats" - Predicted: Spam
2. "Dear applicant, Your CV has been received. Best regards." - Predicted: Not Spam

## Conclusion

This project showcases the effectiveness of machine learning in classifying SMS messages, providing a valuable tool for spam detection.

## Contact Information

**Project Repository:** [Project Repository](https://github.com/PrabathBK/SMS-spam-detector)

For any inquiries or feedback,please contact [prabathwijethilaka50@gmail.com](mailto:prabathwijethilaka50@gmail.com).

