import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";

function NewMeetupPage() {
  function addMeetupHandler(enteredData) {
    console.log(enteredData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
