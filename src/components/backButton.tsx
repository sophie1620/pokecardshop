"use client";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackButton() {
  const router = useRouter();

  function handleBack() { 
    router.back();
  }

  return(
      <button className="back-button" onClick={handleBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
  )
}