const SubMenu = () => {
  return (
    <div className="bg-white w-full h-[20px]  flex-row items-center justify-between p-3 pl-16 pr-16 mb-2 hidden  text-[12px] font-semibold md:flex ">
        <p>There are currently 98,393 people playing!</p>
        <div className="flex gap-[20px] ">
          {[
            { label: "Account", url: "https://oldschool.runescape.com/slu" },
            { label: "Redeem Code", url: "https://oldschool.runescape.com/slu" },
            { label: "Status", url: "https://oldschool.runescape.com/slu" },
            { label: "Support", url: "https://oldschool.runescape.com/slu" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"// for opening link in new tab (optional)
              className="hover:text-yellow-500"
            >
              <p className="hover:text-yellow-500">{item.label}</p>
            </a>
          ))}
        </div>
      </div>
  )
}

export default SubMenu