import React, { useEffect, useState } from "react";
import apiUser from '../apiUser'

export default function CandidateDetails({data}) {
    const [candidate, setCandidate] = useState([]);
    const findHref = window.location.href
    const userId = findHref.substring(findHref.length-1, findHref.length)

    useEffect(() => {
        apiUser.get(`/${userId}`)
         .then((response) => {
            setCandidate(response.data)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro : " + err);
        });
    }, []);

    return (
    <>
    <p>Perfil</p>
    </>
    )
}