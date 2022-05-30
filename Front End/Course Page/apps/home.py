import streamlit as st

def app():

    st.subheader("Account Login")
    StudentID= st.text_input("Username")
    password= st.text_input("Password", type= 'password')
    if st.button("Login"):
        st.success("You have logged in {}".format(username))