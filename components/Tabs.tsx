// "use client"
// import React from "react"

// interface TabItem {
//   id: string
//   label: string
//   content: React.ReactNode
// }

// const Tabs: React.FC<{ tabs: TabItem[] }> = ({ tabs }) => {
//   const [selectedTab, setSelectedTab] = React.useState(tabs[0].id)

//   return (
//     <div className="flex w-full bg-zinc-300"
//     >
//       <div>
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() => setSelectedTab(tab.id)}
//             className={`flex flex-col mt-20 ml-4 p-4 justify-start ${selectedTab === tab.id ? "bg-emerald-600 text-gray-700" : "bg-red-400"}`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>
//       <div className="justify-center w-[1060px]">{tabs.find((tab) => tab.id === selectedTab)?.content}</div>
//     </div>
//   )
// }

// export default Tabs
