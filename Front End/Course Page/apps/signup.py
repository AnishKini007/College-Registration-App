import streamlit as st
import random
import requests

def app():
    st.subheader("Create Account")
    inputID= str(random.randint(1,100))
    inputT= st.text_input("Enter Account Type:")
    inputSTID= st.text_input("Enter Student ID:")
    inputpass= st.text_input("Enter Password:", type= 'password')
    def get_college_data(inputID,inputT,inputSTID,inputpass):
        inputobj = {'accid': inputID, 'type': inputT, 'id': inputSTID,'pass': inputpass}
        url= "https://m4o2znnubf.execute-api.us-east-1.amazonaws.com/account"
        if st.button("Create Account"):
            r = requests.post(url, json=inputobj)

    get_college_data(inputID,inputT,inputSTID,inputpass)