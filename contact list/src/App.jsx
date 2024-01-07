import ContactList from "./components/ContactList";
import "./App.css";
import {useState} from "react"
// import ContactRow from "./components/ContactRow";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  return (
    <> 
    {selectedContactId ? (
      <SelectedContact
      selectedContactId={selectedContactId}
      setSelectedContactId={setSelectedContactId}
      />
    ) : (
      <ContactList setSelectedContactId={setSelectedContactId} />

    )}
    </>
  );
}
