import React from "react"

const Subtitle = ({ children }: { children: React.ReactNode }) => {
   return (
      <h3 className="text-xl font-bold mb-6">{children}</h3>
   )
}

export default Subtitle