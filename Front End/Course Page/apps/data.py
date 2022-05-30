import streamlit as st
import requests


def app():
    st.subheader("Student Registration")
    st.write("Please fill in the following details")
    name= st.text_input("Name")
    StudentId= st.text_input("Student Id")
    email= st.text_input("Email")
    Dob= st.text_input("Date of Birth")
    phone= st.text_input("Phone")
    def PutStudent(name,StudentId,email,Dob,phone):
        studobjt={"name": name,"id": StudentId, "email": email, "dob": Dob, "ph": phone}
        url1= "https://m4o2znnubf.execute-api.us-east-1.amazonaws.com/"
        if st.button("Register Student"):
            requests.post(url1, json=studobjt)

    PutStudent(name,StudentId,email,Dob,phone)

    # st.title('Data')

    # st.write("This is the `Data` page of the multi-page app.")

    # st.write("The following is the DataFrame of the `iris` dataset.")

    # iris = datasets.load_iris()
    # X = pd.DataFrame(iris.data, columns = iris.feature_names)
    # Y = pd.Series(iris.target, name = 'class')
    # df = pd.concat([X,Y], axis=1)
    # df['class'] = df['class'].map({0:"setosa", 1:"versicolor", 2:"virginica"})

    # st.write(df)
