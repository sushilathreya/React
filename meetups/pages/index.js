import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image: "https://im.whatshot.in/img/2019/Jan/1-1-1548065042.jpg",
    address: "Church Street Bangalore",
    description: "This is our first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/06/26/Photos/Processed/churchstreet3-kPFF--621x414@LiveMint.jpg",
    address: "Church Street Bangalore",
    description: "This is our Second meetup",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image:
      "https://bangaloremirror.indiatimes.com/thumb/msid-79052192,width-1200,height-900,resizemode-4/.jpg",
    address: "Church Street Bangalore",
    description: "This is our Third meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  //fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10
  };
}

export default HomePage;
