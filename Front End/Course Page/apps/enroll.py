import requests
import streamlit as st
import pandas as pd

def app():

    st.subheader("Course Enrollment")
    st.write("Select a Course to Enroll")
    courseinput = str(st.text_input("Enter Course Code:"))
    df=pd.read_csv("courses.csv")

    st.dataframe(df)
    def course(courseinput):
        courseobj = {"course" : courseinput}
        url= "https://m4o2znnubf.execute-api.us-east-1.amazonaws.com/account"
        if st.button("Register Course"):
            requests.patch(url, json=courseobj)
    course(courseinput)        
    # st.title('Model')

    # st.write('This is the `Model` page of the multi-page app.')

    # st.write('The model performance of the Iris dataset is presented below.')

    # # Load iris dataset
    # iris = datasets.load_iris()
    # X = iris.data
    # Y = iris.target

    # # Model building
    # st.header('Model performance')
    # X_train, X_test, Y_train, Y_test = train_test_split(
    #     X, Y, test_size=0.2, random_state=42)
    # clf = RandomForestClassifier()
    # clf.fit(X_train, Y_train)
    # score = clf.score(X_test, Y_test)
    # st.write('Accuracy:')
    # st.write(score)
