import streamlit as st
from multiapp import MultiApp
from apps import home, signup, data, enroll

app = MultiApp()

st.markdown("""
# College Registration App
""")

app.add_app("Login", home.app)
app.add_app("Sign Up", signup.app )
app.add_app("Student Registration", data.app)
app.add_app("Course Enrollment", enroll.app)

app.run()
