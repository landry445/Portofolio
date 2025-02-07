import { useStateContext } from "../../context/ContextProvider"


const ProfileInfoIcon = () => {

  const {themeStyle} = useStateContext();

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      fill={ themeStyle.svgTertiary }
      className="bi bi-info-lg" 
      viewBox="0 0 16 16"
    >
      <path 
        d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0"
      />
    </svg>
  )
}

export default ProfileInfoIcon