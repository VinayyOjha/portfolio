
const Separator = () => {
  return (
    <div className='my-12 h-6 relative'>
        <div 
        className=" inset-0 absolute bg-gradient-to-r from-white to-transparent"
          style={{
            backgroundImage: "repeating-linear-gradient(-45deg, #333333 0 1px, transparent 1px 10px)",
            opacity: 1
          }}>
        </div>
    </div>
  )
}

export default Separator    