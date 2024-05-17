import { useState } from "react";

export default function useSideBar(){
const [isOpen, setIsOpen] = useState(true);
const handleSideBar = () => {
  setIsOpen((prev) => !prev);
};
return [isOpen, setIsOpen, handleSideBar]
}