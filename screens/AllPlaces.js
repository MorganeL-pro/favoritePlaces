import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../util/database";

function AllPlaces({route}) {
    const [loadedPlaces, setLoadedPlaces] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            async function loadPlaces() {
                const places = await fetchPlaces();
                setLoadedPlaces(places);
            }
            loadPlaces();
            //setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
        }
    }, [isFocused])

    return <PlacesList places={loadedPlaces} />
}

export default AllPlaces;