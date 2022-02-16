import { useEffect, useState } from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import { Title } from "../components/Title";
import { projectFirestore } from "../firebase/config";
import CsvDownload from "react-json-to-csv";
export const Home = () => {
  const [data, setData] = useState(null);
  const [csv, setCsv] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [sessionIsBooked, setSessionIsBooked] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore.collection("users").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No recipes to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setCsv(results);
          console.log(results.length);
          if (results.length >= 150) {
            setSessionIsBooked(true);
          }

          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, []);

  return (
    <div className="home   ">
      <Navbar />
      <div className="flex items-center flex-col justify-between">
        <Title />
        {/* <CsvDownload data={csv} /> */}
        {sessionIsBooked ? (
          <div className="form bg-white m-6 mt-10 mb-10 w-1/3 rounded-xl ">
            <div className=" flex items-center flex-col justify-center py-16  sm:px-6 lg:px-8">
              <h3 className="text-primary text-2xl font-bold m-2">
                Désolé, cet événement est complet
              </h3>
              <p className=" font-bold m-1 mb-3 text-justify ">
                N'hésitez pas à aller sur notre site pour découvrir nos
                prochains événements
              </p>
              <button
                onClick={() => {
                  window.location.replace("https://avaulxcross.com/");
                }}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-white focus:outline-none focus:ring-2 hover:text-primary focus:ring-offset-2 hover:border-primary"
              >
                Visitez notre site
              </button>
            </div>
          </div>
        ) : (
          <Form />
        )}
        <Partners />
      </div>
    </div>
  );
};
