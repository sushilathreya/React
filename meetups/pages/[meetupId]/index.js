import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage(props) {
  return (
    <MeetupDetails
      id={props.meetupData.id}
      title={props.meetupData.title}
      image={props.meetupData.image}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // Fetch data for a single meetup

  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "First Meetup",
        image: "https://im.whatshot.in/img/2019/Jan/1-1-1548065042.jpg",
        address: "Church Street Bangalore",
        description: "This is our first meetup",
      },
    },
  };
}

export default MeetupDetailsPage;
